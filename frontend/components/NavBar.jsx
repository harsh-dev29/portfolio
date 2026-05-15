'use client'
import { RiFileTextLine, RiGithubFill, RiHome3Line, RiLinkedinLine } from '@remixicon/react'
import Link from 'next/link'
import React from 'react'
import arc from '../public/arc.jpeg'
import Image from 'next/image'
const NavBar = () => {
  return (
    <div className='h-120 w-24 bg-black rounded-lg flex flex-col justify-between'>
      <div className='h-fit flex items-center justify-center w-full font-black p-3'>
      <h1 className='text-6xl font-bold '>
N<br />A<br />V
      </h1>
      </div>
        <div className='h-max bottom-0 flex flex-col justify-end items-center p-3 gap-2'>
           <div className='h-10 w-10 flex bottom-0 items-center justify-center rounded-full bg-gray-900'>  
              <RiLinkedinLine />
           </div>
           <div className='h-10 w-10 flex bottom-0 items-center justify-center rounded-full bg-gray-900'>  
              < RiFileTextLine color='white' /> 
           </div>
           <div className='h-14 w-14 flex bottom-0 items-center justify-center rounded-full bg-gray-900 overflow-clip'>
            <Image src={arc} alt=''/>
           </div>
           <div className='h-10 w-10 flex bottom-0 items-center justify-center rounded-full bg-gray-900'>  
              < RiGithubFill color='white' />  
           </div>
           <div className='h-10 w-10 flex bottom-0 items-center justify-center rounded-full bg-white'>
            <Link href='/'>
             <RiHome3Line color='black'/>
             </Link>
           </div>
          
        </div>
    </div>
  )
}

export default NavBar
