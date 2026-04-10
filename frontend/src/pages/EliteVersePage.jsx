import React from 'react';
import { FiArrowUpRight, FiInstagram, FiLinkedin, FiMail, FiPhone, FiGlobe } from 'react-icons/fi';
import { SiWordpress, SiShopify, SiFigma, SiReact, SiNextdotjs } from 'react-icons/si';

const projects = [
  {
    name: 'Kattalyx Labs Website',
    type: 'Web Development',
    desc: 'Full-stack corporate website for Kattalyx Labs Pvt Ltd with CMS, blog, and lead generation.',
    status: 'Live',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800',
  },
  {
    name: 'ERP for Schools',
    type: 'ERP / CRM System',
    desc: 'Custom ERP solution for school management — attendance, fees, academics, and parent portal.',
    status: 'Live',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
  },
  {
    name: 'Founder Portfolio',
    type: 'UI/UX & Branding',
    desc: 'Personal portfolio and brand identity for a Delhi-based startup founder.',
    status: 'Live',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800',
  },
  {
    name: 'D2C Brand Launch',
    type: 'Digital Marketing',
    desc: 'End-to-end digital marketing strategy and execution for a D2C fashion brand launch.',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800',
  },
  {
    name: 'Startup Pitch Deck',
    type: 'Business Consultancy',
    desc: 'Investor-ready pitch deck and go-to-market strategy for a SaaS startup.',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800',
  },
  {
    name: 'Mobile App MVP',
    type: 'App Development',
    desc: 'React Native MVP for a hyperlocal service marketplace, shipped in 6 weeks.',
    status: 'Live',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800',
  },
];

const services = [
  'Web & App Development',
  'UI/UX & Brand Identity',
  'Digital Marketing',
  'Business Consultancy',
  'ERP / CRM Systems',
  'Startup Readiness',
];

const EliteVersePage = () => {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&display=swap');`}</style>

      {/* HERO */}
      <section className="pt-40 pb-24 px-8 md:px-20 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-red-900/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-red-500 font-mono text-[10px] uppercase tracking-[0.6em] font-bold block mb-4">Company</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-7xl md:text-[10vw] italic leading-none tracking-tighter mb-6">
            Elite Verse <br /><span className="text-neutral-700 not-italic text-5xl md:text-6xl">Solutions Pvt Ltd</span>
          </h1>
          <p className="text-neutral-400 text-lg font-light max-w-2xl leading-relaxed border-l-2 border-red-500/30 pl-6 mb-10">
            The execution partner for founders who are tired of agencies that don't get it. We build systems that convert ideas into impact — fast, clean, and without the fluff.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.eliteversesolutions.com/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
              Visit Website <FiArrowUpRight size={14} />
            </a>
            <div className="flex items-center gap-4 text-white">
              <a href="https://www.instagram.com/eliteverse.solutions/" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full hover:border-red-500/50 transition-all"><FiInstagram size={18} /></a>
              <a href="https://www.linkedin.com/company/elite-verse-solutions/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full hover:border-red-500/50 transition-all"><FiLinkedin size={18} /></a>
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
              Founders building <br /><span className="text-neutral-600">for founders.</span>
            </h2>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Elite Verse Solutions was founded in April 2025 in Noida, Uttar Pradesh. We're not a typical agency — we're founders ourselves. We understand the pressure of scaling while everything is breaking, and we build accordingly.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              From pitch decks to full-scale ERPs, we build the systems that turn your "what if" into a scalable reality. No gatekeeping, no over-designing for aesthetics — just pure output focused on growth, metrics, and clean execution.
            </p>
            <div className="flex flex-col gap-2 pt-4">
              <div className="flex items-center gap-2 text-[11px] text-neutral-400 font-mono">
                <FiMail className="text-red-500" /> official@eliteversesolutions.com
              </div>
              <div className="flex items-center gap-2 text-[11px] text-neutral-400 font-mono">
                <FiPhone className="text-red-500" /> +91 9105300307
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[['April 2025', 'Founded'], ['Noida, UP', 'Headquarters'], ['Founder & MD', 'Vansh Jain'], ['6 Weeks', 'Avg. Delivery Time']].map(([val, label]) => (
              <div key={label} className="p-6 bg-neutral-900/30 border border-white/5 rounded-3xl">
                <p className="text-2xl font-serif italic text-white mb-1">{val}</p>
                <p className="text-[9px] uppercase tracking-widest text-neutral-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-8 md:px-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <span className="text-red-500 font-mono text-[10px] uppercase tracking-[0.6em] font-bold block mb-4">What We Do</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-7xl italic leading-none tracking-tighter mb-16">
            Our <span className="text-neutral-700 not-italic">Services</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div key={i} className="group p-6 bg-neutral-900/20 border border-white/5 rounded-2xl hover:border-red-500/30 hover:bg-neutral-900/40 transition-all duration-500">
                <span className="text-[10px] font-mono text-red-500 mb-3 block">0{i + 1}</span>
                <p className="text-white font-bold text-sm uppercase tracking-wider">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section className="py-24 px-8 md:px-20 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <span className="text-red-500 font-mono text-[10px] uppercase tracking-[0.6em] font-bold block mb-4">Global Impact</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-7xl italic leading-none tracking-tighter mb-4">
            500+ <span className="text-neutral-700 not-italic">Projects</span>
          </h2>
          <p className="text-neutral-400 text-sm font-light mb-16 max-w-xl">Completed across tech, designing & marketing — delivered to clients worldwide.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Tech Stack */}
            <div className="space-y-6">
              <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold border-b border-white/5 pb-3">Technologies & Tools</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <SiWordpress size={16} />, name: 'WordPress' },
                  { icon: <SiShopify size={16} />, name: 'Shopify' },
                  { icon: <SiFigma size={16} />, name: 'Figma' },
                  { icon: <SiReact size={16} />, name: 'UI Design' },
                  { icon: <SiNextdotjs size={16} />, name: 'Graphic Design' },
                  { icon: <FiGlobe size={16} />, name: 'Logo Design' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl hover:border-red-500/30 hover:bg-white/10 transition-all group">
                    <span className="text-neutral-400 group-hover:text-white transition-colors">{item.icon}</span>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 group-hover:text-white transition-colors font-bold">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-6">
              <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold border-b border-white/5 pb-3">Work Categories</p>
              <div className="space-y-3">
                {[
                  ['Tech', '200+', 'Web, App, ERP'],
                  ['Designing', '180+', 'UI, Graphic, Logo, Brand'],
                  ['Marketing', '120+', 'SEO, Ads, Social, Content'],
                ].map(([cat, count, sub]) => (
                  <div key={cat} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-red-500/20 transition-all">
                    <div>
                      <p className="text-white font-bold text-sm">{cat}</p>
                      <p className="text-neutral-500 text-[9px] uppercase tracking-wider">{sub}</p>
                    </div>
                    <span className="text-2xl font-serif italic text-red-500">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Countries */}
            <div className="space-y-6">
              <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold border-b border-white/5 pb-3">Countries Served</p>
              <div className="flex flex-wrap gap-3">
                {['UK', 'USA', 'Canada', 'France', 'Philippines', 'Dubai', 'Europe', 'India'].map((c, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl hover:border-red-500/30 hover:bg-white/10 transition-all group">
                    <FiGlobe size={14} className="text-red-500 group-hover:text-white transition-colors" />
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 group-hover:text-white transition-colors font-bold">{c}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <span className="text-red-500 font-mono text-[10px] uppercase tracking-[0.6em] font-bold block mb-4">Portfolio</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-7xl italic leading-none tracking-tighter mb-16">
            Our <span className="text-neutral-700 not-italic">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="group bg-neutral-900/20 border border-white/5 rounded-[2rem] hover:border-red-500/20 hover:bg-neutral-900/40 transition-all duration-500 overflow-hidden flex flex-col">
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

export default EliteVersePage;
