import React, { useState, useEffect } from 'react';
import logo from "../../assets/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#value", label: "Value" },
    { href: "#products", label: "Our Products" }
  ];

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#1A1A1A]/95 backdrop-blur-xl shadow-2xl' 
          : 'bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm '
      }`}
    >
      {/* Premium top accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#B22222] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with premium hover effect */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#B22222]/20 to-[#2D5A27]/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <img 
              src={logo} 
              alt="Food Culture" 
              className="h-20 w-auto relative transform group-hover:scale-105 transition-all duration-500"
            />
          </div>

          {/* Navigation Links - Premium Version */}
          <div className="hidden md:flex items-center space-x-14">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative group"
              >
                {/* Link text */}
                <span className={`
                  font-body text-sm tracking-[0.2em] uppercase font-medium
                  transition-all duration-300
                  ${hoveredLink === index ? 'text-white' : 'text-white/80'}
                  ${hoveredLink !== null && hoveredLink !== index ? 'opacity-50' : 'opacity-100'}
                `}>
                  {link.label}
                </span>
                
                {/* Premium double underline effect */}
                <span className={`
                  absolute -bottom-2 left-0 h-[1px] bg-gradient-to-r from-[#B22222] to-[#2D5A27]
                  transition-all duration-500 ease-out
                  ${hoveredLink === index ? 'w-full' : 'w-0'}
                `}></span>
                
                {/* Second underline (delayed) */}
                <span className={`
                  absolute -bottom-3 left-0 h-[1px] bg-white/30
                  transition-all duration-500 delay-100 ease-out
                  ${hoveredLink === index ? 'w-2/3' : 'w-0'}
                `}></span>
                
                {/* Hover background effect */}
                <div className="absolute inset-0 -z-10 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </a>
            ))}
          </div>

          
            
             

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Subtle bottom shadow */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </nav>
  );
}

export default Navbar;