import React from 'react'
import leetcode from '../assets/Leetcode.png'

const BackgroundBlur = () => {
  return (
    <div className='text-center  m-5 ml-10 max-w-[100vh]'>
        <div className='relative group'>
        <div className='max-w-[70vh] -inset-1 absolute bg-gradient-to-r from-pink-600 to-purple-600 opacity-70 rounded-lg blur-sm group-hover:opacity-100 group-hover:-inset-1 group-hover: transition duration-500'></div>
        <div className='max-w-[50%]  relative  min-h-44 bg-gray-800 rounded-md'>
            <img className='min-w-full' src={leetcode} alt="NA" srcset="" />
        </div>
        </div>
    </div>
  )
}

export default BackgroundBlur