import React from 'react';
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { IoMailOutline, IoNewspaperOutline } from "react-icons/io5";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/vansh-jain26/",
      label: "LinkedIn"
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/vansh_jain_26/",
      label: "Instagram"
    },
    {
      icon: IoNewspaperOutline,
      link: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7345422023134760961",
      label: "Newsletter"
    },
    {
      icon: IoMailOutline,
      link: "https://mail.google.com/mail/?view=cm&to=connect@vanshjain.in",
      label: "Email"
    },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white w-full border-t border-white/10 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10">

        {/* Left Section: Branding & Bio */}
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 text-left">
          <div className="mb-6">
            <h3 className="font-bold text-2xl tracking-tight text-white">
              Vansh Jain
            </h3>
            <div className="flex gap-1 mt-2 text-[10px] uppercase tracking-[0.3em] font-bold text-red-500/80">
              <span>Content Creator | </span>
              <span>Startup Mentor | </span>
              <span>Public Speaker</span>
            </div>
          </div>

          <div className="text-neutral-400 text-sm space-y-4">
            <p className="font-medium text-xs text-neutral-500">
              © 2026. Built with intention. Always shipping.
            </p>

            <p className="text-neutral-500 leading-relaxed max-w-md text-xs">
              @ <a href="https://kattalyxlabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Founder & CEO at Kattalyx Labs Pvt Ltd</a> |
               @<a href="https://eliteversesolutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors ml-1">Founder & MD Elite Verse Solutions Pvt Ltd</a>
            </p>

            <div className="pt-4">
              <a href="https://mail.google.com/mail/?view=cm&to=connect@vanshjain.in" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-white hover:text-red-500 transition-colors">
                <span className="text-xs font-mono tracking-wider">connect@vanshjain.in</span>
                <div className="h-px w-0 group-hover:w-8 bg-red-500 transition-all duration-300"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Social Icons */}
        <div className="p-8 md:p-12 flex items-center justify-center md:justify-end gap-3 md:gap-4">
          {socialLinks.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="group relative p-4 border border-white/5 rounded-full transition-all duration-500 hover:border-red-500/50 hover:bg-white/5"
            >
              <item.icon
                size={20}
                className="relative z-10 text-neutral-400 group-hover:text-red-500 transition-colors duration-300"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Subtle Bar */}
      {/* <div className="py-6 px-8 md:px-12 flex justify-between items-center bg-[#050505]">
        <span className="text-[9px] text-neutral-600 uppercase tracking-widest font-medium">Design & Code By</span>
        <div className="h-px w-12 bg-white/5"></div>
        <span className="text-[9px] text-neutral-600 uppercase tracking-widest font-medium">Vansh Jain © 2026</span>
      </div> */}
    </footer>
  );
};

export default Footer;