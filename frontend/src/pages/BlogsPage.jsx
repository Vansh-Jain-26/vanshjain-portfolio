import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearchOutline, IoArrowRedoOutline } from "react-icons/io5";
import { posts } from '../data/posts';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Startup Strategy', 'Education', 'Mindset', 'Growth', 'Leadership'];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-white selection:text-black">
      <header className="pt-32 pb-16 px-8 md:px-16 text-center border-b border-white/5">
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[18vw] md:text-[12vw] leading-none uppercase tracking-tighter mb-4">
          2AM Thoughts
        </h1>
        <p className="text-neutral-500 uppercase tracking-[0.4em] text-[10px]">Strategies, Stories, and Startup Lessons</p>
      </header>

      {/* Navigation & Filters */}
      <div className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 px-8 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar w-full md:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] uppercase tracking-[0.2em] whitespace-nowrap transition-all ${activeCategory === cat ? 'text-red-500 font-bold' : 'text-neutral-500 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72 border-b border-white/10 focus-within:border-white transition-colors">
          <IoSearchOutline className="absolute left-0 top-1/2 -translate-y-1/2 text-neutral-600" size={14} />
          <input
            type="text"
            placeholder="SEARCH THE ARCHIVE..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent py-2 pl-8 text-[10px] uppercase tracking-widest focus:outline-none placeholder:text-neutral-800 text-white"
          />
        </div>
      </div>

      <main className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {filteredPosts.map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`} className="group cursor-pointer">
            <article>
              <div className="relative aspect-4/5 overflow-hidden mb-8 bg-neutral-900">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <IoArrowRedoOutline size={20} />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-red-500 font-bold">
                  <span>{post.category}</span>
                  <span className="w-1 h-px bg-neutral-800" />
                  <span className="text-neutral-500 font-normal">{post.date}</span>
                </div>

                <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl md:text-4xl leading-[1.1] tracking-tight group-hover:text-neutral-400 transition-colors">
                  {post.title}
                </h2>

                <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3 font-light">
                  {post.excerpt}
                </p>

                <div className="pt-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold border-b-2 border-red-500 pb-1 transition-all">
                    Read Full Entry
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default BlogPage;