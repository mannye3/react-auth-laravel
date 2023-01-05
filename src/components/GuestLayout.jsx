import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider.jsx';


export default function GuestLayout() {
  const {token}=  useStateContext()



 if(token){
   return <Navigate to="/users" />
 }

  return (
    <div>
      <div className='login-signup-form anumated fadeInDown'>
    <div className='form'>
      <Outlet/>
    </div>
    </div>
    </div>

  )
}
