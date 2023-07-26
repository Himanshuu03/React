import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Pagination() {
    const {page,handleChangePage,totalPage,loading} = useContext(AppContext);
  return (
    <div className='w-full flex justify-center items-center border fixed bottom-0 bg-white'>
        {
            loading ? (<div></div>):
            (
            <div className='flex justify-between w-11/12 max-w-[670px] py-2'>
            <div className='flex gap-x-2'>

            { page >1 &&
                <button 
                className='rounded-md border-2 px-4 py-2'
                onClick={()=>{
                    handleChangePage(page-1);
                }}>Prev</button>
            }
            {
                page < totalPage &&
                <button 
                className='rounded-md border px-4 py-2'
                onClick={()=>{
                    handleChangePage(page+1)
                }}>Next</button>
            }
            {
                page === totalPage &&
                <button 
                className='rounded-md border px-4 py-2'
                onClick={()=>{
                    handleChangePage(1);
                }}>Go Back</button>
            }
            </div>
            <p className='font-bold text-sm py-2' >
                Page {page} of {totalPage}
            </p>
        </div>
            )
        }

    </div>
  )
}
