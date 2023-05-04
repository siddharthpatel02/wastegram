import React from 'react'
import styles from './story.module.css'
import Avatar from '@mui/material/Avatar';
import avatarimg from '../assets/sid.jpeg'


const Story = (props) => {
  return (
      <div className={styles.stack}>
      <Avatar alt="Remy Sharp" sx={{width: 63, height: 63}} src={props.img} />
      <p className={styles.profilename}>{props.name}</p>
      </div>
  )
}

export default Story
