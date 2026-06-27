import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
    return (
        <div className='min-h-screen overflow-hidden p-2 font-[system-UI]'>
            <Nav />
            <Hero />
            <Feature />
            <Pricing />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default App