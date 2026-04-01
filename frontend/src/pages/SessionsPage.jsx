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
import CountUp from 'react-countup';


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
      <section className="pt-40 pb-20 px-8 md:px-16 border-b border-white/5">
        <div className="max-w-4xl">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[12vw] md:text-[6vw] leading-[0.8] uppercase tracking-tighter mb-8">
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
      {/* <section className="p-8 md:p-16 space-y-32">

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
            <table className="w-full text-left border-collapse overflow-hidden">
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
                  <tr key={i} className="relative border-b border-white/5 group overflow-hidden">
  
                    <div className="absolute left-0 top-0 bottom-0 w-0 bg-blue-600 transition-all duration-500 ease-in-out group-hover:w-1 " />

                    <td className="py-6 font-medium transition-transform duration-500 group-hover:translate-x-4 over">
                      Delhi Public School
                    </td>
                    <td className="py-6 text-neutral-400 transition-transform duration-500 group-hover:translate-x-4">
                      New Delhi
                    </td>
                    <td className="py-6 text-neutral-400 transition-transform duration-500 group-hover:translate-x-4">
                      Class 9-12
                    </td>
                    <td className="py-6 text-neutral-400 transition-transform duration-500 group-hover:translate-x-4">
                      Ideation Workshop
                    </td>
                    <td className="py-6 text-neutral-400 transition-transform duration-500 group-hover:translate-x-4">
                      Oct 2025
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl italic">Colleges & Universities</h2>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all">
                <Filter size={12} /> Filter by State
              </button>
            </div>
          </div>
          <div className="bg-white/5 p-8 rounded-sm border border-dashed border-white/10 text-center text-neutral-500 text-sm">
            Colleges list and filtering logic mirrors Schools section...
          </div>
        </div>
      </section> */}




      <section className="py-32 bg-[#050505] text-white font-sans overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-20">

          {/* Section Header & Total Impact */}
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24 border-b border-white/5 pb-16">
            <div className="space-y-4">
              <span className="text-red-500 font-mono text-[10px] uppercase tracking-[0.6em] font-bold block">
                Speaker Portfolio
              </span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-7xl md:text-9xl italic leading-none tracking-tighter">
                Speaking <span className="text-neutral-800 not-italic">& Events</span>
              </h2>
            </div>

            <div className="flex gap-10 md:gap-16">
              {[
                { label: 'Total Events', val: '20+' },
                { label: 'Students Reached', val: '10K+' },
                { label: 'Schools', val: '12+' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-end">
                  <span className="text-3xl md:text-5xl font-serif italic text-white">{stat.val}</span>
                  <span className="text-[9px] uppercase tracking-widest text-neutral-600 font-bold">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Event Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Event Card Template - Map this for your events */}
            {[
              {
                title: "AI & LinkedIn Masterclass",
                school: "Growell Girls School, Baraut",
                date: "July 14, 2025",
                audience: "150 Students",
                rating: "9.5",
                tag: "AI & Branding"
              },
              {
                title: "AI & LinkedIn for Faculty",
                school: "Growell CoEd School, Baraut",
                date: "July 16, 2025",
                audience: "50 Faculty Members",
                rating: "9.6",
                tag: "Faculty Training"
              },
              {
                title: "Startup & Business Conference",
                school: "Growell CoEd School, Baraut",
                date: "August 6, 2025",
                audience: "90+ Students",
                rating: "9.6",
                tag: "Entrepreneurship"
              },
              {
                title: "Unlocking Human OS",
                school: "Doon School, Baraut",
                date: "August 12, 2025",
                audience: "150 Students",
                rating: "9.1",
                tag: "Self-Mastery"
              },
              {
                title: "The DeCode",
                school: "Growell Girls School, Baraut",
                date: "August 13, 2025",
                audience: "300 Students",
                rating: "9.2",
                tag: "Cyber Ethics"
              },
              {
                title: "The Human Toolkit",
                school: "Global Kids (Kidzee), Baraut",
                date: "August 18, 2025",
                audience: "70+ Students",
                rating: "9.5",
                tag: "Life Skills"
              },
              {
                title: "HackProof - Hack the Hackers",
                school: "Growell Co-ed School, Baraut",
                date: "August 20, 2025",
                audience: "150+ Students",
                rating: "9.5",
                tag: "Cybersecurity"
              },
              {
                title: "The Cadet Code",
                school: "Saifia Institute, Baraut",
                date: "August 21, 2025",
                audience: "15 Students",
                rating: "9.5",
                tag: "Confidence"
              },
              {
                title: "Personality Development Demo",
                school: "Godwin School, Kirthal",
                date: "August 22, 2025",
                audience: "250+ Students",
                rating: "9.4",
                tag: "Soft Skills"
              },
              {
                title: "Project UTurn",
                school: "Takshashila World School",
                date: "August 25, 2025",
                audience: "290 Students",
                rating: "9.1",
                tag: "Purpose Discovery"
              },
              {
                title: "Persona X - Unmute",
                school: "Cambridge Public School",
                date: "September 1, 2025",
                audience: "70 Students",
                rating: "9.8",
                tag: "Public Speaking"
              },
              {
                title: "Cyber Shield",
                school: "PM Shri KV, Baoli",
                date: "September 11, 2025",
                audience: "42 Students",
                rating: "9.2",
                tag: "Digital Safety"
              },
              {
                title: "Evarire - Empowerment",
                school: "PM Shri KV, Baoli",
                date: "September 16, 2025",
                audience: "50 Students",
                rating: "9.3",
                tag: "Women Health"
              },
              {
                title: "AIgnition",
                school: "PM Shri KV, Baoli",
                date: "September 24, 2025",
                audience: "60 Faculty Members",
                rating: "9.2",
                tag: "AI in Education"
              },
              {
                title: "AI Bootcamp",
                school: "KIET Group of Institutions",
                date: "September 27, 2025",
                audience: "60 College Students",
                rating: "9.3",
                tag: "Vertex AI"
              },
              {
                title: "Founder Fiesta",
                school: "Lakshya Public School",
                date: "November 17, 2025",
                audience: "180+ Students",
                rating: "9.8",
                tag: "Startup Growth"
              },
              {
                title: "Dream Direction Drive",
                school: "Maharaja Agrasen Public School",
                date: "December 2, 2025",
                audience: "60+ Students",
                rating: "9.7",
                tag: "Career Clarity"
              }
            ].map((event, idx) => (
              <div key={idx} className="group relative bg-neutral-900/20 border border-white/5 p-8 rounded-4xl hover:bg-neutral-900/40 hover:border-red-500/30 transition-all duration-500">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[9px] font-mono text-red-500 uppercase tracking-widest font-bold px-3 py-1 bg-red-500/10 rounded-full">
                    {event.tag}
                  </span>
                  <div className="text-right">
                    <p className="text-[18px] font-serif italic text-white">{event.rating}/10</p>
                    <p className="text-[7px] uppercase tracking-tighter text-neutral-600 font-bold">Audience Score</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl italic leading-tight group-hover:text-red-500 transition-colors">
                    {event.title}
                  </h3>

                  <div className="space-y-1">
                    <p className="text-xs text-white/80 font-medium">{event.school}</p>
                    <div className="flex items-center gap-3 text-[10px] text-neutral-600 font-mono">
                      <span>{event.date}</span>
                      <span className="w-1 h-1 bg-neutral-800 rounded-full"></span>
                      <span>{event.audience}</span>
                    </div>
                  </div>
                </div>

                {/* Subtle decoration */}
                <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <span className="text-xs">→</span>
                  </div>
                </div>
              </div>
            ))}



          </div>


        </div>
      </section>

      {/* SECTION 4: UPCOMING EVENTS */}
      <section className="p-8 md:p-16 bg-white text-black">
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-7xl mb-16 tracking-tighter">Upcoming Engagements</h2>
        <div className="space-y-6">
          {upcomingEvents.map((event, i) => (
            <div
              key={i}
              className="group relative flex flex-col md:flex-row items-start md:items-center justify-between border-b border-black/10 pb-8 gap-6 p-6 transition-all duration-700 ease-in-out
                 bg-linear-to-t from-black from-50% to-transparent to-50% 
                 bg-size-[100%_200%] bg-position-[0_0] hover:bg-position-[0_100%]"
            >
              <div className="relative z-10 space-y-2">
                {/* Badge: Inverts on hover */}
                <span className="bg-black text-white group-hover:bg-white group-hover:text-black text-[9px] px-2 py-1 uppercase tracking-tighter font-bold transition-all duration-500">
                  Upcoming
                </span>

                {/* Title: Transitions to white */}
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter transition-colors duration-500 group-hover:text-white">
                  {event.name}
                </h3>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-6 text-sm text-neutral-600 uppercase tracking-widest transition-colors duration-500 group-hover:text-neutral-400">
                  <span className="flex items-center gap-2"><Calendar size={14} /> {event.date}</span>
                  <span className="flex items-center gap-2"><MapPin size={14} /> {event.venue}, {event.city}</span>
                </div>
              </div>

              {/* Button: Inverts on hover */}
              <button className="relative z-10 bg-black text-white px-8 py-4 text-[10px] uppercase tracking-[0.2em] transition-all duration-500 flex items-center gap-3 group-hover:bg-white group-hover:text-black border border-transparent group-hover:border-white">
                Register Now <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: LIVE SESSIONS */}
      <section className="p-6 md:p-12 lg:p-20 bg-[#FBFBFB]">
        <div className="mb-16 text-center">
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 tracking-tight"
          >
            Digital Archive
          </h2>
          <p className="text-neutral-500 mt-4 text-sm uppercase tracking-widest">
            Curated Sessions & Live Recordings
          </p>
        </div>

        {/* Pinterest-style Masonry/Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {liveSessions.map((live, i) => (
            <div
              key={i}
              className="break-inside-avoid group cursor-pointer bg-white p-4 rounded-3xl border border-neutral-100/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-in-out"
            >
              {/* Modern Image Container with soft corners */}
              <div className="relative aspect-5/5 overflow-hidden rounded-2xl mb-5">
                {/* Subtle Image Reveal (Starts soft focus) */}
                <img
                  src={live.thumbnail}
                  className="w-full h-full object-cover    transition-all duration-700 ease-in-out"
                />

                {/* Modern Play Button: Integrated, not a heavy overlay */}
                <div className="absolute bottom-4 right-4 bg-white/60 backdrop-blur-sm p-3 rounded-full shadow-inner opacity-80 group-hover:opacity-100 transition-opacity">
                  <PlayCircle
                    size={24}
                    className="text-neutral-900"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Platform Tag: Minimalist and positioned bottom-left */}
                <div className="absolute bottom-4 left-4 bg-black/80 text-white text-[9px] px-3 py-1.5 rounded-full font-medium uppercase tracking-widest scale-90 group-hover:scale-100 transition-transform duration-300">
                  {live.platform}
                </div>
              </div>

              {/* Text Details: Focused on typography */}
              <div className="px-1 pb-2">
                <h4 className="text-lg font-medium text-neutral-900 leading-snug mb-1 group-hover:text-red-700 transition-colors">
                  {live.title}
                </h4>
                <div className="flex items-center justify-between mt-3 text-xs text-neutral-500 uppercase tracking-widest">
                  <p>{live.date}</p>
                  {/* Minimalist interactive hint */}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-red-600 font-bold">
                    View →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: EVENT PORTFOLIO */}
      <section className="py-24 bg-white overflow-hidden">
        {/* Header Section */}
        <div className="px-8 md:px-16 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-6xl md:text-7xl text-neutral-900 leading-tight"
            >
              Moments on Stage
            </h2>
            <div className="flex items-center gap-4 mt-6">
              <span className="h-px w-12 bg-neutral-900"></span>
              <p className="text-neutral-500 text-xs uppercase tracking-[0.4em]">
                The Live Experience
              </p>
            </div>
          </div>
          <div className="text-neutral-400 italic text-sm font-serif">
            Drifting through 2025 —
          </div>
        </div>

        {/* The Auto-Scrolling Container */}
        <div className="relative flex">
          <div className="flex animate-infinite-scroll hover:[animation-play-state:paused] cursor-pointer">
            {[
              { id: 1, title: "AI & LinkedIn Masterclass", context: "July 2025 • Growell Girls", img: "Event1.webp" },
              { id: 4, title: "Unlocking Human OS", context: "Aug 2025 • Doon School", img: "Event4.webp" },
              { id: 12, title: "Cyber Shield Masterclass", context: "Sept 2025 • KV Baoli", img: "Event12.jpg" },
              { id: 15, title: "Vertex AI Bootcamp", context: "Sept 2025 • KIET Group", img: "Event15.webp" },
              // Duplicating for seamless loop
              { id: 1, title: "AI & LinkedIn Masterclass", context: "July 2025 • Growell Girls", img: "Event1.webp" },
              { id: 4, title: "Unlocking Human OS", context: "Aug 2025 • Doon School", img: "Event4.webp" },
              { id: 12, title: "Cyber Shield Masterclass", context: "Sept 2025 • KV Baoli", img: "Event12.jpg" },
              { id: 15, title: "Vertex AI Bootcamp", context: "Sept 2025 • KIET Group", img: "Event15.webp" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex-none w-87.5 md:w-125 px-4 group"
              >
                {/* Pinterest-style Multi-Image Card */}
                <div className="relative space-y-4">
                  <div className="grid grid-cols-10 gap-3 h-100">
                    {/* Main Large Image */}
                    <div className="col-span-6 rounded-3xl overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-700 bg-neutral-100">
                      <img
                        src={`./src/assets/events/${item.img}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-in-out"
                        alt={item.title}
                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600'; }}
                      />
                    </div>
                    {/* Side Stack */}
                    <div className="col-span-4 flex flex-col gap-3">
                      <div className="h-3/5 rounded-3xl overflow-hidden bg-neutral-100">
                        <img
                          // Small supporting image (using same source or different if you have them)
                          src={`./src/assets/events/${item.img}`}
                          className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0"
                        />
                      </div>
                      <div className="h-2/5 bg-neutral-50 rounded-3xl flex items-end p-4 group-hover:bg-red-50 transition-colors">
                        <span className="text-neutral-200 group-hover:text-red-300 text-4xl font-serif">0{i + 1}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className="pt-2">
                    <h4 className="text-xl font-light text-neutral-900 tracking-tight font-serif">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">
                      {item.context}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
    @keyframes infinite-scroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
    .animate-infinite-scroll {
      animation: infinite-scroll 40s linear infinite;
      display: flex;
      width: max-content;
    }
  `}</style>
      </section>

      <section className="py-32 px-8 md:px-16 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-7xl mx-auto relative">

          {/* Large Background Decorative Text - Very Subtle Dark Gray */}
          <div
            className="absolute -top-16 -left-10 text-[10rem] md:text-[15rem] font-serif opacity-[0.02] select-none pointer-events-none text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Voices
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-start relative z-10">

            {/* Left Side: Editorial Header */}
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <h2
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-6xl md:text-7xl italic leading-tight text-white"
              >
                Voice of the <br />
                <span className="text-red-500 not-italic font-sans text-xs uppercase tracking-[0.6em] block mt-6 font-bold">
                  Audience
                </span>
              </h2>
              <div className="h-px w-20 bg-red-900/50 mt-8"></div>
              <p className="mt-8 text-neutral-500 text-sm max-w-xs leading-relaxed tracking-wide italic">
                "The most profound impact is the echo left in the room after the speaker departs."
              </p>
            </div>

            {/* Right Side: Floating Asymmetric Cards */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10 md:pt-24">

              {/* Testimonial 1 - Focus on Educational Leadership (Shifted Up) */}
              <div className="group relative bg-neutral-900/40 backdrop-blur-sm border border-white/5 p-10 rounded-[3rem] shadow-2xl transition-all duration-700 md:-translate-y-20 hover:-translate-y-22 hover:bg-neutral-900/60">
                <div className="mb-6 flex justify-between items-center">
                  <span className="text-6xl text-red-500/20 font-serif group-hover:text-red-500 transition-colors duration-500">“</span>
                  <div className="h-px w-12 bg-white/10"></div>
                </div>

                <p className="text-xl text-neutral-200 leading-relaxed font-light mb-10 italic group-hover:text-white transition-colors">
                  "The masterclass on <span className="text-red-400 not-italic font-medium">AI & Digital Ethics</span> was transformative. Vansh has a rare ability to simplify complex tech for both students and faculty alike."
                </p>

                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-full bg-linear-to-tr from-neutral-800 to-neutral-700 border border-white/10 flex items-center justify-center text-white font-serif italic text-sm">
                    GS
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm tracking-tight">Principal</p>
                    <p className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] mt-1">Growell Girls School, Baghpat</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 - Focus on Student Impact & AI (Shifted Down) */}
              <div className="group relative bg-[#121212] border border-white/5 p-10 rounded-[3rem] shadow-2xl transition-all duration-700 translate-y-0 hover:-translate-y-2">
                <div className="absolute top-0 right-10 transform -translate-y-1/2">
                  <div className="bg-red-600 text-white text-[9px] font-black px-4 py-1 rounded-full tracking-tighter uppercase">9.8/10 Rating</div>
                </div>

                <div className="mb-6">
                  <span className="text-6xl text-white/5 font-serif group-hover:text-red-500 transition-colors duration-500">“</span>
                </div>

                <p className="text-xl text-neutral-300 leading-relaxed font-light mb-10 italic group-hover:text-neutral-100 transition-colors">
                  "Finally a founder who bridges the gap between <span className="text-red-400 not-italic font-medium">Habits and Purpose</span>. The IKIGAI session at Takshashila was the highlight of our academic year."
                </p>

                <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                  <div className="relative">
                    <div className="h-12 w-12 rounded-full bg-neutral-800 border border-red-500/30 group-hover:border-red-500 transition-all duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold uppercase">KL</div>
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm tracking-tight">Coordinator</p>
                    <p className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] mt-1">Takshashila World School</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section className="py-10 px-8 md:px-16 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          {/* The Main CTA Card */}
          <div className="relative overflow-hidden bg-neutral-900 border border-white/5 rounded-[3rem] p-12 md:p-15 text-center group">

            {/* Animated Background Gradient - Subtle Movement */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(185,28,28,0.15),transparent_50%)] group-hover:bg-[radial-gradient(circle_at_50%_120%,rgba(185,28,28,0.25),transparent_50%)] transition-all duration-700"></div>

            {/* Content Layer */}
            <div className="relative z-10 space-y-8">
              <h3
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-5xl md:text-6xl text-white font-light leading-tight"
              >
                Ready to spark <br />
                <span className="italic text-red-500">the next conversation?</span>
              </h3>

              <p className="text-neutral-400 text-sm md:text-sm max-w-lg mx-auto uppercase tracking-[0.3em] font-light">
                Available for Keynotes • Workshops • Strategy
              </p>

              {/* The "Pinterest Modern" Button */}
              <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6">
                <button className="relative group/btn px-8 py-4 bg-white text-black rounded-full font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95">
                  <span className="relative z-10">Book a Session</span>
                  <div className="absolute inset-0 bg-red-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                </button>

                <button className="px-8 py-4 border border-white/10 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all">
                  Get the Media Kit
                </button>
              </div>
            </div>

            {/* Decorative Floating Elements (Pinterest aesthetic) */}
            <div className="absolute top-10 left-10 text-white/5 font-serif italic text-8xl select-none group-hover:-translate-y-2 transition-transform duration-1000">
              “
            </div>
            <div className="absolute bottom-10 right-10 text-white/5 font-serif italic text-8xl select-none group-hover:translate-y-2 transition-transform duration-1000">
              ”
            </div>
          </div>


        </div>
      </section>
    </div>
  );
};

export default SessionsPage;