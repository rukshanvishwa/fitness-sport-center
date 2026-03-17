import React from 'react'
import Navbar from './components/NavBar'
import Hero from './sections/Hero'
import StoryLine from './components/StoryLine'

const App = () => {
  return (
    <>
      <div className='bg-background'>
        <Navbar />
        <Hero />
        <StoryLine />
      </div>

    </>
  )
}

export default App