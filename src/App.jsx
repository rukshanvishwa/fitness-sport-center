import React from 'react'
import Navbar from './components/NavBar'
import Hero from './sections/Hero'

const App = () => {
  return (
    <>
      <div className='bg-background'>
        <Navbar />
        <Hero />
      </div>

    </>
  )
}

export default App