import React, { useState, useEffect } from 'react';
import logo from "../../assets/logo.png";
import { FaBars } from 'react-icons/fa'; // Changed from FaHamburger to FaBars (more standard)

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // CORRECTED: navLinks with proper section IDs
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },      // Fixed: Swapped with Value
    { href: "#values", label: "Our Values" },    // Fixed: Changed from #value to #values
    { href: "#products", label: "Products" },    // Fixed: Changed from "Our Products" to match ID
    { href: "#contact", label: "Contact" }       // Added Contact link
  ];

  // Smooth scroll function
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setMobileMenuOpen(false); // Close mobile menu after clicking
  };

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
          : 'bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#B22222]/20 to-[#2D5A27]/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>
              <img 
                src={logo} 
                alt="Food Culture" 
                className="h-16 w-auto relative transform group-hover:scale-105 transition-all duration-500 cursor-pointer"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative group"
              >
                <span className={`
                  font-body text-sm tracking-[0.1em] uppercase font-medium
                  transition-all duration-300
                  ${hoveredLink === index ? 'text-white' : 'text-white/80'}
                  ${hoveredLink !== null && hoveredLink !== index ? 'opacity-50' : 'opacity-100'}
                `}>
                  {link.label}
                </span>
                
                {/* Underline effect */}
                <span className={`
                  absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-[#B22222] to-[#2D5A27]
                  transition-all duration-500 ease-out
                  ${hoveredLink === index ? 'w-full' : 'w-0'}
                `}></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <FaBars size={24} />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1A1A1A]/95 backdrop-blur-xl rounded-lg mt-2 p-4 border border-white/10">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="block py-3 text-white/80 hover:text-white border-b border-white/10 last:border-0 transition-colors font-body"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;