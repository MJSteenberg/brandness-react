import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import FeaturedWork from './components/FeaturedWork.jsx'
import Inspiration from './components/Inspiration.jsx'
import Footer from './components/Footer.jsx'
import FloatingChat from './components/FloatingChat.jsx'

function App() {
  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeaturedWork />
        <Inspiration />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  )
}

export default App
