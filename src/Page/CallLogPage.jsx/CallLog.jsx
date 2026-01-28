import React from 'react'
import CallHistory from './CallHistory'
import CallDetails from './CallDetails'

const CallLog = () => {
  return (
<div className="p-4 sm:p-6 lg:p-8">
  <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">

    <div className="w-full lg:w-1/2 xl:w-1/2">
      <CallHistory />
    </div>
    

    <div className="w-full lg:w-1/2 xl:w-1/2">
      <CallDetails />
    </div>
  </div>
</div>
  )
}

export default CallLog