import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className="dashboard px-2.5 mx-auto max-w-7xl">
        <Outlet />
    </div>
  )
}

export default MainLayout