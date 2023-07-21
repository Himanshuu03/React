import React, { useState } from 'react'
import Card from './Card'

export default function Testimonial(props) {
    let review = props.reviews;
    const [index,setIndex] = useState(0);
    function leftShitHandler(){
        if(index-1 < 0){
            setIndex(review.length -1);
        }
        else{
            setIndex(index-1);
        }
    }
    function rightShitHandler(){
        if(index+1 >= review.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }
    function surpriseHandler(){
        let randomIndex = Math.floor(Math.random() * review.length);
        setIndex(randomIndex);
    }
  return (
    <div className='w-[85vw] md:w-[700px] rounded-md bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl'>
        <Card reviews = {review[index]}></Card>

         <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto'>
            <button className='cursor-pointer hover:text-violet-500' onClick={leftShitHandler}>
                &lt;
            </button>
            <button  className='cursor-pointer hover:text-violet-500' onClick={rightShitHandler}>
                &gt;
            </button>
            </div>
          <div className='mt-6'>
            <button className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'
            onClick={surpriseHandler}
            >
                Surprise Me
            </button>
        </div>
    </div>
  )
}
