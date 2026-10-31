// src/pages/AdminPage.jsx
import React, { useState, useEffect } from 'react';
import { 
  Database, 
  Mail, 
  MessageSquare, 
  Phone, 
  Calendar, 
  RefreshCw, 
  CheckCircle, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';

export default function AdminPage() {
  const [inquiries, setInquiries] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [resInq, resSub, resHealth] = await Promise.all([
        fetch('/api/inquiries').then(r => r.json()).catch(() => ({ status: false, data: [] })),
        fetch('/api/newsletter').then(r => r.json()).catch(() => ({ status: false, data: [] })),
        fetch('/api/health').then(r => r.json()).catch(() => ({ status: false }))
      ]);

      if (resInq.status) setInquiries(resInq.data || []);
      if (resSub.status) setSubscribers(resSub.data || []);
      if (resHealth.status) setHealth(resHealth);
    } catch (e) {
      console.error('Fetch admin error:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="pt-24 md:pt-28 pb-20 bg-[#f8f9fa] min-h-screen">
      {/* Banner */}
      <div className="bg-[#002245] text-white py-10 mb-8">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-din text-[#7ed956] uppercase tracking-widest mb-1">
              Backend Systems & CRM
            </div>
            <h1 className="text-3xl font-din font-bold uppercase tracking-wider">
              INQUIRIES & LEADS PORTAL
            </h1>
          </div>
          <button
            onClick={fetchData}
            disabled={loading}
            className="btn-topindus-more px-5 py-2 text-xs font-din font-bold uppercase tracking-wider flex items-center space-x-2 w-fit"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh Leads</span>
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Status Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 border-l-4 border-[#7ed956] shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-din font-bold text-gray-500 uppercase">Received Inquiries</span>
                <h3 className="text-3xl font-din font-bold text-[#002245] mt-1">{inquiries.length}</h3>
              </div>
              <div className="w-12 h-12 bg-green-50 text-[#7ed956] rounded-full flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 border-l-4 border-[#002245] shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-din font-bold text-gray-500 uppercase">Newsletter Subscribers</span>
                <h3 className="text-3xl font-din font-bold text-[#002245] mt-1">{subscribers.length}</h3>
              </div>
              <div className="w-12 h-12 bg-blue-50 text-[#002245] rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 border-l-4 border-indigo-600 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-din font-bold text-gray-500 uppercase">Database Status</span>
                <h3 className="text-lg font-din font-bold text-[#002245] mt-1">
                  {health?.database || 'Persistent Storage (Active)'}
                </h3>
              </div>
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                <Database className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Inquiries Table */}
        <div className="bg-white border border-gray-200 shadow-sm mb-10 overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-din text-lg font-bold text-[#002245] uppercase">
              Submitted Customer Inquiries ({inquiries.length})
            </h3>
            <span className="text-xs text-gray-400 font-sans">Synced in Real-Time</span>
          </div>

          {inquiries.length === 0 ? (
            <div className="text-center py-12 text-gray-500 text-xs font-sans">
              No inquiries received yet. Try submitting an inquiry through the "Get A Quote" modal or product page!
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans border-collapse">
                <thead className="bg-[#f7f7f7] font-din uppercase text-gray-600 border-b border-gray-200">
                  <tr>
                    <th className="py-3 px-4">Date & Time</th>
                    <th className="py-3 px-4">Email</th>
                    <th className="py-3 px-4">Phone / WhatsApp</th>
                    <th className="py-3 px-4">Source / Origin</th>
                    <th className="py-3 px-4">Message Requirements</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {inquiries.map((inq, index) => (
                    <tr key={inq.id || index} className="hover:bg-gray-50 transition">
                      <td className="py-3 px-4 text-gray-500 whitespace-nowrap">
                        {inq.created_at ? new Date(inq.created_at).toLocaleString() : (inq.createdAt ? new Date(inq.createdAt).toLocaleString() : 'Recent')}
                      </td>
                      <td className="py-3 px-4 font-semibold text-[#002245] whitespace-nowrap">
                        <a href={`mailto:${inq.email}`} className="hover:underline">{inq.email}</a>
                      </td>
                      <td className="py-3 px-4 text-gray-600 whitespace-nowrap">
                        {inq.phone || '—'}
                      </td>
                      <td className="py-3 px-4">
                        <span className="bg-gray-100 text-gray-800 text-[10px] font-din font-bold uppercase px-2 py-0.5">
                          {inq.source || 'Website'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-700 max-w-md">
                        {inq.message}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Newsletter Subscribers List */}
        <div className="bg-white border border-gray-200 shadow-sm p-6">
          <h3 className="font-din text-base font-bold text-[#002245] uppercase mb-4">
            Subscribed Newsletter Emails ({subscribers.length})
          </h3>
          {subscribers.length === 0 ? (
            <p className="text-xs text-gray-500">No subscribers yet.</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {subscribers.map((sub, i) => (
                <span key={i} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 font-mono border border-gray-200">
                  {sub.email}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
