import React from 'react' 
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'

const Navbar =() => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    
  return (
    <div className='text-white flex justify-between cursor-pointer h-24 items-center max-w-[1240px] px-4 mx-auto'>
        <h1  className='font-bold text-3xl w-full text-[#00df9a] items-center'>REACT.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'> 
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
           
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[50%] cursor-pointer border-r border-r-gray-900 duration-300 h-full md:hidden bg-[#000300]' : 'fixed left-[-100%]' }>
        <h1  className='font-bold text-3xl w-full text-[#00df9a] m-4 items-center'>REACT.</h1>
            <ul className=' uppercase p-4'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar