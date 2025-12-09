// src/components/ProductsSection.jsx
import React, { useState, useEffect, useRef } from "react";
import { TrendingUp, Shield, Zap, Users, Rocket, Check, ArrowRight, ChevronRight } from "lucide-react";

const ProductsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);
  const sectionRef = useRef(null);

  const products = [
    {
      title: "Dashboard",
      description: "Comprehensive analytics and insights at your fingertips with real-time data visualization.",
      icon: TrendingUp,
      image: "https://placehold.co/600x400/3b82f6/ffffff?text=Dashboard",
      color: "from-blue-500 to-blue-600",
      shadowColor: "shadow-blue-500/50",
      features: ["Real-time Analytics", "Custom Reports", "Data Export", "Smart Alerts"]
    },
    {
      title: "Analytics",
      description: "Deep dive into metrics that matter with advanced reporting and forecasting tools.",
      icon: Shield,
      image: "https://placehold.co/600x400/14b8a6/ffffff?text=Analytics",
      color: "from-teal-500 to-teal-600",
      shadowColor: "shadow-teal-500/50",
      features: ["Predictive AI", "Smart Insights", "Team Collaboration", "Custom Dashboards"]
    },
    {
      title: "Integrations",
      description: "Connect seamlessly with 100+ tools and platforms to streamline your workflow.",
      icon: Zap,
      image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Integrations",
      color: "from-purple-500 to-purple-600",
      shadowColor: "shadow-purple-500/50",
      features: ["100+ Apps", "API Access", "Webhooks", "Custom Integration"]
    },
    {
      title: "Mobile App",
      description: "Access your workspace anywhere with our native iOS and Android applications.",
      icon: Users,
      image: "https://placehold.co/600x400/f59e0b/ffffff?text=Mobile+App",
      color: "from-orange-500 to-orange-600",
      shadowColor: "shadow-orange-500/50",
      features: ["Offline Mode", "Push Notifications", "Biometric Login", "Cross-platform Sync"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate products
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, products.length]);

  const activeProductData = products[activeProduct];
  const ActiveIcon = activeProductData.icon;

  return (
    <section ref={sectionRef} id="products" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-100 rounded-full mb-8">
            <Rocket className="w-5 h-5 text-purple-600 animate-bounce" />
            <span className="text-sm font-semibold text-purple-600">Our Products</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Powerful Tools for <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">Modern Teams</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">Everything you need to build, scale, and succeed</p>
        </div>

        {/* Main showcase - Split layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Large product preview */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="relative group">
              {/* Floating decorative element */}
              <div className={`absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br ${activeProductData.color} rounded-3xl opacity-80 blur-2xl animate-pulse-slow`} />
              
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={activeProductData.image}
                  alt={`${activeProductData.title} preview`}
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating icon badge */}
                <div className={`absolute top-6 left-6 w-16 h-16 bg-gradient-to-br ${activeProductData.color} rounded-2xl flex items-center justify-center text-white shadow-2xl ${activeProductData.shadowColor} animate-float`}>
                  <ActiveIcon className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Product details */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div>
              <div className={`inline-block px-4 py-2 bg-gradient-to-r ${activeProductData.color} text-white rounded-full text-sm font-semibold mb-4 animate-fade-in`}>
                Featured Product
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">
                {activeProductData.title}
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                {activeProductData.description}
              </p>

              {/* Features list */}
              <div className="space-y-4 mb-8">
                {activeProductData.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 group hover:translate-x-2 transition-transform"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${activeProductData.color} flex items-center justify-center flex-shrink-0 shadow-lg ${activeProductData.shadowColor}`}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                type="button"
                className={`group px-8 py-4 bg-gradient-to-r ${activeProductData.color} text-white rounded-xl font-semibold text-lg shadow-2xl ${activeProductData.shadowColor} hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2`}
              >
                <span>Explore {activeProductData.title}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Product navigation dots */}
        <div className="flex justify-center gap-3 mb-16">
          {products.map((product, idx) => (
            <button
              key={idx}
              onClick={() => setActiveProduct(idx)}
              className={`group relative transition-all duration-500 focus:outline-none ${
                idx === activeProduct ? 'w-16' : 'w-3'
              }`}
              aria-label={`View ${product.title}`}
            >
              <div className={`h-3 rounded-full transition-all duration-500 ${
                idx === activeProduct
                  ? `bg-gradient-to-r ${product.color} shadow-lg`
                  : 'bg-gray-300 group-hover:bg-gray-400'
              }`} />
            </button>
          ))}
        </div>

        {/* Bottom: All products grid (compact) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => {
            const Icon = product.icon;
            const isActive = idx === activeProduct;
            
            return (
              <button
                key={idx}
                onClick={() => setActiveProduct(idx)}
                className={`group relative text-left p-6 bg-white rounded-2xl border-2 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 focus:outline-none focus:ring-4 ${
                  isActive
                    ? `border-${product.color.split('-')[1]}-500 shadow-xl -translate-y-2`
                    : 'border-gray-200 hover:border-gray-300'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${600 + idx * 100}ms` }}
              >
                {/* Glow effect */}
                {isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10 rounded-2xl`} />
                )}
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg ${product.shadowColor} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h4 className={`text-xl font-bold mb-2 transition-colors ${
                    isActive ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'
                  }`}>
                    {product.title}
                  </h4>
                  
                  <div className="flex items-center gap-1 text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
      `}</style>
    </section>
  );
};

export default ProductsSection;