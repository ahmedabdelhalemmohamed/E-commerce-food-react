import React from 'react'
import Home from './pages/Home'
import { Router, Route, Routes } from 'react-router-dom'
import Shopping from './pages/Shopping'
import Navbar from './components/Navbar'
import Store from './pages/Store'
import Dashboard from './pages/Dashboard'

const App = () => {


  return (
    <div className='min-h-screen'>
      <div className='sticky top-0 left-0 w-full z-70'>
          <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shopping" element={<Shopping />}/>
        <Route path="/basket" element={<Store />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </div>
  )
}

export default App