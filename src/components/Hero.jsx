import React, { useEffect, useState } from 'react'

const Hero = () => {

    const [mousePosition, setMousePosition] = useState({x:0, y:0})

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
        </section>
    )
}

export default Hero