'use Client'
import React from 'react'
import LayOut from '../Components/User/LayOut/LayOut'
import BookRide from './BookRide'

function page() {
  return (
    <div>
      <LayOut children={<BookRide/>}></LayOut>
    </div>
  )
}

export default page