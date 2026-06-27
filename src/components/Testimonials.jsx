import React from 'react'
import { FaPause } from "react-icons/fa6";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Senior Developer",
        image:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
        content:
            "This AI-powered development platform has revolutionized how we write code. The intelligent suggestions save us hours every day. ",
    },

    {
        name: "Marcus Rodriguez",
        role: "Tech Lead",
        image:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
        content:
            "The automated testing and debugging features are game-changers. We ship code faster and with more confidence than ever before.",
    },

    {
        name: "Emily Watson",
        role: "CTO",
        image:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
        content:
            "Our development velocity increased by 300% since adopting this platform. It's like having a senior developer pair programming with every team member.",
    },

];

const Testimonials = () => {
    return (
        <section className='max-w-7xl grid grid-cols-1 lg:grid-cols-2 mx-auto justify-between items-start' id='testimonials'>

            {/* HEADING */}
            <div className="text-center lg:text-start mb-12 sm:mb-16 lg:mb-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 mb-1">
                    <span>
                        What <span className='bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent'>Developers</span> are
                    </span>
                    <br />
                    saying about us
                </h2>
                <p className='text-gray-400 text-xs sm:text-sm'>
                    Everything you need to build, test and deploy applications with AI-powered developments tools.
                </p>
            </div>

            {/* Feedback section */}

            <div className='p-2 mt-2 w-full'>
                <div>
                    {testimonials.map((testimonial, key) => (
                        <div 
                            className='bg-gray-900/80 backdrop-blur-2xl border transition-all duration-200 hover:border-white/20 border-white/10 mb-5 rounded-lg p-3 sm:p-4 lg:p-5'
                            key={key}
                        >
                            <div className='flex items-start space-x-3'>
                                <div className='text-xl sm:text-2xl font-bold bg-linear-to-r from-blue-400 to to-cyan-400 bg-clip-text text-transparent'>''</div>
                                <h5 className='text-xs sm:text-sm text-gray-300'>{testimonial.content}</h5>
                            </div>
                            <div className='flex items-center gap-x-2'>
                                <img src={testimonial.image} alt="Developers" className='w-10 md:w-12 h-10 md:h-12 object-cover ml-7 mt-2 rounded-full' />
                                <div className='text-sm lg:text-base mt-1 text-gray-200'>
                                    <h5>{testimonial.name}</h5>
                                    <h4 className='text-gray-500 text-xs lg:text-sm'>{testimonial.role}</h4>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            
        </section>
    )
}

export default Testimonials