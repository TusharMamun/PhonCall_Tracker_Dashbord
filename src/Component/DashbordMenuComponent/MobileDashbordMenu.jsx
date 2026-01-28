import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';

import { IoIosLogOut, IoMdMenu, IoMdClose } from 'react-icons/io';
import { sidebarItems } from '../../util/data.jsx';
import logo from '../../assets/Container.png'
const MobileDashbordMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <div className="md:hidden">
       
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 left-4 z-40 p-2 bg-gray-800 text-white rounded"
            >
                {isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
            </button>

      
            {isOpen && (
                <div className="fixed inset-0 z-30">
      
                    <div 
                        className="absolute inset-0 bg-black bg-opacity-50"
                        onClick={() => setIsOpen(false)}
                    />
                    
                
                    <div className="absolute left-0 top-0 h-full w-20 bg-gray-900/30 shadow-xl mt-4">
                        <div className="p-6">
   
                             <div className='mt-8'>
                                      <img className='w-7 h-7' src={logo} alt="" />
                                  </div>

                            <nav className='mt-4'>
                                <ul className="space-y-2">
                                    {sidebarItems.map((item) => (
                                        <li key={item.id}>
                                            <Link
                                                to={item.path}
                                                onClick={() => setIsOpen(false)}
                                                className={`
                                                    flex items-center gap-3   rounded
                                                    ${location.pathname === item.path
                                                        ? 'bg-blue-600 text-white'
                                                        : 'text-gray-300 hover:bg-gray-800'
                                                    }
                                                `}
                                            >
                                                {item.icon}
                                  
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                      <button
                      
                             onClick={() => {
                                        setIsOpen(false);
                                     
                                    }}
                      
                      className='absolute bottom-0 left-0 right-0 p-4'>
  <div className="flex items-center justify-start gap-2">
    <IoIosLogOut className="w-4 h-4" />

  </div>
</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileDashbordMenu;