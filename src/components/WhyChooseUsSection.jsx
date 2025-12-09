// src/components/WhyChooseUsSection.jsx
import React, { useState, useEffect, useRef } from "react";
import { Shield, TrendingUp, Users, Zap, Star, Sparkles } from "lucide-react";

const reasons = [
  {
    title: "Reliability",
    stat: "99.9%",
    label: "Uptime",
    description: "Enterprise-grade infrastructure you can count on",
    icon: Shield,
    color: "from-blue-500 to-blue-600",
    accentColor: "blue",
    particles: 12
  },
  {
    title: "Security",
    stat: "SOC 2",
    label: "Certified",
    description: "Bank-level encryption and compliance",
    icon: TrendingUp,
    color: "from-teal-500 to-teal-600",
    accentColor: "teal",
    particles: 12
  },
  {
    title: "Support",
    stat: "24/7",
    label: "Available",
    description: "Expert help whenever you need it",
    icon: Users,
    color: "from-purple-500 to-purple-600",
    accentColor: "purple",
    particles: 12
  },
  {
    title: "Speed",
    stat: "<100ms",
    label: "Response",
    description: "Lightning-fast performance globally",
    icon: Zap,
    color: "from-pink-500 to-pink-600",
    accentColor: "pink",
    particles: 12
  }
];

const WhyChooseUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  const handleMouseMove = (e, cardIndex) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden"
      aria-labelledby="why-choose-us-heading"
    >
      {/* Animated starfield background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Large gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse-gentle" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full mb-8 border border-white/20">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-spin-slow" />
            <span className="text-sm font-semibold text-white">Why Choose Us</span>
          </div>

          <h2 id="why-choose-us-heading" className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            We deliver <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent animate-gradient-flow">excellence</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Built on trust, powered by innovation</p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = hoveredCard === idx;
            const delay = idx * 150;
            
            return (
              <div
                key={idx}
                className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${delay}ms` }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                onMouseMove={(e) => handleMouseMove(e, idx)}
              >
                {/* Card */}
                <div className="group relative h-full">
                  {/* Glow border effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-3xl opacity-0 group-hover:opacity-75 blur-lg transition-all duration-500 ${isHovered ? 'opacity-75' : ''}`} />
                  
                  {/* Main card */}
                  <div className="relative h-full bg-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden transform transition-all duration-500 group-hover:scale-[1.02]">
                    {/* Spotlight effect following mouse */}
                    {isHovered && (
                      <div
                        className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle 200px at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.3), transparent)`
                        }}
                      />
                    )}

                    {/* Animated particles */}
                    {isHovered && (
                      <div className="absolute inset-0 overflow-hidden">
                        {[...Array(item.particles)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-1 h-1 bg-${item.accentColor}-400 rounded-full animate-particle-float`}
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                              animationDelay: `${Math.random() * 2}s`,
                              animationDuration: `${2 + Math.random() * 2}s`
                            }}
                          />
                        ))}
                      </div>
                    )}

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon with orbiting ring */}
                      <div className="relative w-20 h-20 mb-6">
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                          <Icon className="w-10 h-10" aria-hidden="true" />
                        </div>
                        {/* Orbiting ring */}
                        <div className={`absolute inset-0 border-2 border-${item.accentColor}-400 rounded-2xl opacity-0 group-hover:opacity-60 animate-spin-slow`} style={{ margin: '-4px' }} />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-teal-400 group-hover:bg-clip-text transition-all duration-300">
                        {item.title}
                      </h3>

                      {/* Stat display */}
                      <div className="mb-6">
                        <div className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2 transform transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}>
                          {item.stat}
                        </div>
                        <div className="text-lg text-gray-400 font-medium">{item.label}</div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">{item.description}</p>

                      {/* Progress bar */}
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${item.color} transform origin-left transition-all duration-1000 ${isHovered ? 'scale-x-100' : 'scale-x-0'}`} />
                      </div>

                      {/* Floating badge */}
                      <div className={`absolute top-6 right-6 px-4 py-2 bg-gradient-to-r ${item.color} text-white text-xs font-bold rounded-full shadow-lg transform transition-all duration-500 ${isHovered ? 'scale-110 rotate-6' : 'scale-0'}`}>
                        <Star className="w-4 h-4 inline mr-1" />
                        Top Rated
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes particle-float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(30px); opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-twinkle { animation: twinkle ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-pulse-gentle { animation: pulse-gentle 4s ease-in-out infinite; }
        .animate-gradient-flow { 
          background-size: 200% auto;
          animation: gradient-flow 3s linear infinite;
        }
        .animate-particle-float { animation: particle-float linear infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
      `}</style>
    </section>
  );
};

export default WhyChooseUsSection;