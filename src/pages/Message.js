import React from 'react'
import { Avatar, Box, Button } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styles from "./Message.module.css";
import image from '../assets/akash.jpg'
import image2 from '../assets/siddharth.jpg'
import image3 from '../assets/anoop.jpg'
import image4 from '../assets/rajan.jpg'
import image5 from '../assets/madhav.jpg'
import image6 from '../assets/udit.jpeg'
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
        
]

const Message = () => {
  return (
  <Box>
    <Box  classname={styles.box} sx={{backgroundColor:'black',color :'white'}}>
        <div className={styles.button_user}>
        <Button> <ArrowBackIosNewIcon /></Button>
        <h3 className='username'>_m_a.d_h.a_v</h3>
        </div>
        <hr  />
        <h3>Messages</h3>
        {Messages.map((user_message) =>{
        return  <Box className={styles.user_message} sx={{mt:0,pt:0}}>   
        <Avatar alt="user logo" src={user_message.img} />
       <div ><h5> {user_message.name}</h5>
       <p className={styles.para}>{user_message.message}</p></div>
        </Box>
})}
       
    </Box>
  </Box>
  )
}

export default Message
