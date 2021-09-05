import React from 'react'
import januslogo from "../images/januslogo.png"
import combination from "../images/combination.png"
import arrow from '../images/arrow.png'
function Login({setPage}) {
    return (
      
                <div class="flex  flex-col justify-start items-start mt-16">
                <p class="text-label font-semibold font-poppins text-sm">Username or Email</p>
                <input 
                placeholder="Enter your username or email"
                type="e-mail" class=" pl-2 lg:w-300px mt-4 h-10 border-2 border-input rounded outline-none focus:border-login-red "/>
                <p class="text-label font-semibold font-poppins text-sm mt-4">Password</p>
                <input 
                placeholder="Enter your password"
               
                type="password" class="focus:border-2  pl-2 lg:w-300px mt-4 h-10 border-2 border-input outline-none focus:border-login-red rounded"/>
                <button class="bg-login-red hover:bg-login-red-hover w-100% h-10 rounded font-poppins text-white mt-10 flex items-center justify-center">
                    <p class="font-semibold ">Login</p>
                    <img src={arrow} class="w-4 ml-2"/>
                </button>
                <div class="flex justify-between items-between w-100% pt-10">
                <a>Don't Have An Account ?</a>
                <button onClick={setPage}>
                <a class="text-login-red underline">SignUp</a>
                </button>
                </div>
                </div>
                
                
       
    )
}

export default Login
