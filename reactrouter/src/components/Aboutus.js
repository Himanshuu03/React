import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Aboutus() {
    const navigate = useNavigate();
    function clickHandler(){
        navigate("/support")
    }
    function backHandler(){
        navigate(-1);
    }
  return (
    <div>Aboutus
        <button onClick={clickHandler}>Move to support page</button>
        <button onClick={backHandler}>Go Back</button>
    </div>
  )
}
