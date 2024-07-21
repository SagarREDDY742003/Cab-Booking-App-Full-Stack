'use client'
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography, Button, Drawer} from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { drawerList } from './DrawerList';
const BookRideNavBar = () => {

  const[sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarClose = () => setSidebarOpen(false);
  const handleSidebarOpen = () => setSidebarOpen(true);
  return (
    <Box >
      <AppBar sx={{backgroundColor:'#205474'}} position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleSidebarOpen} >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Zosh Cab
          </Typography>
          {false? (
            <Avatar className='cursor-pointer' sx={{bgcolor:deepOrange[500]}}>A</Avatar>
          ):(
            <Button color="inherit">Login</Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor={'left'} open={sidebarOpen} onClose={handleSidebarClose} >
        {drawerList('left')}
      </Drawer>
    </Box>
  )
}

export default BookRideNavBar
