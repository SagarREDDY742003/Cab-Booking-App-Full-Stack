'use Client'
import { Grid } from '@mui/material'
import React from 'react'
import BookRide from '@/app/BookRide/BookRide'

function LayOut({children}) {
  return (
    <div className='h-screen '>
        <Grid container>
            <Grid item xs={12} md={8} lg={5}>
                <BookRide />
            </Grid>
            <Grid item className='h-screen w-full ' xs={0} md={4} lg={7} >
                <img className='w-full h-full object-cover object-right-top' src='https://olawebcdn.com/images/v1/bg_city.jpg' alt='' />
            </Grid>
        </Grid>

    </div>
  )
}

export default LayOut