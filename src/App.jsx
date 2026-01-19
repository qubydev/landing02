import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import WhatYouWillLearn from './components/WhatYouWillLearn'
import Testimonials from './components/Testimonials'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='bg-[#040005]'>
        <Intro />
        <WhatYouWillLearn />
        <Testimonials />
      </div>
    </div>
  )
}
