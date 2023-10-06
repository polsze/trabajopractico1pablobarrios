import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SectionCards from './components/SectionCards'
import Hero from './components/Hero'
import { Contact } from './components/Contact'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header />
      <Hero />
      <SectionCards />
      <Contact />
      <Footer />
    </div>   
    </>
  )
}

export default App