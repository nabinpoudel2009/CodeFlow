import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {

    return (
        <footer className=' mt-5 border-t border-white/20'>
            <div className='max-w-7xl p-2 sm:p-4 mx-auto'>
                <div className='flex justify-center lg:-translate-y-10.5 sm:-translate-y-9 md:-translate-y-10 -translate-y-8'>
                    <h3 className='text-xs'><span className='text-gray-200'>Developed by</span>
                        <a href="https://www.facebook.com/profile.php?id=61577790364237" target='_blank' className='ml-1 text-sm bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                            Nabin Poudel
                        </a>
                    </h3>
                </div>

                <h6 className='flex items-center gap-x-1 text-gray-500'>
                    <FaRegCopyright /> 
                    2026 CodeFlow. All right reserved.
                </h6>

                <div className='hidden lg:block items-center justify-between'>
                    <div>
                        <ul>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer