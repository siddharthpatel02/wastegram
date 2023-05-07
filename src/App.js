

import Navbar from './pages/Navbar';
import Newsfeed from './pages/Newsfeed';
import Storysection from './pages/Storysection';
import styles from './App.module.css'

import Message from './pages/Message';

import Profilepage from './pages/Profilepage';
import Personal_message from './pages/Personal_message';






function App() {
  return(<>
    <Navbar />
    <Storysection />
    <Newsfeed />
  {/* <Message /> */}
  {/* <Personal_message /> */}
  </>
  )
}

export default App;
