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


    const topics = [
      "Execution > Perfection", "Founder's Guide to Saying No", "Scaling in College",
      "Failed Experiments", "Building in Public", "Fundraising Without Hype",
      "First Hire Tips", "Idea to MVP: 6 Weeks", "Founder Mental Health", "Bootstrapping Costs"
    ];
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-white selection:text-black">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&display=swap');`}
      </style>

 <HeroSection/>

      <section className="py-24 bg-[#050505] text-white font-sans overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-20">

          {/* Section Header */}
          <div className="mb-20 space-y-4">
            <span className="text-red-500 font-mono text-[10px] uppercase tracking-[0.6em] font-bold block">
              Services & Expertise
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-6xl md:text-8xl italic leading-none tracking-tighter">
              What I bring <br />
              <span className="text-neutral-800 not-italic">to the table</span>
            </h2>
          </div>

          {/* The Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* PILLAR 1: SPEAKING */}
            <div className="group relative p-10 bg-neutral-900/20 border border-white/5 rounded-[2.5rem] transition-all duration-700 hover:bg-neutral-900/40 hover:border-red-500/30">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500">
                  <span className="text-xs font-bold text-white group-hover:scale-110 transition-transform">01</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest pt-2">Engagement</span>
              </div>

              <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl italic mb-6">Speaking & <br /> Workshops</h3>
              <p className="text-neutral-500 text-sm font-light leading-relaxed italic max-w-sm">
                From AI & LinkedIn masterclasses to startup fundamentals—I deliver sessions that inspire and equip students, faculty, and founders for real-world success. High engagement, practical takeaways, every time.
              </p>

              {/* Subtle Background Ghost Text */}
              <div className="absolute bottom-4 right-8 text-8xl font-serif italic text-white/2 pointer-events-none select-none">Stage</div>
            </div>

            {/* PILLAR 2: STARTUP BUILDING */}
            <div className="group relative p-10 bg-neutral-900/20 border border-white/5 rounded-[2.5rem] transition-all duration-700 hover:bg-neutral-900/40 hover:border-red-500/30">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500">
                  <span className="text-xs font-bold text-white group-hover:scale-110 transition-transform">02</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest pt-2">Execution</span>
              </div>

              <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl italic mb-6">Startup <br /> Building</h3>
              <p className="text-neutral-500 text-sm font-light leading-relaxed italic max-w-sm">
                I don't talk about startups—I build them. From product strategy to full-scale execution, I've launched and scaled multiple ventures. I share battle-tested lessons, not theory.
              </p>

              <div className="absolute bottom-4 right-8 text-8xl font-serif italic text-white/2 pointer-events-none select-none">Ship</div>
            </div>

            {/* PILLAR 3: MENTORSHIP */}
            <div className="group relative p-10 bg-neutral-900/20 border border-white/5 rounded-[2.5rem] transition-all duration-700 hover:bg-neutral-900/40 hover:border-red-500/30">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500">
                  <span className="text-xs font-bold text-white group-hover:scale-110 transition-transform">03</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest pt-2">Guidance</span>
              </div>

              <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl italic mb-6">Mentorship & <br /> Guidance</h3>
              <p className="text-neutral-500 text-sm font-light leading-relaxed italic max-w-sm">
                One-on-one and group mentorship for founders, students, and builders. I help clarify vision, build systems, and execute with speed. Direct, honest, actionable guidance.
              </p>

              <div className="absolute bottom-4 right-8 text-8xl font-serif italic text-white/2 pointer-events-none select-none">Trust</div>
            </div>

            {/* PILLAR 4: COURSES */}
            <div className="group relative p-10 bg-neutral-900/20 border border-white/5 rounded-[2.5rem] transition-all duration-700 hover:bg-neutral-900/40 hover:border-red-500/30">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500">
                  <span className="text-xs font-bold text-white group-hover:scale-110 transition-transform">04</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest pt-2">Academy</span>
              </div>

              <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl italic mb-6">Courses & <br /> Modules</h3>
              <p className="text-neutral-500 text-sm font-light leading-relaxed italic max-w-sm">
                Structured learning programs on entrepreneurship, AI, and career clarity. Designed for schools and students who want real skills, not just grades.
              </p>

              <div className="absolute bottom-4 right-8 text-8xl font-serif italic text-white/2 pointer-events-none select-none">Learn</div>
            </div>

          </div>

          {/* Bottom Footer Detail */}
          <div className="mt-20 flex items-center gap-6 opacity-20">
            <p className="text-[9px] uppercase tracking-[0.5em] font-medium whitespace-nowrap">Focused on Impact-Driven Execution</p>
            <div className="h-px w-full bg-white/10"></div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE LOGO WALL (Authority) --- */}
      <section className="py-20 border-y border-white/5 bg-[#050505] overflow-hidden relative group">
        {/* Modern Label */}
        <div className="flex flex-col items-center mb-12">
          <p className="text-[10px] uppercase tracking-[0.6em] text-neutral-600 font-bold">
            Trusted by Leading Institutions
          </p>
          <div className="h-8 w-px bg-linear-to-b from-transparent via-red-900/50 to-transparent mt-4"></div>
        </div>

        {/* The Infinite Slider Container */}
        <div className="relative flex overflow-hidden">
          {/* Gradient Fades for Depth */}
          <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

          {/* The Sliding Track */}
          <div className="flex animate-marquee whitespace-nowrap items-center gap-24 px-12 hover:[animation-play-state:paused] cursor-default">
            {[1, 2].map((_, idx) => (
              <div key={idx} className="flex items-center gap-24">
                <span className="text-3xl md:text-4xl font-serif italic text-neutral-800 hover:text-white transition-all duration-500">DELHI UNIVERSITY</span>

                <span className="text-3xl md:text-4xl font-serif italic text-neutral-800 hover:text-white transition-all duration-500">KIET GHAZIABAD</span>
                <span className="text-3xl md:text-4xl font-serif italic text-neutral-800 hover:text-white transition-all duration-500">DOON SCHOOL</span>
                <span className="text-3xl md:text-4xl font-serif italic text-neutral-800 hover:text-white transition-all duration-500">KV BAOLI</span>
                <span className="text-3xl md:text-4xl font-serif italic text-neutral-800 hover:text-white transition-all duration-500">GROWELL SCHOOLS</span>
                <span className="text-3xl md:text-4xl font-serif italic text-neutral-800 hover:text-white transition-all duration-500">TAKSHASHILA WORLD</span>
                <span className="text-3xl md:text-4xl font-serif italic text-neutral-800 hover:text-white transition-all duration-500">CAMBRIDGE PUBLIC</span>
                <span className="text-3xl md:text-4xl font-serif italic text-neutral-800 hover:text-white transition-all duration-500">MAHARAJA AGRASEN</span>
                <span className="text-3xl md:text-4xl font-serif italic text-neutral-800 hover:text-white transition-all duration-500">LAKSHYA PUBLIC</span>
                <span className="text-3xl md:text-4xl font-serif italic text-neutral-800 hover:text-white transition-all duration-500">SAIFIA INSTITUTE</span>
              </div>
            ))}
          </div>
        </div>

        {/* Custom CSS for Animation */}
        <style jsx>{`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee 40s linear infinite;
      display: flex;
      width: max-content;
    }
  `}</style>
      </section>



      {/* --- SECTION 4: SHOWREEL TEASER (Engagement) --- */}
      <section className="py-24 bg-white text-black px-8 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Heading: Always on Top */}
          <div className="mb-16">
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-5xl md:text-7xl leading-tight tracking-tighter"
            >
              Energy that <br /> <span className="italic text-neutral-500">Inspires.</span>
            </h2>
          </div>

          {/* Content Wrapper: Image and Stats Side by Side */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

            {/* LEFT: Image Container */}
            <div className="w-full md:w-1/2 relative group cursor-pointer">
              <div className="overflow-hidden rounded-2xl border border-black/5 shadow-2xl">
                <img
                  src="./src/assets/events/Event2.webp"
                  className="w-full aspect-video object-cover  transition-all duration-700 scale-105 group-hover:scale-100"
                  alt="Session"
                />

              </div>
            </div>

            {/* RIGHT: Text & Stats */}
            <div className="w-full md:w-1/2 space-y-8">
              <p className="text-neutral-600 text-lg leading-relaxed max-w-md">
                Watch a glimpse of the high-impact sessions conducted across various states.
                From ideation workshops to keynote speeches, we bring execution to the forefront.
              </p>

              <div className="grid grid-cols-2 gap-10 pt-6 border-t border-neutral-100">
                {stats.map((s, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-4xl font-bold tracking-tighter">{s.value}</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 5: LATEST Blog (Teaser) --- */}
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


        {/* blog */}
        {/* Pinterest-style Grid: Static Implementation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ARTICLE 1: Startup Strategy (Left - High) */}
          <article className="group cursor-pointer">
            {/* Image Container */}
            <div className="relative aspect-16/10 overflow-hidden rounded-2xl mb-6 bg-neutral-900 border border-white/5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000"
                alt="Startup Strategy"
                className="w-full h-full object-cover  group-hover:scale-105 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <p className="text-[8px] text-white uppercase tracking-widest font-sans font-bold">March 24, 2026</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-red-500 text-[8px] uppercase font-bold font-sans tracking-[0.3em]">Startup Strategy</span>
                <div className="h-px w-8 bg-white/10"></div>
              </div>

              <h3
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-2xl md:text-3xl text-white leading-tight font-light group-hover:text-red-100 transition-colors"
              >
                Why Most Founders Fail at Execution <br />
                <span className="italic text-neutral-500 text-lg md:text-xl font-serif">(And How to Avoid It)</span>
              </h3>

              <p className="text-neutral-500 text-sm line-clamp-2 font-sans font-light leading-relaxed">
                A breakdown of why perfect planning kills startups, and why speed and iteration beat perfection every time.
              </p>

              <div className="pt-2 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 group-hover:text-red-500 transition-colors font-bold">
                Read Story <span>→</span>
              </div>
            </div>
          </article>

          {/* ARTICLE 2: Education (Right - Offset/Lower) */}
          <article className="group cursor-pointer md:mt-24">
            {/* Image Container */}
            <div className="relative aspect-16/10 overflow-hidden rounded-2xl mb-6 bg-neutral-900 border border-white/5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000"
                alt="Education"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <p className="text-[8px] text-white uppercase tracking-widest font-sans font-bold">March 18, 2026</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-red-500 text-[8px] uppercase font-bold font-sans tracking-[0.3em]">Education</span>
                <div className="h-px w-8 bg-white/10"></div>
              </div>

              <h3
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-2xl md:text-3xl text-white leading-tight font-light group-hover:text-red-100 transition-colors"
              >
                The Education System is Broken <br />
                <span className="italic text-neutral-500 text-lg md:text-xl font-serif">— Here's What We're Building</span>
              </h3>

              <p className="text-neutral-500 text-sm line-clamp-2 font-sans font-light leading-relaxed">
                Why traditional schooling doesn't prepare students for real life. A deep dive into the Kattalyx Labs approach.
              </p>

              <div className="pt-2 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 group-hover:text-red-500 transition-colors font-bold">
                Read Story <span>→</span>
              </div>
            </div>
          </article>

        </div>
      </section>


      <TestimonialStack />
      
      <AboutSection/>


<Gallery/>



      <section className="py-24 bg-[#050505] text-white overflow-hidden border-t border-white/5 font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-20">

          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl space-y-4">
              <span className="text-red-500 font-mono text-[10px] uppercase tracking-[0.5em] font-bold block opacity-0 animate-[fadeIn_1s_ease_forwards]">
                Weekly Newsletter
              </span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-6xl md:text-8xl italic leading-[0.8] tracking-tighter transition-all duration-700 hover:tracking-normal">
                2AM <span className="text-neutral-800 not-italic">Founders</span>
              </h2>
              <p className="text-xl text-neutral-400 font-light italic tracking-tight">
                Raw Stories. Real Insights. For Builders Actually Building.
              </p>
            </div>

            <div className="flex flex-col items-end gap-2 border-l border-white/10 pl-6 group">
              <span className="text-4xl font-serif italic text-white group-hover:text-red-500 transition-colors duration-500">2000+</span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold whitespace-nowrap">Active Subscribers</span>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Description & CTA */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6">
                <p className="text-neutral-400 leading-relaxed font-light text-sm md:text-base italic border-l-2 border-red-500/30 pl-6">
                  Every Monday at <span className="text-white font-medium">2 AM</span>, I share unfiltered founder stories, startup lessons, and real insights for Gen Z builders and early-stage creators.
                </p>
                <p className="text-neutral-500 leading-relaxed font-light text-sm md:text-base italic pl-6">
                  No fluff. No bs. Just honest breakdowns of building, failing, learning, and scaling from someone in the trenches.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <button className="group relative w-full md:w-fit px-10 py-5 bg-white text-black rounded-full overflow-hidden transition-all duration-500 hover:bg-red-600 hover:text-white">
                  <span className="relative z-10 font-bold uppercase text-[11px] tracking-[0.2em]">Subscribe to 2AM Founders —&gt;</span>
                  <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>

                <div className="flex items-center gap-4 px-2">
                  <div className="h-px w-8 bg-white/10"></div>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-700 font-bold">Platform: Substack / LinkedIn</span>
                </div>
              </div>
            </div>

            {/* Stats & Topics Visualization */}
            <div className="lg:col-span-7 bg-neutral-900/10 border border-white/5 rounded-[3rem] p-8 md:p-12 relative overflow-hidden group hover:border-white/10 transition-colors duration-700">

              {/* Newsletter Stats Card */}
              <div className="flex gap-12 mb-12 relative z-10">
                <div>
                  <p className="text-3xl text-white font-serif italic">35%+</p>
                  <p className="text-[9px] uppercase tracking-widest text-neutral-500 mt-1">Avg Open Rate</p>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div>
                  <p className="text-3xl text-white font-serif italic">Weekly</p>
                  <p className="text-[9px] uppercase tracking-widest text-neutral-500 mt-1">Monday Delivery</p>
                </div>
              </div>

              {/* Topics Cloud */}
              <div className="relative z-10">
                <p className="text-[10px] uppercase tracking-[0.4em] text-red-500 font-bold mb-8">Curated Topics</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Execution > Perfection", "Founder's Guide to No", "Scaling in College",
                    "Failed Experiments", "Building in Public", "Idea to MVP"
                  ].map((topic, idx) => (
                    <span key={idx} className="px-5 py-2.5 bg-white/5 border border-white/5 rounded-full text-[11px] text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-default backdrop-blur-sm">
                      {topic}
                    </span>
                  ))}
                  <span className="px-4 py-2 text-[11px] text-neutral-700 italic flex items-center">+ 10 more</span>
                </div>
              </div>

              {/* Big Ghost Text Decoration */}
              <div className="absolute -bottom-8 -right-8 text-[14rem] font-serif italic text-white/2 pointer-events-none group-hover:text-red-500/40 transition-all duration-1000 select-none">
                2AM
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Topics Bar */}
        <div className="mt-24 border-y border-white/5 py-8 overflow-hidden flex whitespace-nowrap opacity-10 hover:opacity-40 transition-opacity duration-1000">
          <div className="flex gap-20 items-center animate-[marquee_50s_linear_infinite]">
            {[
              "Mental Health for Founders", "Fundraising Without Hype", "The Real Cost of Bootstrapping",
              "Hiring Your First Team", "Building in Private", "From Idea to MVP",
              "Saying No", "Scaling College Ventures"
            ].map((t, i) => (
              <React.Fragment key={i}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl italic text-white">{t}</span>
                <span className="text-red-500 text-2xl">✦</span>
              </React.Fragment>
            ))}
            {/* Duplicated for seamless loop */}
            {[
              "Mental Health for Founders", "Fundraising Without Hype", "The Real Cost of Bootstrapping",
              "Hiring Your First Team", "Building in Private", "From Idea to MVP",
              "Saying No", "Scaling College Ventures"
            ].map((t, i) => (
              <React.Fragment key={`dup-${i}`}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl italic text-white">{t}</span>
                <span className="text-red-500 text-2xl">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}} />
      </section>


      <section className="py-32 bg-[#050505] text-white font-sans overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-20">

          {/* Section Header */}
          <div className="mb-24 space-y-4">
            <span className="text-red-500 font-mono text-[10px] uppercase tracking-[0.6em] font-bold block">
              The Portfolio
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-7xl md:text-9xl italic leading-none tracking-tighter">
              My <span className="text-neutral-800 not-italic">Ventures</span>
            </h2>
          </div>

          <div className="space-y-40">

            {/* VENTURE 1: KATTALYX LABS */}
            <div className="relative group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-5 space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                      <span>Founded Dec 2024</span>
                      <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                      <span>Agra, UP</span>
                    </div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-6xl italic text-white group-hover:text-red-500 transition-colors duration-500">
                      Kattalyx Labs <span className="text-xs not-italic font-sans opacity-40 ml-2">Pvt. Ltd.</span>
                    </h3>
                    <p className="text-red-500 text-sm font-medium uppercase tracking-tighter">Founder & CEO</p>
                  </div>

                  <p className="text-neutral-400 font-light leading-relaxed italic text-lg border-l border-white/10 pl-6">
                    "Reimagining School Education for Real-World Readiness. We're building future-ready learners, not exam-ready students."
                  </p>

                  <div className="flex flex-col gap-4">
                    <a href="https://www.kattalyxlabs.com" target="_blank" className="w-fit px-8 py-4 bg-white text-black rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all">
                      Explore Kattalyx Labs →
                    </a>
                    <span className="text-[9px] text-neutral-600 font-mono uppercase pl-4 tracking-widest italic">official@kattalyxlab.com</span>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-neutral-900/20 border border-white/5 rounded-[3rem] p-8 md:p-12 backdrop-blur-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div>
                      <h4 className="text-red-500 text-[10px] uppercase tracking-widest font-bold mb-4">What We Deliver</h4>
                      <ul className="text-xs space-y-3 text-neutral-300 font-light">
                        <li>• 50+ Modular Curriculum (AI, Finance, Mental Health)</li>
                        <li>• EliteVerse ERP Transformation Product</li>
                        <li>• Live Workshops & Industry Speaker Networks</li>
                        <li>• Real-world Mentorship Programs</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                      <h4 className="text-white text-[10px] uppercase tracking-widest font-bold mb-4">The Impact</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-end border-b border-white/5 pb-2">
                          <span className="text-2xl font-serif italic text-white">10K+</span>
                          <span className="text-[8px] text-neutral-500 uppercase tracking-tighter">Students Reached</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-white/5 pb-2">
                          <span className="text-2xl font-serif italic text-white">12+</span>
                          <span className="text-[8px] text-neutral-500 uppercase tracking-tighter">Institutions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] text-neutral-500 leading-relaxed italic uppercase tracking-wider text-center">
                    Indian schools teach exams, not life. We fix this by bringing real learning into classrooms.
                  </p>
                </div>
              </div>
            </div>

            {/* VENTURE 2: ELITE VERSE SOLUTIONS */}
            <div className="relative group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:flex-row-reverse">
                <div className="lg:col-span-7 order-2 lg:order-1 bg-neutral-900/20 border border-white/5 rounded-[3rem] p-8 md:p-12 backdrop-blur-sm">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 text-center">
                    {['Web & App', 'Branding', 'Strategy', 'Consultancy', 'ERP Systems', 'Ready-to-Fund'].map((item) => (
                      <div key={item} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-[9px] uppercase font-bold tracking-widest text-neutral-400 hover:text-white transition-colors">
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-white/5 pt-8">
                    <h4 className="text-red-500 text-[10px] uppercase tracking-widest font-bold mb-4">Why Us?</h4>
                    <p className="text-xs text-neutral-300 font-light leading-loose">
                      We're founders too. We ship fast. We don't over-design. We focus on what matters—metrics and growth. We build systems that convert idea to impact.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                      <span>Founded April 2025</span>
                      <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                      <span>Noida, UP</span>
                    </div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-6xl italic text-white group-hover:text-red-500 transition-colors duration-500">
                      Elite Verse <span className="text-xs not-italic font-sans opacity-40 ml-2">Solutions</span>
                    </h3>
                    <p className="text-red-500 text-sm font-medium uppercase tracking-tighter">Founder & Managing Director</p>
                  </div>

                  <p className="text-neutral-400 font-light leading-relaxed italic text-lg border-l border-white/10 pl-6">
                    "Execution Agency for Founders Who Want to Scale. We don't design for show—we build systems that convert."
                  </p>

                  <a href="https://www.eliteversesolutions.com" target="_blank" className="block w-fit px-8 py-4 border border-white/20 text-white rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    Work With Us →
                  </a>
                </div>
              </div>
            </div>

            {/* --- VENTURE 3: AAHAAR NIRVANA --- */}
            <div className="relative group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Left Side: Content */}
                <div className="lg:col-span-5 space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[10px] font-mono text-neutral-600 uppercase tracking-[0.4em]">
                      <span>July 2024</span>
                      <span className="w-1 h-1 bg-neutral-800 rounded-full"></span>
                      <span className="text-red-500 font-bold">Currently Dormant</span>
                    </div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-6xl italic text-neutral-400 group-hover:text-white transition-colors duration-700">
                      Aahaar Nirvana <span className="text-xs not-italic font-sans opacity-20 ml-2">Food-Tech</span>
                    </h3>
                    <p className="text-neutral-600 text-sm font-medium uppercase tracking-tighter">Founder</p>
                  </div>

                  <p className="text-neutral-500 font-light leading-relaxed italic text-lg border-l border-white/5 pl-6">
                    "Connecting Home Chefs With People Who Crave Authentic Meals. A community-driven alternative to traditional food delivery."
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {['MVP Launched', 'Market Validated', 'Ghaziabad Roots'].map((tag) => (
                      <span key={tag} className="px-4 py-2 rounded-full border border-white/5 text-[9px] uppercase tracking-widest text-neutral-700 font-bold group-hover:border-red-500/20 group-hover:text-neutral-400 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Details Card */}
                <div className="lg:col-span-7 bg-neutral-900/10 border border-dashed border-white/10 rounded-[3rem] p-8 md:p-12 backdrop-blur-[2px] group-hover:border-white/20 transition-all duration-700">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-6">The Backstory</h4>
                      <p className="text-sm text-neutral-500 font-light leading-relaxed italic">
                        Homemakers wanted to monetize their passion. Customers wanted real home food. We built a dual-sided marketplace and proved the concept through grassroots onboarding across Ghaziabad.
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-white/2">
                        <p className="text-white/30 text-[8px] uppercase tracking-tighter mb-1">Status</p>
                        <p className="text-xs text-neutral-500 italic">Significant learning gathered. Focus shifted to Kattalyx Labs.</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/2">
                        <p className="text-white/30 text-[8px] uppercase tracking-tighter mb-1">Impact</p>
                        <p className="text-xs text-neutral-500 italic">Full business operations from tech to marketing to partnerships.</p>
                      </div>
                    </div>
                  </div>

                  {/* Ghost Background Text for Aahaar */}
                  <div className="absolute -bottom-6 -right-4 text-[10rem] font-serif italic text-white/1 pointer-events-none select-none">
                    Nirvana
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* --- SECTION 6: FINAL CTA --- */}
      <section className="py-20 px-8 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5 flex flex-col items-center justify-center">

        {/* Subtle Background Glow - Smaller & Softer */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-50 bg-red-600/5 blur-[80px] rounded-full"></div>
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