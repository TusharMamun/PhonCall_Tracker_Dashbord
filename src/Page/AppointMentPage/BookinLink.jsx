import React from 'react'
import { IoCopyOutline } from 'react-icons/io5'

const BookinLink = () => {
  return (
<div className="p-4 space-y-4 mt-5 bg-gradient-to-b from-[#1A1A2E] to-[#16213E] rounded-md">
<div className='p-[25px]'>
          <h1 className='text-[16px] font-normal text-white my-4'>Booking Link</h1>
      <div className='flex items-center gap-3'>
        <input 
          className='text-white text-[16px] font-normal w-full border rounded-md border-white py-3 px-4 placeholder-white inputBlokingFild' 
          placeholder='https://techstore.com/book?id=store123' 
          type="text" 
        />
        <div>
          <button className='flex items-center gap-2  py-3 px-[11px] rounded-md'
            style={{
              background: 'linear-gradient(to bottom, #152252, #111B3C)',
              boxShadow: 'inset 0 1px 18px 2px #D2EAFF'
            }}>
            <IoCopyOutline className='w-6 h-6 text-amber-50'/>
            <p className='font-medium text-[16px] text-white whitespace-nowrap'>Copy Link</p>
          </button>
        </div>
      </div>
</div>
    </div>
  )
}

export default BookinLink