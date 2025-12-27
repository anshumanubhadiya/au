import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Clock, Users, Award } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-slate-900 h-[600px]">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src="https://picsum.photos/1920/1080?random=1"
            alt="Construction Site"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Building Your Future With <span className="text-amber-500">Excellence</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              From concept to creation, sarvotam Construction delivers superior quality residential and commercial projects. Experience the difference of master craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-amber-500 hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/20"
              >
                Request a Quote
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-slate-300 text-base font-medium rounded-md text-white hover:bg-white hover:text-slate-900 transition-all"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* USP Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Why Choose sarvotam?</h2>
            <p className="mt-4 text-xl text-slate-500">We don't just build structures; we build trust.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Safety First</h3>
              <p className="text-slate-600">Uncompromising safety standards for our team and your property.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Certified Quality</h3>
              <p className="text-slate-600">ISO 9001 certified processes ensuring top-tier construction quality.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">On-Time Delivery</h3>
              <p className="text-slate-600">We respect your timeline and adhere strictly to project schedules.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Team</h3>
              <p className="text-slate-600">A dedicated team of seasoned engineers, architects, and builders.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Preview */}
      <div className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Featured Projects</h2>
              <p className="mt-2 text-slate-400">A glimpse into our recent masterpieces.</p>
            </div>
            <Link to="/portfolio" className="hidden sm:flex items-center text-amber-500 hover:text-amber-400 font-medium">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg aspect-[4/3]">
                <img
                  src={`https://picsum.photos/600/400?random=${i + 10}`}
                  alt="Project"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold">Project Skylark {i}</h3>
                  <p className="text-slate-300 text-sm">Commercial Complex</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 sm:hidden text-center">
            <Link to="/portfolio" className="inline-flex items-center text-amber-500 hover:text-amber-400 font-medium">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
