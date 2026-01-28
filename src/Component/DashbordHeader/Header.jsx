import React from 'react'
import { BiBell } from 'react-icons/bi'
import { useLocation } from 'react-router';


const Header = () => {
      const location = useLocation();
  
  // Using ternary operator for title
  const title = 
    location.pathname === '/' || location.pathname === '/dashboard' 
      ? 'Dashboard Overview' 
    : location.pathname === '/call-logs' 
      ? 'Call Logs' 
    : location.pathname === '/appointments' 
      ? 'Appointments' 
    : location.pathname === '/settings' 
      ? 'Settings' 
      : 'Dashboard';

  return (
<div className="navbar  px-2">
 <div className="flex-1">
  <a className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-normal text-white text-center md:text-left block">
    {title}
  </a>
</div>
 <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center">
  <div>
    <BiBell className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
  </div>

  <div className="avatar">
    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-20 rounded-full">
      <img
        alt="User avatar"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      />
    </div>
  </div>
</div>
</div>
  )
}

export default Header