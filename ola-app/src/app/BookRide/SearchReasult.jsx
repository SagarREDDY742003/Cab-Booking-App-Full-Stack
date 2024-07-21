import React from 'react'
import { Divider } from '@mui/material'
import SearchReasultCard from './SearchReasultCard'

const SearchReasult = ({area_key,setActiveField,item,latitude_key,longitude_Key}) => {
  return (
    <div className='absolute top-10 left-0 right-0 z-10 bg-white rounded-md p-2 border max-h-[50vh] overflow-y-scroll shadow-md hide-scrollbar '>
        {[1,1,1,1].map((item) => 
            <>
                <SearchReasultCard area_key={area_key} setActiveField={setActiveField} key={item.display_name} item={item} latitude_key={latitude_key} longitude_Key={longitude_Key} />
                <Divider />
            </>
        )}
      
    </div>
  )
}

export default SearchReasult
