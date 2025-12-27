import React from 'react';
import { Home, Building2, Hammer, Ruler, Truck, HardHat } from 'lucide-react';
import { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Residential Construction',
      icon: 'Home',
      description: 'Custom home building tailored to your lifestyle. We handle everything from foundation to finishing touches with exquisite detail.'
    },
    {
      id: 2,
      title: 'Commercial Development',
      icon: 'Building2',
      description: 'Office complexes, retail spaces, and warehouses. We build functional, durable, and impressive commercial properties.'
    },
    {
      id: 3,
      title: 'Renovation & Remodeling',
      icon: 'Hammer',
      description: 'Transform your existing space. Kitchen upgrades, bathroom remodels, and complete home makeovers.'
    },
    {
      id: 4,
      title: 'Project Management',
      icon: 'HardHat',
      description: 'End-to-end project oversight ensuring your build stays on budget and on schedule without cutting corners.'
    },
    {
      id: 5,
      title: 'Architectural Design',
      icon: 'Ruler',
      description: 'In-house design services to bring your vision to blueprints. We blend aesthetics with structural integrity.'
    },
    {
      id: 6,
      title: 'Site Preparation',
      icon: 'Truck',
      description: 'Excavation, grading, and land clearing. We lay the groundwork for a successful construction project.'
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Home': return <Home className="h-8 w-8 text-white" />;
      case 'Building2': return <Building2 className="h-8 w-8 text-white" />;
      case 'Hammer': return <Hammer className="h-8 w-8 text-white" />;
      case 'HardHat': return <HardHat className="h-8 w-8 text-white" />;
      case 'Ruler': return <Ruler className="h-8 w-8 text-white" />;
      case 'Truck': return <Truck className="h-8 w-8 text-white" />;
      default: return <Home className="h-8 w-8 text-white" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive construction solutions designed to meet the diverse needs of our residential and commercial clients.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
              <div className="p-6">
                <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors duration-300">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700">
                  Learn More <span className="ml-2 text-lg">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Snippet */}
        <div className="mt-20 bg-amber-500 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">"sarvotam Construction transformed our vision into reality. Their attention to detail during our office renovation was unparalleled."</h2>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold">MU</div>
              <div className="text-left">
                <p className="font-bold text-slate-900">Manojkumar Ubhadiya</p>
                <p className="text-slate-800 text-sm">CEO, TechCorp</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Services;
