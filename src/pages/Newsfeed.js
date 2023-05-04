import { Box, Container } from '@mui/system'
import { Grid } from '@mui/material';
import { Avatar, Button } from '@mui/material';
import image from '../assets/akash.jpg'
import image2 from '../assets/siddharth.jpg'
import image3 from '../assets/anoop.jpg'
import image4 from '../assets/rajan.jpg'
import image5 from '../assets/madhav.jpg'
import './Newsfeed.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import SendIcon from '@mui/icons-material/Send';
import image6 from '../assets/tower.jpg'

const memberList = [
    {
      id: 1,
      name: 'Akash Malviya',
      img: image,
      caption:'Knowledge is Power!'
    },
    {
        id: 2,
        name: 'Siddharth Patel',
        img: image2,
        caption:'If you want the opportunity to knock, it’s time to build a door'
      },
      {
        id: 3,
        name: 'Anoop Sharma',
        img: image3,
        caption:'If you don’t believe in yourself,who will?'
      },
       {
        id: 4,
        name: 'Rajan Sharma',
        img: image4,
        caption:'It always seems impossible until it’s done'
      },
      {
        id: 5,
        name: 'Madhav sharma',
        img: image5,
        caption:'The little things in life matter'
      },
      {
        id: 6,
        name: 'Udit Tiwari',
        img: image6,
        caption:'If you want the opportunity to knock, it’s time to build a door'
      },

]
const Newsfeed = () => {
    return (
        
        <Container sx={{ position: 'center' }}>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} md={8} >
                  {memberList.map((user, i) => {
                    return  <Box >
                    <Box className="user-profile">
                        <Avatar alt="user logo" src={user.img} />
                        <h2>{user.name}</h2>
                    </Box>
                    <Box sx={{ width: 100 }} className="Post_feed">
                        <img src={user.img} alt="image" />
                    </Box>
                    <Box >
                        <div className="icon">
                        <Button>  <FavoriteBorderIcon className='like' /></Button> 
                        <Button>  <MapsUgcIcon className='comment' /></Button> 
                        <Button>   <SendIcon className='send' /></Button> 
                        </div>
                    </Box>
                    <h2 className='count_like'>1000 likes</h2>
                    <h3 className='caption'> {user.name} <p className='caption_para'>{user.caption}</p></h3>
                    <div className='button'><Button variant="text">View Comments</Button></div>
                   <div  className='button'> <Button variant="text">Add Comments</Button></div>

                </Box>
                 })}
                 </Grid>
            </Grid>
        </Container>
    
    )
};

export default Newsfeed