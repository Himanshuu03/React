import React from 'react'
import { Template } from '../componenets/Template'
import signupImg from "../assets/signup.png"
export default function Signup({setIsLoggedIn}) {
  return (
    <div>
        <Template 
        title = "Join the millions learing to code with StudyNotion for free"
        desc1 = "Built skills for today, tomorrow , and beyond."
        desc2 = "Education to future-proof your career"
        image={signupImg}
        formtype = "signup" 
        setIsLoggedIn={setIsLoggedIn}
        >
        </Template>
    </div>
  )
}
