import React from 'react'
import logo from '../../assets/Container.png'

import { Link, useLocation } from 'react-router'
import { sidebarItems } from '../../util/data.jsx'
import { IoIosLogOut } from 'react-icons/io'
const DashbordMenu = () => {
    const location = useLocation()
  return (
    <div className='hidden md:block lg:block h-screen'>

  <div className='flex flex-col items-center justify-center'>
          <div className='mt-8'>
            <img className='w-14 h-14' src={logo} alt="" />
        </div>
 <nav className="mt-16">
        <ul className="space-y-4">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={` 
                    flex items-center gap-7 px-2 py-1 rounded-lg transition-all duration-200
                    ${isActive 
                      ? "shadow-[0_0_30px_rgba(255,255,255,0.5)] rounded-lg border border-white/50 -z-10"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }
                  `}
                >
                  <span>
                    {item.icon}
                  </span>
                  <span className="text-[16px] font-medium text-white">
                    {item.title}
                  </span>
            
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
        <div>

        </div>
  </div>


 <button className='absolute bottom-0 left-0 right-0 p-4'>
  <div className="flex items-center justify-start gap-2">
    <IoIosLogOut className="w-8 h-8" />
    <span className="text-[16px] font-medium text-red-500">Log Out</span>
  </div>
</button>
    </div>
  )
}

export default DashbordMenu