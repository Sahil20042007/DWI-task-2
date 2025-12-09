
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, Check, Star, ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Facebook,
  TrendingUp, Shield, Zap, Users, Sparkles, Rocket, Code, Database 
} from 'lucide-react';

// IMPORT ALL YOUR CUSTOM COMPONENTS  
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

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

export default DWIHomePage