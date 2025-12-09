// src/components/Footer.jsx
import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Send, Sparkles, ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  const handleNewsletterSubmit = async () => {
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setEmail("");
    alert("Thank you for subscribing! 🎉");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Linkedin, url: "https://www.linkedin.com/", color: "from-blue-500 to-blue-600", hoverColor: "group-hover:text-blue-400" },
    { icon: Twitter, url: "https://twitter.com/", color: "from-sky-500 to-sky-600", hoverColor: "group-hover:text-sky-400" },
    { icon: Facebook, url: "https://facebook.com/", color: "from-blue-600 to-blue-700", hoverColor: "group-hover:text-blue-500" }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Careers', href: '#careers' },
    { name: 'Blog', href: '#blog' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-gray-300 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-grid-line"
              style={{
                left: `${i * 5}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-grid-line-horizontal"
              style={{
                top: `${i * 5}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Mouse-follow gradient spotlight */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 600px at ${mousePos.x}% ${mousePos.y}%, rgba(59, 130, 246, 0.3), transparent)`
        }}
      />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float-orb" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float-orb" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-teal-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float-orb" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        {/* Top section - Newsletter */}
        <div className="mb-16 pb-16 border-b border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm font-semibold text-white">Stay Updated</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-text-glow">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              Get the latest updates, news, and exclusive offers delivered to your inbox.
            </p>

            <div className="relative max-w-md mx-auto group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-75 blur transition-all duration-500" />
              
              <div className="relative flex gap-2 bg-white/10 backdrop-blur-xl rounded-full p-2 border border-white/20">
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleNewsletterSubmit()}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={handleNewsletterSubmit}
                  disabled={isSubmitting || !email}
                  className="relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group/btn"
                  aria-label="Subscribe to newsletter"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Subscribe
                        <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="relative inline-block group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-75 blur transition-all duration-500" />
              <div className="relative text-4xl font-black bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">
                DWI
              </div>
            </div>
            
            <p className="text-sm text-gray-400 leading-relaxed">
              Building the future of digital products, one solution at a time. Empowering businesses worldwide.
            </p>

            {/* Social links with hover effects */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label={social.icon.name}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity`} />
                    <Icon className={`w-5 h-5 relative z-10 text-gray-400 transition-colors ${social.hoverColor}`} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm hover:text-white transition-all hover:translate-x-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg relative inline-block">
              Contact
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />
            </h3>
            <ul className="space-y-4">
              <li className="group flex items-start gap-3 cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-all group-hover:scale-110">
                  <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Email</div>
                  <a href="mailto:contact@dwi.com" className="text-sm group-hover:text-white transition-colors">contact@dwi.com</a>
                </div>
              </li>
              <li className="group flex items-start gap-3 cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-all group-hover:scale-110">
                  <Phone className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Phone</div>
                  <a href="tel:+15551234567" className="text-sm group-hover:text-white transition-colors">+1 (555) 123-4567</a>
                </div>
              </li>
              <li className="group flex items-start gap-3 cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all group-hover:scale-110">
                  <MapPin className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Location</div>
                  <address className="text-sm not-italic group-hover:text-white transition-colors">123 Business St, Tech City</address>
                </div>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg relative inline-block">
              Resources
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-teal-500 to-transparent" />
            </h3>
            <ul className="space-y-3">
              {['Documentation', 'API Reference', 'Tutorials', 'Community', 'Support'].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group flex items-center gap-2 text-sm hover:text-white transition-all hover:translate-x-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>© {currentYear} DWI Private Limited.</span>
              <span className="hidden md:inline">Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="hidden md:inline">in India</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl shadow-blue-500/50 flex items-center justify-center transition-all duration-500 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 group ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>

      <style>{`
        @keyframes grid-line {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.5; }
        }
        @keyframes grid-line-horizontal {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.5; }
        }
        @keyframes float-orb {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, -40px); }
        }
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { text-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-grid-line { animation: grid-line ease-in-out infinite; }
        .animate-grid-line-horizontal { animation: grid-line-horizontal ease-in-out infinite; }
        .animate-float-orb { animation: float-orb 8s ease-in-out infinite; }
        .animate-text-glow { animation: text-glow 3s ease-in-out infinite; }
        .animate-gradient-shift {
          background-size: 200% auto;
          animation: gradient-shift 4s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;