import React from 'react'
import jacket from '../images/jacket.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className=' bg-gradient-to-r from-cyan-200 to-red-200 h-full rounded-t-3xl '>
      <div className='grid grid-cols-1 md:grid-cols-2 pt-24 '>
        <div className='md:text-left md:ml-20 ml-2 text-center'>
          <h2 className='text-red-500 md:text-3xl uppercase'>Outfit of the day </h2>
          <h1 className='md:text-7xl text-zinc-700'>ALL YOUR</h1>
          <h1 className='md:text-7xl font-bold text-zinc-700'>Styles are here</h1>
          <p className='text-zinc-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, possimus? Lorem ipsum dolor sit amet.</p>
          <Link to="shop" className='bg-red-400 py-2 px-7 mt-5 inline-block text-white rounded-3xl  '>SHOP NOW</Link>
        </div>
        <div className='grid items-center justify-center md:mr-44'>
          <img src={jacket} alt="blue jacket"  className='md:w-96 w-72'/>
        </div>
      </div>
    </div>
  )
}

export default Hero
