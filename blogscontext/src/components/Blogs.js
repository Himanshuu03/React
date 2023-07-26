import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';


export default function Blogs() {
    const{loading,post} = useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]'>
        {loading 
        ?(<Spinner></Spinner>)
        :(
            post.length === 0
            ? (<div><p>No Post</p></div>)
            :(post.map((post)=>(
                <div key={post.id}>
                    <h1 className='font-bold text-lg'>{post.title}</h1>
                    <p className='text-sm mt-[4px]'>By <span className='italic'>{post.author}</span> on <span className='font-bold underline '>{post.category}</span></p>
                    <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
                    <p className='text-md mt-[14px]'>{post.content}</p>
                    <div className='flex gap-x-3'>
                        {post.tags.map((tag,index)=>(
                            <span className="text-blue-700 font-bold underline text-xs mt-[5px]" key={index}>#{tag}</span>
                        ))}
                    </div>
                </div>
            )))
        )
        }
    </div>
  )
}