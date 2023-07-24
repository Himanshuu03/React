import React from 'react'
import frameImage from '../assets/frame.png';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';

export const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
    console.log(formtype);
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>          
            {formtype === "signup"? (<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>): (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>)}

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>
            <button>
                <p>Sign in with Google</p>
            </button>
        </div>
        <div>
            <img src={frameImage} alt='pattern' width={558} height={504} loading='lazy'>
            </img>
            <img src ={image} alt='' width={558} height={504} loading='lazy'>
            </img>
        </div>
    </div>
  )
}
