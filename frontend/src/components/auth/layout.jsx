import App from "@/App";
import React from "react";
import { Outlet  } from "react-router-dom";
import abc from '../../assets/abc.png'

function AuthLayout() {
    return(
        <>
        <div className="flex min-h-screen w-full">
            <div className="hidden lg:flex items-center justify-center  w-1/2 px-12 ">
            <div className="max-w-md space-y-6 text-center text-primary-foreground">
                <h1 className=" text-4xl text-cyan-950 font-extrabold tracking-tight">
                          <div className="justify-center items-start w-full">
                                 <center>
                                             <img src={abc} alt="abc" className=' w-96 h-96'/>
                                           
                                              </center>
                                             </div>
                   
                </h1>
            </div>
            </div>
          
            <div className="flex flex-1 items-center justify-center  bg-gradient-to-r from-blue-50 to-indigo-100 px-4 py-12 sm:px-6 lg:px-8">
                
                <Outlet/>
            </div>
        </div>
        </>
    )
    
}

export default AuthLayout