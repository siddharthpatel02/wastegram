import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Newsfeed from '../Newsfeed'
import Storysection from '../Storysection'

const Homepage = () => {
  return (
<>           <Navbar></Navbar>
     <Storysection/>
    <Newsfeed/>
    <Footer/>
    </>
      )
}

export default Homepage
