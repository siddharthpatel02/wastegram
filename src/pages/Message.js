import React, { useEffect, useState } from 'react'
import { Avatar, Box, Button } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styles from "./Message.module.css";
import image from '../assets/akash.jpg'
import image2 from '../assets/siddharth.jpg'
import image3 from '../assets/anoop.jpg'
import image4 from '../assets/rajan.jpg'
import image5 from '../assets/madhav.jpg'
import image6 from '../assets/udit.jpeg'
import {Link,useNavigate} from 'react-router-dom'
const Messages=[
    {
        id: 1,
        name: 'Akash Malviya',
        img: image,
        message:'Knowledge is Power!'
      },
      {
          id: 2,
          name: 'Siddharth Patel',
          img: image2,
          message:'If you want the opportunity to knock, it’s time to build a door'
        },
        {
          id: 3,
          name: 'Anoop Sharma',
          img: image3,
          message:'If you don’t believe in yourself,who will?'
        },
         {
          id: 4,
          name: 'Rajan Sharma',
          img: image4,
          message:'It always seems impossible until it’s done'
        },
        {
          id: 5,
          name: 'Madhav sharma',
          img: image5,
          message:'The little things in life matter'
        },
        {
          id: 6,
          name: 'Udit Tiwari',
          img: image6,
          message:'If you want the opportunity to knock, it’s time to build a door'
        },
        {
            id: 7,
            name: 'Akash Malviya',
            img: image,
            message:'Knowledge is Power!'
          },
          {
              id: 8,
              name: 'Siddharth Patel',
              img: image2,
              message:'If you want the opportunity to knock, it’s time to build a door'
            },
            {
              id: 9,
              name: 'Anoop Sharma',
              img: image3,
              message:'If you don’t believe in yourself,who will?'
            },
             {
              id: 10,
              name: 'Rajan Sharma',
              img: image4,
              message:'It always seems impossible until it’s done'
            },
            {
              id: 11,
              name: 'Madhav sharma',
              img: image5,
              message:'The little things in life matter'
            },
            {
              id: 12,
              name: 'Udit Tiwari',
              img: image6,
              message:'If you want the opportunity to knock, it’s time to build a door'
            },
              {
              id: 13,
              name: 'Siddharth Patel',
              img: image2,
              message:'If you want the opportunity to knock, it’s time to build a door'
            },
            {
              id: 14,
              name: 'Anoop Sharma',
              img: image3,
              message:'If you don’t believe in yourself,who will?'
            },
             {
              id: 15,
              name: 'Rajan Sharma',
              img: image4,
              message:'It always seems impossible until it’s done'
            },
            {
              id: 16,
              name: 'Madhav sharma',
              img: image5,
              message:'The little things in life matter'
            },
            {
              id: 17,
              name: 'Udit Tiwari',
              img: image6,
              message:'If you want the opportunity to knock, it’s time to build a door'
            },
        
]

const Message = () => {
  const [data,setData]=useState("")
  const navigate=useNavigate()

  useEffect(()=>{
    // after api calling
    setData("api")
    console.log("data")
    
  },[])
  return (
  <Box>
    <Box  className={styles.box} sx={{backgroundColor:'black',color :'white'}}>
        <div className={styles.button_user}>
        <Button onClick={()=>{navigate(-1)}}> <ArrowBackIosNewIcon /></Button>
      <Link className={styles.link} to={"/profile"}>  <h3 className='username'>_m_a.d_h.a_v</h3></Link>
        </div>
        <hr  />
        <h3>Messages</h3>
        {Messages.map((user_message) =>{
        return  <Box key={user_message.id} className={styles.user_message} sx={{mt:0,pt:0}}>   
       <Link to={"/profile"}> <Avatar alt="user logo" src={user_message.img} /></Link>
      <Link className={styles.link} to={"/chatbot"}> <div ><h5> {user_message.name}</h5>
       <p className={styles.para}>{user_message.message}</p></div></Link>
        </Box>
})}
       
    </Box>
  </Box>
  )
}

export default Message
