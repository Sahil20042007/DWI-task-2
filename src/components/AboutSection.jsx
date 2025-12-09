// src/components/AboutSection.jsx
import React from "react";
import { Sparkles, TrendingUp, Shield, Zap, Users } from "lucide-react";

const highlights = [
  { icon: TrendingUp, title: "Innovation First", desc: "Cutting-edge solutions for modern challenges", color: "from-blue-500 to-blue-600" },
  { icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption and compliance", color: "from-teal-500 to-teal-600" },
  { icon: Zap, title: "Lightning Fast", desc: "Optimized performance at scale", color: "from-purple-500 to-purple-600" },
  { icon: Users, title: "Expert Team", desc: "50+ experienced professionals", color: "from-pink-500 to-pink-600" }
];

const AboutSection = () => {
  const handleKeyDown = (e, onClick) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <section id="about" className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">About Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">DWI Private Limited</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            DWI creates scalable solutions that help businesses automate workflows and delight users. We combine cutting-edge technology with user-centered design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => handleKeyDown(e)}
                onClick={() => {}}
                className="group relative p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
                aria-label={item.title}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className={`relative w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <Icon className="w-8 h-8" aria-hidden="true" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-teal-600 group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
