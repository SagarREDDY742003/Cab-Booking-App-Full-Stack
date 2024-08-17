"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import WestIcon from '@mui/icons-material/West';
import { Avatar,IconButton,Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CallIcon from '@mui/icons-material/Call';
import KeyIcon from '@mui/icons-material/Key';

const RideDetail = () => {
    const router = useRouter();
    const goBack=()=>{
        router.back();
    }
  return (
    <div>
      <div className='flex items-center px-2 lg:px-5 py-2'>
        <WestIcon onClick={goBack} className="cursor-pointer"/>
        <p className='text-center w-full'>hscgudchvvg</p>
      </div>
      <div className='px-2 lg:px-5 py-5'>
        <div className='border rounded-md'>
            <div className='flex items-center border-b p-3'>
                <span className='pr-5 opacity-70 text-xs font-semibold'>
                    PICKUP:{" "}
                </span>
                <span>Mumbai</span>
            </div>
            <div className='flex items-center border-b p-3'>
                <span className='pr-5 opacity-70 text-xs font-semibold'>
                    DROP:{" "}
                </span>
                <span>Delhi</span>
            </div>
        </div>
      </div>

      <p className='p-2 bg-green-400 text-white text-center'>
        picking i 1 min
      </p>
{/*---------------Map-------------------------- */}
      <div className='flex items-center justify-center w-full h-[42vh]'>
        <p className='text-center w-full'>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d974463.5407965322!2d78.44003839999999!3d17.435852800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723884149460!5m2!1sen!2sin" 
                width="100%" 
                height="300" 
                style={{border:"0"}} 
                allowfullscreen="" 
                loading="lazy"
            ></iframe>
        </p>
      </div>
{/*---------------Details-------------------------- */}
      <div className='px-2 lg:px-5 mt-2'>
        <div className='border rounded-md'>
            {/*---------------Cab Details-------------------------- */}
            <div className='flex justify-between w-full border-b p-3'>
                <div className='flex items-center'>
                    <Avatar alt='Remy Sgarp' src='https://cdn.pixabay.com/photo/2012/04/13/20/37/car-33556_640.png'/>
                    <div className='pl-4'>
                        <p>Toyoto Fortuner</p>
                        <p className='text-xs font-semibold opacity-60'>SUV</p>
                    </div>
                </div>
                <div>
                    <p className='text-xs'>GJ01-2626</p>
                    <p className='font-semibold'>2626</p>
                </div>
            </div>
            {/*---------------Driver Details-------------------------- */}
            <div className='flex justify-between w-full p-3'>
                <div className='flex items-center'>
                    <Avatar alt='Remy Sgarp' src='https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_640.jpg'/>
                    <div className='pl-4'>
                        <p>Sagar</p>
                        <p className='text-xs flex items-center'>
                            4.7 <StarIcon className="text-yellow-500 text-sm" />
                        </p>
                    </div>
                </div>
                <div>
                    <IconButton color="success" aria-label="call driver" >
                        <CallIcon />
                    </IconButton>
                </div>
            </div>
            {/*---------------OTP  Payment Details-------------------------- */}
            {true?(
                <Button variants="contained" className='bg-purple-500 text-white hover:bg-purple-700' sx={{width:"100%",padding:".5rem 0rem" }} >
                    pay now
                </Button>
            ):(
                <div className='flex items-center bg-yellow-500 text-white py-2 justify-between pl-4 pr-4'>
                    <div className='flex items-center'>
                        <KeyIcon />
                        <p className='ml-4'>OTP</p>
                    </div>
                    <p>4567</p>
                </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default RideDetail
