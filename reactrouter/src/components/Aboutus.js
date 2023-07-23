import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Aboutus() {
    const navigate = useNavigate();
    function clickHandler(){
        navigate("/support")
    }
  return (
    <div>Aboutus
        <button onClick={clickHandler}>Move to support page</button>
    </div>
  )
}
