import React from 'react'
import LocationOnIcon  from '@mui/icons-material/LocationOn'

const SearchReasultCard = () => {
    const handleSelect=()=>{
        console.log()
    }
  return (
    <div onClick={handleSelect} className='flex items-center py-2 z-10 bg-slate-50 cursor-pointer'>
        <div className='pr-5'>
            <LocationOnIcon className='opacity-50'/>
        </div>
        <div>
            <p className='font-semibold'>qdqd</p>
            <p className='font-semibold opacity-60'>wdwdd</p>
        </div>
      
    </div>
  )
}

export default SearchReasultCard
