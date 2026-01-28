import React from 'react'
import Playico from '../../assets/Icon.png'

const CallDetailCard = () => {
  return (
    <div className='mt-4 sm:mt-[22px] rounded-xl p-4 sm:p-6 dashborCardBackgroud'>
      {/* Header */}
      <div className="border-b border-[rgba(255,255,255,0.05)] pb-3 mb-4 sm:mb-6">
        <h1 className='text-lg sm:text-xl lg:text-2xl font-normal text-white'>
          Call Details
        </h1>
      </div>

      {/* Grid Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
        {/* Phone Number */}
        <div className='space-y-1 sm:space-y-2'>
          <p className='detailsPhonText text-sm sm:text-[14px] font-normal'>
            Phone Number
          </p>
          <h6 className='text-base sm:text-[16px] lg:text-lg font-normal text-white'>
            +1 (555) 123-4567
          </h6>
        </div>

        {/* Duration */}
        <div className='space-y-1 sm:space-y-2'>
          <p className='detailsPhonText text-sm sm:text-[14px] font-normal'>
            Duration
          </p>
          <h6 className='text-base sm:text-[16px] lg:text-lg font-normal text-white'>
            4:32
          </h6>
        </div>

        {/* Date & Time */}
        <div className='space-y-1 sm:space-y-2'>
          <p className='detailsPhonText text-sm sm:text-[14px] font-normal'>
            Date & Time
          </p>
          <h6 className='text-base sm:text-[16px] lg:text-lg font-normal text-white'>
            2025-12-16 10:45 AM
          </h6>
        </div>

        {/* Issue Type */}
        <div className='space-y-1 sm:space-y-2'>
          <p className='detailsPhonText text-sm sm:text-[14px] font-normal'>
            Issue Type
          </p>
          <h6 className='text-base sm:text-[16px] lg:text-lg font-normal text-white'>
            Screen
          </h6>
        </div>
      </div>

      {/* Call Type Button */}
      <div className='my-6 sm:my-8 space-y-2'>
        <h5 className='text-sm sm:text-[14px] font-normal mb-1'>
          Call Type
        </h5>
        <button
          className="
            relative inline-flex items-center justify-center 
            px-4 py-1.5 sm:px-6 sm:py-2 
            rounded-full border transition-all duration-300 
            text-sm sm:text-base font-medium 
            w-full sm:w-auto 
            bg-emerald-900/80 text-emerald-400 
            border-emerald-500/40 
            shadow-[0_0_10px_rgba(16,185,129,0.6)] 
            hover:shadow-[0_0_14px_rgba(16,185,129,0.9)]
          "
        >
          AI Resolved
        </button>
      </div>

      {/* Outcome */}
      <div className='mb-6 sm:mb-8 space-y-1 sm:space-y-2'>
        <p className='text-sm sm:text-[14px] detailsPhonText'>
          Outcome
        </p>
        <h5 className='text-base sm:text-[16px] lg:text-lg font-normal text-white'>
          Quote provided
        </h5>
      </div>

      {/* Play Audio Button */}
      <div className='mt-8 sm:mt-10'>
        <button
          className="
            flex items-center justify-center 
            w-full gap-2 sm:gap-3
            px-4 py-3 sm:px-6 sm:py-4 
            rounded-lg sm:rounded-xl
            bg-gradient-to-r from-[#AD46FF] to-[#F6339A]
            border border-[#AD46FF]/30
            text-white
            hover:opacity-90
            transition-all duration-300
          "
        >
          <img 
            className="w-5 h-5 sm:w-6 sm:h-6" 
            src={Playico} 
            alt="Play" 
          />
          <span className="text-base sm:text-lg lg:text-xl font-normal text-purple-800">
            Play Audio Recording
          </span>
        </button>
      </div>
    </div>
  )
}

export default CallDetailCard