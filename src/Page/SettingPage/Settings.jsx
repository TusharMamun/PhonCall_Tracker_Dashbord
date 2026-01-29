import React, { useState } from 'react'
import ProfilePage from './ProfilePage'
import UpdateProfilePage from './UpdateProfilePage'

const Settings = () => {
  const [ViwPage,setViwpage] =useState(true)
  return (
    <div className='p-[27px]'>
<div className='flex items-center gap-[63px] mb-10'>
<h1 onClick={()=>setViwpage(true)} className='text-2xl font-normal text-white'>Profile</h1>
<h1 onClick={()=>setViwpage(false)} className='text-2xl font-normal text-white'>Password Settings</h1>

</div>
<div>
{
  ViwPage? <ProfilePage></ProfilePage> :<UpdateProfilePage/>
}

</div>



    </div>
  )
}

export default Settings