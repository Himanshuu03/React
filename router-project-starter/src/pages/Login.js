import React from 'react'
import { Template } from '../componenets/Template'
import loginImg from "../assets/login.png"
export default function Login({setIsLoggedIn}) {
  return (
    <div>
        <Template 
        title = "Welcome Back"
        desc1 = "Built skills for today, tomorrow , and beyond."
        desc2 = "Education to future-proof your career"
        image={loginImg}
        formtype = "login" 
        setIsLoggedIn={setIsLoggedIn}
        >
        </Template>
    </div>
  )
}
