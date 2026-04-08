import React from 'react';
import vanshImage from '../../assets/vanshjain.webp';
import { HashLink } from 'react-router-hash-link';

const HeroSection = () => {
  return (
    // PT-48 for more top padding, min-h reduced for a tighter look
    <section className="relative w-full min-h-[85vh] lg:min-h-[80vh] bg-[#050505] text-white flex items-center justify-center pt-36 pb-16 px-6 sm:px-12 lg:px-24 overflow-hidden">

      {/* Background: Modern Noise & Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Adaptive Glow */}
      <div className="absolute top-1/4 left-1/4 w-[25vw] h-[25vw] bg-red-600/5 blur-[120px] rounded-full lg:block hidden" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">

        {/* LEFT SIDE: Image Hero (Slightly Scaled Down) */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-start order-1">
          <div className="relative group w-full max-w-70 sm:max-w-75 lg:max-w-85">

            {/* Decorative Offset Border */}
            <div className="absolute -inset-2 border border-red-500/10 rounded-2xl translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-700 hidden sm:block"></div>

            {/* Portrait Container */}
            <div className="aspect-4/5 rounded-2xl overflow-hidden border border-white/5 relative z-10 bg-neutral-900 shadow-2xl">
              <img
                src={vanshImage}
                alt="Vansh Jain"
                className="w-full h-full object-cover  contrast-110 brightness-90 scale-110 transition-all duration-1000 ease-out"
              />
            </div>

            {/* Contact Badge (More Compact) */}
            <a
              href="mailto:connect@vanshjain.in"
              className="absolute -bottom-3 -left-3 bg-[#0a0a0a] border border-white/10 px-3 py-2 rounded-lg z-20 shadow-2xl hover:border-red-500/30 transition-colors group/badge"
            >
              <p className="text-[8px] text-neutral-500 uppercase tracking-widest leading-none">Connect</p>
              <p className="text-[11px] text-white font-bold tracking-tight mt-1">
                connect@vansh.me <span className="text-red-500 group-hover/badge:translate-x-1 inline-block transition-transform">→</span>
              </p>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Content (More Compact & Left Aligned) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2">

          {/* Main Headline (Reduced size) */}
          <h1
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-[8vw] sm:text-[5vw] lg:text-[3.5vw] leading-[1.15] mb-5 italic font-light tracking-tight"
          >
            Multi-venture <span className="text-neutral-500">builder</span>. <br />
            Education ecosystem <span className="text-neutral-500">founder</span>. <br />
            <span className="text-white not-italic font-sans text-[5vw] sm:text-[3.5vw] lg:text-[2.2vw] uppercase tracking-tighter block mt-1">
              Execution-first strategist.
            </span>
          </h1>

          {/* Subheading & Description (Tighter spacing) */}
          <div className=" max-w-xl">
            <p className="text-red-500 font-semibold text-[10px] sm:text-xs mb-2 tracking-[0.2em] uppercase">
              Bold Ideas • Scalable Impact
            </p>
            <p className="text-neutral-300 text-sm sm:text-base font-medium mb-3">
              Founder & CEO at <span className="text-white border-b border-white/10">Kattalyx Labs Pvt Ltd</span> | <span className="text-white border-b border-white/10">Founder & MD Elite Verse Solutions Pvt Ltd</span> | <span className="text-white border-b border-white/10">Content Creator</span> | <span className="text-white border-b border-white/10">Newsletter Authore: 2AM Startup Newsletter</span>
            </p>
            {/* <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
              I build systems that solve real problems. Whether reimagining education or helping founders scale, I thrive on execution and creating lasting impact.
            </p> */}
          </div>

          {/* Impact Stats (More minimal) */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 sm:gap-8 mb-4 py-4 border-y border-white/5 w-full lg:w-auto">
            {[
              { label: 'Students Impacted', val: '10K+' },
              { label: 'Institutions', val: '20+' },
              { label: 'Events', val: '25+' },
              { label: 'Cities', val: '10+' },
              { label: ' Newsletter Subscribers', val: '2000+' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-white tracking-tighter">{stat.val}</span>
                <span className="text-[8px] uppercase tracking-widest text-neutral-600 font-bold">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons (Clean sizing) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest hover:invert transition-all">
              Let's Build Together
            </button>
            <HashLink
              smooth
              to="/#venture"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto bg-transparent border border-white/10 px-6 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all text-neutral-400">
                View Ventures
              </button>
            </HashLink>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;