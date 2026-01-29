import React from 'react'

const ProfilePage = () => {
  return (
<div className='min-h-screen'>

        <div>
<h4 className='text-xl font-normal popinsfont text-white'>Profile Image</h4>
<div className="flex items-end gap-2 mt-4">

  <div className="w-[102px] h-[102px] rounded-full overflow-hidden">
    <img
      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      alt="User avatar"
      className="w-full h-full object-cover"
    />
  </div>
  

  <button 
    className="flex items-center gap-2 py-1 px-2 rounded-full"
    style={{
      background: 'linear-gradient(to bottom, #152252, #111B3C)',
      boxShadow: 'inset 0 1px 18px 2px #D2EAFF'
    }}
  >
    <span className="font-medium text-white text-sm">Edit Profile</span>
  </button>
</div>

    </div>
{/* --------- */}
<div className='mt-10 space-y-4'>



    <div className='flex items-center gap-[106px] profileBorder pb-4'>
<h1 className='text-xl font-medium text-white'  >Full Name:</h1>
<h1 className='text-xl font-normal text-white'>Jane D.</h1>

</div>

    <div className='flex items-center gap-[149px] profileBorder pb-4'>
<h1 className='text-xl font-medium text-white'  >Email:</h1>
<h1 className='text-xl font-normal text-white'>jane@gmail.com</h1>

</div>

    <div className='flex items-center gap-[88px] profileBorder pb-4'>
<h1 className='text-xl font-medium text-white'  >Store Name:</h1>
<h1 className='text-xl font-normal text-white'>Ubreakfix Store.</h1>

</div>
    <div className='flex items-center gap-[64px]  pb-4'>
<h1 className='text-xl font-medium text-white'  >Store Address:</h1>
<h1 className='text-xl font-normal text-white'>123 Main Street, New York, NY 10001</h1>

</div>




</div>








</div>
  )
}

export default ProfilePage