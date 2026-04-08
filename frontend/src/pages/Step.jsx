import React from "react";
import { motion } from "framer-motion";

const DesignProcess = () => {
  const steps = [
    {
      id: "1",
      title: "Inquiry",
      desc: "it all starts with a conversation. you reach out with your vision, goals, and the challenges you're looking to solve. we'll discuss the scope and see if we're a perfect match.",
      rotation: "-rotate-[6deg]",
      translateY: "md:mt-12",
      dotPosition: "left-6 top-1/3",
    },
    {
      id: "2",
      title: "Confirmation",
      desc: "once we've aligned on the direction, we finalize the details. this includes the timeline, deliverables, and expectations to ensure a smooth and transparent collaboration.",
      rotation: "rotate-[2deg]",
      translateY: "md:mt-0",
      dotPositionLeft: "left-6 top-1/4",
    },
    {
      id: "3",
      title: "Session",
      desc: "the deep dive. we jump into active working sessions, research, and design iterations. constant feedback loops ensure the final outcome is exactly what you envisioned.",
      rotation: "-rotate-[3deg]",
      translateY: "md:mt-24",
      dotPosition: "left-6 top-1/3",
    },
  ];

  const cardVariants = {
    offscreen: {
      y: 40,
      opacity: 0
    },
    onscreen: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
        delay: i * 0.15
      }
    })
  };

  return (
    <section className="w-full bg-[#0a0a0a] pt-24 px-6 md:px-10 overflow-hidden font-sans">
      <div className="max-w-350 mx-auto">

        {/* HEADING SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 px-4"
        >
          <p className="text-zinc-600 text-xs mb-4 tracking-[0.2em] uppercase font-medium">How It Works</p>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <h2 className="text-4xl md:text-6xl text-zinc-100 leading-tight tracking-tight max-w-2xl font-light">
              How it <span className="font-serif italic text-zinc-500">works</span>
            </h2>
            <p className="text-zinc-500 text-sm max-w-sm leading-relaxed mt-4">
              A simple, three-step process designed to take your ideas from initial inquiry to a successful, collaborative session.
            </p>
          </div>
        </motion.div>

        {/* CARDS CONTAINER */}
        <div className="relative flex flex-col md:flex-row items-start justify-center gap-12 md:gap-8 min-h-[700px]">

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              custom={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              // Background changed to zinc-900 with a subtle border
              className={`relative bg-zinc-900/50 border border-zinc-800 p-10 md:p-12 rounded-[45px] w-full md:w-[380px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${step.rotation} ${step.translateY} z-10 backdrop-blur-sm`}
            >
              {/* HOLES (Orange dots) */}
              {step.dotPosition && (
                <div className={`absolute ${step.dotPosition} w-3.5 h-3.5 rounded-full border-2 border-[#FF6B44] bg-zinc-900 z-50`} />
              )}
              {step.dotPositionLeft && (
                <div className={`absolute ${step.dotPositionLeft} w-3.5 h-3.5 rounded-full border-2 border-[#FF6B44] bg-zinc-900 z-50`} />
              )}

              {/* Faded Number - Now even more subtle for dark mode */}
              <h1 className="text-8xl font-bold text-zinc-800/40 absolute top-6 left-10 select-none italic">
                {step.id}
              </h1>

              <div className="relative z-10 pt-12">
                <h3 className="text-2xl font-bold text-zinc-100 mb-6 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-[15px] leading-relaxed font-normal lowercase italic">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;