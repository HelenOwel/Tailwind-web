import React from 'react'
import single from '../Assets/single.png'
import second from '../Assets/double.png'
import third from '../Assets/triple.png'

function cards() {
  return (
    <div>
        <div className='w-full bg-white px-4 py-[10rem]'>
            <div className='max-w-[1040px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg  hover:scale-105 duration 300'>
                    <img src={single} alt='' className='w-20 mx-auto mt-[-3rem] bg-white'/>
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8 mt-8'>Send uo to 2 GB </p>
                    </div>
                    <button className='text-center text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6  bg-black'>Start Trial</button>


                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 md:my-0 rounded-lg  hover:scale-105 duration 300'>
                    <img src={second} alt='' className='w-20 bg-transparent mx-auto mt-[-3rem] bg-white'/>
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8 mt-8'>Send uo to 2 GB </p>
                    </div>
                    <button className='text-center text-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6  bg-[#00df9a] '>Start Trial</button>


                </div>
                <div className='w-full shadow-xl flex flex-col p-4  my-9 md:my-0 rounded-lg  hover:scale-105 duration 300'>
                    <img src={third} alt='' className='w-20 mx-auto mt-[-3rem] bg-white'/>
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8 mt-8'>Send uo to 2 GB </p>
                    </div>
                    <button className='text-center text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6  bg-black'>Start Trial</button>


                </div>
            </div>

        </div>
    </div>
  )
}

export default cards