import React from 'react'
import { FaRegStar } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

const plan = [
    {
        name: "Starter",
        price: "29.99",
        description: "Perfect For Individuals and small teams.",
        features: [
            "Up to 5 team members",
            "5GB Storage",
            "Basic Analytics",
            "Email Support",
            "API Access",
            "Mobile App",
        ],
        mostPopular: false,
    },

    {
        name: "Enterprise",
        price: "199.99",
        description: "For Large Organizations",
        features: [
            "Upto 5K team members",
            "Unlimited storage",
            "Enterprise analytics",
            "24/7 phone support",
            "API Access",
            "Mobile App",
            "Custom integrations",
            "Advance security",
            "Dedicated account manager",
            "custom SLA",
            "99.99% uptime guarantee",
        ],
        mostPopular: true,
    },

    {
        name: "Professional",
        price: "69.99",
        description: "Best for growing businesses",
        features: [
            "Up to 25 team members",
            "50GB Storage",
            "Advanced Analytics",
            "Priority Support",
            "API Access",
            "Mobile App",
            "Custom integrations",
            "Advanced security",
        ],
        mostPopular: false,
    },
];

const Pricing = () => {
    return (
        <section 
            id='pricing' 
            className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative max-w-7xl mx-auto"
        >
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1">
                    <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent">
                        Simple Transparent
                    </span>
                    <br />
                    <span className="bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Pricing Plans 
                    </span>
                </h2>
                <p className='text-gray-400 text-xs sm:text-sm'>
                    Choose the perfect plan for your needs. All plans include a 14 day free trail.
                </p>
            </div>

            {/* Pricing Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5 sm:gap-8 lg:gap-6'>
                {plan.map((plan, key) => (
                    <div
                        key={key}
                        className={`overflow-visible relative hover:-translate-y-1 bg-slate-950/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-5 sm:p-7 transition-all duration-200 group flex flex-col h-full
                        ${plan.mostPopular ? "border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105" : "border-slate-600 duration-200 transition-all ease-in-out hover:border-slate-500"}`}
                    >
                        <div className='lg:hidden absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent opacity-100'/>

                        <div className='absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-200 transform -translate-x-full -translate-y-full rounded-xl group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none'/>
                        {plan.mostPopular && (
                            <div className='flex items-center justify-center -translate-y-7 sm:-translate-y-10'>
                                <div className='flex items-center space-x-1.5 bg-linear-to-b from-blue-500 to-cyan-500 px-1.5 py-0.5 rounded-xl'>
                                    <FaRegStar className='text-sm' />
                                    <span className='text-xs sm:text-sm font-semibold'>Most Popular</span>
                                </div>
                            </div>
                        )}

                        <div className='mb-5'>
                            <h3 className='text-center text-2xl font-bold'>{plan.name}</h3>
                            <p className='text-xs sm:text-sm text-gray-300 text-center '>{plan.description}</p>
                            <div className='text-center sm:text-3xl text-2xl font-bold mt-3'>
                                <span className='bg-linear-to-r from-blue-500 via-cyan-500 to-sky-500 bg-clip-text text-transparent'>{plan.price}</span>
                                <span className='text-xs sm:text-sm text-gray-400 ml-1'>/month</span>
                            </div>
                        </div>
                        <ul>
                            {plan.features.map((features, featureKey) => (
                                <ul key={featureKey} className='flex items-center my-2 gap-x-2 blur-no'>
                                    <FaCheck className='fill-blue-400/40 h-3 sm:h-4 w-3 sm:w-4 rounded-full border border-white/15 bg-blue-500/20' />
                                    <li className='text-gray-400 text-sm sm:text-base'>{features}</li>
                                </ul>
                            ))}
                        </ul>
                        <button className='bg-linear-to-r from-white/10 via-white/5 to-white/10 hover:bg-white/5 hover:border-white/40 hover:text-gray-200 transition-all backdrop-blur-3xl text-gray-300 border border-white/30 mt-3 sm:mt-6 rounded-lg py-1 sm:py-2'>Get Started</button>
                    </div>
                ))}
            </div>
            <div className='mt-5 sm:mt-7 lg:mt-10 text-center'>
                <p className='text-gray-500 text-sm sm:text-base'>
                    Need a custom plan?
                    <a href="" className='text-blue-400'> Contact us</a>
                </p>
            </div>
        </section>
    )
}

export default Pricing