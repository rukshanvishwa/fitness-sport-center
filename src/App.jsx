import React from 'react'
import Navbar from './components/NavBar'
import Hero from './sections/Hero'
import StoryLine from './components/StoryLine'
import About from './sections/About'

const App = () => {
  return (
    <>
      <div className='bg-background'>
        <Navbar />
        <Hero />
        <StoryLine />
        <About />
      </div>

    </>
  )
}

export default App