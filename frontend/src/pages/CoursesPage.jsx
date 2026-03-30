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
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&display=swap');`}
      </style>

      {/* SECTION 1: HERO BANNER */}
      <section className="pt-32 pb-20 px-8 md:px-16 border-b border-white/5 text-center">
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[10vw] md:text-[8vw] leading-[0.9] uppercase tracking-tighter mb-8 italic">
          Learn From My <br /> Experience
        </h1>
        <p className="max-w-2xl mx-auto text-neutral-400 text-sm md:text-base leading-relaxed tracking-wide uppercase px-4">
          Education shouldn't be boring. My philosophy is built on **active engagement**, **fail-fast principles**, and **practical execution** rather than just theory.
        </p>
      </section>

      {/* SECTION 2 & 3: COURSE CARDS */}
      <section className="p-8 md:p-16">
        <div className="flex items-center justify-between mb-16 border-b border-white/10 pb-4">
          <h2 className="uppercase text-[10px] tracking-[0.4em] text-neutral-500">Available Modules</h2>
          <span className="text-[10px] text-neutral-600 italic">2026 Curriculum</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="group border border-white/10 p-8 flex flex-col hover:bg-white/5 transition-all duration-500 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-white/5 group-hover:text-white/10 transition-colors">
                <CheckCircle2 size={120} />
              </div>

              <span className="text-[10px] text-blue-500 uppercase tracking-widest mb-4 font-bold">{course.category}</span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl mb-6 leading-tight">{course.title}</h3>

              <div className="space-y-3 mb-8 text-neutral-400 text-[11px] uppercase tracking-wider">
                <div className="flex items-center gap-2"><Users size={14} className="text-neutral-600" /> For: {course.target}</div>
                <div className="flex items-center gap-2"><Clock size={14} className="text-neutral-600" /> Duration: {course.duration}</div>
                <div className="flex items-center gap-2"><Globe size={14} className="text-neutral-600" /> Mode: {course.mode}</div>
              </div>

              <p className="text-neutral-500 text-sm leading-relaxed mb-8 line-clamp-4">
                {course.desc}
              </p>

              <div className="mb-10">
                <p className="text-[10px] uppercase tracking-widest text-white mb-4">Key Topics:</p>
                <ul className="space-y-2">
                  {course.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                      <span className="text-blue-500 mt-1">•</span> {topic}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-auto flex items-center justify-center gap-3 w-full border border-white/20 py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all group/btn">
                Enroll Now <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
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
      <section className="py-24 px-8 md:px-16">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-6xl leading-tight sticky top-32">
              Why Choose My <br /> Sessions?
            </h2>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {values.map((val, i) => (
              <div key={i} className="space-y-4 border-l border-white/10 pl-6 hover:border-blue-500 transition-colors">
                <div className="text-blue-500">{val.icon}</div>
                <h4 className="uppercase tracking-widest text-xs font-bold">{val.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-20 px-8 border-t border-white/5 text-center">
        <p className="text-neutral-500 text-[10px] uppercase tracking-[0.5em] mb-8 font-light">Ready to start your journey?</p>
        <button className="text-2xl md:text-4xl italic hover:text-blue-500 transition-colors underline underline-offset-8 decoration-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Get in touch for custom workshops →
        </button>
      </section>
    </div>
  );
};

export default CoursesPage;