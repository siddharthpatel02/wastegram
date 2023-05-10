import Navbar from "./pages/Navbar";
import Newsfeed from "./pages/Newsfeed";
import Storysection from "./pages/Storysection";
import styles from "./App.module.css";

import Message from "./pages/Message";

import Personal_Message from "./pages/Personal_Message";
import Homepage from "./pages/Routes/Homepage";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Routes/Profile";
import Messanger from "./pages/Routes/Messanger";

function App() {
<<<<<<< HEAD
  return (<>
    <Navbar />
    <Storysection />
    <Newsfeed />
    {/* <Message /> */}
    {/* <Personal_message /> */}
  </>
  )
=======
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="home" element={<Homepage />} />
        <Route path="message" element={<Messanger />} />
        <Route path="profile" element={<Profile />} />
        <Route path="chatbot" element={<Personal_Message />} />

      </Routes>
    </>
  );
>>>>>>> b400098aadec1586eb30987a0f88b2e29b64b05a
}

export default App;
