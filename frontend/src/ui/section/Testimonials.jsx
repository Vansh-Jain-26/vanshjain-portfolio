import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCarousel = () => {
  const containerRef = useRef(null);

  const testimonials = [
    { text: "His session completely changed how I think about building. Not motivational fluff—actual strategies I'm implementing in my startup right now." },
    { text: "The way he breaks down complex concepts into actionable steps is rare. Attended 3 of his sessions and each one gave me something new."},
    { text: "He doesn't lecture like a professor. He talks like a founder who's actually in the trenches. That's what makes it real." },
    { text: "His 2AM Founders newsletter is the only startup content I read cover-to-cover every week. No hype, just real lessons.", },
    { text: "The mentorship sessions gave me clarity I was struggling to find. Direct, honest feedback that actually helped me fix my pitch." },
    { text: "After his session, I finally understood what entrepreneurship actually means. Not just business theory—real execution lessons." },
    { text: "His approach to personal branding on LinkedIn completely shifted my career trajectory. Practical and immediately applicable."},
    { text: "The AI bootcamp was hands-on and relevant. Actually learned tools I can use in my startup, not just concepts." },
    { text: "He makes you think differently about failures and learning. Sessions feel like conversations with a real founder."},
    { text: "Left the cyber awareness session actually equipped to protect my digital footprint. Real impact." },
  ];

  const scroll = (direction) => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      // Scroll by 350px (approx 1 card width)
      const scrollTo = direction === 'left'
        ? scrollLeft - 350
        : scrollLeft + 350;

      containerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:pt-28 text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-red-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="flex flex-row items-end justify-between mb-12">
          <div className="space-y-2">
            <span className="text-red-500 font-mono text-[9px] uppercase tracking-[0.6em] font-bold">The Echo</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-6xl italic tracking-tighter text-white">
              What people <span className="text-neutral-800 not-italic">say.</span>
            </h2>
          </div>

          {/* Compact Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-white/5 bg-white/5 hover:bg-red-500/10 hover:border-red-500/30 transition-all group"
            >
              <ChevronLeft size={18} className="text-neutral-600 group-hover:text-white" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-white/5 bg-white/5 hover:bg-red-500/10 hover:border-red-500/30 transition-all group"
            >
              <ChevronRight size={18} className="text-neutral-600 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* Scrollable Container with Smaller Cards */}
        <div
          ref={containerRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10 transition-all"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="min-w-[300px] md:min-w-90 max-w-[360px] snap-start relative p-7 md:p-9 bg-[#0A0A0A] border border-white/5 rounded-[2rem] group flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-linear-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

              <div>
                <Quote size={20} className="text-neutral-800 mb-6 group-hover:text-red-500/40 transition-colors" />
                <p
                  style={{ fontFamily: t.size === 'lg' ? "'Cormorant Garamond', serif" : 'inherit' }}
                  className={`text-neutral-400 group-hover:text-neutral-100 transition-colors duration-500 leading-relaxed
                    ${t.size === 'lg' ? 'text-xl italic' : 'text-sm font-light'}`}
                >
                  "{t.text}"
                </p>
              </div>

              <div className="mt-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-6 bg-neutral-900 group-hover:bg-red-500/20 transition-all" />
                  <span className="text-[8px] font-mono text-neutral-600 uppercase tracking-widest">Verified</span>
                </div>
                <Heart size={14} className="text-neutral-900 group-hover:text-red-500/30 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialCarousel;