import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import FloatingChat from './components/FloatingChat.jsx'
import Home from './pages/Home.jsx'
import FontShowcase from './components/FontShowcase.jsx'

function App() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [location])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fonts" element={<FontShowcase />} />
        </Routes>
      </main>
      <Footer />
      <FloatingChat />
    </div>
  )
}

export default App
