import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Heart } from 'lucide-react';

const TestimonialGrid = () => {
  const testimonials = [
    { text: "His session completely changed how I think about building. Not motivational fluff—actual strategies I'm implementing in my startup right now.", size: "lg" },
    { text: "The way he breaks down complex concepts into actionable steps is rare. Attended 3 of his sessions and each one gave me something new.", size: "md" },
    { text: "He doesn't lecture like a professor. He talks like a founder who's actually in the trenches. That's what makes it real.", size: "sm" },
    { text: "His 2AM Founders newsletter is the only startup content I read cover-to-cover every week. No hype, just real lessons.", size: "md" },
    { text: "The mentorship sessions gave me clarity I was struggling to find. Direct, honest feedback that actually helped me fix my pitch.", size: "lg" },
    { text: "After his session, I finally understood what entrepreneurship actually means. Not just business theory—real execution lessons.", size: "sm" },
    { text: "His approach to personal branding on LinkedIn completely shifted my career trajectory. Practical and immediately applicable.", size: "md" },
    { text: "The AI bootcamp was hands-on and relevant. Actually learned tools I can use in my startup, not just concepts.", size: "lg" },
    { text: "He makes you think differently about failures and learning. Sessions feel like conversations with a real founder.", size: "sm" },
    { text: "Left the cyber awareness session actually equipped to protect my digital footprint. Real impact.", size: "md" },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Custom spring-like ease
    }
  };

  return (
    <section className="py-32  text-white overflow-hidden relative">
      {/* Animated Background Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Minimalist Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-24 space-y-4"
        >
          <span className="text-red-500 font-mono text-[10px] uppercase tracking-[0.6em] font-bold">The Echo</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-6xl md:text-8xl italic tracking-tighter text-white">
            What people <span className="text-neutral-800 not-italic">say.</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-px bg-linear-to-r from-transparent via-red-500/50 to-transparent mt-4"
          />
        </motion.div>

        {/* Masonry Layout with Framer Motion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              className="break-inside-avoid relative p-10 bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-red-500/0 via-transparent to-red-500/0 group-hover:from-red-500/3 transition-all duration-500" />

              <Quote size={24} className="text-neutral-800 mb-8 group-hover:text-red-500/50 transition-colors duration-500" />

              <p style={{ fontFamily: t.size === 'lg' ? "'Cormorant Garamond', serif" : 'inherit' }}
                className={`text-neutral-400 group-hover:text-white transition-colors duration-500 leading-relaxed 
                 ${t.size === 'lg' ? 'text-2xl italic' : 'text-sm font-light'}`}>
                "{t.text}"
              </p>

              <div className="mt-10 flex items-center justify-between">
                <div className="h-px w-12 bg-neutral-900 group-hover:bg-red-900/50 transition-colors duration-500"></div>
                <motion.div whileHover={{ scale: 1.5, rotate: 15 }}>
                  <Heart size={14} className="text-neutral-900 group-hover:text-red-500/40 transition-colors duration-500" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bribe Disclaimer with Floating Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-24 text-center"
          >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full group hover:border-red-500/30 transition-all cursor-default"
          >
            <span className="text-red-500 text-lg group-hover:animate-bounce">🤝</span>
            <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-500 font-bold">
              I didn't bribe them. Just real stories from real builders.
            </p>
          </motion.div>
    </motion.div>
      </div>
    </section >
  );
};

export default TestimonialGrid;