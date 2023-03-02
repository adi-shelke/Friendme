import React from "react";
// import GoogleLogin from "react-google-login";    DEPRICATED
import { useNavigate } from "react-router-dom";
import loginVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
// import { FcGoogle } from "react-icons/fc";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const Login = () => {
  const responseGoogle = (response) => {
    const decodedToken = jwt_decode(response.credential);
    console.log(decodedToken)
    localStorage.setItem('user',JSON.stringify(decodedToken))
    const {name, sub, picture} =decodedToken
    console.log(picture)


  };
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="w-full h-full relative">
        <video
          src={loginVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay ">
          <div className="p-5 ">
            <img src={logo} alt="logo" width="130px" />
          </div>
          <div className="shadow-2xl">


            {/* DEPRICATED */}


            {/* <GoogleLogin 
              clientId={import.meta.env.VITE_GOOGLE_API_KEY}
              render={(renderProps)=>(
                <button
                  type='button'
                  className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'     
                  onClick={renderProps.onClick}    
                  disabled={renderProps.disabled}       >
                  <FcGoogle className='mr-4'/>Sign in with Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            /> */}


            {/* NEW METHOD OF GOOGLE AUTH */}
            <GoogleLogin
            className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
              onSuccess={responseGoogle}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
