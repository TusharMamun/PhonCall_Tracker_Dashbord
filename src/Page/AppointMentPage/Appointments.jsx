import React from 'react'
import BookingStatus from './BookingStatus'
import BookinLink from './BookinLink'
import AppointMentTable from './AppointMentTable'
import Pagination from './Pagination'

const Appointments = () => {
  return (
    <div  className='p-6'   >
<div>
   <BookingStatus></BookingStatus>
</div>
<div>
  <BookinLink/>
</div>
<div>
  <AppointMentTable/>
</div>
<div>
  <Pagination/>
</div>
 
 </div>
  )
}

export default Appointments