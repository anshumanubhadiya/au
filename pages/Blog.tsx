import React from 'react';
import { Calendar, User } from 'lucide-react';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: '5 Trends in Sustainable Construction for 2024',
      excerpt: 'Discover how green building materials and energy-efficient designs are shaping the future of the industry.',
      date: 'Oct 15, 2023',
      author: 'Sarah Connor',
      image: 'https://picsum.photos/800/600?random=40'
    },
    {
      id: 2,
      title: 'The Homeowner’s Guide to Kitchen Renovations',
      excerpt: 'Planning a kitchen remodel? Here is everything you need to know about costs, timelines, and materials.',
      date: 'Sept 28, 2023',
      author: 'Michael Chen',
      image: 'https://picsum.photos/800/600?random=41'
    },
    {
      id: 3,
      title: 'Commercial Safety Standards Explained',
      excerpt: 'An in-depth look at how we ensure safety on large-scale commercial sites.',
      date: 'Aug 10, 2023',
      author: 'Robert Fox',
      image: 'https://picsum.photos/800/600?random=42'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
       <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Construction Insights</h1>
          <p className="text-xl text-slate-300">News, tips, and trends from the experts.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
                <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-slate-100 flex flex-col">
                    <div className="h-48 overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center text-xs text-slate-500 mb-3 space-x-4">
                            <span className="flex items-center"><Calendar size={14} className="mr-1"/> {post.date}</span>
                            <span className="flex items-center"><User size={14} className="mr-1"/> {post.author}</span>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 hover:text-amber-600 cursor-pointer">{post.title}</h2>
                        <p className="text-slate-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
                        <button className="text-amber-600 font-semibold text-sm hover:underline mt-auto self-start">Read Article</button>
                    </div>
                </article>
            ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-slate-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Join our newsletter to receive the latest construction news, safety tips, and exclusive offers.</p>
            <form className="max-w-md mx-auto flex gap-4 flex-col sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-amber-500 outline-none"
                />
                <button className="bg-amber-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-500 transition-colors">
                    Subscribe
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;
