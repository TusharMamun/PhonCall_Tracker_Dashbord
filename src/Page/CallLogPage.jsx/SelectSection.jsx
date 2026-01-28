import React from 'react'

const SelectSection = () => {
  return (
    <div className='flex flex-col sm:flex-row sm:items-center  md:items-end   gap-3 sm:gap-4 md:gap-6'>
      <div className='w-full sm:w-auto'>
        <select 
          name="status-filter" 
          id="status-filter"
          className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
        >
          <option value="all">All Issues</option>
          <option value="ai-resolved">AI Resolved</option>
          <option value="warm-transfer">Warm Transfer</option>
          <option value="dropped">Dropped</option>
          <option value="appointment">Appointment</option>
        </select>
      </div>
      
      <div className='w-full sm:w-auto'>
        <select 
          name="issue-filter" 
          id="issue-filter"
          className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
        >
          <option value="all">All Issues</option>
          <option value="software">Software</option>
          <option value="battery">Battery</option>
          <option value="unknown">Unknown</option>
          <option value="screen">Screen</option>
        </select>
      </div>
      
      <div className='w-full sm:w-auto'>
    <select 
  name="time-filter" 
  id="time-filter"
  className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
  defaultValue="today"
>
  <option value="today">Today</option>
  <option value="last-week">Last Week</option>
  <option value="this-month">This Month</option>
</select>
      </div>
    </div>
  )
}

export default SelectSection