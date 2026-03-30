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
      <section className="py-12 border-b border-white/5 bg-white/5 overflow-hidden">
        <p className="text-center text-[9px] uppercase tracking-[0.4em] text-neutral-500 mb-8">Trusted by Leading Institutions</p>
        <div className="flex justify-around items-center opacity-40 grayscale gap-12 px-8">
          <span className="text-2xl font-bold italic">DPS</span>
          <span className="text-2xl font-bold italic">IIT DELHI</span>
          <span className="text-2xl font-bold italic">AMITY</span>
          <span className="text-2xl font-bold italic">ST. XAVIERS</span>
          <span className="text-2xl font-bold italic">BITS PILANI</span>
        </div>
      </section>

      {/* --- SECTION 3: THE THREE PILLARS (Services) --- */}
      <section className="py-24 px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-1">
        <div className="p-12 border border-white/10 hover:bg-white/5 transition-all group">
          <Mic2 className="mb-8 text-blue-500" size={40} />
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl mb-4 italic">Speaking</h3>
          <p className="text-neutral-500 text-sm leading-relaxed mb-8 font-light">Transformative sessions for schools and colleges on Entrepreneurship and Confidence.</p>
          <button className="text-[10px] uppercase tracking-widest border-b border-white/20 pb-1 group-hover:border-white transition-all">Explore Sessions</button>
        </div>
        <div className="p-12 border border-white/10 hover:bg-white/5 transition-all group">
          <BookOpen className="mb-8 text-blue-500" size={40} />
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl mb-4 italic">Courses</h3>
          <p className="text-neutral-500 text-sm leading-relaxed mb-8 font-light">Practical modules designed for school students and aspiring young founders.</p>
          <button className="text-[10px] uppercase tracking-widest border-b border-white/20 pb-1 group-hover:border-white transition-all">View Curriculum</button>
        </div>
        <div className="p-12 border border-white/10 hover:bg-white/5 transition-all group">
          <Users className="mb-8 text-blue-500" size={40} />
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl mb-4 italic">Mentorship</h3>
          <p className="text-neutral-500 text-sm leading-relaxed mb-8 font-light">1-on-1 strategic guidance for startups, personal branding, and career growth.</p>
          <button className="text-[10px] uppercase tracking-widest border-b border-white/20 pb-1 group-hover:border-white transition-all">Get Mentored</button>
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
      <section className="py-24 px-8 md:px-16">
        <div className="flex justify-between items-end mb-16">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl italic">From the Journal</h2>
          <button className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 hover:text-white transition-colors">Read All Stories</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <article className="group cursor-pointer">
            <div className="aspect-video overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="flex items-center gap-4 text-[9px] uppercase tracking-widest text-neutral-500 mb-4">
              <span>Entrepreneurship</span>
              <span className="w-1 h-1 bg-neutral-800 rounded-full" />
              <span>March 2026</span>
            </div>
            <h3 className="text-2xl group-hover:text-neutral-400 transition-colors">How to Validate your Startup Idea with Zero Budget.</h3>
          </article>
          <article className="group cursor-pointer">
            <div className="aspect-video overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="flex items-center gap-4 text-[9px] uppercase tracking-widest text-neutral-500 mb-4">
              <span>Public Speaking</span>
              <span className="w-1 h-1 bg-neutral-800 rounded-full" />
              <span>Feb 2026</span>
            </div>
            <h3 className="text-2xl group-hover:text-neutral-400 transition-colors">The 3-Second Rule: Overcoming Stage Fright Instantly.</h3>
          </article>
        </div>
      </section>


      <TestimonialStack />
      
      <AboutSection/>


<Gallery/>
      {/* --- SECTION 6: FINAL CTA --- */}
      <section className="py-32 px-8 text-center border-t border-white/5">
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-6xl md:text-8xl italic mb-12">Let's Build Something <br /> Great Together.</h2>
        <button className="bg-blue-600 text-white px-12 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all shadow-xl">
          Start a Conversation
        </button>
      </section>
    </div>
  );
};

export default HomePage;