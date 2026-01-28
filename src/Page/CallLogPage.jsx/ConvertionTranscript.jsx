import React from 'react'
import { IoDocumentTextOutline } from 'react-icons/io5'

const ConvertionTranscript = () => {
  return (
    <div className='dashborCardBackgroud p-4 sm:p-6 lg:p-8'>
      {/* Header */}
      <div className='flex items-center gap-2 sm:gap-3'>
        <IoDocumentTextOutline className='w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-blue-600' />
        <h6 className='text-white text-base sm:text-lg lg:text-xl font-normal'>
          Conversation Transcript
        </h6>
      </div>

      {/* Transcript Content */}
      <div className='mt-1 sm:mt-2 lg:mt- rounded-xl p-4 sm:p-6 lg:p-8 dashborCardBackgroud space-y-4 sm:space-y-5 lg:space-y-6'>
        {/* Message 1 - AI Assistant */}
        <div className='space-y-1 sm:space-y-2'>
          <h4 className='text-green-400 text-sm sm:text-base lg:text-lg font-normal'>
            AI Assistant:
          </h4>
          <p className='text-white text-xs sm:text-sm lg:text-base font-medium leading-relaxed sm:leading-relaxed lg:leading-relaxed'>
            Thank you for calling UBreakiFix! How can I help you today?
          </p>
        </div>

        {/* Message 2 - Customer */}
        <div className='space-y-1 sm:space-y-2'>
          <h4 className='text-blue-400 text-sm sm:text-base lg:text-lg font-normal'>
            Customer:
          </h4>
          <p className='text-white text-xs sm:text-sm lg:text-base font-medium leading-relaxed sm:leading-relaxed lg:leading-relaxed'>
            Hi, my iPhone 13 screen is cracked. How much would it cost to repair?
          </p>
        </div>

        {/* Message 3 - AI Assistant */}
        <div className='space-y-1 sm:space-y-2'>
          <h4 className='text-green-400 text-sm sm:text-base lg:text-lg font-normal'>
            AI Assistant:
          </h4>
          <p className='text-white text-xs sm:text-sm lg:text-base font-medium leading-relaxed sm:leading-relaxed lg:leading-relaxed'>
            I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?
          </p>
        </div>

        {/* Message 4 - Customer */}
        <div className='space-y-1 sm:space-y-2'>
          <h4 className='text-blue-400 text-sm sm:text-base lg:text-lg font-normal'>
            Customer:
          </h4>
          <p className='text-white text-xs sm:text-sm lg:text-base font-medium leading-relaxed sm:leading-relaxed lg:leading-relaxed'>
            Yes, please! When are you available?
          </p>
        </div>

        {/* Message 5 - AI Assistant */}
        <div className='space-y-1 sm:space-y-2'>
          <h4 className='text-green-400 text-sm sm:text-base lg:text-lg font-normal'>
            AI Assistant:
          </h4>
          <p className='text-white text-xs sm:text-sm lg:text-base font-medium leading-relaxed sm:leading-relaxed lg:leading-relaxed'>
            Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?
          </p>
        </div>
      </div>
    </div>
  )
}

export default ConvertionTranscript