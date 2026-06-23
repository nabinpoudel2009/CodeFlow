import React, { useEffect, useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { codeSnap, floatingCards, textChange } from '../data/codeSnap';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { GiNightSleep } from 'react-icons/gi';
import { IoSparklesOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import SyntaxHighlighter from "react-syntax-highlighter";

const Hero = () => {

    const [mousePosition, setMousePosition] = useState({x:0, y:0})
    const [activeTab, setActiveTab] = useState("App.jsx")

    useEffect(() => {
        function mouseMove(e) {
            setMousePosition({x: e.clientX, y: e.clientY});
        }

        window.addEventListener("mousemove", mouseMove)
        return () => window.removeEventListener("mousemove", mouseMove)
    }, [])

    return (
        <section className='relative min-h-screen flex items-center justify-center pt-15 sm:p-20 px-4 sm:px-6 lg:px-10 overflow-x-hidden'>
            <div className="absolute inset-0 opacity-50"
                style={{
                    background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 150, 255, 0.2), transparent 100%)`,
                }}
            />

            <div className='absolute -top-10 left-4 sm:-left-5 w-48 sm:w-72 h-48 sm:h-72 bg-sky-500/10 rounded-full blur-3xl animate-pulse'/>
            <div className='absolute bottom-5 -right-20 sm:-right-30 w-64 sm:w-96 h-64 sm:h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse'/>

            {/* Main Content */}

            <div className='relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-between order-2 w-full'>
                
                <div className='w-full text-center lg:text-start mb-10 cursor-pointer'>
                    <div className='flex justify-center lg:justify-normal mb-3'>
                        <div className='flex text-xs space-x-2 border items-center border-blue-300/10 backdrop-blur-2xl bg-blue-300/10 rounded-xl px-1.5 py-1'>
                            <IoSparklesOutline className='text-blue-400' />
                            <span className='text-xs text-blue-300/70'>Introducing CodeFlow AI v2.10</span>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-gray-200/90 sm:text-5xl lg:text-6xl text-4xl'>
                            <span className={`font-bold ${textChange[activeTab].textColor}`}>Code</span> Faster <br /> <span className={`font-bold ${textChange[activeTab].textColor}`}>Build</span> Better <br /> With CodeFlow AI
                        </h3>
                        <p className='text-xs mt-2 text-gray-300/90'>
                            Accelerate Your development workflow with intelligent code completion, automated testing, and smart debugging. Ship production-ready code 10x faster.
                        </p>
                        <button className='bg-linear-to-b w-full lg:w-1/3 from-blue-500/90 to-blue-600/60 flex items-center gap-2 rounded-lg justify-center py-2 mt-3'>
                            Start Now <FaArrowRight />
                        </button>
                    </div>
                </div>

                {/* Code Part */}
                <div className='relative bg-white/4 backdrop-blur-2xl rounded-xl sm:rounded-2xl p-3 flex justify-between items-center flex-wrap sm:p-4 shadow-2xl border border-white/10'>
                    <div className='bg-linear-to-br from-gray-900/20 to-gray-700/10 backdrop-blur-2xl rounded-lg overflow-hidden h-100 w-full lg:h-112.5 border border-white/10 ' id='Right'>
                        {/* Code section */}
                        <div className='flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-2 border-white/5'>
                            <div className='flex items-center space-x-1 sm:space-x-2'>
                                <div className='h-2 w-2 sm:h-3 sm:w-3 bg-red-500 rounded-full' />
                                <div className='h-2 w-2 sm:h-3 sm:w-3 bg-yellow-500 rounded-full' />
                                <div className='h-2 w-2 sm:h-3 sm:w-3 bg-green-500 rounded-full' />
                                <h4 className='text-xs ml-1 sm:text-sm text-gray-300'>CodeFLow AI</h4>
                            </div>
                            <FaChevronDown className='text-gray-300 sm:h-5 sm:w-5'/>
                        </div>
                        <div className='p-2 flex items-center space-x-5'>
                            <button 
                                className={`p-2 text-sm backdrop-blur-xl ${activeTab === "App.jsx" ? "bg-sky-500/40 text-white" : "bg-gray-300/10"} rounded-sm text-gray-300 transition-all hover:text-white duration-200 hover:border hover:border-white/50 ease-in-out border border-white/30`} 
                                onClick={() => setActiveTab("App.jsx")}
                            >
                                App.jsx
                            </button>
                            <button 
                                className={`p-2 text-sm backdrop-blur-xl ${activeTab === "Hero.jsx" ? "bg-sky-500/40 text-white" : "bg-gray-300/10"} rounded-sm text-gray-300 transition-all hover:text-white duration-200 hover:border hover:border-white/50 ease-in-out border border-white/30`} 
                                onClick={() => setActiveTab("Hero.jsx")}
                            >
                                Hero.jsx
                            </button>
                            <button 
                                className={`p-2 text-sm backdrop-blur-xl ${activeTab === "Navbar.jsx" ? "bg-sky-500/40 text-white" : "bg-gray-300/10"} rounded-sm text-gray-300 transition-all hover:text-white hover:border hover:border-white/50 duration-200 ease-in-out border border-white/30`}
                                onClick={() => setActiveTab("Navbar.jsx")}
                            >
                                Navbar.jsx
                            </button>
                        </div>

                        {/* Code Snap */}
                        <div className='relative flex-1 min-w-0  bg-gray-900/30 p-0'>
                            <SyntaxHighlighter 
                                language="javascript"
                                style={nightOwl}
                                customStyle={{
                                    scrollBehavior:'auto',
                                    margin: 0,
                                    background: "transparent",
                                    padding: "12px",
                                    width: "100%",
                                    overflowX:"auto",
                                    overflowY:"auto",
                                    maxHeight: "350px",
                                    scrollbarWidth:"none"
                                }}
                            >
                                {codeSnap[activeTab]}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
                <div className={`absolute bottom-4 right-4 hidden md:block transform rounded-lg border ${floatingCards[activeTab].border} translate-x-8 translate-y-10 p-3 w-70 h-21 sm:w-90 mr-3 ${floatingCards[activeTab].bgColor}`}>
                    <div className='flex items-center space-x-2 mb-2'>
                        <div className={`w-6 h-6 ${floatingCards[activeTab].iconColor}`}> {floatingCards[activeTab].icon} </div>
                        <span className={`text-sm font-medium ${floatingCards[activeTab].textColor}`}> {floatingCards[activeTab].title} </span>
                    </div>
                    <div className={`text-xs sm:text-sm font-medium ${floatingCards[activeTab].contentColor}`}> {floatingCards[activeTab].content} </div>
                </div>
            </div>
        </section>
    )
}

export default Hero