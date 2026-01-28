import { Search } from 'lucide-react'
import React from 'react'
import CallList from './CallList'

const CallHistory = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by phone number, issue type..."
          className="w-full pl-10 pr-4 py-3 border text-[16px] rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
        />
      </div>
<CallList/>

    </div>
  )
}

export default CallHistory