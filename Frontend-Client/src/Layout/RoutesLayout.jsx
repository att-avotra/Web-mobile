import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
function RoutesLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default RoutesLayout