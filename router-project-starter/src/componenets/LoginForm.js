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
    }
      return (
        <form onSubmit={submitHandler}>
            <label>
                <p>Email Address<sup>*</sup></p>
                <input type='email' required value={formData.email} name='email' onChange={changeHandler} placeholder='Enter emial id'></input>
            </label>
            <label>
                <p>Password<sup>*</sup></p>
                <input type= {showPassword ? ("text") :("password")} required value={formData.password} name='password' onChange={changeHandler} placeholder=''></input>
                <span onClick={()=>(setShowPassword((prev) => !prev))}>
                    {showPassword ? (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>) :(<AiOutlineEye></AiOutlineEye>)}
                </span>
                <Link to="#">
                    <p>
                      Forgot Password
                    </p>
                </Link>
            </label>
            <button>Sign In</button>
        </form>
  )
}
