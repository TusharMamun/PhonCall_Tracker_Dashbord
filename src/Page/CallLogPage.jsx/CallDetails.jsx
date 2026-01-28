import React from 'react'
import SelectSection from './SelectSection'
import CallDetailCard from './CallDetailCard'
import ConvertionTranscript from './ConvertionTranscript'

const CallDetails = () => {
  return (
    <div >
<div>      <SelectSection></SelectSection></div>
<div>
<CallDetailCard/>
</div>
<div>
<ConvertionTranscript/>
</div>


    </div>
  )
}

export default CallDetails