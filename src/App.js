import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Check, Star, ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, TrendingUp, Shield, Zap, Users } from 'lucide-react';

// ============================================
// NAVBAR COMPONENT
// ============================================
const Navbar = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-blue-600">
              DWI
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">Products</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Login
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">About</a>
            <a href="#products" className="block py-2 text-gray-700 hover:text-blue-600">Products</a>
            <a href="#testimonials" className="block py-2 text-gray-700 hover:text-blue-600">Testimonials</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
            <div className="pt-4 space-y-2">
              <button className="w-full py-2 text-blue-600 font-medium">Login</button>
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// ============================================
// HERO SECTION COMPONENT
// ============================================
const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Build reliable digital products <span className="text-blue-600">faster</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              End-to-end product development, from idea to launch. Transform your vision into reality with our proven methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Get Started
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                See Demo
              </button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right illustration - IMAGE PLACEHOLDER */}
          <div className="relative">
            <img 
              src="https://unsplash.com/photos/a-laptop-computer-with-a-bunch-of-different-screens-on-top-of-it-XV2kGdTo9II" 
              alt="DWI Platform Dashboard Preview"
              className="relative z-10 rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform"
            />
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-teal-200 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// ABOUT SECTION COMPONENT
// ============================================
const AboutSection = () => {
  const highlights = [
    { icon: <TrendingUp className="w-8 h-8" />, title: 'Innovation First', desc: 'Cutting-edge solutions for modern challenges' },
    { icon: <Shield className="w-8 h-8" />, title: 'Enterprise Security', desc: 'Bank-grade encryption and compliance' },
    { icon: <Zap className="w-8 h-8" />, title: 'Lightning Fast', desc: 'Optimized performance at scale' },
    { icon: <Users className="w-8 h-8" />, title: 'Expert Team', desc: '50+ experienced professionals' }
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About DWI Private Limited
          </h2>
          <p className="text-lg text-gray-600">
            DWI creates scalable solutions that help businesses automate workflows and delight users. We combine cutting-edge technology with user-centered design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => (
            <div key={idx} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow bg-white">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// PRODUCTS SECTION COMPONENT
// ============================================
const ProductsSection = () => {
  const products = [
    {
      title: 'Dashboard',
      description: 'Comprehensive analytics and insights at your fingertips with real-time data visualization.',
      icon: <TrendingUp className="w-6 h-6" />,
      image: 'https://placehold.co/400x300/3b82f6/ffffff?text=Dashboard'
    },
    {
      title: 'Analytics',
      description: 'Deep dive into metrics that matter with advanced reporting and forecasting tools.',
      icon: <Shield className="w-6 h-6" />,
      image: 'https://placehold.co/400x300/14b8a6/ffffff?text=Analytics'
    },
    {
      title: 'Integrations',
      description: 'Connect seamlessly with 100+ tools and platforms to streamline your workflow.',
      icon: <Zap className="w-6 h-6" />,
      image: 'https://placehold.co/400x300/8b5cf6/ffffff?text=Integrations'
    },
    {
      title: 'Mobile App',
      description: 'Access your workspace anywhere with our native iOS and Android applications.',
      icon: <Users className="w-6 h-6" />,
      image: 'https://placehold.co/400x300/f59e0b/ffffff?text=Mobile+App'
    }
  ];

  return (
    <section id="products" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful tools designed to accelerate your workflow and drive results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100 group overflow-hidden"
            >
              {/* Product Image */}
              <img 
                src={product.image} 
                alt={`${product.title} preview`}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {product.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  Learn more <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// WHY CHOOSE US SECTION COMPONENT
// ============================================
const WhyChooseUsSection = () => {
  const reasons = [
    { title: 'Reliability', stat: '99.9% Uptime', description: 'Enterprise-grade infrastructure you can count on' },
    { title: 'Security', stat: 'SOC 2 Certified', description: 'Bank-level encryption and compliance' },
    { title: 'Support', stat: '24/7 Available', description: 'Expert help whenever you need it' },
    { title: 'Speed', stat: '<100ms Response', description: 'Lightning-fast performance globally' }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose DWI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver excellence across every aspect of our service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, idx) => (
            <div key={idx} className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">{item.stat}</div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// TESTIMONIALS SECTION COMPONENT
// ============================================
const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "DWI transformed our product development process. We shipped 3x faster and our customers love the results.",
      author: "Sarah Chen",
      role: "VP of Engineering",
      company: "TechCorp Inc.",
      avatar: "https://placehold.co/100x100/3b82f6/ffffff?text=SC"
    },
    {
      quote: "The best decision we made was partnering with DWI. Their expertise and support are unmatched in the industry.",
      author: "Michael Rodriguez",
      role: "CTO",
      company: "Innovation Labs",
      avatar: "https://placehold.co/100x100/14b8a6/ffffff?text=MR"
    },
    {
      quote: "From concept to launch in record time. DWI's platform gave us the competitive edge we needed.",
      author: "Emily Watson",
      role: "Product Director",
      company: "Future Systems",
      avatar: "https://placehold.co/100x100/8b5cf6/ffffff?text=EW"
    },
    {
      quote: "Outstanding reliability and performance. Our team productivity increased by 40% after implementing DWI's solutions.",
      author: "David Park",
      role: "Head of Operations",
      company: "Global Dynamics",
      avatar: "https://placehold.co/100x100/f59e0b/ffffff?text=DP"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Trusted by leading companies worldwide
          </p>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-blue-100">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-lg mb-6 leading-relaxed">"{testimonials[activeTestimonial].quote}"</p>
            <div className="flex items-center gap-4">
              <img 
                src={testimonials[activeTestimonial].avatar} 
                alt={testimonials[activeTestimonial].author}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-semibold">{testimonials[activeTestimonial].author}</div>
                <div className="text-sm text-blue-100">
                  {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === activeTestimonial ? 'bg-white w-8' : 'bg-white/40'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// FOOTER COMPONENT
// ============================================
const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">DWI</div>
            <p className="text-sm mb-4">Building the future of digital products, one solution at a time.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5" />
                <span>contact@dwi.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 Business St, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with our latest news and products.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>© 2024 DWI Private Limited. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ============================================
// MAIN APP COMPONENT
// ============================================
const DWIHomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isScrolled={isScrolled} />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default DWIHomePage;