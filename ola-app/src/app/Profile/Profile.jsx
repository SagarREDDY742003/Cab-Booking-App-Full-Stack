"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import WestIcon from '@mui/icons-material/West';
import { Avatar, Button } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import RideCard from '../Components/User/RideCard/RideCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import WifiIcon from '@mui/icons-material/Wifi';

const Profile = () => {
    const router = useRouter();
    const goBack=()=>{
        router.back();
    }
  return (
    <div className='px-2 lg:px-5'>
      <div className='px-2 lg:px-5 py-2'>
      <WestIcon onClick={goBack} className="cursor-pointer"/>
      </div>
      
      <div className='flex flex-col items-center space-y-2'>
        <Avatar sx={{bgcolor:deepPurple[600]}}>R</Avatar>
        <p>Raam</p>
        <p>35352278228</p>
      </div>

      <div className='border rounded-sm mt-5'>
        <RideCard />
        <div className='flex flex-col items-center p-3'>
            <Button onClick={()=>router.push("/YourRides")} variant='text'>See all Rides</Button>
        </div>
      </div>

      <div className='border mt-5'>
        <div className='flex items-center p-3 border-b'>
            <AccountBalanceWalletIcon className='text-green-600'/>
            <p className='ml-5'>ola money</p>
        </div>
        <div className='flex items-center p-3 border-b'>
            <ContactPhoneIcon className='text-blue-600'/>
            <p className='ml-5'>Emergency Contact</p>
        </div>
        <div className='flex items-center p-3 border-b'>
            <WifiIcon className='text-gray-600'/>
            <p className='ml-5'>ola wifi Credentials</p>
        </div>
      </div>

      <div>
        <Button  className='w-full bg-red-500 text-white' variant='contained' color='error'>Logout</Button>
      </div>
    </div>
  )
}

export default Profile
