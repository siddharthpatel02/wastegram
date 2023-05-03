import React from 'react'
import Button from '@mui/material/Button';
import styles from './LoginButton.module.css'


const LoginButton = (props) => {
  return (
    <div>
      <Button sx={{marginLeft:'2rem',height:'2rem',width:'17.5rem',borderRadius:'6px',background:'#0095F6;',marginTop:'0.6rem'}} className={styles.loginbutton} type={props.type} variant="contained">{props.children}</Button>

    </div>
  )
}

export default LoginButton
