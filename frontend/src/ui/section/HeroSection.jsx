import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-[75vh] bg-[#050505] text-white flex items-center justify-center pt-36 pb-16 px-6 sm:px-12 lg:px-24 overflow-hidden">

      {/* Background: Modern Noise & Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: 'clamp(30px, 5vw, 50px) clamp(30px, 5vw, 50px)'
        }}
      />

      {/* Adaptive Glow */}
      <div className="absolute top-1/4 right-1/4 w-[30vw] h-[30vw] bg-red-600/5 blur-[100px] rounded-full lg:block hidden" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

        {/* LEFT CONTENT: Fluid & Responsive */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

          {/* Intro Badge */}
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            {/* <span className="text-red-500 text-[9px] sm:text-[10px] uppercase tracking-[0.4em] font-bold">Introduction</span> */}
            <div className="h-px w-6 sm:w-10 bg-white/10"></div>
            <span className="text-neutral-500 text-sm sm:text-base italic font-serif">Namaste!</span>
          </div>

          {/* Headline: Fluid sizing using clamp */}
          <h1
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-[11vw] sm:text-[8vw] lg:text-[6.5vw] leading-[1.1] mb-8 italic font-light tracking-tight"
          >
            I'm <span className="text-neutral-500">amajay</span>ing – a <br />
            <span className="text-white not-italic font-sans text-[8vw] sm:text-[6vw] lg:text-[4.5vw] uppercase tracking-tighter block mt-2">
              design wizard
            </span>
          </h1>

          {/* Status Capsule: Adaptive Width */}
          <div className="group flex items-center gap-3 bg-white/[0.03] border border-white/5 rounded-full pl-2 pr-4 sm:pr-6 py-1.5 text-[11px] sm:text-xs text-neutral-400 mb-10 transition-all hover:bg-white/[0.06] max-w-full">
            <div className="relative flex-shrink-0">
              <span className="w-2 h-2 bg-green-500 rounded-full block"></span>
              <span className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"></span>
            </div>
            <p className="truncate">
              Creating magic at <span className="text-white font-medium">UXMagic.ai</span>
            </p>
          </div>

          {/* Location Timeline: Mobile Scrollable / Desktop Fixed */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold">
            <div className="flex items-center gap-2 text-neutral-600">
              <span className="line-through decoration-red-500/50">Idea</span>
              <span className="text-[8px] opacity-20">/</span>
              <span className="line-through decoration-red-500/50">Wireframe</span>
            </div>

            <div className="flex items-center gap-3 bg-white text-black px-4 py-2 sm:px-6 sm:py-2.5 rounded-full shadow-lg shadow-white/5 group cursor-default">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full group-hover:scale-150 transition-transform"></span>
              Final Design
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE: Adaptive Sizing */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative group w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px]">

            {/* Decorative Offset Border (Hidden on very small screens for cleanliness) */}
            <div className="absolute -inset-2 border border-red-500/20 rounded-2xl translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700 hidden sm:block"></div>

            {/* Portrait Container */}
            <div className="aspect-[4.5/5] rounded-2xl overflow-hidden border border-white/10 relative z-10 bg-neutral-900 shadow-2xl">
              <img
                src="/your-photo.jpg"
                alt="Portrait"
                className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
            </div>

            {/* Corner Tag: Positioned Relative to Image */}
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-[#0a0a0a] border border-white/10 px-3 py-2 sm:px-5 sm:py-3 rounded-xl z-20 shadow-2xl">
              <p className="text-[8px] sm:text-[9px] text-neutral-500 uppercase tracking-widest leading-none">Based in</p>
              <p className="text-xs sm:text-sm text-white font-bold tracking-tight mt-1">India</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;