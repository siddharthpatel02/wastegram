import Container from "@mui/material/Container";
import CompanyName from "../assets/Instagram.png";
import styles from "./signIn.module.css";
import LoginButton from "../utilities/LoginButton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function SignIn() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userNameValidation, setUsernameValidation] = useState(false);
  const [passwordValidation, setpasswordValidation] = useState(false);
  const [details, setDetails] = useState({ userName: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    const details = {
      userName: userName,
      password: password,

    };
    setDetails(details);

    if (userNameValidation || passwordValidation) {
      console.log("details not valid");
      return;
    } else {
      console.log(details, "details");
      setUsername("")
      setPassword("")

    }
  };


  useEffect(() => {
    // after api calling
    const signin = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/signin/${details.userName}/${details.password}`);
        console.log(details.userName, details.password);
      } catch (error) {
        console.log(error);
      }
    };
    signin();
    // console.log("token")
    // if tocken already there route to homepae
  }, [details]);
  return (
    <div>
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "white",
          border: "groove",
          height: 450,
          width: 390,
          marginTop: 11,
        }}
      >
        <div className={styles.logocontainer}>
          <img
            className={styles.logo}
            src={CompanyName}
            alt="logo"
            height={80}
            width={200}
          />
        </div>
        <form onSubmit={submitHandler}>
          <input
            style={{ borderColor: userNameValidation ? "red" : "#ced4da" }}
            onChange={(e) => {
              setUsername(e.target.value);
              setUsernameValidation(e.target.value.length < 8);
            }}
            value={userName}

            className={styles.input}
            type="text"
            placeholder=" Phone number,username or email address"
          />
          <br />
          <input
            style={{ borderColor: passwordValidation ? "red" : "#ced4da" }}
            onChange={(e) => {
              setPassword(e.target.value);
              setpasswordValidation(e.target.value.length < 8);
            }}
            value={password}

            className={styles.input}
            type="password"
            placeholder=" Password"
          />
          <LoginButton className={styles.loginbutton} type="submit">
            Login
          </LoginButton>
        </form>
        <p className={styles.or}>OR</p>
        <p className={styles.signup}>
          Don't have an account?
          <Link className={styles.link} to={"/signup"}>
            {" "}
            <span className={styles.link} href="signup">
              Sign Up
            </span>
          </Link>
        </p>
      </Container>
    </div>
  );
}

export default SignIn;
