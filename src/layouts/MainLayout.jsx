import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className="dashboard">
        <Outlet />
    </div>
  )
}

export default MainLayout