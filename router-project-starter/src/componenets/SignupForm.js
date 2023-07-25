import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {AiOutlineEyeInvisible , AiOutlineEye} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';

export const SignupForm = ({setIsLoggedIn}) => {
    const [formData,setFormData] = useState({
        firstName :"",
        lastName :"",
        email :"",
        password:"",
        confirmPassword:""
    })
    const [showPassword,setShowPassword] = useState(false);
    const [accountType ,setAccountType] = useState("student");
    function changeHandler(event){
        setFormData((prevData)=>{
            return{
                ...prevData,
                [event.target.name] :event.target.value
            }
        })
    }
    const navigate = useNavigate();
    function submitHandler(event){
        event.preventDefault();
        if(formData.password === formData.confirmPassword){
            navigate("/dashboard")
            setIsLoggedIn(true);
        }
        else{
            toast.error("password doesnot match");
        }
        const data = {
            ...formData,
            accountType
        }
        console.log(data);
    }
  return (
    <div>
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button className={`${accountType === "student" ? 
            "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} 
            onClick={()=>setAccountType("student")}>Student</button>
            <button className={`${accountType === "instructor" ? 
            "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}  
            onClick={()=>setAccountType("instructor")}>Instructor</button>
        </div>
            <form onSubmit={submitHandler}>
                <div className='flex gap-x-4 mt-[20px]'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.75rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                    <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-b-richblack-700' 
                    required type='text' name='firstName' onChange={changeHandler} value={formData.firstName} placeholder='First name'></input>
                </label>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.75rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                    <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-b-richblack-700'
                     required type='text' name='lastName' onChange={changeHandler} value={formData.lastName} placeholder='Last name'></input>
                </label>
                </div>
                <div className='mt-[20px]'>
                <label>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.75rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                    <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-b-richblack-700'
                    type='email' required value={formData.email} name='email' onChange={changeHandler} placeholder='Enter emial address'></input>
                </label>
                </div>

                <div className='flex gap-x-4 mt-[20px]'>

                <label className='relative w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.75rem]'>Password<sup className='text-pink-200'>*</sup></p>
                  <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-b-richblack-700'
                   type= {showPassword ? ("text") :("password")} required value={formData.password} name='password' onChange={changeHandler} placeholder='Password'></input>
                   <span className='absolute right-3 top-[44px] cursor-pointer'
                    onClick={()=>(setShowPassword((prev) => !prev))}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>) :(<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}
                  </span>
                </label>
                <label className='relative w-full'>
                 <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.75rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                  <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-b-richblack-700'
                   type= {showPassword ? ("text") :("password")} required value={formData.confirmPassword} name='confirmPassword' onChange={changeHandler} placeholder='Confirm password'></input>
                   <span className='absolute right-3 top-[44px] cursor-pointer'
                   onClick={()=>(setShowPassword((prev) => !prev))}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>) :(<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}
                  </span>
                </label>
                </div>
                <button
                className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'
                >
                    Sign up
                </button>
            </form>
    </div>
  )
}
