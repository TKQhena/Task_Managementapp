import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };
  return (
    <div>
          <AppBar position="static" sx={{ bottom: 'auto', top: 0, width: '100vw', zIndex: 999, position: 'fixed' }}>
              <Toolbar>
                  <IconButton edge="start" color="inherit" onClick={handleDrawerOpen} sx={{ mr: 2 }}>
                      <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" component="div">
                      Project Management System
                  </Typography>
              </Toolbar>
          </AppBar>
          <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
              <List>
                  <ListItem>
                      <ListItemText primary="Dashboard" />
                  </ListItem>
                  <ListItem >
                      <ListItemText primary="Projects" />
                  </ListItem>
                  <ListItem >
                      <ListItemText primary="Tasks" />
                  </ListItem>
              </List>
          </Drawer>
    </div>
  )
}

export default Navbar
