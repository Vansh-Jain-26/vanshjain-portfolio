import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const tabs = [ 'About','Speaker Sessions', 'Courses', 'Contact', 'Blog'];

  return (
    <div className="flex flex-col items-center justify-center min-h-50 bg-black p-8">
      {/* Main Container */}
      <nav className="relative flex flex-col items-center border border-white/10 bg-[#0A0A0A] rounded-xl overflow-hidden shadow-2xl">

        {/* Top Navigation Links */}
        <div className="flex items-center px-4 py-3 gap-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-2 py-1 text-sm font-semibold transition-colors duration-300 ${activeTab === tab ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                }`}
            >
              {tab}
              {/* The Dot Indicator */}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="w-full border-t border-white/10 px-8 py-3 bg-white/2">
          <p className="text-[13px] font-medium text-gray-300 text-center whitespace-nowrap">
            Have something in mind? Let's connect
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;