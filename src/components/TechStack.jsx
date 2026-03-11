import React from 'react';
import { Layers, Terminal, Database, Globe, Shield, Activity } from 'lucide-react';

const technologies = [
  { name: "React 19", icon: <Layers className="w-6 h-6" />, category: "Frontend" },
  { name: "Tailwind v4", icon: <Globe className="w-6 h-6" />, category: "Styling" },
  { name: "Node.js", icon: <Terminal className="w-6 h-6" />, category: "Backend" },
  { name: "PostgreSQL", icon: <Database className="w-6 h-6" />, category: "Database" },
  { name: "Supabase", icon: <Shield className="w-6 h-6" />, category: "Auth & Storage" },
  { name: "Telemetry", icon: <Activity className="w-6 h-6" />, category: "Observability" },
];

const TechStackSection = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Powered by <span className="text-indigo-500">Industry standards</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            We use a curated stack of modern technologies to ensure reliability, performance, and scalability for your projects.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-indigo-500/50 transition-all group"
            >
              <div className="text-gray-400 group-hover:text-indigo-400 mb-4 transition-colors">
                {tech.icon}
              </div>
              <h3 className="font-semibold text-sm mb-1">{tech.name}</h3>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">{tech.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
