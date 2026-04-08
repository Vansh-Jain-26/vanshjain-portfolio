import React from 'react';
import { motion } from 'framer-motion';

const testimonialsData = [
  {
    id: 1,
    name: "Darshan Purani",
    role: "Design Lead @OTPless",
    text: "I've worked with Abhi since the early days... an absolute design ninja.",
    bgMessage: "Currently working with her at Loco.",
    rotate: -3,
  },
  {
    id: 2,
    name: "Kinjal Kanzariya",
    role: "Founder @Navchitra.design",
    text: "Working with Abhishek has been an inspiring experience... bold ideas with confidence.",
    bgMessage: "Met at the Design Conference '25",
    rotate: 2,
  },
  {
    id: 3,
    name: "Nitish Sahu",
    role: "Founder at Remode",
    text: "Abhishek's collaborative spirit and pixel-perfect iterations elevated our campaigns.",
    bgMessage: "Collaborated on 3+ FinTech projects.",
    rotate: -1,
  }
];

const CardPair = ({ item }) => {
  return (
    <div className="relative w-[320px] h-[200px] m-[-15px]">

      {/* BOTTOM LAYER: The Static Message Card (Always stays there) */}
      <div className="absolute inset-0 bg-transparent border border-dashed border-white/20 rounded-2xl flex items-center justify-center p-10 text-center">
        <p className="text-gray-500 italic font-serif text-lg leading-snug select-none">
          {item.bgMessage}
        </p>
      </div>

      {/* TOP LAYER: The Draggable Snap-Back Card */}
      <motion.div
        drag
        // This is the magic part: it forces the card back to (0,0)
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.7} // Higher = more stretch
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }} // Smooth snap

        initial={{ rotate: item.rotate }}
        whileDrag={{ scale: 1.02, zIndex: 50, cursor: 'grabbing' }}
        whileHover={{ rotate: 0, scale: 1.01 }}

        className="absolute inset-0 bg-[#121212] border border-white/10 p-7 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-grab active:cursor-grabbing"
      >
        <div className="flex flex-col gap-5 select-none h-full">
          {/* Image Placeholder */}
          {/* <div className="h-44 bg-neutral-800 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div> */}

          <div>
            <h3 className="text-white font-bold text-xl mb-1">{item.name}</h3>
            <p className="text-neutral-500 text-sm font-medium mb-4">{item.role}</p>
            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              {item.text}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function TestimonialSection() {
  return (
    <section className="bg-black py-24 px-10 min-h-screen flex flex-col items-center overflow-hidden">

      {/* Header with that "Bribe" text */}
      <div className="w-full max-w-6xl mb-20 relative px-10">
        <p className="text-neutral-500 font-serif italic text-2xl">
          Promise i didn't bribe them
        </p>
        <span className="text-neutral-600 text-3xl ml-4 block mt-2 opacity-50">↴</span>
      </div>

      {/* Grid of Cards */}
      <div className="flex flex-wrap justify-center gap-8 md:flex-nowrap">
        {testimonialsData.map((item) => (
          <CardPair key={item.id} item={item} />
        ))}
      </div>

      <p className="mt-24 text-neutral-600 text-[10px] tracking-[0.3em] uppercase font-medium">
        Pull cards to reveal details
      </p>
    </section>
  );
}