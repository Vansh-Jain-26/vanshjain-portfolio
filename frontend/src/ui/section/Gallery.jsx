import React from "react";
import { motion } from "framer-motion";
import Event1 from "../../assets/events/Event1.webp";
import Event11 from "../../assets/events/Event11.webp";
import Event12 from "../../assets/events/Event12.webp";
import Event15 from "../../assets/events/Event15.webp";
import Event16 from "../../assets/events/Event16.webp";
import DU1 from "../../assets/events/DU1.webp";
import DU2 from "../../assets/events/DU2.webp";
import DU3 from "../../assets/events/DU3.webp";
import DU4 from "../../assets/events/DU4.webp";
import DU5 from "../../assets/events/DU5.webp";
const images = [
  { url: DU1, text: "Mixing aesthetics with the landscape.", aspect: "aspect-[3/4.2]", mt: "mt-0" },
  { url: Event16, text: "Moments behind the hustle.", aspect: "aspect-[4/5]", mt: "mt-16" },
  { url: Event11, text: "Strategic coffee breaks.", aspect: "aspect-square", mt: "mt-4" },
  { url: Event12, text: "Following the right trends.", aspect: "aspect-[2/3]", mt: "mt-24" },
  { url: DU2, text: "Architecting new spaces.", aspect: "aspect-[3/4]", mt: "mt-8" },
  { url: Event15, text: "Life after hours.", aspect: "aspect-[4/5]", mt: "mt-20" },
  { url: DU3, text: "Chasing horizons.", aspect: "aspect-[4/5]", mt: "mt-12" },
  { url: DU4, text: "The details matter.", aspect: "aspect-[3/4.5]", mt: "mt-28" },
  { url: DU5, text: "Foundations and growth.", aspect: "aspect-[4/5]", mt: "mt-16" },
  { url: Event1, text: "Global perspectives.", aspect: "aspect-[2/3]", mt: "mt-6" },
];

const duplicatedImages = [...images, ...images];

const DarkPortfolioSlider = () => {
  return (
    // Background changed to deep dark zinc
    <section className="w-full bg-[#0a0a0a] py-12 overflow-hidden border-t border-zinc-900">

      {/* 1. THE HEADING - Soft white text */}
      <div className="max-w-6xl mx-auto px-6 mb-18">
        <h2 className="text-[26px] md:text-[40px] text-center text-zinc-200 tracking-tight leading-tight">
          <span className="font-serif italic mr-2 text-zinc-500">Beyond</span>
          <span className="font-light">scaling ventures</span>
          <span className="font-serif italic mx-2 text-zinc-500">and</span>
          <span className="font-light tracking-tighter">architecting ecosystems</span>
        </h2>
      </div>

      {/* 2. THE SLIDER */}
      <div className="max-w-6xl mx-auto relative px-4">
        <motion.div
          className="flex gap-6 items-start"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
        >
          {duplicatedImages.map((item, index) => (
            <div
              key={index}
              className={`shrink-0 w-48 md:w-52 ${item.mt} group`}
            >
              {/* Added a subtle border to images for dark mode separation */}
              <div className={`${item.aspect} w-full rounded-xl overflow-hidden shadow-2xl border border-zinc-800/50 transition-all duration-700`}>
                <img
                  src={item.url}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  alt="portfolio-lifestyle"
                />
              </div>

              {/* Captions in soft grey */}
              {/* <p className="mt-3 text-[12px] font-serif leading-[1.4] text-zinc-500 italic tracking-wide group-hover:text-zinc-300 transition-colors duration-300">
                {item.text}
              </p> */}
            </div>
          ))}
        </motion.div>

        {/* Side Fades - Changed from white to #0a0a0a */}
        {/* <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" /> */}
      </div>
    </section>
  );
};

export default DarkPortfolioSlider;