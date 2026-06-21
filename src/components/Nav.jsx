import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from 'react-icons/md';

const Nav = () => {

    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

    return (
        <nav className='text-white fixed top-0 w-full z-50 transition-all duration-150 ease-in-out bg-slate-950/95 backdrop-blur-xl'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-14 sm:h-16 md:h-20'>
                    <div className='flex items-center gap-x-1'>
                        <img 
                            src={logo}
                            alt="Logo"
                            className='w-6 sm:w-10' 
                        />
                        <div className='lg:text-xl flex'>
                            <span>Code</span>
                            <span className='text-cyan-500 font-bold'>Flow</span>
                        </div>
                    </div>
                    <div className='justify-between items-center space-x-6 hidden md:block'>
                        <a href="#" className='text-gray-300 hover:text-white transition-all duration-200 ease-in-out lg:text-base'>Home</a>
                        <a href="#pricing" className='text-gray-300 hover:text-white transition-all duration-200 ease-in-out lg:text-base'>Pricing</a>
                        <a href="#testimonials" className='text-gray-300 hover:text-white transition-all duration-200 ease-in-out lg:text-base'>Testimonials</a>
                    </div>
                    <button 
                        className='md:hidden text-xl items-center text-gray-300 hover:text-white'
                        onClick={() => setMobileMenuIsOpen((prev) => !prev)}
                    >
                        {mobileMenuIsOpen ? (
                            <MdOutlineClose className='text-3xl text-gray-300'/>

                        ) : (
                            <GiHamburgerMenu className='text-2xl text-gray-300' />
                        )
                        }
                    </button>
                </div>
            </div>
            {mobileMenuIsOpen && 
                <div className='md:hidden bg-slate-900/50 backdrop-blur-lg flex px-3 py-2 border-t'>
                    <div className='flex space-y-3 flex-col'>
                        <a 
                            href="#" 
                            className='text-gray-300 hover:text-white transition-all duration-200 ease-in-out lg:text-base' 
                            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
                        >
                            Home
                        </a>
                        <a 
                            href="#pricing" 
                            className='text-gray-300 hover:text-white transition-all duration-200 ease-in-out lg:text-base' 
                            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
                        >
                            Pricing
                        </a>
                        <a 
                            href="#testimonials" 
                            className='text-gray-300 hover:text-white transition-all duration-200 ease-in-out lg:text-base' 
                            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
                        >
                            Testimonials
                        </a>
                    </div>
                </div>
            }
        </nav>
    )
} 

export default Nav