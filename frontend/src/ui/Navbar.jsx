import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const location = useLocation();

  // Updated tabs to match your specific routes
  const tabs = [
    { name: 'About', path: '/about' },
    { name: 'Speaker Sessions', path: '/speaker-sessions' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ];

  // Logic to check if the current URL matches the tab path
  const isActive = (path) => location.pathname === path;

  return (
    // Fixed at the top center with z-index to stay above draggable photos
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center pointer-events-none">
      <nav className="relative flex flex-col items-center border border-white/5 bg-[#0D0D0D]/80 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl pointer-events-auto">

        {/* Top Navigation Links - Compact sizing for 75% zoom view */}
        <div className="flex items-center px-4 py-2 gap-4 md:gap-6">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              className={`relative px-1 py-1 text-[12px] font-medium transition-colors duration-300 ${isActive(tab.path) ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
                }`}
            >
              {tab.name}

              {/* The Dot Indicator - Animated for smooth transitions */}
              {isActive(tab.path) && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="w-full border-t border-white/5 px-6 py-1.5 bg-white/2">
          <p className="text-[11px] font-medium text-neutral-400 text-center whitespace-nowrap tracking-wide">
            Have something in mind? Let's connect
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;