'use client'
import NavBar from '@/components/NavBar'
import React from 'react'
import profile from '../public/erasebg-transformed.png'
import Image from 'next/image'
import './globals.css'
import {motion} from 'motion/react'
import { Typewriter } from '@/components/TypeWriter'
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
<div className=' flex flex-col gap-1 '>
        <div className='mt-8 text-2xl'>
          <h1>Hii I'am</h1>
        </div>
        <div className=''>
          
          <h1 className='tracking-[-6] text-[9.5rem] font-black text-black font-inter '><Typewriter text={"HARSH VISHNOI"}></Typewriter></h1>
        </div>
        <div className='w-1/2 text-sm'>
          <h5>
            I am a dedicated **Full Stack MERN Developer** with a strong foundation in **Data Structures and Algorithms**, focused on building scalable and secure web applications. From engineering financial dashboards like **SubTracker** to creating AI-integrated tools, I bridge the gap between complex backend logic and sleek, responsive frontend design. I am a continuous learner and technical communicator, eager to contribute my problem-solving mindset to a forward-thinking engineering team.
          </h5>
        </div>
      </div>
      <div className=' flex '>
        <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:.5}} className='flex absolute right-6 top-10 '>
          <Image src={profile} height={700} widht={300} alt='image'/>
        </motion.div>
        <div className='mt-10 z-10 relative'><NavBar /></div>
        </div>
      </div>
      
    </div>
  )
}

export default page