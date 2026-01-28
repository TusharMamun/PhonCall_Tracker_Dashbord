import React from 'react'
import DashbordMenu from '../Component/DashbordMenuComponent/DashbordMenu'
import Header from '../Component/DashbordHeader/Header'
import { Outlet } from 'react-router'
import MobileDashbordMenu from '../Component/DashbordMenuComponent/MobileDashbordMenu'

const DashbordLayout = () => {
  return (
<div className="py-4 px-2">
  <div className="grid grid-cols-12 gap-6">
    <div className="hidden lg:block lg:col-span-2">
      <DashbordMenu />
    </div>
    

    <div className="block lg:hidden">
      <MobileDashbordMenu />
    </div>
    

    <div className="col-span-12 lg:col-span-10">
      <Header />
      
      <div className="mt-6 outletbg max-h-screen">
        <Outlet />
      </div>
    </div>
  </div>
</div>
  )
}

export default DashbordLayout