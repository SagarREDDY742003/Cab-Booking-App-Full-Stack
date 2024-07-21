import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function HomeNavbar() {
  return (
    <nav className='bg-black py-4'>
        <div className='max-auto px-4'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <div className='flex items-center mx-5'>
                        <img src='https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ola-white-logo.svg' alt='img'/>
                    </div>
                    <div>
                        <ul className='flex items-center'>
                            <li className='mr-6'>
                                <a href='' className='text-white hover:text-green-200 '>Ola Electric</a>
                            </li>
                            <li className='mr-6'>
                                <a href='' className='text-white hover:text-green-200 '>Krutrim </a>
                            </li>
                            <li className='mr-6'>
                                <a href='' className='text-white hover:text-green-200 '>Outstation</a>
                            </li>
                        </ul>
                    </div> 
                </div>
                <div>
                    <button className='bg-gray-700 text-white hover:bg-green-400 hover:text-black text-sm font-semibold px-4 py-3'>Book an Ola Cab</button>
                    <button className='bg-white text-black ml-5 hover:bg-orange-400 hover:text-white text-sm font-semibold px-4 py-3'>Free S1 Test Ride</button>
                    <MenuIcon className="ml-5 text-white text-3xl" />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default HomeNavbar