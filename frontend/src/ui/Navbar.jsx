import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Check } from 'lucide-react';
import axios from 'axios';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu
  const [isModalOpen, setIsModalOpen] = useState(false); // Subscribe Modal
  const [isSubscribed, setIsSubscribed] = useState(false); // Persistence State
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ loading: false, msg: '', type: '' });

  const location = useLocation();

  useEffect(() => {
    // 1. Check if user already subscribed in previous session
    const savedStatus = localStorage.getItem('isSubscribed');
    if (savedStatus === 'true') {
      setIsSubscribed(true);
    }

    // 2. Prevent body scroll when menu/modal is open
    document.body.style.overflow = (isOpen || isModalOpen) ? 'hidden' : 'unset';
  }, [isOpen, isModalOpen]);

  const tabs = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Speaker Sessions', path: '/speaker-sessions' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ];

  const isActive = (path) => location.pathname === path;

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: '', type: '' });

    try {
      const res = await axios.post('http://localhost:5000/api/subscribe', { email });
      if (res.data.success) {
        setStatus({ loading: false, msg: 'Welcome to the club! ✨', type: 'success' });

        // Save to LocalStorage & Update State
        localStorage.setItem('isSubscribed', 'true');
        setIsSubscribed(true);

        setTimeout(() => {
          setIsModalOpen(false);
          setEmail('');
          setStatus({ loading: false, msg: '', type: '' });
        }, 2500);
      }
    } catch (err) {
      // If already exists in DB, we still mark as subscribed locally
      if (err.response?.status === 400) {
        localStorage.setItem('isSubscribed', 'true');
        setIsSubscribed(true);
      }
      setStatus({
        loading: false,
        msg: err.response?.data?.message || 'Something went wrong',
        type: 'error'
      });
    }
  };

  return (
    <>
      {/* --- DESKTOP NAVIGATION --- */}
      <div className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full justify-center pointer-events-none">
        <nav className="relative flex flex-col items-center border border-white/5 bg-[#0D0D0D]/80 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl pointer-events-auto">

          <div className="flex items-center px-6 py-2 gap-6">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.path}
                className={`relative px-1 py-1 text-[12px] font-medium transition-colors duration-300 ${isActive(tab.path) ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
              >
                {tab.name}
                {isActive(tab.path) && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* Conditional Desktop Button */}
            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="ml-4 px-4 py-1.5 border border-white/10 text-neutral-500 text-[11px] font-bold rounded-full flex items-center gap-2"
              >
                <Check size={10} className="text-green-500" /> Subscribed
              </motion.div>
            ) : (
              <button
                onClick={() => setIsModalOpen(true)}
                className="ml-4 px-4 py-1.5 bg-white text-black text-[11px] font-bold rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 active:scale-95"
              >
                Subscribe
              </button>
            )}
          </div>

          <div className="w-full border-t border-white/5 px-6 py-1.5 bg-white/2">
            <p className="text-[11px] font-medium text-neutral-400 text-center whitespace-nowrap tracking-wide">
              Have something in mind? <Link to="/contact" className="text-white hover:text-red-500 cursor-pointer transition-colors">Let's connect</Link>
            </p>
          </div>
        </nav>
      </div>

      {/* --- MOBILE HAMBURGER --- */}
      <div className="md:hidden fixed top-6 right-6 z-80">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-full shadow-2xl transition-all duration-500 ${isOpen ? 'bg-red-600' : 'bg-white'}`}
        >
          <motion.span animate={isOpen ? { rotate: 45, y: 6, backgroundColor: "#ffffff" } : { rotate: 0, y: 0, backgroundColor: "#000000" }} className="w-5 h-0.5 rounded-full" />
          <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1, backgroundColor: "#000000" }} className="w-5 h-0.5 rounded-full" />
          <motion.span animate={isOpen ? { rotate: -45, y: -6, backgroundColor: "#ffffff" } : { rotate: 0, y: 0, backgroundColor: "#000000" }} className="w-5 h-0.5 rounded-full" />
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-70 bg-[#050505] backdrop-blur-2xl flex flex-col pt-32 px-10 pb-10 overflow-y-auto">
            <nav className="flex flex-col gap-6 relative z-10">
              {tabs.map((tab, i) => (
                <motion.div key={tab.name} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.1 }}>
                  <Link to={tab.path} onClick={() => setIsOpen(false)} className={`group flex items-center gap-4 ${isActive(tab.path) ? 'text-white' : 'text-neutral-600'}`}>
                    <span className="text-[10px] font-mono text-red-500">0{i + 1}</span>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl italic group-hover:text-red-500 transition-all">{tab.name}</span>
                  </Link>
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-4">
                <button
                  onClick={() => { if (!isSubscribed) { setIsOpen(false); setIsModalOpen(true); } }}
                  disabled={isSubscribed}
                  className={`w-full py-4 font-bold rounded-2xl text-lg transition-all ${isSubscribed ? 'bg-neutral-900 text-neutral-500 border border-white/5' : 'bg-red-600 text-white hover:bg-white hover:text-black'
                    }`}
                >
                  {isSubscribed ? "Already Subscribed ✓" : "Join the Newsletter"}
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- SUBSCRIBE MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#0d0d0d] border border-white/10 p-10 rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors">
                <X size={24} />
              </button>

              <div className="text-center space-y-6">
                <div className="space-y-2">
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl italic">Stay in the loop</h3>
                  <p className="text-neutral-500 text-[10px] uppercase tracking-[0.3em]">Updates on Web3, Design & Entrepreneurship</p>
                </div>

                <form onSubmit={handleSubscribe} className="space-y-6 pt-4">
                  <div className="border-b border-white/10 text-white focus-within:border-white transition-colors pb-3 ">
                    <input
                      type="email" required placeholder="your@email.com"
                      value={email} onChange={(e) => setEmail(e.target.value)}
                      className="bg-transparent w-full outline-none text-center text-xl placeholder:text-neutral-800 font-light text-white"
                    />
                  </div>

                  <button
                    disabled={status.loading}
                    className="w-full bg-white text-black py-5 rounded-full font-bold text-[11px] uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-red-600 hover:text-white transition-all disabled:opacity-50"
                  >
                    {status.loading ? "Processing..." : "Join Now"}
                    {!status.loading && <Send size={14} />}
                  </button>
                </form>

                {status.msg && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`text-[10px] uppercase tracking-widest font-bold ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                    {status.msg}
                  </motion.p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;