// src/components/TestimonialsSection.jsx
import React, { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "DWI transformed our product development process. We shipped 3x faster and our customers love the results.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechCorp Inc.",
    avatar: "https://placehold.co/100x100/3b82f6/ffffff?text=SC"
  },
  {
    quote:
      "The best decision we made was partnering with DWI. Their expertise and support are unmatched in the industry.",
    author: "Michael Rodriguez",
    role: "CTO",
    company: "Innovation Labs",
    avatar: "https://placehold.co/100x100/14b8a6/ffffff?text=MR"
  },
  {
    quote:
      "From concept to launch in record time. DWI's platform gave us the competitive edge we needed.",
    author: "Emily Watson",
    role: "Product Director",
    company: "Future Systems",
    avatar: "https://placehold.co/100x100/8b5cf6/ffffff?text=EW"
  },
  {
    quote:
      "Outstanding reliability and performance. Our team productivity increased by 40% after implementing DWI's solutions.",
    author: "David Park",
    role: "Head of Operations",
    company: "Global Dynamics",
    avatar: "https://placehold.co/100x100/f59e0b/ffffff?text=DP"
  }
];

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const intervalRef = useRef(null);
  const delay = 5000;

  useEffect(() => {
    // start auto-rotation
    intervalRef.current = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, delay);

    return () => clearInterval(intervalRef.current);
  }, [testimonials.length]);

  // Pause auto-rotation
  const pauseRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Resume auto-rotation
  const resumeRotation = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, delay);
    }
  };

  return (
    <section
      id="testimonials"
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white overflow-hidden"
      aria-label="Client testimonials"
    >
      {/* Animated background (decorative) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob top-0 left-0" />
        <div className="absolute w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-2000 bottom-0 right-0" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
            <Star className="w-4 h-4 text-yellow-300" aria-hidden />
            <span className="text-sm font-semibold">Client Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Trusted by leading companies worldwide</p>
        </div>

        {/* Desktop: Grid of testimonials (non-rotating) */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <article
              key={idx}
              className="group relative bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500 cursor-pointer"
              aria-label={`Testimonial from ${t.author}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" aria-hidden />
              <div className="relative z-10">
                <div className="flex gap-1 mb-6" aria-hidden>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>

                <p className="text-lg mb-8 leading-relaxed">"{t.quote}"</p>

                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={`${t.author} avatar`}
                    className="w-14 h-14 rounded-full ring-4 ring-white/20 group-hover:ring-white/40 transition-all"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-bold text-lg">{t.author}</div>
                    <div className="text-sm text-blue-100">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div
          className="md:hidden"
          onMouseEnter={pauseRotation}
          onMouseLeave={resumeRotation}
          onFocus={pauseRotation}
          onBlur={resumeRotation}
        >
          <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20">
            <div className="flex gap-1 mb-6" aria-hidden>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>

            <p className="text-lg mb-8 leading-relaxed" aria-live="polite">
              "{testimonials[activeTestimonial].quote}"
            </p>

            <div className="flex items-center gap-4">
              <img
                src={testimonials[activeTestimonial].avatar}
                alt={`${testimonials[activeTestimonial].author} avatar`}
                className="w-14 h-14 rounded-full ring-4 ring-white/20"
                loading="lazy"
              />
              <div>
                <div className="font-bold text-lg">{testimonials[activeTestimonial].author}</div>
                <div className="text-sm text-blue-100">
                  {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}
                </div>
              </div>
            </div>
          </div>

          {/* Dots / controls */}
          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial carousel controls">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTestimonial(idx)}
                className={`h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white ${
                  idx === activeTestimonial ? "bg-white w-8" : "bg-white/40 w-2"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
                aria-pressed={idx === activeTestimonial}
                role="tab"
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob { 0%, 100% { transform: translate(0, 0) scale(1);} 33% { transform: translate(30px, -50px) scale(1.1);} 66% { transform: translate(-20px, 20px) scale(0.9);} }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
