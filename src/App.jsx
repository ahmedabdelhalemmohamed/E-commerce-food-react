import React from 'react'
import Home from './pages/Home'
import { Router, Route, Routes } from 'react-router-dom'
import Shopping from './pages/Shopping'
import supabase from './supabase'
import Navbar from './components/Navbar'
import Foods from './pages/Foods'

const App = () => {

  console.log(supabase)

  return (
    <div className='min-h-screen'>
      <div className='sticky top-0 left-0 w-full z-70'>
          <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shopping" element={<Shopping />}/>
        <Route path="/foods" element={<Foods />}/>
      </Routes>
    </div>
  )
}

export default App