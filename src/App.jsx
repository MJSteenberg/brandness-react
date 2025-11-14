import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import FloatingChat from './components/FloatingChat.jsx'
import Home from './pages/Home.jsx'
import FontShowcase from './components/FontShowcase.jsx'
import { scrollToWithOffset } from './utils/scrollWithOffset.js'
import Contact from './pages/Contact.jsx'

function App() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0 })
      return
    }

    let rafId
    let timeoutId

    const attemptScroll = () => {
      const element = document.querySelector(location.hash)
      if (element) {
        rafId = requestAnimationFrame(() => scrollToWithOffset(element))
      }
    }

    attemptScroll()
    timeoutId = setTimeout(attemptScroll, 220)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [location])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fonts" element={<FontShowcase />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingChat />
    </div>
  )
}

export default App
