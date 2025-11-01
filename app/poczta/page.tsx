'use client'

import { useEffect } from 'react';

export default function PochtaPage() {
  useEffect(() => {
    // Redirect to OVH webmail
    window.location.href = 'https://zimbra1.mail.ovh.net';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to webmail...</p>
      </div>
    </div>
  );
}