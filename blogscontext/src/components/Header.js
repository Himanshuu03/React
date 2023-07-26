import React from 'react'
import '../App.css'
export default function Header({setDark,dark}) {
  return (
    <div className={`${dark ? 'bg-black text-white' :'bg-white text-black border'}  flex shadow-md py-4 w-full justify-between fixed top-0`}>
        <header>
        <h1 className='text-3xl font-bold uppercase'>Blogs</h1>
        </header>
        <button
       className='rounded-md border px-4 py-2'
       onClick={()=>{
          setDark((prev)=>!prev)
        }}>{
          dark ? "Light Mode" :"Dark Mode"
        }</button>
    </div>
  )
}
