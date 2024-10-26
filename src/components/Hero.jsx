import React from 'react';
import { ReactTyped,Typed } from "react-typed";

function Hero() {

  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[96px] h-full w-full mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>GROWTH WITH DATA ANALYTICS</p>
        <h1 className='text-4xl md:text-7xl sm:text-6xl md:py-6'>Grow with data</h1>
        <div className='flex justify-center items-center'>
          <p className='sm:text-4xl md:text-5xl text-xl font-bold py-1'>Fast, flexible financing for </p>
          <ReactTyped
            className='sm:text-4xl md:text-5xl text-xl font-bold text-[#00df9a] pl-2'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl text-gray-500 pt-1 pl-2 md:pl-4'>Monitor Your data analytics to increase revenue for BTB, BTC, & SASS platforms  </p>
        <button className='text-xl sm:text-2xl bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-5 px-3S text-black'>Get Started</button>
      </div>
    </div>
  );
}

export default Hero;
