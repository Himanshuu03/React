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
    function changeHandler(event){
        setFormData((prevData)=>{
            return{
                ...prevData,
                [event.target.name] :event.target.value
            }
        })
    }
    const navigate = useNavigate();
    function submitHandler(){
        if(formData.password === formData.confirmPassword){
            navigate("/dashboard")
            setIsLoggedIn(true);
        }
        else{
            toast.error("password doesnot match");
        }
    }
  return (
    <div>
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>
            <form onSubmit={submitHandler}>
                <div>
                <label>
                    <p>First Name<sup>*</sup></p>
                    <input required type='text' name='firstName' onChange={changeHandler} value={formData.firstName}></input>
                </label>
                <label>
                    <p>Last Name<sup>*</sup></p>
                    <input required type='text' name='lastName' onChange={changeHandler} value={formData.lastName}></input>
                </label>
                </div>
                <label>
                    <p>Email Address<sup>*</sup></p>
                    <input type='email' required value={formData.email} name='email' onChange={changeHandler} placeholder='Enter emial id'></input>
                </label>
                <div>

                <label>
                <p>Password<sup>*</sup></p>
                  <input type= {showPassword ? ("text") :("password")} required value={formData.password} name='password' onChange={changeHandler} placeholder=''></input>
                   <span onClick={()=>(setShowPassword((prev) => !prev))}>
                    {showPassword ? (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>) :(<AiOutlineEye></AiOutlineEye>)}
                  </span>
                </label>
                <label>
                 <p>Confirm Password<sup>*</sup></p>
                  <input type= {showPassword ? ("text") :("password")} required value={formData.confirmPassword} name='confirmPassword' onChange={changeHandler} placeholder=''></input>
                   <span onClick={()=>(setShowPassword((prev) => !prev))}>
                    {showPassword ? (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>) :(<AiOutlineEye></AiOutlineEye>)}
                  </span>
                </label>
                </div>
                <button>
                    Sign up
                </button>
            </form>
    </div>
  )
}
