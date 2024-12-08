'use client'
import React,{useState}from 'react'
import { AuthBanner } from '../_icons/AuthBanner'
import { GoogleIcon } from '../_icons/GoogleIcon'
import { Eye,EyeOff  } from 'lucide-react'
import Link from 'next/link'

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);
  return (
    <div className='flex justify-center items-center my-5'>
      <div className='flex flex-col justify-center items-center 
      bg-[#fff] py-5 rounded-l-3xl px-20 gap-7 shadow-lg'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <div className='text-[#753F21] text-[36px]'>
            Create Account
          </div>
          <div className='text-[#753F21]'>
            If you don&apos;t have an account register You can Register here!
          </div>
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor="email" className='text-[#753F21]'>Name*</label>
          <input 
            type="name" 
            id='name' 
            className='border border-[#753F21] px-3 py-2 
            rounded-md outline-none text-[#753F21]'/>
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor="email" className='text-[#753F21]'>Email*</label>
          <input 
            type="email" 
            id='email' 
            className='border border-[#753F21] px-3 py-2 
            rounded-md outline-none text-[#753F21]'/>
        </div>
        <div className='flex flex-col w-full relative'>
          <label htmlFor="password" className='text-[#753F21]'>Password*</label>
          <input 
            type={showPassword ? 'text' : 'password'}  
            id='password' 
            className='border border-[#753F21] px-3 py-2 
            rounded-md outline-none text-[#753F21]'/>
          <button 
            type="button" 
            onClick={() => setShowPassword(!showPassword)} 
            className="absolute right-3 top-9 text-[#753F21]"
          >
            {showPassword ? <Eye /> : <EyeOff />}
          </button>
        </div>
        <div className='flex flex-col w-full relative'>
          <label htmlFor="password" className='text-[#753F21]'>re-password*</label>
          <input 
            type={showPassword ? 'text' : 'password'}  
            id='password' 
            className='border border-[#753F21] px-3 py-2 
            rounded-md outline-none text-[#753F21]'/>
          <button 
            type="button" 
            onClick={() => setShowRePassword(!showRePassword)} 
            className="absolute right-3 top-9 text-[#753F21]"
          >
            {showRePassword ? <Eye /> : <EyeOff />}
          </button>
        </div>
        <button className='border border-[#753F21] bg-[#753F21] px-3 py-2 
            rounded-xl outline-none text-[#fff] w-[200px]'>
              Sign up
        </button>
        <hr className='border border-[#753F21] w-full'/>
        <div className='text-[#753F21]'>
          Or login with your social network
        </div>
        <div className='bg-[#fff] border-4 border-[#fff] shadow-lg px-3'>
          <GoogleIcon/>
        </div>
        <div className='text-[#753F21]'>
          If you don&apos;t have an account register You can 
          <Link href={'/login'} className='font-bold'> Sign in!</Link>
        </div>
      </div>
      <div className='h-full'>
        <AuthBanner/>
      </div>
    </div>
  )
}

export default Signup