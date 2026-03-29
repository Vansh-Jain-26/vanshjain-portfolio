import { motion } from 'framer-motion';

const AboutPage = () => {
  const photos = [
    { id: 1, url: '/photo1.jpg', rot: -5, x: -20, y: 10 },
    { id: 2, url: '/photo2.jpg', rot: 3, x: 20, y: -10 },
    { id: 3, url: '/photo3.jpg', rot: -8, x: 0, y: 40 },
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#888] selection:bg-white/10 overflow-x-hidden font-sans antialiased">

      {/* 1. THE GRID SYSTEM - Use percentage for consistency across zooms */}
      <div className="fixed inset-0 flex justify-between px-[10%] md:px-[15%] pointer-events-none z-0">
        <div className="w-px h-full bg-white/3" />
        <div className="w-px h-full bg-white/3" />
        <div className="w-px h-full bg-white/3" />
      </div>

      <div className="relative z-10 max-w-300 mx-auto px-6 md:px-12 pt-16 pb-20">


        <div className="grid grid-cols-12 gap-8 items-start">

          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="col-span-12 md:col-span-7 lg:col-span-6">
            <div className="mb-12">
              {/* Small Profile Icon */}
              <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-10">
                <span className="text-xs">😊</span>
              </div>

              <h2 className="text-[#333] text-[20px] font-serif italic mb-4 text-left">About me.</h2>
              <h1 className="text-3xl md:text-[42px] lg:text-[48px] leading-[1.1] text-[#E5E5E5] font-serif font-medium tracking-tight text-left">
                I design digital products that connect users, business, and technology.
              </h1>
            </div>

            <div className="space-y-6 text-[14px] md:text-[15px] leading-relaxed max-w-120 text-left">
              <p>
                Hey, I'm <span className="text-white">Vansh jain</span>, a full-stack Product Designer with 3+ years of experience creating user-focused digital products across Web3, fintech, and gaming industries.
              </p>
              <p className="opacity-80">
                My journey into design didn't start in a classroom—it started at a hackathon. While everyone around me was busy coding, I noticed something missing: no one was thinking about the user experience.
              </p>
              <p className="text-[13px] text-neutral-600 leading-snug">
                After completing my Bachelor's in Computer Engineering, I joined Sportskeeda as a Graphic Designer, creating interactive and animated ad experiences...
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: PHOTO STACK & METADATA */}
          <div className="col-span-12 md:col-span-5 lg:col-span-6 relative">

            {/* Top Metadata Line */}
            <div className="flex flex-col items-end text-right mb-16">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-neutral-800" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-mono">Senior Product Designer</span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-mono mt-1">Bangalore, India 🤘</p>
            </div>

            {/* Draggable Photos - Relative sizing */}
            <div className="relative flex justify-center h-100 w-full">
              <p className="absolute -top-10 rotate-[-5deg] font-serif italic text-neutral-700 text-[11px] whitespace-nowrap">
                Pssst... You can drag the photographs
              </p>

              {photos.map((photo) => (
                <motion.div
                  key={photo.id}
                  drag
                  dragConstraints={{ left: -150, right: 150, top: -100, bottom: 100 }}
                  initial={{ rotate: photo.rot, x: photo.x, y: photo.y }}
                  whileDrag={{ scale: 1.05, zIndex: 50 }}
                  className="absolute w-50 md:w-60 aspect-3/4 bg-[#111] p-2 rounded-sm shadow-2xl cursor-grab active:cursor-grabbing border border-white/5"
                >
                  <div className="w-full h-full overflow-hidden bg-neutral-900 rounded-sm">
                    <img
                      src={photo.url}
                      alt="Personal"
                      className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all pointer-events-none"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;