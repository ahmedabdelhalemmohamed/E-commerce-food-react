import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center relative bg-slate-300 p-3'>
      <div className='text-4xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-green-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient tracking-tighter'>
        <span>Good</span>
        <span className='absolute text-black left-23'>Food</span> 
      </div>
      <div >
        <ul className='text-white flex items-center space-x-5 text-xl'>
          <li className='bg-green-500 py-2 px-4 rounded-full border-2 border-green-500 hover:bg-transparent hover:text-black transition' ><a href="">Home</a></li>
          <li className='border-2 border-green-500 rounded-full p-2 hover:bg-green-500 transition'><a href="" className='flex items-center animate-pulse'><FaShoppingCart className="text-2xl text-white"/></a></li>
          
        </ul>
      </div>
    </div>
  )
}

export default Navbar