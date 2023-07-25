import React from 'react'
import { Random } from './components/Random'
import {Tags} from './components/Tags'

export default function App() {
  return (
    <div className='w-full h-screen flex flex-col background overflow-x-hidden items-center'>
        <h1 className='bg-white rounded-lg text-center w-11/12 mt-[40px] text-4xl font-bold py-2 px-10'>RANDOM GIFS</h1>
        <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
            <Random/>
            <Tags/>
        </div>
    </div>
  )
}
