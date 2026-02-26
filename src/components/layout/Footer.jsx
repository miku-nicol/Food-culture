import React from 'react';
import logo from '../../assets/logo.png'
import{ MapPin, MapPinned } from 'lucide-react'
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp} from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Values", href: "#value" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
   
  ];

  const products = [
    { name: "Fufu", href: "#fufu" },
    { name: "Palm Oil", href: "#palm-oil" },
    { name: "Bush Meat", href: "#bush-meat" },
    { name: "Garri", href: "#garri" },
    { name: "Plantain", href: "#plantain" },
    { name: "Palm Wine", href: "#palm-wine" }
  ];

  const services = [
    { name: "Farming Consultancy", href: "#consultancy" },
    { name: "Training Programs", href: "#training" },
    { name: "Food Processing", href: "#processing" },
    { name: "Land Acquisition", href: "#land" }
  ];

  const contactInfo = [
      { 
      icon: (
        <FaEnvelope className="w-5 h-5" />
      ),
      text:  <a href="mailto:foodculture@gmail.com">foodculture@gmail.com</a>
    },
    { 
      icon: (
         <FaPhone className="w-5 h-5" />
      ),
      text:  <a href="tel:2347088530047">+2347088530047</a>
    },
     {
    icon: (
      <FaWhatsapp className='w-5 h-5'/>
    ),
    text: <a href="https://wa.me/2349112797560">+2349112797560</a>
    },
  
    { 
      icon: (
        
<MapPin className="w-5 h-5 text-[#B22222]" />
      ),
      text: "3, icempire karaloe estates,lagos,Nigeria"
    },
   
  ];

  const socialLinks = [
    { 
      name: "Facebook",
      icon: (
         <FaFacebook className='w-5 h-5'/>
      ),
      href: "#"
    },
    { 
      name: "Instagram",
      icon: (
        <FaInstagram/>
      ),
      href: "#"
    },
    { 
      name: "Twitter",
      icon: (
         <FaTwitter/>
      ),
      href: "#"
    },
    { 
      name: "WhatsApp",
      icon: (
         <FaWhatsapp/>
      ),
      href: "https://wa.me/2349112797560"
    }
  ];

  return (
    <footer className="relative bg-[#1A1A1A] text-[#F8F6F0] overflow-hidden" id='contact'>
      {/* Decorative top border with brand colors */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2D5A27] via-[#B22222] to-[#2D5A27]"></div>
      
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="mb-6">
              <img 
                src={logo} 
                alt="Food Culture" 
                className="h-16 w-auto " // Makes logo white if needed
              />
            </div>
            
            <p className="font-body text-sm text-gray-400 leading-relaxed">
               Producing farm fresh food for all affordable price in a hygienic environment
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 hover:bg-[#B22222] rounded-lg flex items-center justify-center 
                           text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#B22222]"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="font-body text-sm text-gray-400 hover:text-[#B22222] transition-colors duration-300 
                             flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#B22222] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading text-xl text-white mb-6 relative inline-block">
              Our Products
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#2D5A27]"></span>
            </h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <a 
                    href={product.href}
                    className="font-body text-sm text-gray-400 hover:text-[#2D5A27] transition-colors duration-300
                             flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#2D5A27] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl text-white mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#B22222]"></span>
            </h3>
            <ul className="space-y-4 ">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-[#B22222] mt-1 flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="font-body text-sm text-gray-400 hover:text-[#2D5A27] ">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="justify-self-center md: justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="font-body text-sm text-gray-500">
              © {currentYear} Food Culture. All rights reserved.
            </p>

             
            
          </div>
        </div>
      </div>

    
      
    </footer>
  );
}

export default Footer;