import React from 'react'
import { bookingData } from '../../util/data'

const AppointMentTable = () => {

  

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full  border border-blue-900 rounded-lg shadow-md">
        <thead>
          <tr className="tableBackground border-b mb-1.5">
            <th className="py-[18px] px-[13px] text-center  text-[14px] font-normal text-white   ">Client Name</th>
            <th className="py-[18px] px-[13px] text-center  text-[14px] font-normal text-white  ">Client Phone</th>
            <th className="py-[18px] px-[13px] text-center  text-[14px] font-normal text-white  ">Client mail</th>
            <th className="py-[18px] px-[13px] text-center  text-[14px] font-normal text-white  ">Device</th>
            <th className="py-[18px] px-[13px] text-center  text-[14px] font-normal text-white  ">Repair Type</th>
            <th className="py-[18px] px-[13px] text-center  text-[14px] font-normal text-white  ">Date</th>
            <th className="py-[18px] px-[13px] text-center  text-[14px] font-normal text-white  ">Slot no</th>
            <th className="py-[18px] px-[13px] text-center  text-[14px] font-normal text-white ">Start Time</th>
          </tr>
        </thead>
        <tbody className=''>
          {bookingData.map((appointment, index) => (
            <tr 
              key={index} 
              className=' tableBackground   transition-colors bordrBolr'
            >
              <td className="py-3 px-4   text-center  text-blue-400   text-[14px] font-nor">{appointment.clientName}</td>
              <td className="py-3 px-4   text-center    font-normal text-[16px]  ">{appointment.clientPhone}</td>
              <td className="py-3 px-4     text-center  font-normal text-[16px]  ">{appointment.clientEmail}</td>
              <td className="py-3 px-4 text-neutral-300     text-center font-normal text-[16px]  ">{appointment.device}</td>
              <td className="py-3 px-4 text-neutral-300   text-center   font-normal text-[16px]  ">{appointment.repairType}</td>
              <td className="py-3 px-4 text-neutral-300  text-center    font-normal text-[16px]  ">{appointment.date}</td>
              <td className="py-3 px-4  text-neutral-300  text-center  font-normal text-[16px]   ">{appointment.slotNo}</td>
              <td className="py-3 px-4 text-neutral-300  text-center   font-normal text-[16px]">{appointment.startTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AppointMentTable