import React from 'react'
import styles from './story.module.css'
import Avatar from '@mui/material/Avatar';
import avatarimg from '../assets/sid.jpeg'


const Story = () => {
  return (
      <div className={styles.stack}>
      <Avatar alt="Remy Sharp" sx={{width: 63, height: 63}} src={avatarimg} />
      <p className={styles.profilename}>siddhath</p>
      </div>
  )
}

export default Story
