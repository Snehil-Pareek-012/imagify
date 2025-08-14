import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    
      <div className='flex flex-col justify-center items-center text-center my-20'>
      <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-2 rounded-full border-neutral-500'>
        <p>Text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </div>

      <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>
          Turn text into <span className='text-blue-600'>image </span> in a click.</h1>

          <p className='text-center max-w-xl mx-auto mt-5'>Unleash your creativity with AI. Time to turn your imaginations into a visual art in seconds. Just type your thoughts and see the magic happens.....</p>

          <button className='sm:text-lg text-white bg-black w-auto mt-6 px-12 py-2.5 flex items-center gap-2 rounded-full'>Generate image
            <img className='h-6' src={assets.star_group} alt="" />
          </button>

          <div className='flex flex-wrap justify-center mt-12 gap-3'>
            {Array(6).fill('').map((item,index) => ( 
              <img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' 
              src={index % 2 === 0? assets.sample_img_1: assets.sample_img_2} alt=""key={index} width={70} />
            ))}
          </div>
          
          <p className='mt-2 text-neutral-600'>imagified images</p>
    </div>
  )
}

export default Header
