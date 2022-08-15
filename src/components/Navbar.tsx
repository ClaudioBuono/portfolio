import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { slide as Menu } from 'react-burger-menu';
import DarkMode from './Darkmode';
import {NavLink } from 'react-router-dom';

import '../styles/burgerMenu.css';
import '../styles/navbar.css';
import '../styles/hover.css';


interface Props {

  window?: () => Window;
}


function Navbar(props: Props) {

  
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    
    
    <Box sx={{ display: 'flex'}}>
      <Menu>
        <Box sx={{ marginRight:'40px',display: {sm: 'block'} }}>
          <Button href='/' sx={{color: '#fff',padding: '10px',display:'block'}}>Home</Button>
        </Box>
      </Menu>
      <AppBar position="fixed" component="nav" style={{background: 'rgb(24, 27, 31,0.3)', boxShadow: "none",}}>
          <Toolbar style={{justifyContent: 'flex-end'}}> 
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block'} }}
          >
          </Typography>

          <Box className='navButtons' sx={{ marginRight:'40px',display: {sm: 'block'} }}>
            <NavLink to='/' className={({ isActive }) => (isActive ? "hvr-underline-reveal_active" : "hvr-underline-reveal")} ><span>Home</span></NavLink>
            <NavLink to='/Projects' className={({ isActive }) => (isActive ? "hvr-underline-reveal_active" : "hvr-underline-reveal")} ><span>Projects</span></NavLink>
            <NavLink to='/ContactMe' className={({ isActive }) => (isActive ? "hvr-underline-reveal_active" : "hvr-underline-reveal")} ><span>Contact</span></NavLink>              
          </Box>
          
          <DarkMode/>
          
        </Toolbar>
      </AppBar>
    </Box>
    
  );
};

export default Navbar;
