"use client"
import React from 'react'
import LayOut from '@/app/Components/User/LayOut/LayOut'
import { useEffect } from 'react'
import RideDetail from './RideDetail'
const page = (props) => {
    useEffect(() => {
        console.log(props);
    },[])
  return (
    <LayOut children={<RideDetail/>} />
  )
}

export default page
