// src/components/ProductsSection.jsx
import React, { useState } from "react";
import { TrendingUp, Shield, Zap, Users, Rocket, Check, ArrowRight } from "lucide-react";

const ProductsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const products = [
    {
      title: "Dashboard",
      description: "Comprehensive analytics and insights at your fingertips with real-time data visualization.",
      icon: TrendingUp,
      image: "https://placehold.co/400x300/3b82f6/ffffff?text=Dashboard",
      color: "from-blue-500 to-blue-600",
      features: ["Real-time Analytics", "Custom Reports", "Data Export"]
    },
    {
      title: "Analytics",
      description: "Deep dive into metrics that matter with advanced reporting and forecasting tools.",
      icon: Shield,
      image: "https://placehold.co/400x300/14b8a6/ffffff?text=Analytics",
      color: "from-teal-500 to-teal-600",
      features: ["Predictive AI", "Smart Insights", "Team Collaboration"]
    },
    {
      title: "Integrations",
      description: "Connect seamlessly with 100+ tools and platforms to streamline your workflow.",
      icon: Zap,
      image: "https://placehold.co/400x300/8b5cf6/ffffff?text=Integrations",
      color: "from-purple-500 to-purple-600",
      features: ["100+ Apps", "API Access", "Webhooks"]
    },
    {
      title: "Mobile App",
      description: "Access your workspace anywhere with our native iOS and Android applications.",
      icon: Users,
      image: "https://placehold.co/400x300/f59e0b/ffffff?text=Mobile+App",
      color: "from-orange-500 to-orange-600",
      features: ["Offline Mode", "Push Notifications", "Biometric Login"]
    }
  ];

  return (
    <section id="products" className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" aria-hidden />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Rocket className="w-4 h-4 text-purple-600" aria-hidden />
            <span className="text-sm font-semibold text-purple-600">Our Products</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Powerful Tools for <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Modern Teams</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to build, scale, and succeed</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => {
            const Icon = product.icon;
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={idx}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-0 mix-blend-multiply`} aria-hidden />

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={`${product.title} preview`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${isHovered ? "from-black/60" : "from-black/30"} to-transparent transition-colors duration-300`} aria-hidden />
                  </div>

                  {/* Content */}
                  <div className="relative p-6 z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      <Icon className="w-6 h-6" aria-hidden />
                    </div>

                    <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${isHovered ? "text-white" : "text-gray-900"}`}>
                      {product.title}
                    </h3>

                    {/* Description / Features toggle (keeps layout stable using absolute layering) */}
                    <div className="relative min-h-[60px]">
                      <p className={`text-gray-600 mb-4 transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}>
                        {product.description}
                      </p>

                      <div className={`space-y-2 transition-opacity duration-300 absolute inset-0 ${isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                        {product.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-white">
                            <Check className="w-4 h-4 flex-shrink-0" aria-hidden />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      className={`mt-4 inline-flex items-center gap-2 font-medium transition-all ${isHovered ? "text-white" : "text-blue-600"}`}
                      aria-label={`Learn more about ${product.title}`}
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" aria-hidden />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
