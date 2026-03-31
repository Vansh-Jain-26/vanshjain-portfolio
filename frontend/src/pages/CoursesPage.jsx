import React from 'react';
import {
  Users,
  Clock,
  Globe,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  CalendarCheck,
  Zap,
  Target,
  Rocket,
  ShieldCheck,
  Star
} from 'lucide-react';
import DesignProcess from './Step';

const CoursesPage = () => {
  const courses = [
    {
      title: "Entrepreneurship 101",
      target: "School & College Students",
      duration: "4 Weeks",
      mode: "Hybrid",
      desc: "A foundational course designed to spark the entrepreneurial spirit. Learn how to identify problems, brainstorm solutions, and understand the basics of business economics.",
      topics: ["Problem Identification", "Market Research", "Basic Revenue Models", "Pitching your first idea"],
      category: "Entrepreneurship"
    },
    {
      title: "Public Speaking Masterclass",
      target: "Aspiring Speakers & Students",
      duration: "2 Weeks",
      mode: "Online / Offline",
      desc: "Master the art of communication. Overcome stage fright, learn the power of storytelling, and develop a commanding presence that captures any audience's attention.",
      topics: ["Body Language & Tones", "Storytelling Frameworks", "Handling Q&A Sessions", "Visual Aid Design"],
      category: "Communication"
    },
    {
      title: "Leadership Development",
      target: "Youth & Young Professionals",
      duration: "6 Weeks",
      mode: "Hybrid",
      desc: "Leadership is an action, not a position. This course focuses on emotional intelligence, team dynamics, and ethical decision-making for the next generation of leaders.",
      topics: ["Conflict Resolution", "Strategic Thinking", "Building High-Performance Teams", "Self-Leadership"],
      category: "Leadership"
    }
  ];

  const steps = [
    { icon: <MessageSquare size={32} />, title: "Inquiry", desc: "Reach out via the form with your interests and goals." },
    { icon: <CalendarCheck size={32} />, title: "Confirmation", desc: "We'll schedule a call to finalize the curriculum and dates." },
    { icon: <Zap size={32} />, title: "Session", desc: "Deep-dive into high-energy, practical learning experiences." }
  ];

  const values = [
    { icon: <Target />, title: "Real Experience", desc: "No fluff. Only strategies that have worked in the real world." },
    { icon: <Rocket />, title: "Practical Knowledge", desc: "Actionable steps you can implement from Day 1." },
    { icon: <Users />, title: "Youth Focused", desc: "Designed specifically for the energy and mindset of Gen Z." },
    { icon: <Star />, title: "High Energy", desc: "Engaging sessions that keep you motivated and focused." },
    { icon: <ShieldCheck />, title: "Mentorship", desc: "Direct access to guidance even after the course ends." },
    { icon: <Globe />, title: "Global Perspective", desc: "Understanding local markets with a global standard." }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-white selection:text-black pt-20">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&display=swap');`}
      </style>

      {/* SECTION 1: HERO BANNER */}
      <section className="pt-32 pb-15 px-8 md:px-16 border-b border-white/5 text-center">
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[10vw] md:text-[6vw] leading-[0.9] uppercase tracking-tighter mb-8 italic">
          Learn From My <br /> Experience
        </h1>
        <p className="max-w-2xl mx-auto text-neutral-400 text-sm md:text-base leading-relaxed tracking-wide uppercase px-4">
          Education shouldn't be boring. My philosophy is built on **active engagement**, **fail-fast principles**, and **practical execution** rather than just theory.
        </p>
      </section>

      {/* SECTION 2 & 3: COURSE CARDS */}
      <section className="p-8 md:p-20 bg-[#0a0a0a] min-h-screen">
        {/* Header: More minimalist, editorial feel */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <div className="space-y-2">
            <h2 className="uppercase text-[10px] tracking-[0.6em] text-red-500 font-bold">Available Modules</h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-6xl text-white italic">Curated Learning</p>
          </div>
          <span className="text-[10px] text-neutral-600 uppercase tracking-widest border-l border-white/20 pl-4">
            Academic Year <br /> 2026 Curriculum
          </span>
        </div>

        {/* Pinterest-style Masonry/Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`group relative flex flex-col p-10 transition-all duration-700 ease-in-out border border-white/5 
          ${index % 2 === 0 ? 'md:mt-12 rounded-[3rem] bg-neutral-900/40 backdrop-blur-md' : 'rounded-[2rem] bg-white/[0.02]'} 
          hover:bg-neutral-800/50 hover:-translate-y-3 shadow-2xl hover:shadow-red-900/10`}
            >
              {/* Subtle Watermark Index - instead of the big icon */}
              <div className="absolute top-10 right-10 text-6xl font-serif text-white/[0.03] group-hover:text-red-500/10 transition-colors italic select-none">
                0{index + 1}
              </div>

              {/* Category Tag: Floating pill style */}
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-[0.3em] font-medium">{course.category}</span>
              </div>

              <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl text-white mb-6 leading-tight group-hover:text-red-100 transition-colors">
                {course.title}
              </h3>

              {/* Info Pills: Modern Horizontal Chips */}
              <div className="flex flex-wrap gap-3 mb-10">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[9px] text-neutral-400 uppercase tracking-tighter">
                  <Users size={12} className="text-red-500" /> {course.target}
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[9px] text-neutral-400 uppercase tracking-tighter">
                  <Clock size={12} className="text-red-500" /> {course.duration}
                </div>
              </div>

              <p className="text-neutral-500 text-sm leading-relaxed mb-10 font-light group-hover:text-neutral-300 transition-colors">
                {course.desc}
              </p>

              {/* Key Topics: Cleaner checklist */}
              <div className="mb-12 space-y-4">
                <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent mb-6"></div>
                {course.topics.slice(0, 3).map((topic, i) => (
                  <div key={i} className="flex items-center gap-3 text-[11px] text-neutral-400 group-hover:text-neutral-200 transition-colors">
                    <div className="w-1 h-1 rounded-full bg-red-500/50 group-hover:bg-red-500"></div>
                    {topic}
                  </div>
                ))}
              </div>

              {/* Enroll Button: High contrast, rounded-full */}
              <button className="mt-auto group/btn relative overflow-hidden bg-white text-black py-4 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:pr-12">
                <span className="relative z-10">Explore Module</span>
                <ArrowRight
                  size={16}
                  className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-6 transition-all"
                />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <DesignProcess/>
      {/* <section className="bg-white text-black py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-7xl mb-20 text-center tracking-tighter italic">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {steps.map((step, i) => (
              <div key={i} className="text-center space-y-6 relative z-10">
                <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                  {step.icon}
                </div>
                <h4 className="uppercase tracking-[0.3em] text-sm font-bold">0{i + 1}. {step.title}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* SECTION 5: WHY LEARN FROM ME */}
      <section className="py-32 px-8 md:px-20 bg-[#0a0a0a] relative">
        {/* Modern Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-900/5 to-transparent pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row gap-20 max-w-7xl mx-auto">

          {/* Left Side: Sticky Title with a Modern Twist */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-40 space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-red-600"></div>
                <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 font-bold">Philosophy</span>
              </div>
              <h2
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-6xl md:text-7xl leading-[1.1] text-white font-light"
              >
                Why Choose <br />
                <span className="italic text-red-500">My Sessions?</span>
              </h2>
              <p className="text-neutral-500 text-sm max-w-xs leading-relaxed italic">
                Breaking the fourth wall between the speaker and the soul.
              </p>
            </div>
          </div>

          {/* Right Side: Editorial Staggered Layout */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {values.map((val, i) => (
              <div
                key={i}
                className={`relative group ${i % 2 !== 0 ? 'md:mt-32' : ''}`}
              >
                {/* Large Decorative Number (Pinterest Aesthetic) */}
                <div className="absolute -top-12 -left-8 text-8xl font-serif text-white/[0.03] group-hover:text-red-500/10 transition-all duration-700 italic select-none">
                  0{i + 1}
                </div>

                <div className="relative z-10 space-y-6">
                  {/* Minimalist Icon Reveal */}
                  <div className="text-red-500 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 origin-left">
                    {val.icon}
                  </div>

                  <div className="space-y-4">
                    <h4 className="uppercase tracking-[0.3em] text-[11px] font-black text-white group-hover:text-red-500 transition-colors">
                      {val.title}
                    </h4>

                    {/* Custom Underline Animation */}
                    <div className="h-px w-8 bg-white/10 group-hover:w-full group-hover:bg-red-500/50 transition-all duration-700"></div>

                    <p className="text-neutral-400 text-sm leading-relaxed font-light group-hover:text-neutral-200 transition-colors duration-500">
                      {val.desc}
                    </p>
                  </div>

                  {/* Subtle interactive bullet points or "Read More" hint */}
                  <div className="pt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <span className="text-[9px] uppercase tracking-widest text-neutral-600">The Approach</span>
                    <div className="h-1 w-1 rounded-full bg-red-600"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-40 px-8 bg-[#0a0a0a] relative overflow-hidden flex flex-col items-center justify-center">

        {/* Modern Decorative Aura - Soft Red Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 text-center space-y-10 group">

          {/* Minimalist Sub-Header */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-white/10 group-hover:w-12 group-hover:bg-red-500 transition-all duration-700"></div>
            <p className="text-neutral-500 text-[10px] uppercase tracking-[0.6em] font-light group-hover:text-neutral-300 transition-colors">
              Ready to start your journey?
            </p>
            <div className="h-px w-8 bg-white/10 group-hover:w-12 group-hover:bg-red-500 transition-all duration-700"></div>
          </div>

          {/* The Main "Pinteresty" Link */}
          <div className="relative inline-block">
            <button
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-4xl md:text-7xl italic text-white/90 hover:text-white transition-all duration-500 ease-out flex items-center gap-6 group/btn"
            >
              <span className="relative">
                Get in touch for custom workshops
                {/* Modern Underline: Thicker, Gradient, and Animates from Center */}
                <span className="absolute bottom-[-10px] left-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent group-hover/btn:w-full group-hover/btn:left-0 transition-all duration-700 ease-in-out"></span>
              </span>

              {/* Animated Arrow Icon */}
              <span className="inline-block transform group-hover/btn:translate-x-4 group-hover/btn:-translate-y-2 transition-transform duration-500 ease-out text-red-500 not-italic font-sans text-3xl md:text-5xl">
                →
              </span>
            </button>
          </div>

          {/* Social / Contact Secondary Links */}
          <div className="pt-12 flex gap-10 justify-center items-center">
            {['Email', 'LinkedIn', 'Instagram'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-[9px] uppercase tracking-[0.4em] text-neutral-600 hover:text-red-400 transition-colors duration-300 relative group/link"
              >
                {platform}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-400 group-hover/link:w-full transition-all duration-500"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Background Text Watermark */}
        <div
          className="absolute bottom-0 right-0 text-[15vw] font-serif italic text-white/[0.01] select-none pointer-events-none translate-y-1/3"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Collaborate
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;