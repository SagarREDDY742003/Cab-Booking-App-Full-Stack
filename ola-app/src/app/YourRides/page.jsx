"user client"
import React from 'react'
import LayOut from '../Components/User/LayOut/LayOut'
import Rides from './Rides'

const page = () => {
  return (
    <LayOut children={<Rides />}/>
  )
}

export default page
