import { LoginFormControls } from '@/config/index.js'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CommanForm from '@/components/common/form';
import { useDispatch } from 'react-redux';
import { loginrUser } from '@/store/authSlice';
import { useToast } from '@/hooks/use-toast';
import abc from '../../assets/abc.png'


const initialState={
    email:'',
    password:''
}

function Login() {
    const[formData,setFormData]=useState(initialState)

    const dispatch=useDispatch()
const navigate=useNavigate()
const {toast}=useToast()

function onSubmit(e){
e.preventDefault();
dispatch(loginrUser(formData)).then((data)=>{
  if(data?.payload.success){
toast({
    title:data?.payload?.message,
    
})
  }
  else{
    toast({
        title:data?.payload?.message,
        variant:"destructive"
    })
  }
})
}
   
    

    return (<>
        <div className="mx-auto w-full ma-w-md space-y-6">
    <div className="text-center ">
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>
              <div className="justify-center items-start w-full">
             <center>
                         <img src={abc} alt="abc" className='lg:hidden w-28 h-28'/>
                          Sign In Yourself
                          </center>
                         </div>
           
            </h1>
          <p className='mt-2'>
                Don't have an Account ?   
            <Link className='font-medium text-primary ml-2 hover:underline' to='/auth/register'>
            Sign Up
            </Link>
            </p> 
   </div>
    <CommanForm
    formControls={LoginFormControls}
    buttonText={'Login'}
    formData={formData} // Pass formData as an object
    setFormData={setFormData} // Pass setFormData as a function
    onSubmit={onSubmit}
/>
 
   </div>
   
        </>
  

    )
  
}


export default Login