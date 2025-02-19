import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header/Header'

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="dashboard px-2.5 mx-auto max-w-7xl">
          <Outlet />
      </div>
    </>
  )
}

export default MainLayout