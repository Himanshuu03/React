import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Labs() {
    const navigate = useNavigate();
    function clickHandler(){
        navigate("/about")
    }
  return (
    <div>
       <div>
        Labs
        <button onClick={clickHandler}>Move to About Page</button>
        </div> 
    </div>
  )
}
