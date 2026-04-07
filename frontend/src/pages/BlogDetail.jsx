import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBackOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { posts } from '../data/posts';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === parseInt(id));

  // Page ke top par scroll karne ke liye
  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!post) return <div className="h-screen bg-black flex items-center justify-center text-white">Post not found.</div>;

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-red-500">
      <div className="w-full h-[60vh] relative">
        <img src={post.image} className="w-full h-full object-cover" alt={post.title} />
        <div className="absolute inset-0 bg-black/60" />
        <button
          onClick={() => navigate('/blog')}
          className="absolute top-10 left-6 md:left-12 flex items-center gap-2 text-white bg-black/20 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all uppercase text-[10px] tracking-widest"
        >
          <IoArrowBackOutline size={16} /> Back to Blog
        </button>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-red-600 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">{post.category}</span>
          <span className="text-neutral-500 text-[10px] uppercase tracking-widest">{post.date}</span>
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-7xl mb-10 leading-[1.1] tracking-tighter">
          {post.title}
        </h1>


        <div
          className="prose prose-invert prose-lg max-w-none text-neutral-300 leading-relaxed font-light space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};

export default BlogDetail;