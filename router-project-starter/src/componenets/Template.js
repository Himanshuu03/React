import React from 'react'
import frameImage from '../assets/frame.png';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';

export const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
    console.log(formtype);
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 gap-x-12 gap-y-0 mx-auto'>
        <div className=''>
            <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
            <p className='text-[1.125rem] leading[1.625rem] mt-4'>
                <span className='text-richblack-100'>{desc1}</span>
                <br></br>
                <span className='italic text-blue-100'>{desc2}</span>
            </p>          
            {formtype === "signup"? (<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>): (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>)}

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading[1.375rem]'>OR</p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
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
