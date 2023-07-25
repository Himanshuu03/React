import React from 'react'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({isLoggedIn,children}) => {
    console.log(isLoggedIn);
    if(isLoggedIn){
        return children;
    }
    else{
        return <Navigate to='/login'/>
    }
}
