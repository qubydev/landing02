import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import WhatYouWillLearn from './components/WhatYouWillLearn'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Products from './components/Products'
import Join from './pages/Join'
import Ebook from './pages/Ebook'
import EbookFull from './pages/EbookFull'

function ScrollToHash() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [hash])

  return null
}

function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <div className="bg-[#040005]">
        <section id="about">
          <Intro />
          <WhatYouWillLearn />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="reviews">
          <Reviews />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </div>
    </>
  )
}

export default function App() {
  return (
    <div className="scroll-smooth">
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/ebook" element={<EbookFull />} />
        <Route path="/ebook-payment" element={<Ebook />} />
      </Routes>
    </div>
  )
}
