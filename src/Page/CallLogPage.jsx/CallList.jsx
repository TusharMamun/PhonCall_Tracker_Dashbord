import React from 'react'
import phonimg from '../../assets/Phon.png'
import { FaRegClock } from 'react-icons/fa'
import { FiCheckCircle } from 'react-icons/fi'
import { callActivitiesData } from '../../util/data'

const CallList = () => {
  return (
    <div className='mt-4 sm:mt-[22px] rounded-xl p-3 sm:p-4 dashborCardBackgroud'>
      <div className="border-b border-[rgba(255,255,255,0.05)] mb-3">
        <h1 className='text-lg sm:text-xl font-normal text-white mb-3'>Call List</h1>
      </div>

      {/* Map through call data */}
      <div className="space-y-4 sm:space-y-6">
        {callActivitiesData.map((call) => (
          <div key={call.id} className='pb-3 sm:pb-4 border-b border-[rgba(255,255,255,0.05)] last:border-b-0 last:pb-0'>
            {/* Call card */}
            <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0'>
              <div className='flex items-center gap-2 sm:gap-3'>
                <div>
                  <img className='w-8 h-8 sm:w-10 sm:h-10' src={phonimg} alt="Phone" />
                </div>
                <div className='flex-1'>
                  <h6 className='text-sm sm:text-[16px] font-normal my-0.5 sm:my-1 text-white truncate'>{call.phone}</h6>
                  <p className='text-xs sm:text-[12px] font-normal text-gray-400'>{call.datetime}</p>
                </div>
              </div>
              <div className='sm:self-start mt-1 sm:mt-0'>
                <button className={`relative inline-flex items-center justify-center px-3 py-1 sm:px-4 sm:py-1.5 rounded-full 
                  border transition-all duration-300 text-xs sm:text-sm font-medium w-full sm:w-auto
                  ${call.status === 'AI Resolved' 
                    ? 'bg-emerald-900/80 text-emerald-400 border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.6)] hover:shadow-[0_0_14px_rgba(16,185,129,0.9)]' 
                    : call.status === 'Warm Transfer' 
                    ? 'bg-blue-900/80 text-blue-400 border-blue-500/40 shadow-[0_0_10px_rgba(59,130,246,0.6)] hover:shadow-[0_0_14px_rgba(59,130,246,0.9)]'
                    : call.status === 'Appointment'
                    ? 'bg-purple-900/80 text-purple-400 border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.6)] hover:shadow-[0_0_14px_rgba(168,85,247,0.9)]'
                    : 'bg-red-900/80 text-red-400 border-red-500/40 shadow-[0_0_10px_rgba(239,68,68,0.6)] hover:shadow-[0_0_14px_rgba(239,68,68,0.9)]'
                  }`}>
                  {call.status}
                </button>
              </div>
            </div>
            
            <div className='mt-3 sm:mt-4 flex flex-wrap items-center gap-2 sm:gap-[14px]'>
              <div className='flex items-center gap-0.5'>
                <FaRegClock className='w-3 h-3 progressCardTExtColr'/>
                <span className='text-xs sm:text-[14px] font-normal text-gray-300'>{call.duration}</span>
              </div>
              <div className='flex items-center gap-0.5'>
                <FiCheckCircle className='w-3 h-3 progressCardTExtColr'/>
                <span className='text-xs sm:text-[14px] font-normal text-gray-300 truncate max-w-[120px] sm:max-w-none'>{call.description}</span>
              </div>
              <div>
                <button className="text-xs sm:text-[14px] font-normal py-[2px] px-2 rounded-md border transition-colors bg-blue-900/20 text-blue-400 border-blue-500/20 hover:bg-blue-900/30">
                  {call.category}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CallList