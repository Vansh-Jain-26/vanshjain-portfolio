import React from 'react';
import { Share2, Mail, MessageSquare, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white w-full border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10">
        <div className="p-6  border-white/10 text-left">
          <h3 className="font-bold text-lg mb-2">Get in touch</h3>
          <p className="text-gray-500 text-sm">            <p>© 2026 All Rights Reserved</p>
</p>
        </div>
        <div className="p-8 flex items-center justify-end gap-3">
          {/* Using generic icons to ensure no "Module not found" errors */}
          {[Share2, MessageSquare, Mail, Globe].map((Icon, i) => (
            <div key={i} className="px-4 py-2 border border-white/10 rounded-md cursor-pointer hover:bg-white/5">
              <Icon size={18} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;