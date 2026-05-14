import React from 'react'
import { NavLink } from 'react-router'
function Navbar() {

  
  return (
    <div className='bg-blue-900 md:justify-between lg:justify-between md:px-10 text-white w-screen '>
      <div className=' h-15  flex items-center gap-3 md:justify-between lg:gap-0 lg:justify-between'>
        <img src="/image/logo (1).png" alt="Logo" className='h-20'/>
        <div className='flex gap-2 md:gap-4 lg:gap-5 font-semibold '>
            <NavLink to='/'><button className='relative hover:text-purple-800'>Home</button></NavLink>
            <NavLink to='/about' ><button className='relative hover:text-purple-800'>About</button></NavLink>
            <NavLink to='/skills' ><button className='relative hover:text-purple-800'>Skills</button></NavLink>
            <NavLink to='/projects' ><button className='relative hover:text-purple-800'>Projects</button></NavLink>
            <NavLink to='/contact' ><button className='relative hover:text-purple-800'>Contact</button></NavLink>
        </div>
          <NavLink to='/download-cv' >
            <button className='hover:text-blue-700 md:flex lg:flex border bg-purple-500 text-white font-bold border-blue-700 px-2 py-1 rounded-xl items-center justify-between gap-1'><span className='hidden md:block '>
              Download 
              </span>
                CV
            </button>
          </NavLink>
      </div>
      
    </div>
  )
}

export default Navbar
