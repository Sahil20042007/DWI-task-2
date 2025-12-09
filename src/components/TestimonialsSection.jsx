// src/components/TestimonialsSection.jsx
import React, { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const testimonials = [
  {
    quote: "DWI transformed our product development process. We shipped 3x faster and our customers love the results.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechCorp Inc.",
    avatar: "https://placehold.co/100x100/3b82f6/ffffff?text=SC",
    color: "from-blue-500 to-blue-600"
  },
  {
    quote: "The best decision we made was partnering with DWI. Their expertise and support are unmatched in the industry.",
    author: "Michael Rodriguez",
    role: "CTO",
    company: "Innovation Labs",
    avatar: "https://placehold.co/100x100/14b8a6/ffffff?text=MR",
    color: "from-teal-500 to-teal-600"
  },
  {
    quote: "From concept to launch in record time. DWI's platform gave us the competitive edge we needed.",
    author: "Emily Watson",
    role: "Product Director",
    company: "Future Systems",
    avatar: "https://placehold.co/100x100/8b5cf6/ffffff?text=EW",
    color: "from-purple-500 to-purple-600"
  },
  {
    quote: "Outstanding reliability and performance. Our team productivity increased by 40% after implementing DWI's solutions.",
    author: "David Park",
    role: "Head of Operations",
    company: "Global Dynamics",
    avatar: "https://placehold.co/100x100/f59e0b/ffffff?text=DP",
    color: "from-orange-500 to-orange-600"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const goToNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, isHovered]);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 text-white overflow-hidden"
      aria-label="Client testimonials"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated liquid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-screen filter blur-3xl animate-liquid"
              style={{
                width: `${200 + i * 50}px`,
                height: `${200 + i * 50}px`,
                left: `${20 * i}%`,
                top: `${15 * i}%`,
                background: `radial-gradient(circle, ${
                  ['rgba(59, 130, 246, 0.3)', 'rgba(168, 85, 247, 0.3)', 'rgba(236, 72, 153, 0.3)'][i % 3]
                }, transparent)`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${15 + i * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Mouse-follow spotlight */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 400px at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.15), transparent)`
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-particle-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full mb-8 border border-white/20 animate-fade-in">
            <div className="relative">
              <Star className="w-5 h-5 text-yellow-400" aria-hidden />
              <div className="absolute inset-0 animate-ping">
                <Star className="w-5 h-5 text-yellow-400 opacity-75" aria-hidden />
              </div>
            </div>
            <span className="text-sm font-semibold">Client Stories</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-text-shimmer bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent" style={{ backgroundSize: '200% auto' }}>
            What Our Clients Say
          </h2>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">Trusted by leading companies worldwide</p>
        </div>

        {/* Main testimonial carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial cards stack */}
          <div className="relative h-[500px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => {
              const offset = index - activeIndex;
              const absOffset = Math.abs(offset);
              const isActive = index === activeIndex;
              
              return (
                <div
                  key={index}
                  className="absolute w-full transition-all duration-700 ease-out"
                  style={{
                    transform: `
                      translateX(${offset * 120}%)
                      scale(${1 - absOffset * 0.15})
                      rotateY(${offset * 15}deg)
                    `,
                    opacity: absOffset > 1 ? 0 : 1 - absOffset * 0.5,
                    zIndex: 10 - absOffset,
                    pointerEvents: isActive ? 'auto' : 'none'
                  }}
                >
                  <article className="relative group">
                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${testimonial.color} rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500 ${isActive ? 'opacity-50' : ''}`} />
                    
                    {/* Card */}
                    <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-10 border border-white/20 hover:border-white/40 transition-all shadow-2xl">
                      {/* Quote icon */}
                      <div className="absolute -top-6 left-10">
                        <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-2xl flex items-center justify-center shadow-2xl rotate-12 group-hover:rotate-0 transition-transform`}>
                          <Quote className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1 mb-6 mt-8" aria-hidden>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-star-pop"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-xl md:text-2xl leading-relaxed mb-8 text-white font-light">
                        "{testimonial.quote}"
                      </p>

                      {/* Author info */}
                      <div className="flex items-center gap-5">
                        <div className="relative">
                          {/* Avatar glow */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} rounded-full blur-lg opacity-50 animate-pulse-gentle`} />
                          <img
                            src={testimonial.avatar}
                            alt={`${testimonial.author} avatar`}
                            className="relative w-16 h-16 rounded-full ring-4 ring-white/30 object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-xl mb-1">{testimonial.author}</div>
                          <div className="text-blue-200 text-sm">{testimonial.role}</div>
                          <div className="text-blue-300 text-sm font-semibold">{testimonial.company}</div>
                        </div>

                        {/* Company badge */}
                        <div className="ml-auto">
                          <div className={`px-4 py-2 bg-gradient-to-r ${testimonial.color} rounded-full text-sm font-bold shadow-lg`}>
                            Verified
                          </div>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute top-1/2 right-10 opacity-10">
                        <Sparkles className="w-32 h-32 text-white animate-spin-slow" />
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((testimonial, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`relative transition-all duration-500 focus:outline-none group ${
                  idx === activeIndex ? 'w-12' : 'w-3'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              >
                <div className={`h-3 rounded-full transition-all duration-500 ${
                  idx === activeIndex
                    ? `bg-gradient-to-r ${testimonial.color} shadow-lg`
                    : 'bg-white/30 group-hover:bg-white/50'
                }`} />
                {idx === activeIndex && (
                  <div className="absolute inset-0 bg-white/50 rounded-full animate-ping" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "50+", label: "Countries" },
            { value: "24/7", label: "Support" }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="group relative text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/30 transition-all hover:scale-105 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes liquid {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(30px, -30px) scale(1.1) rotate(120deg); }
          66% { transform: translate(-20px, 20px) scale(0.9) rotate(240deg); }
        }
        @keyframes particle-drift {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(100px, -100vh); opacity: 0; }
        }
        @keyframes text-shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes star-pop {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-liquid { animation: liquid ease-in-out infinite; }
        .animate-particle-drift { animation: particle-drift linear infinite; }
        .animate-text-shimmer { animation: text-shimmer 8s linear infinite; }
        .animate-star-pop { animation: star-pop 0.5s ease-out forwards; }
        .animate-pulse-gentle { animation: pulse-gentle 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;