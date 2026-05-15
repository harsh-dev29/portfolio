'use client'
import { RiFileTextLine, RiGithubFill, RiHome3Line, RiLinkedinLine } from '@remixicon/react'
import Link from 'next/link'
import React from 'react'
import arc from '../public/arc.jpeg'
import Image from 'next/image'
import { redirect } from 'next/navigation'
const NavBar = () => {
  return (
    <div className='h-125 w-24 bg-black rounded-lg flex flex-col justify-between'>
      <div className='h-fit flex items-center justify-center w-full font-black p-3'>
      <h1 className='text-6xl font-bold '>
N<br />A<br />V
      </h1>
      </div>
        <div className='h-max bottom-0 flex flex-col justify-end items-center p-3 gap-2'>
           <button onClick={()=>{
            window.open('https://www.linkedin.com/in/harsh-vishnoi-webdev/')
           }} className='h-12 w-12 flex bottom-0 items-center justify-center rounded-full bg-gray-900 cursor-pointer '>  
              <RiLinkedinLine className='' />
           </button>
           <button onClick={()=>{
            window.open('/resume.pdf')
           }} className='h-12 w-12 flex bottom-0 items-center justify-center rounded-full bg-gray-900 cursor-pointer'>  
              < RiFileTextLine color='white' /> 
           </button>
           <div className='h-12 w-12 flex bottom-0 items-center justify-center rounded-full bg-gray-900 overflow-clip'>
            <Image src={arc} alt=''/>
           </div>
           <button onClick={()=>{
            window.open('https://github.com/harsh-dev29')
           }} className='h-12 w-12 flex bottom-0 items-center justify-center rounded-full bg-gray-900 cursor-pointer'>  
              < RiGithubFill color='white' />  
           </button>
           <button onClick={()=>{
              redirect('/')
             }} className='h-12 w-12 flex bottom-0 items-center justify-center rounded-full bg-white cursor-pointer'>
             <RiHome3Line color='black'/>
           </button>
          
        </div>
    </div>
  )
}

export default NavBar
