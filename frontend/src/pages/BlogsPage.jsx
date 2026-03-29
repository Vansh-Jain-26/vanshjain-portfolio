import React, { useState } from 'react';
import {
  Calendar,
  ArrowUpRight,
  ArrowLeft,
  Search,
  MessageCircle
} from 'lucide-react';

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Entrepreneurship', 'Public Speaking Tips', 'Youth & Leadership', 'My Journey', 'Events & Recaps'];

  const posts = [
    {
      id: 1,
      category: 'Entrepreneurship',
      author: 'Admin',
      title: 'Building Fluid Motion with Framer & React',
      excerpt: 'Exploring the intersection of performance and aesthetics in modern web animations.',
      content: `<p>In the digital age, motion isn't just decoration; it's communication...</p>`,
      date: 'March 24, 2026',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800'
    },
    {
      id: 2,
      category: 'Public Speaking Tips',
      author: 'Admin',
      title: 'The Power of the Strategic Pause',
      excerpt: 'Why the most important part of your speech is the moment you say nothing at all.',
      content: '<p>Silence is a tool. Use it to let your points sink in...</p>',
      date: 'March 18, 2026',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800'
    },
    {
      id: 3,
      category: 'Youth & Leadership',
      author: 'Admin',
      title: 'Leading Without a Title',
      excerpt: 'How young professionals can influence organizational culture from any position.',
      content: '<p>Leadership is an action, not a position in a hierarchy...</p>',
      date: 'March 10, 2026',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800'
    }
  ];

  // --- SINGLE POST VIEW ---
  if (selectedPost) {
    return (
      <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-blue-500">
        <div className="w-full h-[70vh] relative">
          <img src={selectedPost.image} className="w-full h-full object-cover" alt={selectedPost.title} />
          <div className="absolute inset-0 bg-black/40" />
          <button
            onClick={() => { setSelectedPost(null); window.scrollTo(0, 0); }}
            className="absolute top-10 left-6 md:left-12 flex items-center gap-2 text-white bg-black/20 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all uppercase text-[10px] tracking-widest"
          >
            <ArrowLeft size={16} /> Back to Blog
          </button>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-blue-600 px-3 py-1 text-[10px] uppercase tracking-tighter">{selectedPost.category}</span>
            <span className="text-neutral-500 text-[10px] uppercase tracking-widest">{selectedPost.date}</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-7xl mb-10 leading-[1.1]">
            {selectedPost.title}
          </h1>

          <div className="flex items-center gap-4 mb-12 border-y border-white/10 py-6">
            <span className="text-xs text-neutral-400">Written by <span className="text-white">{selectedPost.author}</span></span>
            <div className="ml-auto flex gap-4 text-neutral-400">
              <Twitter size={18} className="hover:text-white cursor-pointer" />
              <Linkedin size={18} className="hover:text-white cursor-pointer" />
              <MessageCircle size={18} className="hover:text-white cursor-pointer" />
            </div>
          </div>

          <div
            className="prose prose-invert prose-lg max-w-none text-neutral-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: selectedPost.content }}
          />

          <div className="mt-32 pt-16 border-t border-white/10">
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl mb-12">More Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {posts.filter(p => p.id !== selectedPost.id).slice(0, 2).map(post => (
                <div key={post.id} className="group cursor-pointer" onClick={() => { setSelectedPost(post); window.scrollTo(0, 0); }}>
                  <div className="aspect-video overflow-hidden mb-6">
                    <img src={post.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <h4 className="text-xl font-medium leading-snug">{post.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- MODERN LISTING VIEW ---
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-white selection:text-black">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&display=swap');`}
      </style>

      {/* Hero Header */}
      <header className="pt-24 pb-12 px-8 md:px-16 text-center">
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[15vw] md:text-[12vw] leading-none uppercase tracking-tighter mb-4">
          Journal
        </h1>
        <p className="text-neutral-500 uppercase tracking-[0.3em] text-[10px]">Thoughts, ideas and stories</p>
      </header>

      {/* Modern Top Navigation Bar (Filters + Search) */}
      <div className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-y border-white/5 px-8 md:px-16 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar w-full md:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] uppercase tracking-widest whitespace-nowrap transition-colors ${activeCategory === cat ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-neutral-500" size={14} />
          <input
            type="text"
            placeholder="Search journal..."
            className="w-full bg-transparent border-none pl-6 text-xs focus:outline-none placeholder:text-neutral-700"
          />
        </div>
      </div>


      <main className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {posts.map((post) => (
          <article key={post.id} className="group cursor-pointer" onClick={() => { setSelectedPost(post); window.scrollTo(0, 0); }}>
            <div className="relative aspect-5/5 overflow-hidden mb-6 bg-neutral-900">
              <img
                src={post.image}
                className="w-full h-full object-cover  group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute top-4 right-4">
                <div className="w-10 h-10 bg-black/50 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                <span>{post.category}</span>
                <span className="w-1 h-1 bg-neutral-700 rounded-full" />
                <span>{post.date}</span>
              </div>

              <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl leading-[1.2] group-hover:text-neutral-400 transition-colors">
                {post.title}
              </h2>

              <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2 font-light">
                {post.excerpt}
              </p>

              <div className="pt-2">
                <span className="text-[10px] uppercase tracking-widest border-b border-white/20 pb-1 group-hover:border-white transition-all">
                  Read Journal
                </span>
              </div>
            </div>
          </article>
        ))}
      </main>

      <footer className="p-16 border-t border-dashed border-white/10 text-center">
        <p className="text-neutral-600 text-[10px] uppercase tracking-[0.5em]">End of Journal</p>
      </footer>
    </div>
  );
};

export default BlogPage;