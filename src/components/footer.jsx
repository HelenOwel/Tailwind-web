import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

function footer() {
  return (
    <div className=' max-w-[1200px] mx-auto py-16 px-4 grid lg:grid-cols-3 text-gray-300'>
        <div>
            <h1 className='text-3xl font-bold w-full text-[#00df9a]'>REACT.</h1>
            <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione sequi minima porro minus magnam!</p>
            <div className='flex md:w-[75%] my-6 justify-between'>
            <FaDribbbleSquare size={30}/>
            <FaFacebookSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>
        </div>

        </div>
        <div className='lg:col-span-2 flex justify-between mt-3'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm '>Analytics</li>
                    <li className='py-2 text-sm '>Marketing</li>
                    <li className='py-2 text-sm '>Commerce</li>
                    <li className='py-2 text-sm '>Insight</li>
                </ul>
            </div>
            <div className='lg:col-span-3 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400'>Supprt</h6>
                <ul>
                    <li className='py-2 text-sm '>Pricing</li>
                    <li className='py-2 text-sm '>Documentation</li>
                    <li className='py-2 text-sm '>Guides</li>
                    <li className='py-2 text-sm '>Status</li>
                </ul>
            </div>

        </div>
        <div className='lg:col-span-3 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm '>About</li>
                    <li className='py-2 text-sm '>Blog</li>
                    <li className='py-2 text-sm '>Jobs</li>
                    <li className='py-2 text-sm '>Press</li>
                    <li className='py-2 text-sm '>Career</li>
                </ul>
            </div>

        </div>
        <div className='lg:col-span-3 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm '>Claim</li>
                    <li className='py-2 text-sm '>Policy</li>
                    <li className='py-2 text-sm '>Terms</li>
                  
                </ul>
            </div>

        </div>
        <div className='lg:col-span-3 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm '>Analytics</li>
                    <li className='py-2 text-sm '>Marketing</li>
                    <li className='py-2 text-sm '>Commerce</li>
                    <li className='py-2 text-sm '>Insight</li>
                </ul>
            </div>

        </div>

        </div>
    </div>
  )
}

export default footer