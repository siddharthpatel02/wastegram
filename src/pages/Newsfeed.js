import { Box, Container } from '@mui/system'
import { Grid } from '@mui/material';
import { Avatar, Button } from '@mui/material';
import image from '../assets/akash.jpg'
import user from '../assets/userpic.jpg'
import image2 from '../assets/siddharth.jpg'
import image3 from '../assets/anoop.jpg'
import image4 from '../assets/rajan.jpg'
import image5 from '../assets/madhav.jpg'
import './Newsfeed.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import SendIcon from '@mui/icons-material/Send';


const newsfeed = () => {
    return (
        <Container sx={{ position: 'center' }}>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} md={8} >
                    <Box className="News_feed">
                        <Box className="user-profile">
                            <Avatar alt="user logo" src={image} />
                            <h2>Akash Malviya</h2>
                        </Box>
                        <Box sx={{ width: 100 }} className="Post_feed">
                            <img src={image} alt="image" />
                        </Box>
                        <Box >
                            <div className="icon">
                                <FavoriteBorderIcon className='like' />
                                <MapsUgcIcon className='comment' />
                                <SendIcon className='send' />
                            </div>
                        </Box>
                        <h2 className='count_like'>1000 likes</h2>
                        <h3 className='caption'>Akash Malviya <p className='caption_para'>Knowledge is Power!</p></h3>
                        <div><Button variant="text">View Comments</Button></div>
                        <div><Button variant="text">Add Comments</Button></div>

                    </Box>
                    <Box className="News_feed">
                        <Box className="user-profile">
                            <Avatar alt="user logo" src={image3} />
                            <h2>Anoop Sharma</h2>
                        </Box>
                        <Box sx={{ width: 100 }} className="Post_feed">
                            <img src={image3} alt="image" />
                        </Box>
                        <Box >
                            <div className="icon">
                                <FavoriteBorderIcon className='like' />
                                <MapsUgcIcon className='comment' />
                                <SendIcon className='send' />
                            </div>
                        </Box>
                        <h2 className='count_like'>500 likes</h2>
                        <h3 className='caption'>Anoop Sharma <p className='caption_para'>It always seems impossible until it’s done</p></h3>
                        <div><Button variant="text">View Comments</Button></div>
                        <div><Button variant="text">Add Comments</Button></div>

                    </Box>
                    <Box className="News_feed">
                        <Box className="user-profile">
                            <Avatar alt="user logo" src={image2} />
                            <h2>Siddharth Patel</h2>
                        </Box>
                        <Box  className="Post_feed">
                            <img src={image2} alt="image" />
                        </Box>
                        <Box >
                            <div className="icon">
                                <FavoriteBorderIcon className='like' />
                                <MapsUgcIcon className='comment' />
                                <SendIcon className='send' />
                            </div>
                        </Box>
                        <h2 className='count_like'>200 likes</h2>
                        <h3 className='caption'>Siddharth Patel <p className='caption_para'>If you want the opportunity to knock, it’s time to
                            build a door</p></h3>
                        <div><Button variant="text">View Comments</Button></div>
                        <div><Button variant="text">Add Comments</Button></div>

                    </Box>
                    <Box className="News_feed">
                        <Box className="user-profile">
                            <Avatar alt="user logo" src={user} />
                            <h2>Rajan Sharma</h2>
                        </Box>
                        <Box sx={{ width: 100 }} className="Post_feed">
                            <img src={image4} alt="image" />
                        </Box>
                        <Box >
                            <div className="icon">
                                <FavoriteBorderIcon className='like' />
                                <MapsUgcIcon className='comment' />
                                <SendIcon className='send' />
                            </div>
                        </Box>
                        <h2 className='count_like'>100 likes</h2>
                        <h3 className='caption'>RAjan sharma <p className='caption_para'>If you don’t believe in yourself, who will?</p></h3>
                        <div><Button variant="text">View Comments</Button></div>
                        <div><Button variant="text">Add Comments</Button></div>

                    </Box>
                    <Box className="News_feed">
                        <Box className="user-profile">
                            <Avatar alt="user logo" src={image5} />
                            <h2>madhav Sharma</h2>
                        </Box>
                        <Box sx={{ width: 100 }} className="Post_feed">
                            <img src={image5} alt="image" />
                        </Box>
                        <Box >
                            <div className="icon">
                                <FavoriteBorderIcon className='like' />
                                <MapsUgcIcon className='comment' />
                                <SendIcon className='send' />
                            </div>
                        </Box>
                        <h2 className='count_like'>10 likes</h2>
                        <h3 className='caption'>MAdhav Sharma <p className='caption_para'>The little things in life matter</p></h3>
                        <div><Button variant="text">View Comments</Button></div>
                        <div><Button variant="text">Add Comments</Button></div>

                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
};

export default newsfeed