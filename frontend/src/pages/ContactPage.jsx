import React from 'react';
// Using only core, non-brand icons to prevent the SyntaxError
import { Mail, Phone, MapPin, Camera, Globe, Send, ArrowUpRight, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&display=swap');`}
      </style>

      <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-white selection:text-black">

        {/* Header Section */}
        <header className="pt-32 pb-16 px-8 border-b border-dashed border-white/10">
          <h1
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-[12vw] leading-[0.8] uppercase tracking-tighter"
          >
            Contact
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12">

          {/* Left Column: Contact Details */}
          <div className="md:col-span-5 p-8 md:p-12 border-r border-dashed border-white/10 space-y-16">

            <div className="space-y-8">
              {[
                { label: 'Email address', value: 'hello@abhishekvaghela.com', icon: <Mail size={18} /> },
                { label: 'Phone number', value: '+91 98765 43210', icon: <Phone size={18} /> },
                { label: 'City / Base', value: 'Bangalore, India', icon: <MapPin size={18} /> }
              ].map((item, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">{item.label}</p>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 group-hover:border-white transition-colors">
                    <span className="text-xl font-light">{item.value}</span>
                    <div className="text-neutral-500 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials Grid - Using Generic Icons for Stability */}
            <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/10">
              {[
                { name: 'Instagram', icon: <Camera size={16} /> },
                { name: 'LinkedIn', icon: <MessageSquare size={16} /> },
                { name: 'YouTube', icon: <Camera size={16} /> },
                { name: 'Twitter / X', icon: <Globe size={16} /> }
              ].map((social) => (
                <div key={social.name} className="bg-[#0a0a0a] p-8 hover:bg-white hover:text-black transition-all cursor-pointer group">
                  <div className="mb-4 opacity-50 group-hover:opacity-100">{social.icon}</div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-widest">{social.name}</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="md:col-span-7 p-8 md:p-12 bg-[#0d0d0d]/30">
            <form className="space-y-12 max-w-2xl mx-auto md:mx-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="border-b border-white/10 focus-within:border-white transition-colors pb-4">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-4">Name</label>
                  <input
                    type="text"
                    placeholder="Abhishek Vaghela"
                    className="bg-transparent w-full outline-none text-xl placeholder:text-neutral-800"
                  />
                </div>
                <div className="border-b border-white/10 focus-within:border-white transition-colors pb-4">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-4">Email</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="bg-transparent w-full outline-none text-xl placeholder:text-neutral-800"
                  />
                </div>
              </div>

              <div className="border-b border-white/10 focus-within:border-white transition-colors pb-4">
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-4">Your Message</label>
                <textarea
                  rows="4"
                  placeholder="Describe your project or just say hi..."
                  className="bg-transparent w-full outline-none text-xl placeholder:text-neutral-800 resize-none"
                ></textarea>
              </div>

              <button className="group relative flex items-center gap-6 bg-white text-black px-8 py-5 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:pr-12 transition-all overflow-hidden">
                <span>Send Inquiry</span>
                <Send size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactPage;