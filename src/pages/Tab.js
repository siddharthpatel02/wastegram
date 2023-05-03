import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import ImageIcon from '@mui/icons-material/Image';

import CompanyName from '../assets/Instagram.png'
import styles from './tabular.module.css'
import { AppBar } from '@mui/material';
import { Box } from '@mui/system';
import { red } from '@mui/material/colors';
import { Button } from '@mui/base';


const Tabular = () => {
    const handleChange=()=>{}
    const value=""
    return (
<Box sx={{height:765,width:250,backgroundColor:"black"}} >
        <Tabs sx={{s:1}} orientation='vertical' value={value} onChange={handleChange} aria-label="icon label tabs example" >
           
          <Tab icon={<HomeIcon sx={{color:"white",margin:1,fontSize:35}} />} iconPosition="start" label="Home" sx={{color:"white",fontWeight:10,marginTop:12,marginInlineEnd:18}} />
          <Tab icon={<SearchIcon sx={{color:"white",margin:1,fontSize:35}} />} iconPosition="start" label="Search" sx={{color:"white",marginInlineEnd:15}} />
          <Tab icon={<MessageIcon sx={{color:"white",margin:1,fontSize:35}} />} iconPosition="start" label="Message" sx={{color:"white",marginInlineEnd:15}} />
          <Tab icon={<ImageIcon sx={{color:"white",margin:1,fontSize:35}} />} iconPosition="start" label="Profile" sx={{color:"white",marginInlineEnd:16}} />
          <Button color="secondary" sx={{width:10}}  variant="contained">Log Out</Button>

        </Tabs>
        </Box    >
      );
    }
    

export default Tabular
