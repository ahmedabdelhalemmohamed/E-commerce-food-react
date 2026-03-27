import React from 'react'
import Home from './pages/Home'
import { Router, Route, Routes } from 'react-router-dom'
import Shopping from './pages/Shopping'

const App = () => {
  return (
    <div className='min-h-[200vh]'>
      <Home />
      <Routes>
        <Route path="/"/>
        <Route path="/shopping" element={<Shopping />}/>
      </Routes>
    </div>
  )
}

export default App