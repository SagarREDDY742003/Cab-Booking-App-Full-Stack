import React from 'react'

const AvaliableCabs = () => {
  return (
    <div className='flex items-center border rounded-md py-1.5 px-5 cursor-pointer -z-10 hover:bg-slate-100'>
      <div>
        <img className='w-8' src='https://olawebcdn.com/images/v1/cabs/sl/ic_bike@2x.png' alt=''/>
        <p className='font-semibold text-xs'>1 min</p>
      </div>
      <div className='pl-5 text-sm '>
        <p className='font-semibold'>Bike</p>
        <p className='text-xs -z-10'>Zip through traffic at affordable fares</p>
      </div>
    </div>
  )
}

export default AvaliableCabs
