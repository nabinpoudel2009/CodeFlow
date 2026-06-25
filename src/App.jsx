import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Pricing from './components/Pricing'

const App = () => {
    return (
        <div className='min-h-screen overflow-hidden p-2 font-[system-UI]'>
            <Nav />
            <Hero />
            <Feature />
            <Pricing />
        </div>
    )
}

export default App