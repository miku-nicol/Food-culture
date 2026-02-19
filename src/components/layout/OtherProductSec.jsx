import React from 'react';
import img1 from '../../assets/casa2.jpg';

function OtherProductSec() { 
   const products = [
        { name: "Palm Oil", description: "Rich, natural red palm oil" },
        { name: "Vegetable Oil", description: "Pure and refined" },
        { name: "Bush Meat", description: "Wild game, ethically sourced"},
        { name: "Garri", description: "Fermented cassava flakes"},
        { name: "Plantain", description: "Fresh green & ripe plantains" },
        { name: "Palm Wine", description: "Fresh tapped, natural"}
    ];

    const services = [
        { name: "Farming Consultancy & Planning", description: "Expert advice for your farm"},
        { name: "Farming Training & Support", description: "Hands-on agricultural education" },
        { name: "Food Processing Training", description: "Learn traditional & modern methods" },
        { name: "Farm Land Acquisition", description: "Assistance with land sourcing"}
    ];

  return (
    <section className='relative py-24 overflow-hidden'>
            {/* Background */}
            <div className='absolute w-full h-full bg-cover bg-center bg-fixed inset-0'
                style={{
                    backgroundImage: `url(${img1})`,
                }}>
                <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/80'></div>
            </div>

            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                
                {/* Header */}
                <div className='text-center mb-16'>
                    <h2 className='font-heading text-4xl md:text-5xl lg:text-6xl text-white'>
                        Other <span className='text-[#B22222]'>Products</span> & 
                        <span className='text-[#2D5A27]'> Services</span>
                    </h2>
                    <div className='flex justify-center pt-6 pb-4 gap-2'>
                        <div className='w-16 h-1 bg-[#2D5A27]'></div>
                        <div className='w-16 h-1 bg-[#B22222]'></div>
                        <div className='w-16 h-1 bg-white'></div>
                    </div>
                    <p className='font-body text-gray-300 text-lg max-w-2xl mx-auto'>
                        Beyond our premium fufu, we offer a variety of traditional products 
                        and expert services to support your agricultural needs
                    </p>
                </div>

                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
                    
                    {/* Products Column */}
                    <div className='space-y-6'>
                        <div className='flex items-center space-x-3 mb-8'>
                            <div className='w-1 h-8 bg-[#B22222]'></div>
                            <h3 className='font-heading text-3xl text-white'>Our Products</h3>
                            <div className='flex-1 h-[1px] bg-gradient-to-r from-[#B22222] to-transparent'></div>
                        </div>
                        
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            {products.map((item, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white/10 backdrop-blur-md rounded-xl p-5 
                                             border border-white/20 hover:border-[#B22222]/50
                                             transition-all duration-500 hover:transform hover:-translate-y-2
                                             hover:shadow-2xl hover:shadow-[#B22222]/20"
                                >
                                    {/* Product Name with Price */}
                                    <div className='flex justify-between items-start mb-2'>
                                        <h4 className="font-heading text-lg text-white">
                                            {item.name}
                                        </h4>
                    
                                    </div>
                                    
                                    {/* Description */}
                                    <p className="font-body text-sm text-gray-300">
                                        {item.description}
                                    </p>
                                    
                                    {/* Add to Cart Button */}
                                   
                                    
                                    {/* Hover Decoration */}
                                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 
                                                  border-[#B22222]/0 group-hover:border-[#B22222]/30 
                                                  transition-all duration-500 rounded-tr-xl"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className='space-y-6'>
                        <div className='flex items-center space-x-3 mb-8'>
                            <div className='w-1 h-8 bg-[#2D5A27]'></div>
                            <h3 className='font-heading text-3xl text-white'>Our Services</h3>
                            <div className='flex-1 h-[1px] bg-gradient-to-r from-[#2D5A27] to-transparent'></div>
                        </div>
                        
                        <div className='space-y-4'>
                            {services.map((item, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white/10 backdrop-blur-md rounded-xl p-5 
                                             border border-white/20 hover:border-[#2D5A27]/50
                                             transition-all duration-500 hover:transform hover:-translate-y-1
                                             hover:shadow-2xl hover:shadow-[#2D5A27]/20"
                                >
                                    <div className='flex items-start space-x-4'>
                                        {/* Decorative Dot */}
                                        <div className='w-2 h-2 mt-2 rounded-full bg-[#2D5A27] group-hover:scale-150 transition-transform duration-300'></div>
                                        
                                        <div className='flex-1'>
                                            {/* Service Name with Duration */}
                                            <div className='flex justify-between items-center mb-2'>
                                                <h4 className="font-heading text-lg text-white">
                                                    {item.name}
                                                </h4>
                                                <span className="text-[#2D5A27] text-xs bg-[#2D5A27]/20 px-2 py-1 rounded">
                                                    {item.duration}
                                                </span>
                                            </div>
                                            
                                            {/* Description */}
                                            <p className="font-body text-sm text-gray-300">
                                                {item.description}
                                            </p>
                                            
                                            
                                        </div>
                                    </div>
                                    
                                    {/* Hover Decoration */}
                                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 
                                                  border-[#2D5A27]/0 group-hover:border-[#2D5A27]/30 
                                                  transition-all duration-500 rounded-bl-xl"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-20">
                    <div className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-sm 
                                  border border-white/10 rounded-full px-6 py-3">
                        <span className="w-2 h-2 bg-[#2D5A27] rounded-full animate-pulse"></span>
                        <span className="font-body text-white">
                            Need bulk orders or custom services? 
                        </span>
                        <a 
                            href="#contact" 
                            className="font-heading text-[#B22222] hover:text-white transition-colors duration-300"
                        >
                            Contact us
                        </a>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default OtherProductSec;