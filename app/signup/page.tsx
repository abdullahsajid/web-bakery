'use client'
import React,{useState}from 'react'
import { Input } from '../_components/input'
import { AuthBanner } from '../_icons/AuthBanner'
import { GoogleIcon } from '../_icons/GoogleIcon'
import { Eye,EyeOff  } from 'lucide-react'
import Link from 'next/link'
import {UserService} from '../services/user-service'
import {Toast} from '../_components/toast'
import { useRouter } from 'next/navigation';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Signup = () => {
  const [username,setUserName] = useState<string>('');
  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  const [rePassword,setRePassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      setIsLoading(true);
      if(password !== rePassword){
        Toast.error('Passwords do not match')
        return
      }
      if(password.length < 6){
        Toast.error('Password must be at least 6 characters')
        return
      }
      if(username === '' || email === ''){
        Toast.error('All fields are required')
        return
      }
      const data = {
        username,
        email,
        password
      }
      const response = await UserService.signup(data);
      if(response.status === 400){
        Toast.error(response.message);
      }
      if(response.status === 201){
        Toast.success('Sign-in successfully');
        setIsLoading(false);
        setUserName('');
        setEmail('');
        setPassword('');
        setRePassword('');
        router.push('/');
      }
    }catch(err){
      console.log(err);
      Toast.error('Please try again');
      setIsLoading(false);
    }finally{
      setIsLoading(false);
    }
  }

    const handlerGoogleSignIn = async (googleRes:any) => {
    try{
      setIsLoading(true);
      const data = {
        email: googleRes.email,
        username: googleRes.name,
        googleId: googleRes.sub
      }
      const response = await UserService.login(data);
      if(response.status === 400){
        Toast.error(response.message);
      }
      if(response.status === 200){
        Toast.success('sign-in successfully');
        setIsLoading(false);
        setEmail('');
        setPassword('');
        router.push('/');
      }
    }catch(err){
      console.log(err);
      setIsLoading(false);
    }finally{
      setIsLoading(false);
    }
  }

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
        <form onSubmit={handleSubmit} 
          className='flex flex-col items-center gap-5 w-full'>
          <div className='flex flex-col w-full'>
            <label htmlFor="email" className='text-[#753F21]'>Name*</label>
            <Input 
              type="name" 
              id='name' 
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor="email" className='text-[#753F21]'>Email*</label>
            <Input 
              type="email" 
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className='flex flex-col w-full relative'>
            <label htmlFor="password" className='text-[#753F21]'>Password*</label>
            <Input 
              type={showPassword ? 'text' : 'password'}  
              id='password' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute right-3 top-9 text-[#753F21]"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          </div>
          <div className='flex flex-col w-full relative'>
            <label htmlFor="re-password" className='text-[#753F21]'>re-password*</label>
            <Input 
              type={showPassword ? 'text' : 'password'}  
              id='re-password'
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)} 
            />
            <button 
              type="button" 
              onClick={() => setShowRePassword(!showRePassword)} 
              className="absolute right-3 top-9 text-[#753F21]"
            >
              {showRePassword ? <Eye /> : <EyeOff />}
            </button>
          </div>
          <button className={`border border-[#753F21] bg-[#753F21] px-3 py-2 
              rounded-xl outline-none text-[#fff] w-[200px]
              ${isLoading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
              disabled={isLoading}
              type='submit'
          >
                Sign up
          </button>
        </form>
        <hr className='border border-[#753F21] w-full'/>
        <div className='text-[#753F21]'>
          Or login with your social network
        </div>
        <div className='px-3'>
          <GoogleLogin
              onSuccess={(credentialResponse:any) => {
                const credentialResDecode = jwtDecode(credentialResponse.credential);
                if(credentialResDecode.sub){
                  handlerGoogleSignIn(credentialResDecode);
                }
              }}
              onError={() => {
                console.log('Login Failed');
              }}
          />
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