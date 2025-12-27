import React from 'react';
import { Award, Users, ThumbsUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About sarvotam Construction</h1>
          <p className="text-xl text-slate-300">Building trust since 1995.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Founded over 25 years ago, sarvotam Construction began with a single pickup truck and a commitment to quality craftsmanship. Today, we are one of the region's most respected construction firms, known for our integrity, precision, and ability to handle complex projects.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our mission is simple: To deliver superior construction solutions that exceed client expectations while maintaining the highest standards of safety and sustainability.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://picsum.photos/800/600?random=20" 
              alt="Team at work" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8 bg-slate-50 rounded-xl">
                <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
                <div className="text-slate-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center p-8 bg-slate-50 rounded-xl">
                <div className="text-4xl font-bold text-amber-600 mb-2">25+</div>
                <div className="text-slate-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center p-8 bg-slate-50 rounded-xl">
                <div className="text-4xl font-bold text-amber-600 mb-2">100%</div>
                <div className="text-slate-600 font-medium">Client Satisfaction</div>
            </div>
        </div>

        {/* Team */}
        <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Meet Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { name: 'Ambalal Ubhadiya', role: 'CEO & Founder', img: 'https://picsum.photos/300/300?random=30' },
                    { name: 'Rameshbhai', role: 'Lead Architect', img: 'https://picsum.photos/300/300?random=31' },
                    { name: 'Manojkumar Ubhadiya', role: 'Project Manager', img: 'https://picsum.photos/300/300?random=32' },
                ].map((member, i) => (
                    <div key={i} className="text-center group">
                        <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-slate-100 group-hover:border-amber-500 transition-colors">
                            <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                        <p className="text-amber-600">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
