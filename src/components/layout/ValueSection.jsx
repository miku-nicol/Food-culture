import React from 'react';
import img1 from '../../assets/casa2.jpg';

function ValueSection() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "100% Organic",
      description: "All our produce is grown naturally without harmful chemicals"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Fresh Daily",
      description: "Harvested and delivered fresh to your table every day"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Ethically Sourced",
      description: "Sustainable practices that respect nature and tradition"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden" id='values'>
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: `url(${img1})`,
        }}
      >
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
            Our Values
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-12 h-1 bg-[#2D5A27]"></div>
            <div className="w-12 h-1 bg-[#B22222]"></div>
            <div className="w-12 h-1 bg-white"></div>
          </div>
          <p className="font-body text-lg text-gray-300 max-w-2xl mx-auto">
            Rooted in tradition, committed to quality, and driven by passion
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 
                         border border-white/20 hover:border-[#B22222]/50
                         transition-all duration-500 hover:transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#2D5A27]/20 rounded-2xl flex items-center justify-center 
                            text-[#B22222] mb-6 group-hover:scale-110 group-hover:bg-[#B22222]/20 
                            transition-all duration-300">
                {value.icon}
              </div>

              {/* Content */}
              <h3 className="font-heading text-2xl text-white mb-3">
                {value.title}
              </h3>
              <p className="font-body text-gray-300 leading-relaxed">
                {value.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 
                            border-[#B22222]/0 group-hover:border-[#B22222]/30 
                            transition-all duration-500 rounded-tr-2xl"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "2+", label: "Years of Experience" },
            { number: "30+", label: "Local Farmers" },
            { number: "300+", label: "Happy Customers" },
            { number: "24/7", label: "Fresh Supply" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-heading text-3xl md:text-4xl text-[#B22222] mb-2">
                {stat.number}
              </div>
              <div className="font-body text-sm uppercase tracking-wider text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValueSection;