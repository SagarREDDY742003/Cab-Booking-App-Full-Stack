import React from 'react'
import LocationOnIcon  from '@mui/icons-material/LocationOn'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const SearchReasultCard = ({item,latitude_key,longitude_key,setActiveField,area_key}) => {
    const pickup_latitude=19.0785451
    const pickup_longitude=72.878176
    const pickup_area="Mumbai"
    const destination_latitude=42.2781401
    const destination_longitude=74.9159946
    const destination_area="Delhi"
    const searchParams = useSearchParams();
    const router = useRouter()
    const pathname = usePathname()

    const handleSelect=()=>{
        const params = new URLSearchParams(searchParams)
        params.set([latitude_key],pickup_latitude)
        params.set([longitude_key],pickup_longitude)
        params.set([area_key],pickup_area)

        router.replace(pathname+"?"+params.toString())
    }
  return (
    <div onClick={handleSelect} className='flex items-center py-2 z-10 bg-slate-50 cursor-pointer'>
        <div className='pr-5'>
            <LocationOnIcon className='opacity-50'/>
        </div>
        <div>
            <p className='font-semibold'>Mumbai</p>
            <p className='font-semibold opacity-60'>Delhi</p>
        </div>
      
    </div>
  )
}

export default SearchReasultCard
