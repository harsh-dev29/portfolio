'use client'
import NavBar from '@/components/NavBar'
import React from 'react'
import profile from '../public/erasebg-transformed.png'
import Image from 'next/image'

const page = () => {
  
  return (
    <div className='w-full h-screen bg-[#A3A7A8] px-10 py-4 font-mono'>
      <div className='w-full h-20 flex text-sm  justify-between'>
        <div>
          <h1>@code by <span>Harsh</span></h1>
        </div>
        <div className='w-120  text-right'>
         <span className='text-[.8rem]'> Results-focused MERN Engineer dedicated to transforming complex ideas into  production-ready, high-performance <br /> digital products through secure architecture and user-centric design.
          </span>
        </div>
      </div>
      <div className='flex'>
<div className=' flex flex-col gap-2 '>
        <div className='mt-8'>
          <h1>Hii I'am</h1>
        </div>
        <div className='mt-4'>
          <h1 className='text-9xl font-black text-black font-inter portfolio-name'>HARSH VISHNOI</h1>
        </div>
        <div className='w-1/2 text-sm mt-6'>
          <h5>
            I am a dedicated **Full Stack MERN Developer** with a strong foundation in **Data Structures and Algorithms**, focused on building scalable and secure web applications. From engineering financial dashboards like **SubTracker** to creating AI-integrated tools, I bridge the gap between complex backend logic and sleek, responsive frontend design. I am a continuous learner and technical communicator, eager to contribute my problem-solving mindset to a forward-thinking engineering team.
          </h5>
        </div>
      </div>
      <div className=' flex '>
        <div className='flex absolute right-6 top-10 '>
          <Image src={profile} height={700} widht={300} alt='image'/>
        </div>
        <div className='mt-10 z-10 relative'><NavBar /></div>
        </div>
      </div>
      
    </div>
  )
}

export default page