import React from 'react'
import Navbar from '../components/Navbar'
import Hero from "../components/Hero"

const Home = () => {
  return (
    <div>
        <div className='sticky top-0 left-0 w-full'>
          <Navbar />
        </div>
        <Hero />
    </div>
  )
}

export default Home