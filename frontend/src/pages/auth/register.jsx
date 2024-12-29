
import { RegisterFormControls } from '@/config';
import CommanForm from '../../components/common/form'
import { useToast } from '@/hooks/use-toast';
import { registerUser } from '@/store/authSlice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import abc from '../../assets/abc.png'

const initialState={
    userName:'',
    email:'',
    password:''
}


function Register() {

    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { toast } = useToast();
  
    function onSubmit(event) {
      event.preventDefault();
      dispatch(registerUser(formData)).then((data) => {
        if (data?.payload?.success) {
          toast({
            title: data?.payload?.message,
          });
          navigate("/auth/login");
        } else {
          toast({
            title: data?.payload?.message,
            variant: "destructive",
          });
        }
      });
    }
  
    console.log(formData);
  
    return (
      <div className="mx-auto w-full max-w-md space-y-6 ">
        <div className="text-center ">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            <div className="justify-center items-start w-full">
<center>
            <img src={abc} alt="abc" className='lg:hidden w-28 h-28'/></center>
            </div>
         
            Create new account
          </h1>
          <p className="mt-2">
            Already have an account
            <Link
              className="font-medium ml-2 text-primary hover:underline"
              to="/auth/login"
            >
              Login
            </Link>
          </p>
        </div>
        <CommanForm
          formControls={RegisterFormControls}
          buttonText={"Sign Up"}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
        />
      </div>
    );
  }

export default Register
