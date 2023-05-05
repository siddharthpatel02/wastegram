import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import CompanyName from "../assets/instawhite.png";
import styles from './navbar.module.css'
import { Container } from '@mui/material';
import { AppBlocking } from '@mui/icons-material';




const Navbar = () => {
  return (
    
    <AppBar position='static'  sx={{backgroundColor:'black',p:0,m:0}}>
        <Toolbar>
        <img className={styles.logo}
        style={{marginLeft:'1rem',paddingTop:'1.5rem'}}
            src={CompanyName}
            alt="logo"
            height={30}
            width={120}
          />
         
          
        </Toolbar>
    </AppBar>
)}

export default Navbar
