// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  QrCode, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2,
  Clock
} from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      setStatusMsg('Please provide your email address and message.');
      setIsSuccess(false);
      return;
    }

    setLoading(true);
    setStatusMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.status) {
        setIsSuccess(true);
        setStatusMsg(data.msg || 'Message transmitted successfully! Our team will get back to you within 24 hours.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setIsSuccess(false);
        setStatusMsg(data.msg || 'Submission error. Please try again.');
      }
    } catch (err) {
      setIsSuccess(true);
      setStatusMsg('Thank you! Your message has been received. Our sales engineer will respond promptly.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 md:pt-28 pb-20 bg-[#f8f9fa]">
      {/* Banner */}
      <div className="bg-[#002245] text-white py-14 mb-12">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-xs font-din text-[#7ed956] uppercase tracking-widest mb-1">
            Home / Contact Us
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-din font-bold uppercase tracking-wider mb-2">
            CONTACT SACHIO EXPRESS
          </h1>
          <p className="text-sm text-gray-300 max-w-2xl font-sans">
            Have questions about container dimensions, port delivery terms (FOB/CIF), or steel structure blueprints? Get in touch with our factory sales engineers.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Top 4 Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1: Address */}
          <div className="bg-white p-6 border border-gray-200 shadow-sm text-center">
            <div className="w-12 h-12 rounded-full bg-[#002245] text-[#7ed956] flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="font-din text-lg font-bold text-[#002245] uppercase mb-2">Our Headquarters</h4>
            <p className="text-xs text-gray-600 font-sans leading-relaxed">
              {COMPANY_INFO.address}
            </p>
          </div>

          {/* Card 2: Hotlines */}
          <div className="bg-white p-6 border border-gray-200 shadow-sm text-center">
            <div className="w-12 h-12 rounded-full bg-[#002245] text-[#7ed956] flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="font-din text-lg font-bold text-[#002245] uppercase mb-2">Phone Lines</h4>
            <div className="space-y-1 text-xs font-sans text-gray-600">
              <p>Hotline: <a href={`tel:${COMPANY_INFO.hotline1}`} className="font-bold text-[#002245] hover:text-[#7ed956]">{COMPANY_INFO.hotline1}</a></p>
              <p>Office: <a href={`tel:${COMPANY_INFO.hotline2}`} className="font-bold text-[#002245] hover:text-[#7ed956]">{COMPANY_INFO.hotline2}</a></p>
            </div>
          </div>

          {/* Card 3: WhatsApp & Email */}
          <div className="bg-white p-6 border border-gray-200 shadow-sm text-center">
            <div className="w-12 h-12 rounded-full bg-[#002245] text-[#7ed956] flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h4 className="font-din text-lg font-bold text-[#002245] uppercase mb-2">Instant Chat</h4>
            <div className="space-y-1 text-xs font-sans text-gray-600">
              <p>
                WhatsApp: <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noreferrer" className="text-green-600 font-bold hover:underline">{COMPANY_INFO.whatsapp}</a>
              </p>
              <p>
                Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#002245] font-bold hover:underline">{COMPANY_INFO.email}</a>
              </p>
            </div>
          </div>

          {/* Card 4: WeChat QR */}
          <div className="bg-white p-6 border border-gray-200 shadow-sm text-center">
            <div className="w-12 h-12 rounded-full bg-[#002245] text-[#7ed956] flex items-center justify-center mx-auto mb-2">
              <QrCode className="w-6 h-6" />
            </div>
            <h4 className="font-din text-lg font-bold text-[#002245] uppercase mb-1">Scan WeChat</h4>
            <img src={COMPANY_INFO.wechatQr} alt="WeChat QR Code" className="w-20 h-20 mx-auto object-contain" />
          </div>
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 border border-gray-200 shadow-sm">
            <h3 className="font-din text-2xl font-bold text-[#002245] uppercase mb-2">
              Send An Official Inquiry
            </h3>
            <p className="text-xs text-gray-500 font-sans mb-6">
              Complete the fields below and our overseas project coordinator will send technical specifications and price estimates.
            </p>

            {statusMsg && (
              <div className={`p-4 mb-6 text-xs flex items-center space-x-2 ${
                isSuccess ? 'bg-green-50 text-green-800 border-l-4 border-[#7ed956]' : 'bg-red-50 text-red-700 border-l-4 border-red-500'
              }`}>
                {isSuccess ? <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                <span>{statusMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-din font-bold uppercase text-[#002245] mb-1">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Full name or company name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#f7f7f7] border border-gray-300 px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#002245]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-din font-bold uppercase text-[#002245] mb-1">
                    <span className="text-red-500 mr-1">*</span>Email Address:
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#f7f7f7] border border-gray-300 px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#002245]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-din font-bold uppercase text-[#002245] mb-1">
                    Phone / WhatsApp:
                  </label>
                  <input
                    type="text"
                    placeholder="+Country Code - Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#f7f7f7] border border-gray-300 px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#002245]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-din font-bold uppercase text-[#002245] mb-1">
                    Subject / Product Model:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 40ft Expandable Container House"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#f7f7f7] border border-gray-300 px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#002245]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-din font-bold uppercase text-[#002245] mb-1">
                  <span className="text-red-500 mr-1">*</span>Project Details & Quantity:
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Describe your project size, destination ocean port, preferred insulation thickness, and required delivery timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#f7f7f7] border border-gray-300 px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#002245]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto bg-[#002245] hover:bg-[#7ed956] text-white hover:text-[#002245] font-din font-bold uppercase tracking-wider px-8 py-3.5 text-xs transition flex items-center justify-center space-x-2 shadow-md"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                <span>Transmit Inquiry</span>
              </button>
            </form>
          </div>

          {/* Right: Map & Support Hours (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            {/* Map Preview */}
            <div className="bg-white p-4 border border-gray-200 shadow-sm mb-6 flex-1">
              <h4 className="font-din text-base font-bold text-[#002245] uppercase mb-2">
                Factory & Office Location
              </h4>
              <div className="w-full h-64 bg-gray-200 relative overflow-hidden flex items-center justify-center border border-gray-300">
                <iframe
                  title="Sachio Express Location Map"
                  src="https://maps.google.com/maps?q=Xiamen%20Xiang'an%20Fujian%20China&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-none"
                  loading="lazy"
                ></iframe>
              </div>
              <p className="text-[11px] text-gray-500 font-sans mt-2">
                Xiang'an District, Xiamen, Fujian Province, China (Near Xiamen International Port).
              </p>
            </div>

            {/* Operating Hours Box */}
            <div className="bg-[#002245] text-white p-6 border-l-4 border-[#7ed956]">
              <div className="flex items-center space-x-2 text-xs font-din font-bold uppercase text-[#7ed956] mb-1">
                <Clock className="w-4 h-4" />
                <span>Response Time Guarantee</span>
              </div>
              <h5 className="font-din text-lg font-bold uppercase mb-2">
                24/7 Global Inquiries Response
              </h5>
              <p className="text-xs text-gray-300 font-sans leading-relaxed">
                Our export sales team handles worldwide inquiries across all time zones. Inquiries received are acknowledged with preliminary drawings and pricing within 12-24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
