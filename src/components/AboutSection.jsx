// src/components/AboutSection.jsx
import React, { useState, useEffect, useRef } from "react";
import { Sparkles, TrendingUp, Shield, Zap, Users } from "lucide-react";

const highlights = [
  { icon: TrendingUp, title: "Innovation First", desc: "Cutting-edge solutions for modern challenges", color: "from-blue-500 to-blue-600", shadowColor: "shadow-blue-500/50" },
  { icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption and compliance", color: "from-teal-500 to-teal-600", shadowColor: "shadow-teal-500/50" },
  { icon: Zap, title: "Lightning Fast", desc: "Optimized performance at scale", color: "from-purple-500 to-purple-600", shadowColor: "shadow-purple-500/50" },
  { icon: Users, title: "Expert Team", desc: "50+ experienced professionals", color: "from-pink-500 to-pink-600", shadowColor: "shadow-pink-500/50" }
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with staggered animation */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className={`inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full mb-8 border border-white/20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
            <span className="text-sm font-semibold text-white">About Us</span>
          </div>
          <h2 className={`text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">DWI Private Limited</span>
          </h2>
          <p className={`text-xl md:text-2xl text-gray-300 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            DWI creates scalable solutions that help businesses automate workflows and delight users. We combine cutting-edge technology with user-centered design.
          </p>
        </div>

        {/* Vertical staggered cards with parallax effect */}
        <div className="relative max-w-5xl mx-auto space-y-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeCard === idx;
            const delay = idx * 200;
            
            return (
              <div
                key={idx}
                className={`relative transition-all duration-1000`}
                style={{ transitionDelay: `${delay}ms` }}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'} ${idx % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'}`} style={{ maxWidth: '90%' }}>
                  {/* Glowing border effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-3xl opacity-0 group-hover:opacity-75 blur transition-all duration-500 ${isActive ? 'opacity-75' : ''}`} />
                  
                  {/* Card content */}
                  <div className="relative bg-slate-800/90 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    {/* Shimmer effect */}
                    <div className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent ${isActive ? 'translate-x-full' : ''}`} />
                    
                    <div className="relative z-10 flex items-start gap-6">
                      {/* Icon with 3D effect */}
                      <div className={`relative flex-shrink-0 w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white shadow-2xl ${item.shadowColor} transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                        <Icon className="w-10 h-10 relative z-10" aria-hidden="true" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                      </div>
                      
                      {/* Text content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-teal-400 group-hover:bg-clip-text transition-all duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">{item.desc}</p>
                      </div>
                      
                      {/* Counter badge */}
                      <div className={`hidden md:block w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg transition-all duration-500 ${isActive ? 'scale-110 rotate-12' : ''}`}>
                        {idx + 1}
                      </div>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="mt-6 w-0 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 group-hover:w-full transition-all duration-1000 rounded-full" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-gradient-x { 
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;