import { motion } from 'framer-motion';
import TestimonialSection from '../ui/section/TestimonialStack';
import Testimonials from '../ui/section/Testimonials';

const AboutPage = () => {
  const photos = [
    { id: 1, url: './src/assets/events/Event3.webp', rot: -8, x: 0, y: 40 },
    { id: 2, url: './src/assets/events/Event2.webp', rot: 3, x: 20, y: -10 },
    { id: 3, url: './src/assets/events/Event1.webp', rot: -5, x: -20, y: 10 },
  ];
  const milestones = [
    {
      year: "2021",
      phase: "01",
      title: "The Genesis",
      desc: "Launched the first prototype from a dorm room. Focused on solving core UX friction for 500+ initial beta users.",
      tags: ["MVP", "Validation"],
      img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=600"
    },
    {
      year: "2022",
      phase: "02",
      title: "Scaling Pulse",
      desc: "Secured seed funding and scaled the engineering team. Reached a milestone of 50k active monthly users.",
      tags: ["Growth", "Series A"],
      img: "https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?q=80&w=600"
    },
    {
      year: "2024",
      phase: "03",
      title: "Global Impact",
      desc: "Currently integrating AI-driven insights to personalize the user journey for a global audience.",
      tags: ["Expansion", "AI"],
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600"
    }
  ];
  const institutions = [
    {
      id: "01",
      year: "2024",
      city: "Mumbai",
      name: "IIT Bombay",
      topic: "The Future of AI in Design",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800",
      aspect: "aspect-[4/5]", // Tall image
    },
    {
      id: "02",
      year: "2024",
      city: "Delhi",
      name: "IIT Delhi",
      topic: "Building Scalable Tech",
      image: "https://images.unsplash.com/photo-1523050853063-bd8012fec21b?q=80&w=800",
      aspect: "aspect-square", // Square image
    },
    {
      id: "03",
      year: "2023",
      city: "Bangalore",
      name: "BITS Pilani",
      topic: "Entrepreneurial Mindset",
      image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800",
      aspect: "aspect-[4/3]", // Wide image
    },
    {
      id: "04",
      year: "2023",
      city: "Ahmedabad",
      name: "NID",
      topic: "Human-Centric UX",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800",
      aspect: "aspect-[4/5]",
    },
    {
      id: "05",
      year: "2022",
      city: "Pune",
      name: "Symbiosis",
      topic: "Personal Branding",
      image: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=800",
      aspect: "aspect-square",
    },
    {
      id: "06",
      year: "2022",
      city: "Jaipur",
      name: "MNIT",
      topic: "Startup Ideation",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800",
      aspect: "aspect-[4/3]",
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#888] selection:bg-white/10 overflow-x-hidden font-sans antialiased pt-32">

      {/* 1. THE GRID SYSTEM */}
      <div className="fixed inset-0 flex justify-between px-[10%] md:px-[15%] pointer-events-none z-0">
        <div className="w-px h-full bg-white/3" />
        <div className="w-px h-full bg-white/3" />
        <div className="w-px h-full bg-white/3" />
      </div>

      <div className="relative z-10 max-w-300 mx-auto px-6 md:px-12 pt-16 pb-20">
        {/* HERO SECTION (EXISTING) */}
        <div className="grid grid-cols-12 gap-8 items-start mb-40">
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="col-span-12 md:col-span-7 lg:col-span-6">
            <div className="mb-12">
              <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-10">
                <span className="text-xs">😊</span>
              </div>
              <h2 className="text-[#333] text-[20px] font-serif italic mb-4 text-left">About me.</h2>
              <h1 className="text-3xl md:text-[42px] lg:text-[48px] leading-[1.1] text-[#E5E5E5] font-serif font-medium tracking-tight text-left">
                Scaling <span className="italic text-zinc-500">ideas</span> into high-impact systems that solve <span className="italic text-zinc-500">real-world</span> problems.
              </h1>
            </div>

            <div className="space-y-6 text-[14px] md:text-[15px] leading-relaxed max-w-120 text-left">
              <p className="text-neutral-400">
                Hey, I'm <span className="text-white font-medium tracking-tight">Vansh Jain</span> — a multi-venture builder and strategist. I focus on building education ecosystems and helping founders scale through
                <span className="text-white"> execution-first systems</span>.
              </p>

              <p className="text-neutral-500 italic font-serif">
                Currently leading <span className="text-zinc-300 not-italic font-sans font-medium">Kattalyx Labs</span> & <span className="text-zinc-300 not-italic font-sans font-medium">Elite Verse Solutions</span>, while documenting the raw journey of building through my newsletter.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-black bg-white border border-white px-8 py-4 hover:bg-transparent hover:text-white transition-all duration-500 shadow-xl shadow-white/5">
                  Invite Me to Speak
                </button>
                <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-500 hover:text-white transition-all flex items-center gap-2 group">
                  Explore My Ventures <span className="group-hover:translate-y-1 transition-transform">↓</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: PHOTO STACK */}
          <div className="col-span-12 md:col-span-5 lg:col-span-6 relative">
            <div className="flex flex-col items-end text-right mb-16">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-neutral-800" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-mono">Entrepreneur | Speaker | Educator</span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-mono mt-1">Bangalore, India 🤘</p>
            </div>

            <div className="relative flex justify-center h-100 w-full">
              <p className="absolute -top-10 rotate-[-5deg] font-serif italic text-neutral-700 text-[11px] whitespace-nowrap">
                Pssst... You can drag the photographs
              </p>
              {photos.map((photo) => (
                <motion.div
                  key={photo.id}
                  drag
                  dragConstraints={{ left: -150, right: 150, top: -100, bottom: 100 }}
                  initial={{ rotate: photo.rot, x: photo.x, y: photo.y }}
                  whileDrag={{ scale: 1.05, zIndex: 50 }}
                  className="absolute w-50 md:w-60 aspect-3/4 bg-[#111] p-2 rounded-sm shadow-2xl cursor-grab active:cursor-grabbing border border-white/5"
                >
                  <div className="w-full h-full overflow-hidden bg-neutral-900 rounded-sm">
                    <img src={photo.url} alt="Personal" className="w-full h-full object-cover grayscale-[0.3] pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* --- NEW SECTIONS START HERE --- */}

        {/* SECTION 2: PUBLIC SPEAKER INTRODUCTION */}
        <div className="grid grid-cols-12 gap-8 mb-40 border-t border-white/5 pt-20">
          <div className="col-span-12 md:col-span-4">
            <h2 className="text-[#E5E5E5] text-2xl font-serif italic">I Am a Public Speaker</h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="max-w-xl space-y-6 text-[15px] leading-relaxed">
              <p>My speaking journey is fueled by a passion for demystifying technology and entrepreneurship for the next generation. I believe that real impact happens when practical knowledge meets an inspired mindset.</p>
              <p>Through keynotes and workshops, I aim to provide students and professionals with the mental frameworks needed to build, scale, and lead in an ever-changing digital landscape.</p>
              <div className="pt-6 border-t border-white/5">
                <span className="text-4xl text-white font-serif">500+</span>
                <p className="text-[10px] uppercase tracking-widest mt-2">Students Inspired & Mentored</p>
              </div>
            </div>
          </div>
        </div>

                {/* Institutions I Have Spoken At */}
        {/* SECTION 3 & 4: SCHOOLS & COLLEGES */}
        <div className="space-y-20 mb-40 px-6 md:px-20">
          <div className="max-w-7xl mx-auto">

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4 border-b border-white/5 pb-8">
              <div className="space-y-1">
                <span className="text-red-500 text-[9px] uppercase tracking-[0.5em] font-bold">Chronology</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-5xl text-white italic">
                  Speaking Engagements
                </h3>
              </div>
              <p className="text-neutral-500 text-[10px] uppercase tracking-widest max-w-37.5 text-right leading-relaxed hidden md:block">
                Across India's Elite campuses.
              </p>
            </div>

            {/* Responsive Horizontal Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {institutions.map((item, index) => (
                <div
                  key={item.id}
                  // Scroll Reveal Animation (Opacity + Slide Up)
                  className="opacity-0 translate-y-8 animate-[fade-in-up_0.8s_ease-out_forwards]"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-neutral-900/40 border border-white/5 transition-all duration-500 hover:bg-neutral-900 hover:border-red-500/20">

                    {/* Short Height Image (aspect-video) */}
                    <div className={`relative w-full ${item.aspect} overflow-hidden`}>
                      <img
                        src={item.image}
                        className="w-full h-full object-cover grayscale brightness-50 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />

                      {/* Year Badge */}
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-2 py-1 rounded-lg">
                        <span className="text-[8px] text-white font-mono tracking-widest">{item.year}</span>
                      </div>
                    </div>

                    {/* Compact Content Area */}
                    <div className="p-6 relative">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[8px] text-red-500 font-bold uppercase tracking-widest">{item.city}</span>
                        <div className="h-px w-8 bg-white/10 group-hover:w-12 group-hover:bg-red-500 transition-all"></div>
                      </div>

                      <h4
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        className="text-2xl text-white mb-2 leading-tight font-light"
                      >
                        {item.name}
                      </h4>

                      <p className="text-[11px] text-neutral-500 font-serif italic border-l border-red-500/30 pl-3 py-1 group-hover:text-neutral-300 transition-colors">
                        "{item.topic}"
                      </p>
                    </div>

                    {/* Micro ID Stamp */}
                    <div className="absolute bottom-2 right-4 text-3xl font-serif text-white/1 group-hover:text-red-500/5 italic pointer-events-none">
                      {item.id}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CSS Keyframes for the Slide Animation */}
          <style jsx>{`
    @keyframes fade-in-up {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
        </div>

        {/* SECTION 5: SKILLS */}
        <div className="mb-40 overflow-hidden relative py-10 bg-[#050505]">

          {/* Modern Subtle Label */}
          <div className="px-8 md:px-20 mb-20 flex items-center gap-4">
            <span className="text-[20px] uppercase tracking-[0.5em] text-red-500 font-bold">What I'm good at</span>
            <div className="h-px w-12 bg-white/10"></div>
          </div>

          {/* The Unique Sliding Ribbon */}
          <div className="relative flex flex-col gap-6">

            {/* Masking Gradients for a 'Smooth' Fade on edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

            {/* Row 1: Sliding Left */}
            <div className="flex animate-marquee-slow whitespace-nowrap items-center gap-6 group cursor-default">
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  {[
                    "Multi-Venture Building",
                    "Product Strategy",
                    "Full-Stack Design",
                    "Web & App Development"
                  ].map((skill, i) => (
                    <div
                      key={skill}
                      className={`px-6 py-3 rounded-full border border-white/5 transition-all duration-500 flex items-center gap-4
                ${i % 2 === 0 ? 'bg-white text-black font-bold' : 'bg-transparent text-white/40 italic font-serif text-xl md:text-2xl hover:text-red-500'}`}
                    >
                      <span className="text-[10px] opacity-30">{i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
                      <span className="tracking-tighter">{skill}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Row 2: Sliding Right (Opposite Direction) */}
            <div className="flex animate-marquee-reverse-slow whitespace-nowrap items-center gap-6 group cursor-default">
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  {[
                    "Digital Marketing",
                    "Team Leadership",
                    "Content Creation",
                    "Investor Relations",
                    "Mentorship"
                  ].map((skill, i) => (
                    <div
                      key={skill}
                      className={`px-8 py-4 rounded-full border border-white/5 transition-all duration-500 flex items-center gap-4
                ${i % 2 !== 0 ? 'bg-neutral-900 text-white' : 'bg-transparent text-white/40 italic font-serif text-xl md:text-2xl hover:text-red-500'}`}
                    >
                      <span className="h-1 w-1 rounded-full bg-red-500"></span>
                      <span className="tracking-tighter">{skill}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* CSS remains the same as provided in your original code */}
          <style jsx>{`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-33.3%); }
    }
    @keyframes marquee-reverse {
      0% { transform: translateX(-33.3%); }
      100% { transform: translateX(0); }
    }
    .animate-marquee-slow {
      animation: marquee 40s linear infinite;
    }
    .animate-marquee-reverse-slow {
      animation: marquee-reverse 35s linear infinite;
    }
    .animate-marquee-slow:hover, .animate-marquee-reverse-slow:hover {
      animation-play-state: paused;
    }
  `}</style>
        </div>



        <section className="py-32 px-6 md:px-20  relative overflow-hidden">
          {/* Subtle Background Radial Glow */}
          <div className="absolute top-1/2 right-0 w-125 h-125 bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-24">

            {/* LEFT SIDE: Vertical Title */}
            <div className="lg:w-1/4 flex flex-col items-start lg:sticky lg:top-40">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="text-red-500 text-[10px] uppercase tracking-[0.5em] font-bold">Awards</span>
                <div className="h-px w-12 bg-white/10"></div>
              </motion.div>

              <h2
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-7xl md:text-8xl text-white italic leading-[0.8] tracking-tighter opacity-10 lg:-rotate-90 lg:origin-top-left lg:translate-y-50 whitespace-nowrap"
              >
                RECOGNITION
              </h2>
            </div>

            {/* RIGHT SIDE: The Award Card */}
            <div className="lg:w-3/4 w-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative group flex flex-col md:flex-row gap-8 p-8 md:p-12 bg-neutral-900/30 border border-white/5 rounded-[2.5rem] backdrop-blur-sm hover:border-red-500/30 transition-all duration-700"
              >
                {/* Visual Icon / Badge */}
                <div className="shrink-0 w-20 h-20 rounded-2xl 
                 from-red-600 to-red-900 flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.3)] group-hover:scale-110 transition-transform duration-500">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M12 15L15 18L22 11" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 11L9 18L12 15" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 12L12 2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="10" stroke="white" strokeOpacity="0.2" />
                  </svg>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-red-500 font-mono text-[10px] uppercase tracking-[0.3em]">Institutional Milestone</p>
                    <h3
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      className="text-4xl md:text-5xl text-white italic leading-tight"
                    >
                      KITE Institution <br />
                      <span className="not-italic text-white/40 group-hover:text-white transition-colors duration-700">Event Speaking Award</span>
                    </h3>
                  </div>

                  <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed max-w-2xl border-l border-white/10 pl-6 italic">
                    "Recognized for impactful speaking and engagement at KITE Institution events,
                    inspiring students with practical entrepreneurship and personal development insights."
                  </p>

                  <div className="flex items-center gap-4 pt-4">
                    <div className="h-px grow bg-white/5"></div>
                    <span className="text-[9px] uppercase tracking-widest text-neutral-600 font-bold whitespace-nowrap">Verified Recognition // 2024</span>
                  </div>
                </div>

                {/* Pinterest-style floating "Seal" on hover */}
                <div className="absolute top-6 right-8 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  <div className="px-4 py-1 rounded-full border border-red-500/50 text-red-500 text-[8px] uppercase tracking-tighter font-bold">
                    Distinguished Speaker
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </section>
        {/* SECTION 6: STARTUP JOURNEY */}
        <div className="mb-40 px-6 md:px-20 pt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Left Sticky Header */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-red-500 text-[10px] uppercase tracking-[0.5em] font-bold">Chronicles</span>
                  <div className="h-px w-8 bg-white/10"></div>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-6xl text-white italic leading-none">
                  The Startup <br /> Journey
                </h3>
                <p className="text-neutral-500 text-sm font-light leading-relaxed max-w-70">
                  From a raw idea in a dorm room to a scaled venture. A timeline of failures, pivots, and growth.
                </p>
              </div>
            </div>

            {/* Right Timeline: Modern Staggered Cards */}
            <div className="lg:col-span-8 space-y-24 relative">

              {/* The Animated Vertical Thread */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-red-600/50 via-white/5 to-transparent"></div>

              {[
                { year: "2021", title: "Founded [Startup Name]", desc: "Started the journey by solving X problem with a team of two.", tags: ["Ideation", "Seed"] },
                { year: "2022", title: "Scaling Product", desc: "Reached first 1000 users and secured seed funding to expand tech.", tags: ["Growth", "Scale"] },
                { year: "2024", title: "Global Expansion", desc: "Currently building the future of Y industry across 3 continents.", tags: ["Current", "Impact"] }
              ].map((milestone, idx) => (
                <div key={idx} className="relative pl-12 group">

                  {/* Timeline Node - Minimalist Dot */}
                  <div className="absolute -left-1 top-2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#050505] border border-red-500 rounded-full z-10 group-hover:scale-150 group-hover:bg-red-500 transition-all duration-500"></div>
                    <div className="absolute w-6 h-6 bg-red-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  {/* The Content Card */}
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-[11px] font-mono text-neutral-600 bg-white/5 px-2 py-0.5 rounded uppercase tracking-tighter">
                          Phase 0{idx + 1}
                        </span>
                        <span className="h-px w-4 bg-white/10"></span>
                        <span className="text-[11px] font-mono text-red-500 uppercase tracking-widest">{milestone.year}</span>
                      </div>

                      <h4
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        className="text-3xl md:text-4xl text-white group-hover:text-red-100 transition-colors italic leading-tight"
                      >
                        {milestone.title}
                      </h4>

                      <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-lg font-light">
                        {milestone.desc}
                      </p>

                      {/* Skill/Tag Pills inside Timeline */}
                      <div className="flex gap-2 pt-2">
                        {milestone.tags.map(tag => (
                          <span key={tag} className="text-[8px] uppercase tracking-[0.2em] px-3 py-1 border border-white/5 text-neutral-600 rounded-full group-hover:border-red-500/20 group-hover:text-neutral-400 transition-all">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Aesthetic Visual Side-Detail (Pinterest Feel) */}
                    <div className="hidden md:block w-32 h-32 rounded-2xl overflow-hidden grayscale opacity-20 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 bg-neutral-900 border border-white/5 rotate-3 group-hover:rotate-0">
                      <img
                        src={`https://images.unsplash.com/photo-${1500000000000 + idx}?q=80&w=200`}
                        className="w-full h-full object-cover"
                        alt="Milestone"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 9: STATS / NUMBERS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-20 border-y border-white/5 mb-40 text-center">
            {[
              { label: "Sessions", val: "50+" },
              { label: "Schools", val: "12" },
              { label: "Colleges", val: "18" },
              { label: "Students", val: "10k+" },
              { label: "Cities", val: "8" },
              { label: "Exp", val: "3yrs" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl text-white font-serif mb-1">{stat.val}</div>
                <div className="text-[9px] uppercase tracking-widest text-neutral-600">{stat.label}</div>
              </div>
            ))}
        </div>

        {/* SECTION 8: GALLERY - Manual Image Paths */}
        <div className="mb-40 px-6 md:px-20">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-16 border-b border-white/5 pb-8 overflow-hidden">
            <div className="space-y-2 animate-[slideUp_1s_ease-out]">
              <h3 className="text-[10px] uppercase tracking-[0.6em] text-red-500 font-bold">Session Gallery</h3>
              <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl text-white italic leading-none">Behind the Scenes</p>
            </div>
            <span className="text-[9px] text-neutral-600 uppercase tracking-[0.3em] font-mono hidden md:block animate-[fadeIn_2s_ease-out]">
              Archive / 2025
            </span>
          </div>

          {/* Pinterest Mosaic Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {[
              {
                img: "Event1.webp", // Yahan apna exact filename daalein
                aspect: "aspect-[3/4]",
                label: "AI & LinkedIn Masterclass",
                venue: "Growell Girls School"
              },
              {
                img: "Event2.webp",
                aspect: "aspect-square",
                label: "Faculty AI Training",
                venue: "Growell CoEd"
              },
              {
                img: "Event3.webp",
                aspect: "aspect-[4/5]",
                label: "Startup Conference",
                venue: "Growell CoEd"
              },
              {
                img: "Event11.webp",
                aspect: "aspect-video",
                label: "Unlocking Human OS",
                venue: "Doon School"
              },
              {
                img: "Event12.webp",
                aspect: "aspect-[2/3]",
                label: "The DeCode: Cyber Awareness",
                venue: "Growell Girls School"
              },
              {
                img: "Event15.webp",
                aspect: "aspect-square",
                label: "The Human Toolkit",
                venue: "Kidzee School"
              },
              {
                img: "Event16.webp",
                aspect: "aspect-video",
                label: "HackProof: Live Simulation",
                venue: "Growell Co-ed"
              },
              {
                img: "Event12.webp",
                aspect: "aspect-[3/4]",
                label: "The Cadet Code",
                venue: "Saifia Institute"
              }
            ].map((item, i) => (
              <div
                key={i}
                className={`break-inside-avoid relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 group cursor-pointer
          opacity-0 translate-y-16 animate-[floatUp_1s_cubic-bezier(0.2,0.8,0.2,1)_forwards]`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className={`${item.aspect} w-full overflow-hidden relative`}>
                  <img
                    // MANUAL PATH: Ab ye direct 'item.img' se filename uthayega
                    src={`./src/assets/events/${item.img}`}
                    alt={item.label}
                    className="w-full h-full object-cover contrast-[1.1] group-hover:scale-110 group-hover:brightness-100 transition-all duration-1000 ease-out"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>

                {/* Hover Info */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-xl">
                    <p className="text-[9px] text-red-500 font-bold uppercase tracking-widest mb-0.5">{item.label}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[7px] text-white/50 uppercase font-mono">{item.venue}</span>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <style jsx>{`
    @keyframes floatUp {
      from { opacity: 0; transform: translateY(60px) scale(0.95); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes slideUp {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `}</style>
        </div>


<Testimonials/>
      </div>
    </div>
  );
};

export default AboutPage;