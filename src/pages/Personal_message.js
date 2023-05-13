import { Box, Button, Avatar, Input } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import style from "./Personal_message.module.css";
import image from "../assets/akash.jpg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@mui/joy";
const message = [
  {
    sender_message: "hello bhai",
    reciever_message: "hello",
  },
  {
    sender_message: "kya kr rhe ho bhai",
    reciever_message: "kuch nai",
  },
  {
    sender_message: "khai gumne chale bhai",
    reciever_message: "ha bilkul",
  },
  {
    sender_message: "kha chale bhai",
    reciever_message: "khin b chalo",
  },
  {
    sender_message: "absolute chalte hai bhai",
    reciever_message: "ha shi rahega",
  },
  {
    sender_message: "10 min m milte bhai",
    reciever_message: "jb b aa jao",
  },
  {
    sender_message: "ok bye ",
    reciever_message: "bye",
  },
  {
    sender_message: "hello bhai",
    reciever_message: "hello",
  },
  {
    sender_message: "kya kr rhe ho bhai",
    reciever_message: "kuch nai",
  },
  {
    sender_message: "khai gumne chale bhai",
    reciever_message: "ha bilkul",
  },
  {
    sender_message: "kha chale bhai",
    reciever_message: "khin b chalo",
  },
  {
    sender_message: "absolute chalte hai bhai",
    reciever_message: "ha shi rahega",
  },
  {
    sender_message: "10 min m milte bhai",
    reciever_message: "jb b aa jao",
  },
  {
    sender_message: "ok bye ",
    reciever_message: "bye",
  },
];
const Personal_Message = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ backgroundColor: "black", color: "white" }}>
      <AppBar position="fixed" sx={{ backgroundColor: "black", p: 0, m: 0 }}>
        <Toolbar>
          <div className={style.button_user}>
            <Button
              onClick={() => {
                navigate(-1);
              }}
            >
              {" "}
              <ArrowBackIosNewIcon />
            </Button>
            <Avatar className={style.avatar} alt="user logo" src={image} />
            <h5> Akash Malviya</h5>
          </div>
        </Toolbar>
      </AppBar>
      <hr />

      {message.map((message) => {
        return (
          <Box className={style.box}>
            <Box className={style.message_logo}>
              <Avatar alt="user logo" src={image} />
              <p className={style.sender_message}>{message.sender_message}</p>
            </Box>
            <p className={style.reciever_message}>{message.reciever_message}</p>
          </Box>
        );
      })}

      <AppBar
        position="fixed"
        sx={{ backgroundColor: "black", top: "auto", bottom: 0 }}
      >
        <Toolbar>
          {/* <input className={style.input} type="text" id="lname" name="lastname" placeholder="message"></input> */}
          <Box
            sx={{
              ml: 0,
              py: 0,
              gridTemplateColumns: "90% 10%",
              display: "grid",
              gridGap: 0,
              alignItems: "center",
            }}
          >
            <Textarea name="Solid" placeholder="Type in here…" variant="solid" />
            <Button sx={{ ml: 4, width: 10 }}> Send</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Personal_Message;
