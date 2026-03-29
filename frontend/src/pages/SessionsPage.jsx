import React, { useState } from 'react';
import {
  Search,
  MapPin,
  Calendar,
  PlayCircle,
  ExternalLink,
  ArrowRight,
  Filter,
  Users,
  School,
  Globe
} from 'lucide-react';

const SessionsPage = () => {
  const [schoolFilter, setSchoolFilter] = useState('');
  const [collegeFilter, setCollegeFilter] = useState('');

  // Sample Data Structures
  const stats = [
    { label: "Students Impacted", value: "50,000+" },
    { label: "Cities Covered", value: "40+" },
    { label: "Institutions", value: "150+" },
    { label: "Live Hours", value: "500+" }
  ];

  const upcomingEvents = [
    {
      name: "Youth Entrepreneurship Summit",
      date: "May 15, 2026",
      venue: "Convention Centre",
      city: "Mumbai",
      topic: "The Future of Gen-Z Startups",
      link: "#"
    },
    {
      name: "Annual Leadership Conclave",
      date: "June 02, 2026",
      venue: "St. Xavier's Auditorium",
      city: "Bangalore",
      topic: "Public Speaking for Leaders",
      link: "#"
    }
  ];

  const liveSessions = [
    {
      title: "Mastering Confidence on Stage",
      date: "Feb 10, 2026",
      platform: "YouTube",
      thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800",
      link: "#"
    },
    {
      title: "Startup Funding Basics",
      date: "Jan 24, 2026",
      platform: "Instagram Live",
      thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800",
      link: "#"
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-white selection:text-black">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&display=swap');`}
      </style>

      {/* SECTION 1: HERO BANNER */}
      <section className="pt-32 pb-20 px-8 md:px-16 border-b border-white/5">
        <div className="max-w-4xl">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[12vw] md:text-[8vw] leading-[0.8] uppercase tracking-tighter mb-8">
            Speaking <br /><span className="italic">Sessions</span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            High-energy, interactive sessions designed to bridge the gap between academic theory and real-world execution. Specialized in <span className="text-white">Entrepreneurship, Leadership, and Communication.</span>
          </p>
        </div>
      </section>

      {/* SECTION 8: STATS (Shared Component Style) */}
      <section className="grid grid-cols-2 lg:grid-cols-4 border-b border-white/10">
        {stats.map((stat, i) => (
          <div key={i} className="p-10 border-r border-white/10 text-center group hover:bg-white/5 transition-colors">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl mb-2">{stat.value}</h2>
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* SECTION 2 & 3: INSTITUTION TABLES */}
      <section className="p-8 md:p-16 space-y-32">
        {/* Schools Section */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl italic">Schools I've Visited</h2>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600" size={16} />
              <input
                type="text"
                placeholder="Filter by City, Year, or Topic..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-xs focus:outline-none focus:border-white/30"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/20 text-[10px] uppercase tracking-widest text-neutral-500">
                  <th className="py-4 font-medium">School Name</th>
                  <th className="py-4 font-medium">City</th>
                  <th className="py-4 font-medium">Level</th>
                  <th className="py-4 font-medium">Topic</th>
                  <th className="py-4 font-medium">Date</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[1, 2, 3].map((_, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                    <td className="py-6 font-medium">Delhi Public School</td>
                    <td className="py-6 text-neutral-400">New Delhi</td>
                    <td className="py-6 text-neutral-400">Class 9-12</td>
                    <td className="py-6 text-neutral-400">Ideation Workshop</td>
                    <td className="py-6 text-neutral-400">Oct 2025</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Colleges Section */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl italic">Colleges & Universities</h2>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all">
                <Filter size={12} /> Filter by State
              </button>
            </div>
          </div>
          {/* Same table structure as above */}
          <div className="bg-white/5 p-8 rounded-sm border border-dashed border-white/10 text-center text-neutral-500 text-sm">
            Colleges list and filtering logic mirrors Schools section...
          </div>
        </div>
      </section>

      {/* SECTION 4: UPCOMING EVENTS */}
      <section className="p-8 md:p-16 bg-white text-black">
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-7xl mb-16 tracking-tighter">Upcoming Engagements</h2>
        <div className="space-y-6">
          {upcomingEvents.map((event, i) => (
            <div key={i} className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-black/10 pb-8 gap-6 group">
              <div className="space-y-2">
                <span className="bg-black text-white text-[9px] px-2 py-1 uppercase tracking-tighter font-bold">Upcoming</span>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">{event.name}</h3>
                <div className="flex flex-wrap gap-6 text-sm text-neutral-600 uppercase tracking-widest">
                  <span className="flex items-center gap-2"><Calendar size={14} /> {event.date}</span>
                  <span className="flex items-center gap-2"><MapPin size={14} /> {event.venue}, {event.city}</span>
                </div>
              </div>
              <button className="bg-black text-white px-8 py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-all flex items-center gap-3">
                Register Now <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: LIVE SESSIONS */}
      <section className="p-8 md:p-16">
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl mb-12">Digital Archive</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {liveSessions.map((live, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden mb-6">
                <img src={live.thumbnail} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle size={60} className="text-white opacity-80 group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] px-2 py-1 font-bold uppercase tracking-widest">
                  {live.platform}
                </div>
              </div>
              <h4 className="text-xl mb-1">{live.title}</h4>
              <p className="text-xs text-neutral-500 uppercase tracking-widest">{live.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: EVENT PORTFOLIO */}
      <section className="p-8 md:p-16 bg-neutral-900/50 border-y border-white/5">
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl mb-16 text-center">Moments on Stage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="grid grid-cols-2 gap-2 h-64">
                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all cursor-crosshair" />
                <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=400" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all cursor-crosshair" />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest">Global Leadership Summit</h4>
                <p className="text-xs text-neutral-500">Oct 2025 • Main Auditorium</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section className="py-24 px-8 md:px-16 text-center max-w-5xl mx-auto">
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl italic mb-16">Voice of the Audience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div className="border border-white/10 p-8 space-y-4 relative">
            <span className="text-6xl text-white/10 absolute top-4 right-8 font-serif">"</span>
            <p className="text-neutral-300 italic">"The energy brought to the classroom was infectious. Our students are still talking about the 'Idea-to-Action' framework."</p>
            <div>
              <p className="font-bold text-sm">Dr. Sarah Johnson</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Principal, St. Peters Academy</p>
            </div>
          </div>
          <div className="border border-white/10 p-8 space-y-4 relative">
            <span className="text-6xl text-white/10 absolute top-4 right-8 font-serif">"</span>
            <p className="text-neutral-300 italic">"Finally a speaker who doesn't just lecture but actually listens and engages with the youth on their level."</p>
            <div>
              <p className="font-bold text-sm">Rahul Verma</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Student Council President, IIT-D</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SessionsPage;