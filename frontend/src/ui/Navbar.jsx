import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const tabs = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Sessions', path: '/speaker-sessions' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* --- DESKTOP NAVIGATION (Visible on MD and up) --- */}
      <div className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full justify-center pointer-events-none">
        <nav className="relative flex flex-col items-center border border-white/10 bg-[#0D0D0D]/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl pointer-events-auto">
          <div className="flex items-center px-8 py-3 gap-8">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.path}
                className={`relative px-1 py-1 text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${isActive(tab.path) ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
                  }`}
              >
                {tab.name}
                {isActive(tab.path) && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.8)]"
                  />
                )}
              </Link>
            ))}
          </div>
          <div className="w-full border-t border-white/5 px-10 py-2 bg-white/5">
            <p className="text-[9px] font-bold text-neutral-400 text-center tracking-[0.3em] uppercase">
              Curating <span className="text-white italic font-serif lowercase tracking-normal text-xs ml-1">Digital Magic</span>
            </p>
          </div>
        </nav>
      </div>

      {/* --- MOBILE HAMBURGER (Visible on SM and below) --- */}
      <div className="md:hidden fixed top-6 right-6 z-[60]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 flex flex-col items-center justify-center gap-1.5 bg-white rounded-full shadow-xl active:scale-90 transition-transform"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-black rounded-full"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-5 h-0.5 bg-black rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-black rounded-full"
          />
        </button>
      </div>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[55] bg-[#050505]/95 backdrop-blur-2xl flex flex-col justify-center px-10"
          >
            {/* Background Decorative Text */}
            <div className="absolute top-20 left-10 text-[20vw] font-serif italic text-white/[0.02] pointer-events-none select-none">
              Menu
            </div>

            <nav className="flex flex-col gap-8">
              {tabs.map((tab, i) => (
                <motion.div
                  key={tab.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={tab.path}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center gap-4 ${isActive(tab.path) ? 'text-white' : 'text-neutral-600'
                      }`}
                  >
                    <span className="text-xs font-mono text-red-500 opacity-50">0{i + 1}</span>
                    <span
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      className="text-5xl italic transition-all group-hover:pl-4 group-hover:text-red-500"
                    >
                      {tab.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Contact Detail */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 left-10 space-y-2"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">Get in Touch</p>
              <p className="text-white font-light border-b border-red-500/50 pb-1">hello@amajay.ing</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;