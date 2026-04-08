import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Camera, Globe, Send, ArrowUpRight, MessageSquare, ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', category: '', message: '' });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', msg: '' });

    const minimumDelay = new Promise(resolve => setTimeout(resolve, 1500));

    try {
      const [response] = await Promise.all([
        axios.post('http://localhost:5000/api/contact', formData),
        minimumDelay
      ]);

      if (response.data.success) {
        setStatus({
          type: 'success',
          msg: 'Inquiry Received. We will reach out shortly.'
        });
        setFormData({ name: '', email: '', category: '', message: '' });
      }
    } catch (error) {
      await minimumDelay;
      setStatus({
        type: 'error',
        msg: error.response?.data?.error || 'Server connection failed.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&display=swap');`}
      </style>

      <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-white selection:text-black overflow-x-hidden">
        <div className="max-w-400 mx-auto w-full border-x border-dashed border-white/5">

          {/* Animated Header */}
          <header className="pt-24 md:pt-40 pb-12 md:pb-20 px-6 md:px-12 border-b border-dashed border-white/10 overflow-hidden text-center">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-[clamp(50px,10vw,150px)] leading-[0.8] uppercase tracking-tighter"
            >
              Let's Build Something
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8 text-neutral-500 uppercase tracking-[0.3em] text-[10px]">
              Idea? Collaboration? Mentorship? Let's connect.
            </motion.p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">

            {/* Left Column: Contact Details */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5 p-6 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-dashed border-white/10 space-y-16"
            >
              {/* Direct Info */}
              <div className="space-y-10">
                {[
                  { label: 'Direct Email', value: 'connect@vanshjain.in', icon: <Mail size={18} /> },
                  { label: 'For Kattalyx Labs', value: 'official@kattalyxlab.com', icon: <Globe size={18} /> },
                  { label: 'For Elite Verse', value: 'official@eliteversesolutions.com', icon: <Globe size={18} /> },
                  {
                    label: 'Base', value: ' Ghaziabad, Uttar Pradesh ', icon: <MapPin size={18} /> }
                ].map((item, idx) => (
                  <motion.div variants={fadeInUp} key={idx} className="group cursor-pointer">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-3">{item.label}</p>
                    <div className="flex items-center justify-between border-b border-white/10 pb-5 group-hover:border-white transition-colors">
                      <span className="text-lg md:text-xl font-light break-all">{item.value}</span>
                      <motion.div whileHover={{ rotate: 15 }} className="text-neutral-500 group-hover:text-white transition-colors">
                        {item.icon}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Socials Grid */}
              <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/10 text-md">
                {[
                  { name: 'Instagram', icon: <FaInstagram size={20} />, link: "https://www.instagram.com/vansh_jain_26" },
                  { name: 'LinkedIn', icon: <FaLinkedin size={20} />, link: "https://www.linkedin.com/in/vansh-jain26" }
                ].map((social) => (
                  <motion.a
                    href={social.link}
                    target="_blank"
                    whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
                    key={social.name}
                    className="bg-[#0a0a0a] p-8 transition-colors cursor-pointer group relative overflow-hidden"
                  >
                    <div className="mb-6 opacity-40 group-hover:opacity-100 transition-opacity ">{social.icon}</div>
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] uppercase tracking-widest">{social.name}</span>
                      <ArrowUpRight size={12} />
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column: Form Section */}
            <div className="lg:col-span-7 p-6 md:p-12 lg:p-16 bg-[#0d0d0d]/30">
              <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onSubmit={handleSubmit}
                className="space-y-12 w-full max-w-2xl mx-auto lg:ml-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="border-b border-white/10 focus-within:border-white transition-colors pb-4">
                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-4">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="bg-transparent w-full outline-none text-lg md:text-xl placeholder:text-neutral-800 font-light" />
                  </div>
                  <div className="border-b border-white/10 focus-within:border-white transition-colors pb-4">
                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-4">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="email@example.com" className="bg-transparent w-full outline-none text-lg md:text-xl placeholder:text-neutral-800 font-light" />
                  </div>
                </div>

                <div className="border-b border-white/10 focus-within:border-white transition-colors pb-4 relative group">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-4">I'm interested in...</label>
                  <div className="relative flex items-center">
                    <select name="category" value={formData.category} onChange={handleChange} required className="bg-transparent w-full outline-none text-lg md:text-xl appearance-none cursor-pointer pr-10 text-white font-light">
                      <option value="" disabled className="bg-[#0a0a0a] text-neutral-700">Select an option</option>
                      <option value="speaking" className="bg-[#0a0a0a]">Book a Speaking Session</option>
                      <option value="mentorship" className="bg-[#0a0a0a]">1-on-1 Interaction</option>
                      <option value="internship" className="bg-[#0a0a0a]">Internship / Freelancing</option>
                      <option value="collaboration" className="bg-[#0a0a0a]">Collaboration</option>
                      <option value="media" className="bg-[#0a0a0a]">Media / Press</option>
                      <option value="other" className="bg-[#0a0a0a]">Other</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-0 pointer-events-none text-neutral-500 group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Conditional Message for Internship/Freelancing */}
                <AnimatePresence>
                  {(formData.category === 'internship' || formData.category === 'collaboration') && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-white/5 border border-dashed border-white/20 p-6 rounded-lg mb-8 overflow-hidden"
                    >
                      <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 leading-relaxed">
                        Interested in joining the team? Please <span className="text-white font-bold">Follow us on Instagram</span> and fill out the form in the bio. Our team will contact you soon!
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="border-b border-white/10 focus-within:border-white transition-colors pb-4">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-4">Your Message</label>
                  <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required placeholder="Tell me more..." className="bg-transparent w-full outline-none text-lg md:text-xl placeholder:text-neutral-800 resize-none font-light leading-relaxed"></textarea>
                </div>

                <div className="pt-6 relative">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="group w-full md:w-auto flex items-center justify-center md:justify-start gap-8 bg-white text-black px-12 py-6 rounded-full font-bold text-[10px] uppercase tracking-[0.4em] hover:bg-neutral-200 transition-all disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "Processing..." : "Send Inquiry"}</span>
                    <Send size={14} className="group-hover:translate-x-2 transition-transform" />
                  </motion.button>

                  <AnimatePresence>
                    {status.msg && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`mt-10 p-6 border border-dashed flex items-center gap-4 ${status.type === 'success' ? 'border-green-500/30 bg-green-500/5' : 'border-red-500/30 bg-red-500/5'}`}
                      >
                        {status.type === 'success' ? <CheckCircle2 className="text-green-500" size={20} /> : <AlertCircle className="text-red-500" size={20} />}
                        <p className={`text-[11px] uppercase tracking-[0.2em] font-medium ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                          {status.msg}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;