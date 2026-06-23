import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'

const App = () => {
    return (
        <div className='min-h-screen overflow-hidden p-2'>
            <Nav />
            <Hero />
        </div>
    )
}

export default App