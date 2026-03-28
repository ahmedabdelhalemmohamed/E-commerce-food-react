import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center   bg-green-500 h-30 text-center text-md sm:text-2xl text-white pt-10 font-bold pb-5'>
        <div>
            this website is Created by <span className='text-black'>@Ahmed Abdelhalem</span>
        </div>
        <div className='flex justify-center mt-5 space-x-2 ml-15 mb-5'> 
            <span><a href="https://www.facebook.com/ahmd.bdalhlym.536188" target='_blank'><FaFacebook className='hover:text-blue-500 rounded-full transition-all hover:scale-150 duration-500'/></a></span>
            <span><a href="https://www.instagram.com/ahmed_._2001_/" target="_blank" ><FaInstagram className='hover:text-red-500 rounded-full transition-all hover:scale-150 duration-500'/></a></span>
            <span><a href="https://x.com/Ahmed134834" target="_blank" ><FaTwitter className='hover:text-sky-500 rounded-full transition-all hover:scale-150 duration-500'/></a></span>
            <span><a href="https://github.com/ahmedabdelhalemmohamed?tab=repositories" target="_blank" ><FaGithub className='hover:text-gray-500 rounded-full transition-all hover:scale-150 duration-500'/></a></span>
            <span><a href="https://www.linkedin.com/in/ahmed-abdelhalem-dev/" target="_blank"><FaLinkedin className='hover:text-blue-500 rounded-full transition-all hover:scale-150 duration-500'/></a></span>
        </div>
    </div>
  )
}

export default Footer