// server.js - Full-Stack Express Server with PostgreSQL & Persistent Fallback
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Data Directory for persistent fallback
const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'database.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

function loadLocalDB() {
  if (fs.existsSync(DB_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    } catch (e) {
      console.error('Error reading database.json:', e);
    }
  }
  return { inquiries: [], newsletter: [], contacts: [] };
}

function saveLocalDB(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (e) {
    console.error('Error writing database.json:', e);
  }
}

// PostgreSQL Client Connection (optional/configurable)
let pgPool = null;
let usePostgres = false;

if (process.env.DATABASE_URL || process.env.PGDATABASE) {
  try {
    pgPool = new pg.Pool({
      connectionString: process.env.DATABASE_URL,
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: process.env.PGPORT ? parseInt(process.env.PGPORT) : 5432,
      connectionTimeoutMillis: 3000,
    });

    pgPool.query('SELECT NOW()', (err, res) => {
      if (err) {
        console.log('Notice: PostgreSQL database connection failed. Falling back to persistent JSON storage:', err.message);
        usePostgres = false;
      } else {
        console.log('Successfully connected to PostgreSQL database at:', res.rows[0].now);
        usePostgres = true;
        initPgTables();
      }
    });
  } catch (err) {
    console.log('PostgreSQL init error:', err.message);
    usePostgres = false;
  }
} else {
  console.log('PostgreSQL credentials not provided in environment. Using reliable persistent file storage at data/database.json.');
}

async function initPgTables() {
  if (!pgPool) return;
  try {
    await pgPool.query(`
      CREATE TABLE IF NOT EXISTS inquiries (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(100),
        message TEXT NOT NULL,
        source VARCHAR(100) DEFAULT 'Website Modal',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS newsletter (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(100),
        subject VARCHAR(255),
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('PostgreSQL schema initialized successfully.');
  } catch (e) {
    console.error('Error initializing PostgreSQL tables:', e.message);
  }
}

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Sachio Express Backend API',
    database: usePostgres ? 'PostgreSQL' : 'Persistent Storage (JSON)',
    timestamp: new Date().toISOString()
  });
});

// Inquiry Submission Endpoint (Quick Quote / Modal / Floating Message)
app.post('/api/inquiry', async (req, res) => {
  const { email, phone, message, source = 'Quick Quote Modal' } = req.body;

  if (!email || !message) {
    return res.status(400).json({ status: false, msg: 'Email and message are required.' });
  }

  const record = {
    id: Date.now(),
    email: email.trim(),
    phone: phone ? phone.trim() : '',
    message: message.trim(),
    source,
    createdAt: new Date().toISOString()
  };

  if (usePostgres && pgPool) {
    try {
      const result = await pgPool.query(
        'INSERT INTO inquiries (email, phone, message, source) VALUES ($1, $2, $3, $4) RETURNING *',
        [record.email, record.phone, record.message, record.source]
      );
      return res.json({ status: true, msg: 'Inquiry submitted successfully! Our sales team will contact you shortly.', data: result.rows[0] });
    } catch (err) {
      console.error('PG query error on inquiry, falling back to local file:', err.message);
    }
  }

  // Fallback storage
  const db = loadLocalDB();
  db.inquiries.unshift(record);
  saveLocalDB(db);

  return res.json({
    status: true,
    msg: 'Thank you! Your inquiry has been received. Our professional team will contact you shortly.',
    data: record
  });
});

// Get Inquiries (Admin)
app.get('/api/inquiries', async (req, res) => {
  if (usePostgres && pgPool) {
    try {
      const result = await pgPool.query('SELECT * FROM inquiries ORDER BY created_at DESC');
      return res.json({ status: true, data: result.rows });
    } catch (err) {
      console.error('PG fetch error:', err.message);
    }
  }
  const db = loadLocalDB();
  return res.json({ status: true, data: db.inquiries });
});

// Newsletter Subscription Endpoint
app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ status: false, msg: 'Please provide a valid email address.' });
  }

  const cleanEmail = email.trim().toLowerCase();

  if (usePostgres && pgPool) {
    try {
      const result = await pgPool.query(
        'INSERT INTO newsletter (email) VALUES ($1) ON CONFLICT (email) DO NOTHING RETURNING *',
        [cleanEmail]
      );
      return res.json({ status: true, msg: 'Successfully subscribed to TOPINDUS updates!' });
    } catch (err) {
      console.error('PG newsletter error:', err.message);
    }
  }

  const db = loadLocalDB();
  if (!db.newsletter.some(item => item.email === cleanEmail)) {
    db.newsletter.unshift({
      id: Date.now(),
      email: cleanEmail,
      createdAt: new Date().toISOString()
    });
    saveLocalDB(db);
  }

  return res.json({ status: true, msg: 'Successfully subscribed to TOPINDUS newsletters and product updates!' });
});

// Contact Us Form Submission
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ status: false, msg: 'Email and message content are required.' });
  }

  const contactRecord = {
    id: Date.now(),
    name: name ? name.trim() : 'Anonymous',
    email: email.trim(),
    phone: phone ? phone.trim() : '',
    subject: subject ? subject.trim() : 'General Inquiry',
    message: message.trim(),
    createdAt: new Date().toISOString()
  };

  if (usePostgres && pgPool) {
    try {
      const result = await pgPool.query(
        'INSERT INTO contacts (name, email, phone, subject, message) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [contactRecord.name, contactRecord.email, contactRecord.phone, contactRecord.subject, contactRecord.message]
      );
      return res.json({ status: true, msg: 'Message sent successfully! We will get back to you within 24 hours.', data: result.rows[0] });
    } catch (err) {
      console.error('PG contact error:', err.message);
    }
  }

  const db = loadLocalDB();
  db.contacts.unshift(contactRecord);
  saveLocalDB(db);

  return res.json({ status: true, msg: 'Message sent successfully! We will get back to you within 24 hours.', data: contactRecord });
});

// Get Newsletter Subscribers (Admin)
app.get('/api/newsletter', async (req, res) => {
  if (usePostgres && pgPool) {
    try {
      const result = await pgPool.query('SELECT * FROM newsletter ORDER BY created_at DESC');
      return res.json({ status: true, data: result.rows });
    } catch (err) {
      console.error('PG fetch error:', err.message);
    }
  }
  const db = loadLocalDB();
  return res.json({ status: true, data: db.newsletter });
});

// Serve frontend dist if available (Production build)
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.use((req, res, next) => {
    if (!req.path.startsWith('/api') && req.method === 'GET') {
      return res.sendFile(path.join(distPath, 'index.html'));
    }
    next();
  });
}

app.listen(PORT, () => {
  console.log(`Sachio Express Backend Server running at http://localhost:${PORT}`);
});
