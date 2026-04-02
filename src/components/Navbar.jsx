import React, { useContext, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { storeContext } from '../context/StoreContext';

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const {selectedProducts} = useContext(storeContext);

  return (
    <div >
      <div className='flex justify-between items-center relative bg-slate-300 p-3 sm:px-10  lg:px-35'>

        <div className='text-4xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-green-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient tracking-tighter'>
          <span>Good</span>
          <span className='absolute text-black left-22 sm:left-29 lg:left-54'>Food</span> 
        </div>
        <div className='hidden sm:block'>
          <ul className='text-white flex items-center space-x-5 text-xl'>
            <li className='bg-green-500 py-2 px-4 rounded-full border-2 border-green-500 hover:bg-white hover:text-green-600 transition'><Link to="/">Home</Link></li>
            <li className='bg-green-500 py-2 px-4 rounded-full border-2 border-green-500 hover:bg-white hover:text-green-600 transition'><Link to="/shopping">Store</Link></li>
            <li className='bg-green-500 py-2 px-4 rounded-full border-2 border-green-500 hover:bg-white hover:text-green-600 transition'><Link to="/dashboard">Dashboard</Link></li>
            <li data-count={selectedProducts.length} className={`bg-green-500 border-2 border-green-500 rounded-full p-2 hover:bg-white  transition flex items-center animate-pulse  ${selectedProducts.length > 0 ? "relative before:absolute before:content-[attr(data-count)] before:w-5 before:h-5 before:flex before:justify-center before:items-center  before:rounded-full before:bg-red-400 before:-left-2 before:-top-2 before:p-1 before:text-xs" : ""} ` }><Link to="/basket"><FaShoppingCart className="text-2xl text-white hover:text-green-500 transition"/></Link></li> 
          </ul>
        </div>
        <div className='text-green-600 border-2 rounded-full hover:bg-green-600 hover:text-white hover:border-white-600 p-1 sm:hidden'>
          {openMenu? 
            <IoIosClose size={30} onClick={() => setOpenMenu((prev) => !prev)}/>
            :
            <MdOutlineMenu size={30} onClick={() => setOpenMenu((prev) => !prev)}/>
          }
        </div>
      </div>

      {/* Mobile Menu */}
      {
      openMenu ? (
        <div className='sm:hidden bg-slate-700 text-center fixed  w-full animate-menu'>
          <ul className='text-white flex flex-col items-center p-5 justify-center space-y-5 text-xl '>
            <li className='bg-green-500 py-2 px-4 rounded-full border-2 border-green-500 hover:bg-white hover:text-green-600 transition' onClick={() => setOpenMenu((prev) => !prev)}><Link to="/">Home</Link></li>
            <li className='bg-green-500 py-2 px-4 rounded-full border-2 border-green-500 hover:bg-white hover:text-green-600 transition' onClick={() => setOpenMenu((prev) => !prev)}><Link to="/shopping">Store</Link></li>
            <li className='bg-green-500 py-2 px-4 rounded-full border-2 border-green-500 hover:bg-white hover:text-green-600 transition'><Link to="/dashboard">Dashboard</Link></li>
            <li data-count={selectedProducts.length} className={`bg-green-500 border-2 border-green-500 rounded-full p-2 hover:bg-white  transition flex items-center animate-pulse  ${selectedProducts.length > 0 ? "relative before:absolute before:content-[attr(data-count)] before:w-5 before:h-5 before:flex before:justify-center before:items-center  before:rounded-full before:bg-red-400 before:-left-2 before:-top-2 before:p-1 before:text-xs" : ""} ` } onClick={() => setOpenMenu((prev) => !prev)}><Link to="/basket" className={`flex items-center animate-pulse`}><FaShoppingCart className="text-2xl text-white hover:text-green-500 transition"/></Link></li> 
          </ul>
        </div>
        )
        : 
        ( <div></div> )
      }

    </div>
  )
}

export default Navbar