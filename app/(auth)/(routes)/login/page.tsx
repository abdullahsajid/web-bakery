'use client'
import React,{useState} from 'react'
import { AuthBanner } from '../../../_icons/AuthBanner'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { Input } from '../../../_components/input'
import { Toast } from '../../../_components/toast'
import { UserService } from '../../../services/user-service'
import { useRouter } from 'next/navigation';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { CredentialResponse, DecodedCredentialResponse } from '../../../utils/products'

const Login = () => {
  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      setIsLoading(true);
      if(password.length < 6){
        Toast.error('Password must be at least 6 characters')
        return
      }
      if(email === ''){
        Toast.error('All fields are required')
        return
      }
      const data = {
        email,
        password
      }
      const response = await UserService.login(data);
      if(response.status === 400){
        Toast.error(response.message);
      }
      if(response.status === 201){
        Toast.success('User created successfully');
        setIsLoading(false);
        setEmail('');
        setPassword('');
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

  const handlerGoogleSignIn = async (googleRes:DecodedCredentialResponse) => {
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
    <div className='flex justify-center items-center bg-[#FFF3EA] h-screen'>
      <div className='flex items-center justify-center w-full max-w-[1200px] mx-auto
      max-sm:mx-0 max-sm:w-full'>
        <div className='flex flex-col justify-center items-center 
        bg-[#fff] rounded-3xl px-20 gap-7 shadow-lg w-full h-[680px] max-sm:px-10 max-sm:w-full max-sm:mx-4'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <div className='text-[#753F21] text-[36px]'>
              Log In
            </div>
            <div className='text-[#753F21]'>
              If you don&apos;t have an account register You can Register here!
            </div>
          </div>
          <form onSubmit={handleSubmit} 
            className='flex flex-col items-center gap-5 w-full'>
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
            <button className={`border border-[#753F21] bg-[#753F21] px-3 py-2 
                rounded-xl outline-none text-[#fff] w-[200px]
                ${isLoading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                disabled={isLoading}
                type='submit'
            >
                  Login
            </button>
          </form>
          <hr className='border border-[#753F21] w-full'/>
          <div className='text-[#753F21]'>
            Or login with your social network
          </div>
          <div className=' border-4 border-[#fff] cursor-pointer'>
            <GoogleLogin
              onSuccess={(credentialResponse:CredentialResponse) => {
                if(credentialResponse.credential){
                  const credentialResDecode: DecodedCredentialResponse = jwtDecode(credentialResponse.credential);
                  if(credentialResDecode.sub){
                    handlerGoogleSignIn(credentialResDecode);
                  }
                }
              }}
              onError={() => {
                console.log('Login Failed');
              }}
          />
          </div>
          <div className='text-[#753F21] max-sm:text-center max-sm:flex max-sm:justify-center max-sm:flex-col max-sm:items-center'>
            If you don&apos;t have an account register You can 
            <Link href={'/signup'} className='font-bold'> Sign up!</Link>
          </div>
        </div>
        <div className='w-1/2 h-[684px] flex justify-center items-center max-sm:hidden'>
          <AuthBanner/>
        </div>
      </div>
    </div>
  )
}

export default Login