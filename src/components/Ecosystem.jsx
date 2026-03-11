import React from 'react';
import { Search, Zap, Cpu, ExternalLink } from 'lucide-react';

const solutions = [
  {
    title: "Diagnostic Shuffler",
    description: "Deep-scanning entire codebase line-by-line to understand architecture and patterns.",
    icon: <Search className="w-8 h-8 text-indigo-400" />,
    link: "#",
    tag: "ANALYSIS"
  },
  {
    title: "Telemetry Typewriter",
    description: "Real-time generation of production-ready code with integrated observability.",
    icon: <Zap className="w-8 h-8 text-indigo-400" />,
    link: "#",
    tag: "GENERATION"
  },
  {
    title: "Cursor Protocol Scheduler",
    description: "Intelligent task orchestration and automated dependency management.",
    icon: <Cpu className="w-8 h-8 text-indigo-400" />,
    link: "#",
    tag: "SCHEDULING"
  }
];

const SolutionCard = ({ solution }) => {
  return (
    <div className="solution-card glass-card p-8 flex flex-col h-full group hover:shadow-indigo-500/10 transition-all">
      <div className="flex items-center gap-3 mb-6">
        <span className="compliance-badge text-[10px] py-1 px-3">
          {solution.tag}
        </span>
      </div>
      
      <div className="mb-6 p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 w-fit group-hover:bg-indigo-500/10 transition-colors">
        {solution.icon}
      </div>
      
      <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-indigo-400 transition-colors">
        {solution.title}
      </h3>
      
      <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
        {solution.description}
      </p>
      
      <a 
        href={solution.link}
        className="solution-link w-fit group/link flex items-center gap-2"
      >
        Explore Documentation
        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
      </a>
    </div>
  );
};

const EcosystemSection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-950 to-black">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Integrated <span className="text-indigo-500">Diagnostic</span> Engine
          </h2>
          <p className="text-xl text-gray-400">
            Our ecosystem combines deep codebase analysis with automated generation and scheduling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <div key={idx} className={`animate-fade-in-up`} style={{ animationDelay: `${idx * 150}ms` }}>
              <SolutionCard solution={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
