import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Event1 from "../../assets/events/Event1.webp";
import Event2 from "../../assets/events/Event2.webp";
import Event3 from "../../assets/events/Event3.webp";
import Event4 from "../../assets/events/Event4.webp";
import Event5 from "../../assets/events/Event5.webp";
import Event6 from "../../assets/events/Event6.webp";
import Event7 from "../../assets/events/Event7.webp";
import Event8 from "../../assets/events/Event8.webp";
import Event10 from "../../assets/events/Event10.webp";
import Event11 from "../../assets/events/Event11.webp";
import Event12 from "../../assets/events/Event12.webp";
import Event15 from "../../assets/events/Event15.webp";
import Event16 from "../../assets/events/Event16.webp";
import DU1 from "../../assets/events/DU1.webp";
import DU2 from "../../assets/events/DU2.webp";
import DU3 from "../../assets/events/DU3.webp";
import DU4 from "../../assets/events/DU4.webp";
import DU5 from "../../assets/events/DU5.webp";
// --- Data Arrays ---
const eventsData = [
  { id: "sch-1", title: "AI & LinkedIn Masterclass", school: "Growell Girls School", date: "July 14, 2025", audience: "150 Students", rating: "9.5", tag: "AI & Branding", imgUrl: Event1, venue: "Baraut, Baghpat, UP", facilitators: "Vansh Jain, Pushpak Goel", summary: "Comprehensive masterclass focused on AI and Personal Branding on LinkedIn for Class 11th & 12th students.", objectives: ["Enhanced AI concepts.", "LinkedIn networking skills.", "Future career awareness."] },
  { id: "sch-2", title: "AI & LinkedIn (Faculty)", school: "Growell CoEd School", date: "July 16, 2025", audience: "50 Faculty", rating: "9.6", tag: "Faculty Training", imgUrl: Event2, venue: "Baraut, Baghpat, UP", facilitators: "Vansh Jain", summary: "Designed for faculty members to enhance professional development and guide students in the AI era.", objectives: ["AI in education.", "Personal branding.", "Professional development."] },
  { id: "sch-3", title: "Startup & Business Conf.", school: "Growell CoEd School", date: "Aug 6, 2025", audience: "90+ Students", rating: "9.6", tag: "Entrepreneurship", imgUrl: Event3, venue: "Baraut, Baghpat, UP", facilitators: "Vansh Jain", summary: "Conference for Commerce & Humanities students covering Startup fundamentals and Branding.", objectives: ["Startup development.", "Branding & Networking.", "Entrepreneurial mindset."] },
  { id: "sch-4", title: "Unlocking Human OS", school: "Doon School, Baraut", date: "Aug 12, 2025", audience: "150 Students", rating: "9.1", tag: "Self-Mastery", imgUrl: Event4, venue: "Baraut, Baghpat, UP", facilitators: "Vansh Jain", summary: "Transformative session optimizing mental and behavioral skills like IKIGAI and habit-building.", objectives: ["Self-management.", "Positive habits.", "IKIGAI discovery."] },
  { id: "sch-5", title: "The DeCode", school: "Growell Girls School", date: "Aug 14, 2025", audience: "120+ Students", rating: "9.4", tag: "Career Clarity", imgUrl: Event5, venue: "Baraut, Baghpat, UP", facilitators: "Vansh Jain", summary: "Career guidance session for Class 10th students using interactive activities and the IKIGAI framework.", objectives: ["Career exploration.", "Self-assessment.", "IKIGAI application."] },
  { id: "sch-6", title: "The DeCode (Faculty)", school: " Growell Girls School", date: "Aug 15, 2025", audience: "40 Faculty", rating: "9.7", tag: "Faculty Training", imgUrl: Event6, venue: "Baraut, Baghpat, UP", facilitators: "Vansh Jain", summary: "Empowering faculty to guide students in career clarity and personal development using the IKIGAI framework.", objectives: ["Career guidance.", "Student mentorship.", "IKIGAI framework."] },
  { id: "sch-7", title: "HackProof: Hack Hackers", school: "Growell Co-ed School", date: "Aug 20, 2025", audience: "150+ Students", rating: "9.5", tag: "Cybersecurity", imgUrl: Event7, venue: "Baraut, Baghpat, UP", facilitators: "Vansh Jain, Ishika Sharma", summary: "Explored cybercrime and online self-protection through real-life hacking simulations.", objectives: ["Cybercrime tactics.", "Data protection.", "Live simulations."] },
  { id: "sch-8", title: "The Cadet Code", school: "Saifia Institute, Baraut", date: "Aug 21, 2025", audience: "15 Students", rating: "9.5", tag: "Confidence", imgUrl: Event8, venue: "Baraut", facilitators: "Vansh Jain", summary: "Blended activities and storytelling to empower students to understand inner strengths.", objectives: ["Communication skills.", "Self-reflection.", "IKIGAI framework."] },
  { id: "sch-10", title: "Project UTurn", school: "Takshashila World School", date: "Aug 25, 2025", audience: "290 Students", rating: "9.1", tag: "Purpose", imgUrl: Event10, venue: "Ambehta, Saharanpur", facilitators: "Vansh Jain", summary: "Optimizing mental skills via Habits, Emotional Intelligence, and IKIGAI.", objectives: ["Focus techniques.", "Resilience.", "Well-being strategies."] },
  { id: "sch-11", title: "Persona X: Unmute", school: "Cambridge Public School", date: "Sept 1, 2025", audience: "70 Students", rating: "9.8", tag: "Public Speaking", imgUrl: Event11, venue: "Baraut", facilitators: "Vansh Jain", summary: "Strengthening soft skills, covering leadership, confidence, and public speaking.", objectives: ["Communication.", "Confidence.", "Teamwork leadership."] },
  { id: "sch-12", title: "Cyber Shield", school: "Cambridge Public School", date: "Sept 2, 2025", audience: "70 Students", rating: "9.7", tag: "Cybersecurity", imgUrl: Event12, venue: "Baraut", facilitators: "Vansh Jain, Ishika Sharma", summary: "Comprehensive cybersecurity session covering online threats and protection strategies.", objectives: ["Cyber threats.", "Online safety.", "Live hacking demos."] },
  { id: "sch-15", title: "The After Hours", school: "Cambridge Public School", date: "Nov 10, 2025", audience: "70 Students", rating: "9.6", tag: "Life Skills", imgUrl: Event15, venue: "Baraut", facilitators: "Vansh Jain", summary: "Explored life skills beyond academics, including time management and emotional intelligence.", objectives: ["Time management.", "Emotional intelligence.", "Work-life balance."] }, 
  { id: "sch-16", title: "Founder Fiesta", school: "Lakshya Public School", date: "Nov 17, 2025", audience: "180+ Students", rating: "9.8", tag: "Startup Growth", imgUrl: Event16, venue: "Baghpat, UP", facilitators: "Vansh Jain", summary: "Comprehensive event covering startup strategies, branding, and networking for builders.", objectives: ["Business concepts.", "Soft Skills.", "Career exploration."] }
];

const uniEventsData = [
  { 
    id: "uni-1", 
    title: "Entrepreneurship Unplugged: From Idea to Execution", 
    school: "Delhi University (DSE)", 
    date: "April 1, 2026", 
    audience: "MBA IB Cohort", 
    rating: "9.8", 
    tag: "Entrepreneurship", 
    imgUrl: DU3, 
    venue: "North Campus, DSE", 
    facilitators: "Vansh Jain, Kamal Girdhar", 
    summary: "An immersive session at MBA IB, Department of Commerce, focused on decoding the nuances of real-world building and the intent required to scale beyond academic theory.", 
    objectives: [
      "Entrepreneurial Ownership.", 
      "Execution-First Mindset.", 
      "Venture Execution & Scaling."
    ] 
  },
  
  { 
    id: "uni-2", 
    title: "AI Bootcamp: Vertex AI & Google Agent Kit", 
    school: "KITE Institution", 
    date: "July 14, 2025", 
    audience: "Developers & AI Enthusiasts", 
    rating: "9.9", 
    tag: "Generative AI", 
    imgUrl: Event15, 
    venue: "Innovation Hub", 
    facilitators: "Vansh Jain", 
    summary: "Recipient of the KITE Institution Event Speaking Award for delivering an intensive bootcamp on building autonomous agents using Vertex AI and Google Agent Kit.", 
    objectives: [
      "Vertex AI Implementation.", 
      "Building with Google Agent Kit.", 
      "Practical Entrepreneurship Insights."
    ] 
  }
];

// --- Sub-Component for the Grid ---
const EventGrid = ({ title, events, onSelect }) => (
  <div className="mb-24">
    <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-16 border-b border-white/5 pb-10">
      <div className="space-y-4">
        <span className="text-red-500 font-mono text-[10px] uppercase tracking-[0.6em] font-bold block">Portfolio</span>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-6xl md:text-8xl italic leading-none tracking-tighter">
          {title} <span className="text-neutral-800 not-italic">& Events</span>
        </h2>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {events.map((event) => (
        <motion.div
          key={event.id}
          layoutId={`card-${event.id}`}
          onClick={() => onSelect(event)}
          className="group cursor-pointer bg-neutral-900/10 border border-white/5 p-8 rounded-[2.5rem] hover:bg-neutral-900/30 transition-all duration-500"
        >
          <div className="relative aspect-video rounded-[1.8rem] overflow-hidden mb-8 border border-white/10">
            <motion.img
              layoutId={`img-${event.id}`}
              src={event.imgUrl}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className="flex justify-between items-start mb-6 font-mono text-[10px]">
            <span className="text-red-500 uppercase tracking-widest font-bold">{event.tag}</span>
            <span className="text-neutral-500">{event.rating}/10</span>
          </div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl italic leading-tight group-hover:text-red-500 transition-colors">
            {event.title}
          </h3>
          <p className="text-[10px] uppercase text-neutral-600 mt-4 tracking-widest font-bold">
            {event.school} • {event.date}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);

// --- Main Component ---
export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    if (selectedEvent) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedEvent]);

  return (
    <section className="py-24 bg-[#050505] text-white font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <AnimatePresence mode="wait">
          {!selectedEvent ? (
            <motion.div
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <EventGrid title="Speaking" events={eventsData} onSelect={setSelectedEvent} />
              <EventGrid title="University" events={uniEventsData} onSelect={setSelectedEvent} />
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="group mb-12 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-neutral-500 hover:text-white transition-colors"
              >
                <span>←</span> Back to Gallery
              </button>

              <div className="relative aspect-21/9 rounded-[3rem] md:rounded-[4rem] overflow-hidden mb-20 border border-white/5">
                <motion.img
                  layoutId={`img-${selectedEvent.id}`}
                  src={selectedEvent.imgUrl}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-24">
                  <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-8xl italic tracking-tighter leading-none">
                    {selectedEvent.title}
                  </h1>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                {/* Sidebar Info */}
                <div className="lg:col-span-4 space-y-10">
                  <div className="bg-neutral-900/20 p-10 rounded-[3rem] border border-white/5">
                    <p className="text-8xl font-serif italic text-red-500">
                      {selectedEvent.rating}<span className="text-xl text-neutral-800">/10</span>
                    </p>
                    <div className="mt-10 space-y-6">
                      <div className="border-l border-white/5 pl-6">
                        <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-600 font-bold mb-1">Venue</p>
                        <p className="text-sm text-neutral-300">{selectedEvent.venue}</p>
                      </div>
                      <div className="border-l border-white/5 pl-6">
                        <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-600 font-bold mb-1">Speaker</p>
                        <p className="text-sm text-neutral-300">{selectedEvent.facilitators}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-8 space-y-16">
                  <div className="space-y-6">
                    <span className="text-red-500 font-mono text-[10px] uppercase tracking-[0.6em] font-bold">The Brief</span>
                    <p className="text-3xl md:text-4xl font-serif italic text-white leading-tight">
                      "{selectedEvent.summary}"
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/5 pt-16">
                    {selectedEvent.objectives.map((obj, i) => (
                      <div key={i} className="p-8 rounded-3xl bg-neutral-900/10 border border-white/5">
                        <p className="text-neutral-400 text-sm leading-relaxed">{obj}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}