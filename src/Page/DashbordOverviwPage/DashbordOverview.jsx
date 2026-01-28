import React from 'react'
import DashboardCards from './DashboardCards'
import ChartGraph from './ChartGraph'
import RecentlyActivitis from './RecentlyActivitis'
import TopRequestProgress from './TopRequestProgress'


const DashbordOverview = () => {
  return (
    <div className='space-y-4'>
<DashboardCards></DashboardCards>
<ChartGraph></ChartGraph>



<div className='p-3 sm:p-4 flex flex-col lg:flex-row items-start gap-4 sm:gap-6'>
  <div className='w-full lg:flex-1'>
    <RecentlyActivitis></RecentlyActivitis>
  </div>
  
  <div className='w-full lg:flex-1'>
    <TopRequestProgress/>
  </div>
</div>


    </div>
  )
}

export default DashbordOverview