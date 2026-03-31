import React from 'react';
import {
  ArrowRight,
  Users,
  Mic2,
  BookOpen,
  PlayCircle,
  Star,
  ArrowUpRight
} from 'lucide-react';
import TestimonialStack from '../ui/section/TestimonialStack';
import AboutSection from '../ui/section/AboutSection';
import HeroSection from '../ui/section/HeroSection';
import Gallery from '../ui/section/Gallery';

const HomePage = ({ setPage }) => {
  // Mock Data for Teasers
  const stats = [
    { label: "Students Impacted", value: "50,000+" },
    { label: "Institutions", value: "150+" },
    { label: "Cities", value: "40+" }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-white selection:text-black">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&display=swap');`}
      </style>

 <HeroSection/>

      {/* --- SECTION 2: THE LOGO WALL (Authority) --- */}
      <section className="py-20 border-y border-white/5 bg-[#0a0a0a] overflow-hidden relative group">
        {/* Modern Label */}
        <div className="flex flex-col items-center mb-12">
          <p className="text-[10px] uppercase tracking-[0.6em] text-neutral-600 font-bold">
            Trusted by Leading Institutions
          </p>
          <div className="h-8 w-px bg-gradient-to-b from-transparent via-red-900/50 to-transparent mt-4"></div>
        </div>

        {/* The Infinite Slider Container */}
        <div className="relative flex overflow-hidden">
          {/* Left & Right Fades: This creates the 'Pinterest/Modern' depth */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

          {/* The Sliding Track */}
          <div className="flex animate-marquee whitespace-nowrap items-center gap-24 px-12 hover:[animation-play-state:paused] cursor-default">
            {[1, 2].map((_, idx) => (
              <div key={idx} className="flex items-center gap-24">
                <span className="text-3xl md:text-4xl font-serif italic text-neutral-700 hover:text-white transition-colors duration-500">DPS</span>
                <span className="text-3xl md:text-4xl font-serif italic text-neutral-700 hover:text-white transition-colors duration-500">IIT DELHI</span>
                <span className="text-3xl md:text-4xl font-serif italic text-neutral-700 hover:text-white transition-colors duration-500">AMITY</span>
                <span className="text-3xl md:text-4xl font-serif italic text-neutral-700 hover:text-white transition-colors duration-500">ST. XAVIERS</span>
                <span className="text-3xl md:text-4xl font-serif italic text-neutral-700 hover:text-white transition-colors duration-500">BITS PILANI</span>
                <span className="text-3xl md:text-4xl font-serif italic text-neutral-700 hover:text-white transition-colors duration-500">SRM UNIVERSITY</span>
                {/* Add more as needed */}
              </div>
            ))}
          </div>
        </div>

        {/* Custom CSS for the Infinite Animation */}
        <style jsx>{`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee 35s linear infinite;
      display: flex;
      width: max-content;
    }
  `}</style>
      </section>

      {/* --- SECTION 3: THE THREE PILLARS (Services) --- */}
      <section className="py-32 px-8 md:px-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">

          {/* Section Title - Pinterest Editorial Style */}
          <div className="mb-20 flex items-center justify-between border-b border-white/5 pb-8">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl text-white italic">Services</h2>
            <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-600">Curated Offerings 2026</span>
          </div>

          {/* Staggered Masonry Grid */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch">

            {/* 01. Speaking - Wide Card */}
            <div className="flex-[1.2] group relative p-12 rounded-[2.5rem] bg-neutral-900/50 border border-white/5 overflow-hidden transition-all duration-700 hover:bg-neutral-900/80 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/10">
              <Mic2 className="mb-12 text-red-500/40 group-hover:text-red-500 transition-colors duration-500" size={32} strokeWidth={1.5} />

              <div className="relative z-10">
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl text-white mb-6 italic leading-none">
                  Speaking
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-10 max-w-xs group-hover:text-neutral-300 transition-colors">
                  Transformative sessions for schools and colleges on <span className="text-white font-medium italic">Entrepreneurship</span> and <span className="text-white font-medium italic">Confidence</span>.
                </p>
                <button className="text-[9px] uppercase tracking-[0.4em] text-neutral-400 group-hover:text-white flex items-center gap-4 transition-all">
                  Explore Sessions <span className="w-8 h-px bg-neutral-800 group-hover:w-12 group-hover:bg-red-500 transition-all"></span>
                </button>
              </div>

              {/* Abstract Background Detail */}
              <div className="absolute -bottom-10 -right-10 text-[10rem] font-serif text-white/[0.02] group-hover:text-red-500/[0.03] transition-colors italic pointer-events-none">01</div>
            </div>

            {/* Right Column Stack (Pinterest style nested tiles) */}
            <div className="flex-1 flex flex-col gap-4">

              {/* 02. Courses */}
              <div className="flex-1 group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/5 transition-all duration-500 hover:-translate-y-1">
                <BookOpen className="mb-6 text-red-500/40 group-hover:text-red-500 transition-colors" size={28} strokeWidth={1.5} />
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl text-white mb-4 italic">Courses</h3>
                <p className="text-neutral-500 text-xs leading-relaxed mb-6">Practical modules for school students and aspiring young founders.</p>
                <button className="text-[9px] uppercase tracking-widest text-neutral-500 border-b border-transparent group-hover:border-red-500 pb-1 transition-all">View Curriculum</button>
              </div>

              {/* 03. Mentorship */}
              <div className="flex-1 group p-10 rounded-[2.5rem] bg-neutral-900 border border-white/5 hover:bg-neutral-800/80 transition-all duration-500 hover:-translate-y-1">
                <Users className="mb-6 text-red-500/40 group-hover:text-red-500 transition-colors" size={28} strokeWidth={1.5} />
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl text-white mb-4 italic">Mentorship</h3>
                <p className="text-neutral-500 text-xs leading-relaxed mb-6">1-on-1 strategic guidance for personal branding and startups.</p>
                <button className="text-[9px] uppercase tracking-widest text-neutral-500 border-b border-transparent group-hover:border-red-500 pb-1 transition-all">Get Mentored</button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: SHOWREEL TEASER (Engagement) --- */}
      <section className="py-24 bg-white text-black px-8 md:px-16 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 relative group cursor-pointer">
          <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800" className="w-full aspect-video object-cover" alt="Session" />
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle size={80} className="text-white opacity-90 group-hover:scale-110 transition-transform" />
          </div>
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-7xl leading-tight tracking-tighter">Energy that <br /> <span className="italic">Inspires.</span></h2>
          <p className="text-neutral-600 leading-relaxed">Watch a glimpse of the high-impact sessions conducted across various states. From ideation workshops to keynote speeches.</p>
          <div className="grid grid-cols-2 gap-8 pt-6">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-bold">{s.value}</p>
                <p className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: LATEST ARTICLES (Teaser) --- */}
      <section className="py-20 px-8 md:px-20 bg-[#0a0a0a]">
        {/* Header: Compact Editorial Style */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-4 border-b border-white/5 pb-6">
          <div className="space-y-1">
            <span className="text-red-500 text-[9px] uppercase tracking-[0.5em] font-bold font-sans">Insights</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-5xl text-white italic leading-none">
              From the Blog
            </h2>
          </div>
          <button className="group flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-neutral-500 hover:text-white transition-all">
            View Blogs
            <span className="w-6 h-px bg-neutral-800 group-hover:w-10 group-hover:bg-red-500 transition-all"></span>
          </button>
        </div>

        {/* Pinterest-style Grid: Reduced Height & Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Article 1: Cinematic & Clean */}
          <article className="group cursor-pointer">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-neutral-900 border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800"
                className="w-full h-full object-cover  group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <p className="text-[8px] text-white uppercase tracking-widest font-sans">March 2026</p>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-red-500 text-[8px] uppercase tracking-[0.3em] font-bold font-sans tracking-widest">Entrepreneurship</span>
              <h3 className="text-xl md:text-2xl text-white leading-tight font-light group-hover:text-red-100 transition-colors">
                How to Validate your Startup Idea with <span className="italic font-serif text-red-500/80">Zero Budget.</span>
              </h3>
            </div>
          </article>

          {/* Article 2: Slightly Offset (But not too much) */}
          <article className="group cursor-pointer md:mt-16">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-neutral-900 border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=800"
                className="w-full h-full object-cover  group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <p className="text-[8px] text-white uppercase tracking-widest font-sans">Feb 2026</p>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-red-500 text-[8px] uppercase tracking-[0.3em] font-bold font-sans tracking-widest">Public Speaking</span>
              <h3 className="text-xl md:text-2xl text-white leading-tight font-light group-hover:text-red-100 transition-colors">
                The 3-Second Rule: Overcoming <span className="italic font-serif text-red-500/80">Stage Fright.</span>
              </h3>
            </div>
          </article>

        </div>
      </section>


      <TestimonialStack />
      
      <AboutSection/>


<Gallery/>
      {/* --- SECTION 6: FINAL CTA --- */}
      <section className="py-20 px-8 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5 flex flex-col items-center justify-center">

        {/* Subtle Background Glow - Smaller & Softer */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-red-600/5 blur-[80px] rounded-full"></div>
        </div>

        <div className="relative z-10 text-center max-w-2xl space-y-6 group">

          {/* Micro Label */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-4 bg-white/10 group-hover:w-8 group-hover:bg-red-500 transition-all duration-700"></div>
            <p className="text-neutral-500 text-[8px] uppercase tracking-[0.4em] font-medium">The Next Step</p>
            <div className="h-px w-4 bg-white/10 group-hover:w-8 group-hover:bg-red-500 transition-all duration-700"></div>
          </div>

          {/* Refined Headline - Smaller & Elegant */}
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-4xl md:text-6xl text-white leading-tight italic font-light"
          >
            Let's Build Something <br />
            <span className="text-red-500 not-italic font-sans text-xl md:text-4xl uppercase tracking-[0.2em] block mt-2 opacity-80">
              Great Together
            </span>
          </h2>

          {/* Slim Pinterest Button */}
          <div className="pt-6">
            <button className="relative group/btn px-8 py-3.5 bg-white text-black rounded-full font-bold text-[9px] uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-lg">
              <span className="relative z-10">Start a Conversation</span>

              {/* Fill Effect */}
              <div className="absolute inset-0 bg-red-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out"></div>
              {/* Hover Text Color Shift */}
              <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity z-10 flex items-center justify-center text-white pointer-events-none">
                Start a Conversation
              </div>
            </button>
          </div>

          {/* Fine Print */}
          <p className="pt-4 text-neutral-600 text-[7px] uppercase tracking-[0.3em] font-sans opacity-50">
            Available for global sessions 2026
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;