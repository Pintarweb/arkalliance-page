import React from 'react';
import { ClipboardCheck, Code, Rocket, RotateCcw } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Diagnostic Analysis",
    description: "Line-by-line scanning of the codebase to identify architectural patterns and technical debt.",
    icon: <ClipboardCheck className="w-8 h-8 text-indigo-400" />
  },
  {
    number: "02",
    title: "Atomic Planning",
    description: "Creation of structured implementation plans with clear verification criteria for every task.",
    icon: <Code className="w-8 h-8 text-indigo-400" />
  },
  {
    number: "03",
    title: "Phased Execution",
    description: "Systematic implementation followed by rigorous automated testing and peer-review simulation.",
    icon: <Rocket className="w-8 h-8 text-indigo-400" />
  },
  {
    number: "04",
    title: "Verified Completion",
    description: "Full verification against specifications before final production deployment and handoff.",
    icon: <RotateCcw className="w-8 h-8 text-indigo-400" />
  }
];

const ProcessSection = () => {
  return (
    <section className="py-32 relative bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-indigo-500 font-mono text-sm tracking-[0.2em] mb-4 uppercase">The Antigravity Method</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            How we <span className="text-indigo-500">Accelerate</span> delivery
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            A disciplined, test-driven approach to engineering that eliminates uncertainty and maximizes quality.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full bg-gray-950 border border-white/10 flex items-center justify-center group-hover:border-indigo-500/50 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-500">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center border-2 border-black">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors uppercase tracking-wider">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
