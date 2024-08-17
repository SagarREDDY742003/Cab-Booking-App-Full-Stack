import React from 'react'
import LayOut from '../Components/User/LayOut/LayOut'
import Profile from './Profile'
const page = () => {
  return (
    <div>
      <LayOut children={<Profile />} />
    </div>
  )
}

export default page
