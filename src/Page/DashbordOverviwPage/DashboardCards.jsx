

import React from 'react'
import { dashboardStats } from '../../util/data.jsx';

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {dashboardStats.map((stat) => (
        <div key={stat.id} className="dashborCardBackgroud rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-600 font-medium">{stat.title}</h3>
            <div className={`p-2 rounded-full`}>
              {stat.icon}
            </div>
          </div>
          <div className="mt-4">
            <div className="flex flex-col items-start gap-4">
              <span className="text-3xl font-bold">{stat.value}</span>
              <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
            </div>
        
          </div>
        </div>
      ))}
    </div>
  );
};
export default DashboardCards