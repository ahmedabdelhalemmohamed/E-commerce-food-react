import React from 'react'
import Navbar from '../components/Navbar'
import Hero from "../components/Hero"
import BestFoods from '../components/BestFoods'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <div>
          <Hero />
        </div>
        <div>
          <BestFoods />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default Home