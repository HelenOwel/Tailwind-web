import React from 'react'

function Newsletter() {
  return (
    <div className='w-full py-16 text-white px-4  mx-auto'>
        <div className='grid lg:grid-cols-3 max-w-[1240px] mx-auto '>
           <div className='lg:col-span-2 my-4'>
           <h1 className='text-white text-2xl sm:text-3xl md:text-3xl font-bold py-2'>Want trips & tricks to optimize your flow?</h1>
           <p>Sign up to our newsletter and stay up to date</p>
           </div>
           <div className=' my-4 md:my-0'>
           <div className=' flex flex-col sm:flex-row items-center justify-between'>
           <input type="email" placeholder='Enter Email' className='w-full p-3 flex rounded-md text-black' />
           <button className='text-xl sm:text-2xl text-white w-[200px] lg:w-full rounded-md font-medium my-6 px-6 py-3  ml-4 bg-[#00df9a] '>Get Started</button>
           </div>
           <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy</span> </p>
           </div>

        </div>

    </div>
  )
}

export default Newsletter