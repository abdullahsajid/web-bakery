'use client'
import React,{useState} from 'react'
import { AuthBanner } from '../_icons/AuthBanner'
import { GoogleIcon } from '../_icons/GoogleIcon'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='flex justify-center items-center my-10'>
      <div className='flex w-full max-w-[1200px] mx-auto'>
        <div className='flex flex-col justify-center items-center 
        bg-[#fff] rounded-l-3xl px-20 gap-7 shadow-lg w-1/2 h-[684px]'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <div className='text-[#753F21] text-[36px]'>
              Log In
            </div>
            <div className='text-[#753F21]'>
              If you don&apos;t have an account register You can Register here!
            </div>
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
          <button className='border border-[#753F21] bg-[#753F21] px-3 py-2 
              rounded-xl outline-none text-[#fff] w-[200px]'>
                Login
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
            <Link href={'/signup'} className='font-bold'> Sign up!</Link>
          </div>
        </div>
        <div className='w-1/2 h-[684px]'>
          <AuthBanner/>
        </div>
      </div>
    </div>
  )
}

export default Login