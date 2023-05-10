import {
  Avatar,
  BottomNavigation,
  Button,
  Paper,
  Toolbar,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import image from "../assets/akash.jpg";
import { Favorite } from "@mui/icons-material";
import {useNavigate,Link} from "react-router-dom"

const Footer = () => {
const navigate=useNavigate()


  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>

    <BottomNavigation position="fixed" sx={{backgroundColor:'black',p:0,m:0}}>
                <Toolbar>

      <Button onClick={()=>{navigate("/home")}} sx={{color:"white"}}>{<HomeIcon fontSize="large" />}</Button>
      <Button onClick={()=>{navigate("/message")}} sx={{ml:5,color:"white"}}  >{<MapsUgcIcon fontSize="large"  />}</Button>
      <Button  sx={{ml:5,color:"white"}} color="inherit">{<Favorite fontSize="large" />}</Button>

      <Button onClick={()=>{navigate("/profile")}} sx={{ml:5}} color="inherit">
        {" "}
        <Avatar alt="Remy Sharp" sx={{ width: 35, height: 35 }} src={image} />
      </Button>
      </Toolbar>

     
    </BottomNavigation>
    </Paper>
  );
};

export default Footer;
