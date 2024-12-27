import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const isAuthenticated = localStorage.getItem("token")
    if(!isAuthenticated){
        return <Navigate to={"/"} />
    }
  return <Outlet />
}

export default ProtectedRoutes
