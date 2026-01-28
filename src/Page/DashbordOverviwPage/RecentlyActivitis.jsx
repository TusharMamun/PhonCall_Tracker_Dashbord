import React from 'react'
import { activities } from '../../util/data'

const RecentActivities = () => {
  const colorClasses = {
    'green': 'bg-green-600',
    'blue': 'bg-blue-600', 
    'red': 'bg-red-600',
    'yellow': 'bg-yellow-600',
  };

  return (
    <div className='rounded-md dashborCardBackgroud p-4 sm:p-6 md:p-[25px]'>
      <h4 className='text-lg sm:text-xl font-normal text-white mb-4 md:mb-6'>Recent Activity</h4>
      <div className='space-y-3 sm:space-y-4'>
        {activities.map((item) => (
          <div key={item.id} className='recentlyAtivityscars flex items-start gap-3 p-3 sm:p-4 rounded-md'>
            <div 
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mt-1 sm:mt-2 ${colorClasses[item.color]}`}
            ></div>
            <div className='flex-1 min-w-0'>
              <h6 className='text-xs sm:text-sm md:text-[14px] font-normal text-white leading-tight sm:leading-normal'>
                {item.text}
              </h6>
              <p className='text-[10px] sm:text-xs md:text-[12px] font-normal text-gray-300 mt-1'>
                {item.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivities