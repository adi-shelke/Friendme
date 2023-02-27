import React from 'react'
import GoogleLogin from "react-google-login"
import { useNavigate } from 'react-router-dom'
import loginVideo from "../assets/share.mp4"
import logo from '../assets/logowhite.png'
import {FcGoogle} from 'react-icons/fc'
const Login = () => {
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='w-full h-full relative'>
        <video 
          src={loginVideo}
          type="video/mp4"
          loop 
          controls={false} 
          muted
          autoPlay
          className='w-full h-full object-cover'
        />
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay '>
          
        </div>
      </div>
    </div>
  )
}

export default Login