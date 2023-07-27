import React from 'react'
import Header
 from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
export default function TagPage() {
    const nav = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1).replace("-"," ");
  return (
    <div>
        <Header/>
        <div>
            <button
            onClick={()=>{
                nav(-1);
            }}
            >Back</button>
            <h2>
                Blogs Tagged<span>#{tag}</span>
            </h2>
            <Blogs/>
            <Pagination/>
        </div>
    </div>
  )
}
