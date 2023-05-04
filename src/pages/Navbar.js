import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import CompanyName from "../assets/instawhite.png";




const Navbar = () => {
  return (
    
    <AppBar position='static' sx={{backgroundColor:'black',p:0,m:0}}>
        <Toolbar>
        <img
        style={{backgroundColor:'white',marginLeft:'7rem'}}
            src={CompanyName}
            alt="logo"
            height={30}
            width={120}
          />
         
          
        </Toolbar>
    </AppBar>
)}

export default Navbar
