import React from 'react'
import {FaQuoteLeft ,FaQuoteRight } from "react-icons/fa"
export default function Card(props) {
    let review = props.reviews;
  return (
    <div className='flex flex-col md:relative'>
         <div className='absolute top-[-7rem] z-[10] mx-auto'>
            <img
            className='aspect-square rounded-full w-[140px] h-[140px] z-[25]'
            src={review.image} alt='img'></img>
         <div className='rounded-full w-[140px] h-[140px] z-[-10] absolute top-[-6px] left-[10px] bg-violet-500'>
         </div>
         </div>
         <div className='text-center mt-7'>
            <p className='font-bold text-2xl capitalize'>{review.name}</p>
         </div>
         <div className='text-center mt-2'>
            <p className='text-violet-300 uppercase text-sm'>{review.jobs}</p>
         </div>
         <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteLeft></FaQuoteLeft>
         </div>
         <div className='text-center mt-4 text-slate-500'>
            {review.text}
         </div>
         <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteRight></FaQuoteRight>
         </div>
         <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto'>
            <button className='cursor-pointer hover:text-violet-500'>
                &lt;
            </button>
            <button  className='cursor-pointer hover:text-violet-500'>
                &gt;
            </button>
            </div>
        <div>
            <button className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                Surprise Me
            </button>
        </div>
        </div>
  );
}
