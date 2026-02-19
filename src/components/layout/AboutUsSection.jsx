import React from 'react';
import aboutImg1 from '../../assets/fufu3.jpg'; // Add your image
import aboutImg2 from '../../assets/fufu3.jpg'; // Add your image

function AboutUsSection() {
  return (
    <section className="relative py-24 bg-[#F8F6F0] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#2D5A27]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B22222]/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-4">
            The <span className="text-[#2D5A27]">Fufu</span> Experience
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-16 h-1 bg-[#2D5A27]"></div>
            <div className="w-16 h-1 bg-[#B22222]"></div>
            <div className="w-16 h-1 bg-[#1A1A1A]"></div>
          </div>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Crafting perfection through tradition and passion
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#2D5A27]/10 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-[#2D5A27] rounded-full animate-pulse"></div>
              <span className="font-body text-sm font-medium text-[#2D5A27] tracking-wider uppercase">
                Since 1995
              </span>
            </div>

            {/* Story Paragraph - Formatted beautifully */}
            <div className="space-y-6">
              <p className="font-body text-lg text-gray-700 leading-relaxed">
                Our fufu is <span className="font-bold text-[#2D5A27]">stone-ground</span> and{' '}
                <span className="font-bold text-[#2D5A27]">traditionally dried</span>, giving it 
                that perfect, smooth stretch and authentic taste you'll remember. Every batch is 
                crafted to pair perfectly with any of our wild game soups.
              </p>
              
              <div className="relative pl-6 border-l-4 border-[#B22222]">
                <p className="font-body text-lg text-gray-700 italic">
                  "The preparation to achieve the end product is laborious and exhausting, 
                  but we never compromise."
                </p>
              </div>
              
              <p className="font-body text-lg text-gray-700 leading-relaxed">
                <span className="font-bold text-[#B22222]">We do not soak our cassava with soap</span> 
                or any chemicals at all. Our process is pure, natural, and time-honored.
              </p>
            </div>

            {/* Our Vision Highlight */}
            <div className="bg-gradient-to-r from-[#2D5A27]/5 to-transparent p-6 rounded-2xl">
              <h3 className="font-heading text-2xl text-[#1A1A1A] mb-3">Our Vision</h3>
              <p className="font-body text-gray-700">
                To give you healthy farm produce in a{' '}
                <span className="font-bold text-[#2D5A27]">hygienic environment</span>, 
                preserving the authentic taste of tradition while ensuring the highest 
                standards of cleanliness and quality.
              </p>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImg1} 
                alt="Traditional fufu preparation" 
                className="w-full h-[500px] object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
            
               
            </div>
 
             

            {/* Decorative Elements */}
            <div className="absolute top-10 -right-5 w-24 h-24 bg-[#2D5A27]/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 -right-10 w-32 h-32 bg-[#B22222]/10 rounded-full blur-2xl"></div>
          </div>
        </div>

      

        {/* Call to Action */}
        <div className="text-center mt-20">
          <button className="group relative inline-flex items-center space-x-3 bg-[#1A1A1A] text-white px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl">
            {/* Background hover effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#2D5A27] to-[#B22222] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            
            {/* Content */}
            <span className="relative font-body font-medium tracking-wide">Order Fufu Now</span>
            <svg className="relative w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;