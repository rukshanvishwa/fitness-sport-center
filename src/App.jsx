import React from 'react'
import Navbar from './components/NavBar'
import Hero from './sections/Hero'
import StoryLine from './components/StoryLine'
import About from './sections/About'
import Services from './sections/Services'
import Trainer from './sections/Trainer'
import MembershipPlans from './sections/MembershipPlans'
import Contact from './sections/Contact'
import Footer from './sections/Footer'



const App = () => {
  return (
    <>
      <div className='bg-background'>
        <Navbar />
        <Hero />
        <StoryLine />
        <About />
        <Services />
        <Trainer />
        <MembershipPlans />
        <Contact />
        <Footer />

      </div>

    </>
  )
}

export default App