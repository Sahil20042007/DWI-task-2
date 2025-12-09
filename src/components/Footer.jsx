// src/components/Footer.jsx
import React from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // TODO: call newsletter API or show success state
    alert("Thank you! (Newsletter submit handler not implemented)");
  };

  return (
    <footer id="contact" className="relative bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">DWI</div>
            <p className="text-sm mb-6 text-gray-400 leading-relaxed">Building the future of digital products, one solution at a time.</p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>

              <a
                href="https://facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {['About', 'Products', 'Pricing', 'Careers', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 mt-0.5 text-blue-400 group-hover:scale-110 transition-transform" />
                <a href="mailto:contact@dwi.com" className="group-hover:text-white transition-colors">contact@dwi.com</a>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 mt-0.5 text-teal-400 group-hover:scale-110 transition-transform" />
                <a href="tel:+15551234567" className="group-hover:text-white transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 mt-0.5 text-purple-400 group-hover:scale-110 transition-transform" />
                <address className="not-italic group-hover:text-white transition-colors">123 Business St, Tech City, TC 12345</address>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Newsletter</h3>
            <p className="text-sm mb-4 text-gray-400">Stay updated with our latest news and products.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Subscribe to newsletter"
              >
                <Mail className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-gray-400">© {currentYear} DWI Private Limited. All rights reserved.</div>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
