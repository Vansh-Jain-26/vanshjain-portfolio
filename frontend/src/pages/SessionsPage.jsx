import React, { useState } from 'react';
import Event1 from '../assets/events/Event1.webp';
import Event2 from '../assets/events/Event2.webp';
import Event3 from '../assets/events/Event3.webp';
import Event4 from '../assets/events/Event4.webp';
import Event5 from '../assets/events/Event5.webp';
import Event6 from '../assets/events/Event6.webp';
import Event7 from '../assets/events/Event7.webp';
import Event8 from '../assets/events/Event8.webp';
import Event10 from '../assets/events/Event10.webp';
import Event11 from '../assets/events/Event11.webp';
import Event12 from '../assets/events/Event12.webp';
import Event15 from '../assets/events/Event15.webp';
import Event16 from '../assets/events/Event16.webp';
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
import Events from '../ui/section/Events';
import { Link } from 'react-router-dom';

const SessionsPage = () => {
  const [schoolFilter, setSchoolFilter] = useState('');
  const [collegeFilter, setCollegeFilter] = useState('');

  // Sample Data Structures
  const stats = [
    { label: "Students Impacted", value: "10K+" },
    { label: "Institutions", value: "20+" },
    { label: "Events Delivered", value: "25+" },
    { label: "Cities", value: "10+" },
    { label: "Live Hours", value: "100+" }
  ];
// Students Impacted: 10K +
//     Institutions: 20 +
//       Events Delivered: 25 +
//         Cities: 10 +
//           Live Hours: 100 +

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
      <section className="grid grid-cols-2 lg:grid-cols-5 border-b border-white/10">
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




<Events/>

      {/* SECTION 4: UPCOMING EVENTS */}
      {/* <section className="p-8 md:p-16 bg-white text-black">
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
                <span className="bg-black text-white group-hover:bg-white group-hover:text-black text-[9px] px-2 py-1 uppercase tracking-tighter font-bold transition-all duration-500">
                  Upcoming
                </span>

                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter transition-colors duration-500 group-hover:text-white">
                  {event.name}
                </h3>

                <div className="flex flex-wrap gap-6 text-sm text-neutral-600 uppercase tracking-widest transition-colors duration-500 group-hover:text-neutral-400">
                  <span className="flex items-center gap-2"><Calendar size={14} /> {event.date}</span>
                  <span className="flex items-center gap-2"><MapPin size={14} /> {event.venue}, {event.city}</span>
                </div>
              </div>

              <button className="relative z-10 bg-black text-white px-8 py-4 text-[10px] uppercase tracking-[0.2em] transition-all duration-500 flex items-center gap-3 group-hover:bg-white group-hover:text-black border border-transparent group-hover:border-white">
                Register Now <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section> */}



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
              { id: 1, title: "AI & LinkedIn Masterclass", context: "July 2025 • Growell Girls", img: Event1, sideImg: Event2 },
              { id: 4, title: "Unlocking Human OS", context: "Aug 2025 • Doon School", img: Event4, sideImg: Event3 },
              { id: 12, title: "Cyber Shield Masterclass", context: "Sept 2025 • KV Baoli", img: Event12, sideImg: Event11 },
              { id: 15, title: "Vertex AI Bootcamp", context: "Sept 2025 • KIET Group", img: Event15, sideImg: Event16 },
              { id: 6, title: "Next-Gen Tech Summit", context: "Oct 2025 • Tech Hub", img: Event6, sideImg: Event5 },
              { id: 8, title: "Digital Branding Workshop", context: "Oct 2025 • Innovate", img: Event8, sideImg: Event7 },
              { id: 10, title: "Future of AI", context: "Nov 2025 • Global Edu", img: Event10, sideImg: Event11 },

              // Duplicating for infinite loop effect
              { id: 1, title: "AI & LinkedIn Masterclass", context: "July 2025 • Growell Girls", img: Event1, sideImg: Event2 },
              { id: 4, title: "Unlocking Human OS", context: "Aug 2025 • Doon School", img: Event4, sideImg: Event3 },
              { id: 12, title: "Cyber Shield Masterclass", context: "Sept 2025 • KV Baoli", img: Event12, sideImg: Event11 },
              { id: 15, title: "Vertex AI Bootcamp", context: "Sept 2025 • KIET Group", img: Event15, sideImg: Event16 },
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
                        src={item.img}
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-in-out"
                        alt={item.title}
                      />
                    </div>
                    {/* Side Stack */}
                    <div className="col-span-4 flex flex-col gap-3">
                      <div className="h-3/5 rounded-3xl overflow-hidden bg-neutral-100">
                        <img
                          src={item.sideImg}
                          className="w-full h-full object-cover transition-all duration-700"
                          alt="Supporting visual"
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
      animation: infinite-scroll 60s linear infinite;
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

            {/* Animated Background Gradient */}
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

              {/* The "Pinterest Modern" Button Group */}
              <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6">

                {/* LINKED CONTACT BUTTON */}
                <Link
                  to="/contact"
                  className="relative group/btn px-8 py-4 bg-white text-black rounded-full font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 inline-block"
                >
                  <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">
                    Book a Session
                  </span>
                  <div className="absolute inset-0 bg-red-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                </Link>

                {/* MEDIA KIT BUTTON */}
                <Link to="/courses">
                <button className="px-8 py-4 border border-white/10 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all">
                  Get the Media Kit
                </button>
                </Link>
              </div>
            </div>

            {/* Decorative Floating Elements */}
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