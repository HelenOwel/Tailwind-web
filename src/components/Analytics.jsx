import React from 'react'
import laps from '../Assets/laptop.jpg'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src ={laps} alt='' className='w-[500px] mx-auto my-4'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='text-2xl md:text-4xl sm:text-3xl font-bold py-2'>Manage Data Analytiocs Centrally</h1>
                <p className='py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quam at nulla
                     similique ullam velit quod perspiciatis vero optio laudantium, distinctio, quo
                      architecto soluta, quia est minus quibusdam quis.

                </p>
                <button className='text-xl sm:text-2xl text-[#00df9a] w-[200px] rounded-md font-medium my-5 mx-auto md:mx-0 py-2 px-3S bg-black'>Get Started</button>
            </div>

        </div>

    </div>
  )
}

export default Analytics