import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {AiOutlineEyeInvisible , AiOutlineEye} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';
export const LoginForm = (props) => {
    let setIsLoggedIn = props.setIsLoggedIn;
    const [formData,setFormData] =useState({
        email:"",
        password:""
    })
    const [showPassword,setShowPassword] = useState(false);
    function changeHandler(event){
        setFormData((prevData)=>{
            return {
                ...prevData,
                [event.target.name]:event.target.value
            }
        })
    }
    const navigate = useNavigate();
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in");
        navigate("/dashboard");
        console.log(formData);
    }
      return (
        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.75rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-b-richblack-700'
                type='email' required value={formData.email} name='email' onChange={changeHandler} placeholder='Enter email address'></input>
            </label>
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.75rem]'>Password<sup className='text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-b-richblack-700' 
                type= {showPassword ? ("text") :("password")} required value={formData.password} name='password' onChange={changeHandler} placeholder='Password'></input>
                <span 
                className='absolute right-3 top-[44px] cursor-pointer'
                onClick={()=>(setShowPassword((prev) => !prev))}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>) :(<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}
                </span>
                <Link to="#">
                    <p className='max-w-max text-xs mt-1 text-blue-100 ml-auto'>
                      Forgot Password
                    </p>
                </Link>
            </label>
            <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Sign In</button>
        </form>
  )
}
