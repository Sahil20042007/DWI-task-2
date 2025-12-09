// src/components/HeroSection.jsx
import React, { useState, useEffect, useMemo } from "react";
import {
  Sparkles,
  Rocket,
  Code,
  TrendingUp,
  Database,
  Zap,
  Shield
} from "lucide-react";

const FLOAT_PARTICLE_COUNT = 15;

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Stable random particles generated once
  const particles = useMemo(() => {
    return Array.from({ length: FLOAT_PARTICLE_COUNT }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${5 + Math.random() * 10}s`,
      delay: `${Math.random() * 5}s`
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const transformStyle = {
    transform: `rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
    transformStyle: "preserve-3d",
    transition: "transform 0.3s ease-out"
  };

  return (
    <section
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      aria-label="Hero section"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]" aria-hidden />

      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob top-0 -left-4" />
        <div className="absolute w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 top-0 -right-4" />
        <div className="absolute w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-0 left-20" />
      </div>

      {/* Floating particles (stable positions) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
            style={{
              left: p.left,
              top: p.top,
              animation: `float ${p.duration} linear infinite`,
              animationDelay: p.delay
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 md:space-y-8 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in">
              <Sparkles className="w-4 h-4 text-yellow-400" aria-hidden />
              <span className="text-sm font-medium">Trusted by 500+ Companies</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight animate-slide-up">
              Build reliable digital products{" "}
              <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
                faster
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
              End-to-end product development, from idea to launch. Transform your vision into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <button
                type="button"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2 font-medium"
                aria-label="Get started"
              >
                Get Started <Rocket className="w-5 h-5" aria-hidden />
              </button>

              <button type="button" className="px-8 py-4 border-2 border-white/30 text-white rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all font-medium" aria-label="See demo">
                See Demo
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4 animate-slide-up" style={{ animationDelay: "0.6s" }}>
              {[{ value: "500+", label: "Happy Clients" }, { value: "99.9%", label: "Uptime SLA" }, { value: "24/7", label: "Support" }].map((stat, idx) => (
                <div key={idx} className="group hover:scale-110 transition-transform cursor-pointer">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right 3D dashboard card */}
          <div className="relative" style={transformStyle}>
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 opacity-50 blur-xl" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: "0.4s" }} />
                  </div>
                  <Code className="w-5 h-5 text-gray-400" aria-hidden />
                </div>

                <div className="space-y-3">
                  {[60, 80, 45, 90, 70].map((width, idx) => (
                    <div key={idx} className="w-full h-4 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full animate-expand" style={{ width: `${width}%`, animationDelay: `${idx * 0.1}s` }} />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  {[{ icon: TrendingUp, color: "from-blue-500 to-blue-600" }, { icon: Database, color: "from-teal-500 to-teal-600" }, { icon: Zap, color: "from-purple-500 to-purple-600" }].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className={`h-24 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform cursor-pointer`}>
                        <Icon className="w-8 h-8" aria-hidden />
                      </div>
                    );
                  })}
                </div>

                <div className="h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl backdrop-blur-sm border border-white/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                  <Shield className="w-12 h-12 text-white/50" aria-hidden />
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-2xl flex items-center justify-center rotate-12 hover:rotate-0 transition-transform cursor-pointer animate-float" aria-hidden>
              <Sparkles className="w-10 h-10 text-white" />
            </div>

            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl shadow-2xl flex items-center justify-center -rotate-12 hover:rotate-0 transition-transform cursor-pointer animate-float" style={{ animationDelay: "1s" }} aria-hidden>
              <Rocket className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS for animations */}
      <style>{`
        @keyframes blob { 0%,100%{ transform: translate(0,0) scale(1);} 33%{ transform: translate(30px, -50px) scale(1.1);} 66%{ transform: translate(-20px,20px) scale(0.9);} }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes float { 0% { transform: translateY(0) translateX(0); opacity: 0; } 10% { opacity: 0.3; } 90% { opacity: 0.3; } 100% { transform: translateY(-100vh) translateX(50px); opacity: 0; } }

        @keyframes slide-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes expand { from { width: 0; } to { width: 100%; } }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; opacity: 0; }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        .animate-expand { animation: expand 1s ease-out forwards; }
        .animate-shimmer { animation: shimmer 3s infinite; }
        @keyframes floating { 0%,100%{ transform: translateY(0) rotate(12deg);} 50%{ transform: translateY(-20px) rotate(12deg);} }
        .animate-float { animation: floating 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default HeroSection;
