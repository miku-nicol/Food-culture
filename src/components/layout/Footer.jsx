import React from 'react';
import logo from '../../assets/logo.png'; // Add your logo path

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Values", href: "#value" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
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
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      text: "123 Farm Road, Accra, Ghana"
    },
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      text: "+233 123 456 789"
    },
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: "info@foodculture.com"
    }
  ];

  const socialLinks = [
    { 
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
        </svg>
      ),
      href: "#"
    },
    { 
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
        </svg>
      ),
      href: "#"
    },
    { 
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.05-4.55 4.55 0 .36.03.72.1 1.06-3.78-.2-7.12-2-9.37-4.75-.4.7-.63 1.5-.63 2.36 0 1.64.83 3.08 2.1 3.93-.78-.02-1.5-.24-2.13-.6v.06c0 2.28 1.62 4.18 3.76 4.62-.4.1-.82.16-1.24.16-.3 0-.6-.03-.9-.08.6 1.9 2.35 3.28 4.43 3.32-1.62 1.27-3.66 2.03-5.88 2.03-.38 0-.76-.02-1.13-.07 2.1 1.35 4.6 2.13 7.3 2.13 8.76 0 13.55-7.26 13.55-13.55 0-.2 0-.4-.02-.6.93-.68 1.73-1.5 2.37-2.45z"/>
        </svg>
      ),
      href: "#"
    },
    { 
      name: "WhatsApp",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>
      ),
      href: "#"
    }
  ];

  return (
    <footer className="relative bg-[#1A1A1A] text-[#F8F6F0] overflow-hidden">
      {/* Decorative top border with brand colors */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2D5A27] via-[#B22222] to-[#2D5A27]"></div>
      
      {/* Background Pattern (subtle) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#2D5A27] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B22222] rounded-full blur-3xl"></div>
      </div>

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
                className="h-16 w-auto brightness-0 invert" // Makes logo white if needed
              />
            </div>
            
            <p className="font-body text-sm text-gray-400 leading-relaxed">
              Bringing the authentic taste of traditional African cuisine to your table with premium organic produce and ethically sourced products.
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
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-[#B22222] mt-1 flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="font-body text-sm text-gray-400">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="font-body text-sm text-gray-500">
              © {currentYear} Food Culture. All rights reserved.
            </p>

            {/* Footer Links */}
            <div className="flex space-x-6">
              <a href="#" className="font-body text-xs text-gray-500 hover:text-[#B22222] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-xs text-gray-500 hover:text-[#B22222] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="font-body text-xs text-gray-500 hover:text-[#B22222] transition-colors">
                Shipping Policy
              </a>
            </div>
            
          </div>
        </div>
      </div>

    
      
    </footer>
  );
}

export default Footer;