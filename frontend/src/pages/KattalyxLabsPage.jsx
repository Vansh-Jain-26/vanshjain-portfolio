import React from 'react';
import { FiExternalLink, FiInstagram, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const projects = [
  {
    name: 'AI & Future Skills Bootcamp',
    type: 'Workshop',
    desc: 'Hands-on AI literacy bootcamp for school students covering tools, ethics, and real-world applications.',
    status: 'Live',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=800',
  },
  {
    name: 'LinkedIn Masterclass',
    type: 'Masterclass',
    desc: 'Personal branding and LinkedIn strategy session for college students and young professionals.',
    status: 'Live',
    image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=800',
  },
  {
    name: 'Entrepreneurship 101',
    type: 'Curriculum Module',
    desc: '4-week modular curriculum on startup fundamentals, ideation, and execution for 10th–12th graders.',
    status: 'Live',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800',
  },
  {
    name: 'DSE MBA IB Session',
    type: 'University Engagement',
    desc: 'Immersive founder dialogue at Delhi School of Economics in collaboration with the Alumni Relations Committee.',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800',
  },
  {
    name: 'Cyber Awareness Program',
    type: 'Workshop',
    desc: 'Digital safety and cyber awareness session delivered across multiple schools in Ghaziabad and Delhi.',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800',
  },
  {
    name: 'EliteVerse ERP for Schools',
    type: 'EdTech Product',
    desc: 'School management ERP built under Kattalyx Labs to digitize operations for partner institutions.',
    status: 'Live',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
  },
  {
    name: 'Career Clarity Program',
    type: 'Mentorship',
    desc: 'Group mentorship program helping students identify their Ikigai and build career roadmaps.',
    status: 'Live',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800',
  },
  {
    name: 'KIET Ghaziabad Session',
    type: 'College Engagement',
    desc: 'High-energy startup and execution workshop delivered to engineering students at KIET Ghaziabad.',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800',
  },
  {
    name: 'Doon School Program',
    type: 'School Engagement',
    desc: 'Leadership and entrepreneurship module delivered at The Doon School, Dehradun.',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800',
  },
];

const services = [
  'Entrepreneurship Curriculum',
  'AI & Digital Literacy',
  'Public Speaking Workshops',
  'Career Clarity Programs',
  'Mentorship & Guidance',
  'University Engagements',
  'ERP for Schools',
  'Leadership Development',
];

const KattalyxLabsPage = () => {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&display=swap');`}</style>

      {/* HERO */}
      <section className="pt-40 pb-24 px-8 md:px-20 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-red-900/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-red-500 font-mono text-[10px] uppercase tracking-[0.6em] font-bold block mb-4">Company</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-7xl md:text-[10vw] italic leading-none tracking-tighter mb-6">
            Kattalyx Labs <br /><span className="text-neutral-700 not-italic text-5xl md:text-6xl">Pvt Ltd</span>
          </h1>
          <p className="text-neutral-400 text-lg font-light max-w-2xl leading-relaxed border-l-2 border-red-500/30 pl-6 mb-10">
            Building an integrated education ecosystem that bridges the gap between traditional schooling and real-world success. We don't just teach — we transform the educational journey.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.kattalyxlabs.com/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300">
              Visit Website <FiExternalLink size={14} />
            </a>
            <div className="flex items-center gap-4 text-white">
              <a href="https://www.instagram.com/kattalyx.labs/" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full hover:border-red-500/50 transition-all"><FiInstagram size={18} /></a>
              <a href="https://www.linkedin.com/company/kattalyx-labs/" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full hover:border-red-500/50 transition-all"><FiLinkedin size={18} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-8 md:px-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-red-500 font-mono text-[10px] uppercase tracking-[0.6em] font-bold block">Who We Are</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-6xl italic leading-tight">
              Reimagining education <br /><span className="text-neutral-600">from the inside.</span>
            </h2>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Kattalyx Labs was founded in December 2024 in Ghaziabad, Uttar Pradesh. We are an education ecosystem company on a mission to make Indian schools future-ready — not just exam-ready.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Through modular curricula, live workshops, mentorship programs, and technology products, we bring real-world learning into classrooms. In under a year, we've reached 10,000+ students across 20+ institutions in 10+ cities.
            </p>
            <div className="flex flex-col gap-2 pt-4">
              <div className="flex items-center gap-2 text-[11px] text-neutral-400 font-mono">
                <FiMail className="text-red-500" /> official@kattalyxlab.com
              </div>
              <div className="flex items-center gap-2 text-[11px] text-neutral-400 font-mono">
                <FiPhone className="text-red-500" /> +91 9105300307
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[['10K+', 'Students Impacted'], ['20+', 'Institutions'], ['25+', 'Events Delivered'], ['10+', 'Cities Covered']].map(([val, label]) => (
              <div key={label} className="p-6 bg-neutral-900/30 border border-white/5 rounded-3xl">
                <p className="text-3xl font-serif italic text-white mb-1">{val}</p>
                <p className="text-[9px] uppercase tracking-widest text-neutral-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-8 md:px-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <span className="text-red-500 font-mono text-[10px] uppercase tracking-[0.6em] font-bold block mb-4">What We Deliver</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-7xl italic leading-none tracking-tighter mb-16">
            Our <span className="text-neutral-700 not-italic">Programs</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <div key={i} className="group p-6 bg-neutral-900/20 border border-white/5 rounded-2xl hover:border-red-500/30 hover:bg-neutral-900/40 transition-all duration-500">
                <span className="text-[10px] font-mono text-red-500 mb-3 block">0{i + 1}</span>
                <p className="text-white font-bold text-sm uppercase tracking-wider">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <span className="text-red-500 font-mono text-[10px] uppercase tracking-[0.6em] font-bold block mb-4">Engagements & Products</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-7xl italic leading-none tracking-tighter mb-16">
            Our <span className="text-neutral-700 not-italic">Work</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="group bg-neutral-900/20 border border-white/5 rounded-4xl hover:border-red-500/20 hover:bg-neutral-900/40 transition-all duration-500 overflow-hidden flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  <span className={`absolute top-4 right-4 text-[8px] uppercase tracking-widest px-2 py-1 rounded-full font-bold ${
                    p.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-black/60 text-neutral-400 border border-white/10'
                  }`}>{p.status}</span>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-[9px] font-mono text-red-500 uppercase tracking-widest mb-3">{p.type}</span>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl italic text-white mb-3 group-hover:text-red-100 transition-colors">{p.name}</h3>
                  <p className="text-neutral-400 text-xs leading-relaxed font-light">{p.desc}</p>
                  <div className="mt-6 h-px w-full bg-white/5 group-hover:bg-red-500/20 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KattalyxLabsPage;
