import React from 'react'
import Navbar from './components/NavBar'
import Hero from './sections/Hero'
import StoryLine from './components/StoryLine'
import About from './sections/About'
import Services from './sections/Services'

const App = () => {
  return (
    <>
      <div className='bg-background'>
        <Navbar />
        <Hero />
        <StoryLine />
        <About />
        <Services />
      </div>

    </>
  )
}

export default App