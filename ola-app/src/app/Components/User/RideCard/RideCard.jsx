import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';

const RideCard = () => {
  return (
    <div className='flex justify-between items-center shadow-md rounded-s-sm p-3 cursor-pointer'>
        <div className='flex items-center'>
            <img className='w-20 h-20' src='https://cdn.pixabay.com/photo/2017/04/06/22/11/car-2209439_640.png' alt=''/>
            <div className='ml-5 space-y-1'>
                <p className='text-sm font-semibold'>Today 10:08pm</p>
                <p className='text-xs font-semibold opacity-60'>cab ksw 2345</p>
                <p className='opacity-60 text-xs'>mumbai</p>
                <p className='opacity-60 text-xs'>delhi</p>
            </div>
        </div>
        {true ?(
            <div>
                <VerifiedIcon className="text-green-800 text-4xl" fontSize="3rem"/>
            </div>
            ):(
            <div className='flex flex-col justify-between pl-5'>
                <p className='text-green-500 mb-5'>Scheduled...</p>
                <Avatar alt='Remy Sgarp' src='https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_640.png'/>
            </div>
        )}
    </div>
  )
}

export default RideCard
