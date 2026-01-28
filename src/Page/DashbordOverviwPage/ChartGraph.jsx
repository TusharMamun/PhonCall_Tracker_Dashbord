import WeeklyBarChart from "./WeeklyBarChart"

const ChartGraph = () => {
  return (
    <div className='p-[25px] dashborCardBackgroud ml-4 rounded-md space-y-4'>
<div className='flex items-center justify-between'>
<div>
    <h1 className='text-white text-[20px]  font-normal mb-2'>Call Trends - This Week</h1>
    <p className='text-[14px] font-normal text-slate-400'>Total: 472 calls</p>
</div>
<div>
 <select className="   w-full max-w-[200px] text-white text-[16px] font-normal bg-gray-800 border-0">
  <option className="text-white  ">This Week</option>
  <option className="text-white">Last Week</option>
  <option className="text-white">This Month</option>
  <option className="text-white">Last Month</option>
</select>
</div>

</div>
<WeeklyBarChart></WeeklyBarChart>

    </div>
  )
}

export default ChartGraph