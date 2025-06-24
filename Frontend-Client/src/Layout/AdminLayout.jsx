import React from 'react'
import NavBarAdmin from '../components/NavBarAdmin'
import { SidebarProvider } from '../Context/SidebarContext'
import HeaderBar from '../components/HeaderBar'
import { Outlet } from 'react-router-dom'

function AdminLayout({ children }) {
  return (
    <SidebarProvider>
      <NavBarAdmin />
      <HeaderBar />
      <Outlet />
    </SidebarProvider>
  )
}

export default AdminLayout