import React from 'react'

const AppointMentTable = () => {
  const appointments = [
    {
      clientName: 'Jane.D',
      clientPhone: '01960685765',
      clientEmail: 'admin@gmail.com',
      device: 'Apple/Iphone 13pro',
      repairType: 'Screen',
      date: '02/06/2026',
      slotNo: '1',
      startTime: '09:00'
    },
    // Add more appointment objects here as needed
  ];

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full  border border-blue-900 rounded-lg shadow-md">
        <thead>
          <tr className="tableBackground border-b mb-1.5">
            <th className="py-[18px] px-[13px] text-center  text-[14px] font-normal text-white   ">Client Name</th>
            <th className="py-[18px] px-[13px] text-center  text-[14px] font-normal text-white  ">Client Phone</th>
            <th className="py-[18px] px-[13px] text-center  text-[14px] font-normal text-white  r">Client mail</th>
            <th className="py-[18px] px-[13px] text-center  text-[14px] font-normal text-white  ">Device</th>
            <th className="py-[18px] px-[13px] text-center  text-[14px] font-normal text-white  ">Repair Type</th>
            <th className="py-[18px] px-[13px] text-center  text-[14px] font-normal text-white  ">Date</th>
            <th className="py-[18px] px-[13px] text-center  text-[14px] font-normal text-white  ">Slot no</th>
            <th className="py-[18px] px-[13px] text-center  text-[14px] font-normal text-white ">Start Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr 
              key={index} 
              className={` ' space-y-2 bg-gray-50' : 'bg-white'} border-b hover:bg-gray-100 transition-colors`}
            >
              <td className="py-3 px-4 border-r">{appointment.clientName}</td>
              <td className="py-3 px-4 border-r">{appointment.clientPhone}</td>
              <td className="py-3 px-4 border-r">{appointment.clientEmail}</td>
              <td className="py-3 px-4 border-r">{appointment.device}</td>
              <td className="py-3 px-4 border-r">{appointment.repairType}</td>
              <td className="py-3 px-4 border-r">{appointment.date}</td>
              <td className="py-3 px-4 border-r">{appointment.slotNo}</td>
              <td className="py-3 px-4">{appointment.startTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AppointMentTable