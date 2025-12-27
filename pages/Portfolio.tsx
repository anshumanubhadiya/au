import React, { useState } from 'react';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Renovation'>('All');

  const projects: Project[] = [
    { id: 1, title: 'Lakeside Villa', category: 'Residential', image: 'https://picsum.photos/600/400?random=1', description: 'Luxury 5-bedroom villa with lake access.' },
    { id: 2, title: 'Downtown Office Hub', category: 'Commercial', image: 'https://picsum.photos/600/400?random=2', description: 'Modern co-working space in the city center.' },
    { id: 3, title: 'Historic Manor Reno', category: 'Renovation', image: 'https://picsum.photos/600/400?random=3', description: 'Restoration of a 1920s manor.' },
    { id: 4, title: 'Skyline Apartments', category: 'Residential', image: 'https://picsum.photos/600/400?random=4', description: 'High-rise luxury apartment complex.' },
    { id: 5, title: 'Tech Park Annex', category: 'Commercial', image: 'https://picsum.photos/600/400?random=5', description: 'Sustainable office annex with solar integration.' },
    { id: 6, title: 'Kitchen Modernization', category: 'Renovation', image: 'https://picsum.photos/600/400?random=6', description: 'Complete chef kitchen overhaul.' },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const filters = ['All', 'Residential', 'Commercial', 'Renovation'];

  return (
    <div className="bg-white min-h-screen">
       <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Portfolio</h1>
          <p className="text-xl text-slate-300">Explore our diverse range of successful projects.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === f
                  ? 'bg-amber-600 text-white shadow-lg scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-slate-900/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{project.description}</p>
                <button className="text-amber-600 font-semibold hover:text-amber-700 text-sm uppercase tracking-wide">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
