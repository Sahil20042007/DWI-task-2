// src/components/HeroSection.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Rocket,
  ArrowRight,
  Play,
  Zap,
  Shield,
  TrendingUp,
  Users
} from "lucide-react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);
  const heroRef = useRef(null);

  // Magnetic cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Reveal animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animated network canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(96, 165, 250, 0.5)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.2 * (1 - distance / 120)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      
      connectParticles();
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"
      aria-label="Hero section"
    >
      {/* Animated network canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-morph" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-morph" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-morph" style={{ animationDelay: '4s' }} />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div 
            className="space-y-8 text-white"
            style={{
              transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            {/* Badge with pulse animation */}
            <div className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-full border border-white/20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative">
                <Sparkles className="w-5 h-5 text-yellow-400" aria-hidden />
                <div className="absolute inset-0 animate-ping">
                  <Sparkles className="w-5 h-5 text-yellow-400 opacity-75" aria-hidden />
                </div>
              </div>
              <span className="text-sm font-medium">Trusted by 500+ Companies</span>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-white/20" />
                ))}
              </div>
            </div>

            {/* Main heading with text reveal */}
            <h1 className={`text-5xl sm:text-6xl lg:text-8xl font-black leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="block mb-2">Build reliable</span>
              <span className="block mb-2">digital products</span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">
                  faster
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 5 100 2 150 5C200 8 250 10 298 7" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" className="animate-draw-line" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="50%" stopColor="#14b8a6" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Description with typewriter effect */}
            <p className={`text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-xl transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              End-to-end product development, from idea to launch. Transform your vision into reality with cutting-edge technology.
            </p>

            {/* CTA buttons with hover effects */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button
                type="button"
                className="group relative px-8 py-5 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 text-white rounded-2xl font-bold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/50"
                aria-label="Get started"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started Free
                  <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 animate-shimmer-slow bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </button>

              <button 
                type="button" 
                className="group px-8 py-5 border-2 border-white/30 text-white rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all font-bold text-lg flex items-center justify-center gap-2 hover:border-white/50" 
                aria-label="Watch demo"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Play className="w-5 h-5 ml-0.5" aria-hidden />
                </div>
                Watch Demo
              </button>
            </div>

            {/* Stats with counter animation */}
            <div className={`flex items-center gap-8 pt-8 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                { value: "500+", label: "Happy Clients", icon: Users },
                { value: "99.9%", label: "Uptime SLA", icon: Shield },
                { value: "24/7", label: "Support", icon: Zap }
              ].map((stat, idx) => {
                const Icon = stat.icon || (() => null);
                return (
                  <div key={idx} className="group relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300" />
                    <div className="relative bg-white/5 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10 hover:border-white/30 transition-all cursor-pointer">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-blue-400" />
                        <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: 3D floating card showcase */}
          <div 
            className="relative lg:block hidden"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            {/* Main dashboard card */}
            <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/10 overflow-hidden">
                {/* Holographic effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 animate-gradient-shift" />
                
                {/* Window controls */}
                <div className="relative flex items-center gap-2 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                  <div className="flex-1 h-8 bg-white/5 rounded-lg flex items-center px-3">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Shield className="w-3 h-3" />
                      <span>dwi.com</span>
                    </div>
                  </div>
                </div>

                {/* Animated code lines */}
                <div className="space-y-3 mb-6">
                  {[80, 60, 90, 45, 75].map((width, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="text-gray-600 text-sm font-mono">{idx + 1}</div>
                      <div className="flex-1 h-4 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 rounded-full animate-expand-width"
                          style={{ 
                            width: `${width}%`,
                            animationDelay: `${idx * 0.15}s`
                          }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mini cards grid */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: TrendingUp, color: 'from-blue-500 to-blue-600' },
                    { icon: Shield, color: 'from-teal-500 to-teal-600' },
                    { icon: Zap, color: 'from-purple-500 to-purple-600' }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={idx} 
                        className={`h-24 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform cursor-pointer animate-float-up`}
                        style={{ animationDelay: `${idx * 0.2}s` }}
                      >
                        <Icon className="w-8 h-8" aria-hidden />
                      </div>
                    );
                  })}
                </div>

                {/* Scan line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scan-line pointer-events-none" />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl shadow-2xl flex items-center justify-center rotate-12 hover:rotate-0 transition-transform cursor-pointer animate-float z-10">
                <Sparkles className="w-12 h-12 text-white" />
              </div>

              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center -rotate-12 hover:rotate-0 transition-transform cursor-pointer animate-float" style={{ animationDelay: '1s' }}>
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white rounded-full animate-scroll-down" />
        </div>
      </div>

      <style>{`
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: translate(0, 0) scale(1); }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: translate(30px, -30px) scale(1.1); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes draw-line {
          0% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 0; }
        }
        @keyframes shimmer-slow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes expand-width {
          from { width: 0; }
        }
        @keyframes float-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes scan-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-morph { animation: morph 8s ease-in-out infinite; }
        .animate-gradient-shift { 
          background-size: 200% auto;
          animation: gradient-shift 4s linear infinite; 
        }
        .animate-draw-line { animation: draw-line 2s ease-out forwards; }
        .animate-shimmer-slow { animation: shimmer-slow 3s linear infinite; }
        .animate-expand-width { animation: expand-width 1s ease-out forwards; }
        .animate-float-up { animation: float-up 0.8s ease-out forwards; }
        .animate-scan-line { animation: scan-line 4s linear infinite; }
        .animate-scroll-down { animation: scroll-down 1.5s ease-in-out infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default HeroSection;