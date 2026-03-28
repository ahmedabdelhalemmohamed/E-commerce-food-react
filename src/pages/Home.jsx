import React from 'react'
import Navbar from '../components/Navbar'
import Hero from "../components/Hero"
import BestFoods from '../components/BestFoods'

const Home = () => {
  return (
    <div>
        <div>
          <Hero />
        </div>
        <div>
          <BestFoods />
        </div>
    </div>
  )
}

export default Home