import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/Logo.svg';
import { toast } from 'react-hot-toast';
export default function Navbar(props) {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="/">
            <img src={logo} alt='logo' width={160} height={32} loading='lazy'></img>
        </Link>
        <nav>
            <ul className='flex gap-x-6 text-richblack-100'>
                <li>
                 <Link to="/">Home</Link>
                </li>
                <li>
                 <Link to="/">About</Link>
                </li>
                <li>
                 <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>
        <div className='flex items-center gap-x-4'>
           { !isLoggedIn &&
            <Link to="/login">
              <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] border border-richblack-700 rounded-[8px]'>
                Log in</button>
            </Link>
           }

           { !isLoggedIn &&
            <Link to="/signup">  
                 <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] border border-richblack-700 rounded-[8px]'>
                    Sign Up</button>
            </Link>
           }

           { isLoggedIn &&
            <Link to="/" onClick={
                ()=>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out");
                }
            }>
                 <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] border border-richblack-700 rounded-[8px]'>
                    Log Out</button>
            </Link>
           }

           { isLoggedIn &&
            <Link to="/dashboard">
                 <button>Dashboard</button>
            </Link>
           }
        </div>
    </div>
  )
}
