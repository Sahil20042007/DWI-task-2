// src/components/WhyChooseUsSection.jsx
import React from "react";
import { Shield, TrendingUp, Users, Zap, Star } from "lucide-react";

const reasons = [
  {
    title: "Reliability",
    stat: "99.9% Uptime",
    description: "Enterprise-grade infrastructure you can count on",
    icon: Shield,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Security",
    stat: "SOC 2 Certified",
    description: "Bank-level encryption and compliance",
    icon: TrendingUp,
    color: "from-teal-500 to-teal-600"
  },
  {
    title: "Support",
    stat: "24/7 Available",
    description: "Expert help whenever you need it",
    icon: Users,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Speed",
    stat: "<100ms Response",
    description: "Lightning-fast performance globally",
    icon: Zap,
    color: "from-pink-500 to-pink-600"
  }
];

const handleKeyDownActivate = (e, onClick) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onClick?.();
  }
};

const WhyChooseUsSection = () => {
  return (
    <section
      id="why-choose-us"
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob top-20 left-20" />
        <div className="absolute w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 bottom-20 right-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <Star className="w-4 h-4 text-blue-600" aria-hidden />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </div>

          <h2 id="why-choose-us-heading" className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            We deliver <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">excellence</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Built on trust, powered by innovation</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => handleKeyDownActivate(e)}
                onClick={() => {}}
                className="group relative text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label={`${item.title} — ${item.stat}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} aria-hidden />
                
                <div className={`relative w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                  <Icon className="w-8 h-8" aria-hidden />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">{item.stat}</div>
                <p className="text-gray-600 group-hover:text-gray-700">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes blob { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
};

export default WhyChooseUsSection;
