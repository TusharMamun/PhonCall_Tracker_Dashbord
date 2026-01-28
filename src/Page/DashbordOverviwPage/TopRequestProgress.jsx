import React from 'react';
import { repairData } from '../../util/data';

const TopRequestProgress = () => {

  return (
    <div className="w-full  mx-auto p-4 sm:p-6 dashborCardBackgroud rounded-xl shadow-lg ">
      <h2 className="text-lg sm:text-xl font-normal text-white mb-6 sm:mb-8">Top Repair Requests</h2>
      
      <div className="space-y-4 sm:space-y-6">
        {repairData.map((item, index) => {
          const percentage = Math.round((item.requests / item.total) * 100);
          
          return (
            <div key={index} className="space-y-1 sm:space-y-2">
              {/* Header with name and count */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                <span className="font-medium text-white text-sm sm:text-base">{item.name}</span>
                <span className="text-xs sm:text-sm progressCardTExtColr">
                  {item.requests} requests
                </span>
              </div>
              
              {/* Progress bar */}
              <div className="w-full h-1.5 sm:h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-[#2B7FFF] to-[#00B8DB] transition-all duration-500 ease-out"
                  style={{ width: `${percentage}%` }}
                >
                </div>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRequestProgress;