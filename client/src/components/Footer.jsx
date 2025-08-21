import React from 'react'
import { assets } from '../assets/assets'
import { href } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20 '>

        <img src= {assets.logo} alt="" width={150}/>      

        <p className='flex flex-auto flex-col border-l  border-gray-400 pl-4 pr-3 text-sm text-gray-500 max-sm:hidden'>
               <span className="flex items-center gap-1">&copy; <a href="https://www.instagram.com/snehil_012/?hl=en">snehil_012</a> </span>

               <span>All rights reserved.</span></p>

        <div className='flex gap-2.5'>
            <div><a href="https://www.facebook.com/p/Vladimir-Putin-100067866199217/"><img  src={assets.facebook_icon} alt="" width={35}/></a></div>
            <div><a href="https://x.com/realdonaldtrump"><img src={assets.twitter_icon} alt="" width={35}/></a></div>
            <div><a href="https://www.instagram.com/narendramodi/?hl=en"><img src={assets.instagram_icon} alt="" width={35}/></a></div>
            
        </div>
    </div>
  )
}

export default Footer
