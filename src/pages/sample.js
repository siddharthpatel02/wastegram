import { Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import LoginButton from "../utilities/LoginButton";
import styles from "./signUp.module.css";
import CompanyName from "../assets/Instagram.png";

const SignUp = () => {
  const [mobileEmail, setMobileEmail] = useState("");
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobileValidation, setMobileVal] = useState(false);
  const [nameValidation, setNameValidation] = useState(false);
  const [userNameValidation, setUserNameValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);
  useEffect(() => {
    validation(mobileEmail,name,userName,password)

    // setMobileVal(mobileEmail.length < 8);
    // setNameValidation(name.length < 8);
    // setUserNameValidation(userName. length < 8);
    // setPasswordValidation(password.length < 8);
  }, [mobileEmail, name, userName, password]);

  const validation=(x,y,z,a)=>{
    if (x.length < 10) {
        setMobileVal(true);
      } else {
        setMobileVal(false);
      }
      if (y.length < 4) {
        setNameValidation(true);
       
      } else {
        setNameValidation(false);
      }
      if (z.length < 10) {
        setUserNameValidation(true);
      } else {
        setUserNameValidation(false);
      }
      
      if (a.length < 8) {
        setPasswordValidation(true);
        
  
      } else {
        setPasswordValidation(false);
      }

  }
  
  
    const submitHandler = (e) => {
        e.preventDefault();
        let form = {
          mobileEmail: mobileEmail,
          name: name,
          userName: userName,
          password: password,
        };
      
      
        // Check if any input field is empty
      if (
          mobileValidation ||
          nameValidation ||
          userNameValidation ||
          passwordValidation
        ) {
          console.log("form not valid");
        } else {
          setMobileEmail("");
          setName("");
          setUsername("");
          setPassword("");
          console.log("form submitted",form);
        }
      };
      
  
    
    
    
  
    return (
      <div>
        <Container
          maxWidth="sm"
          sx={{
            backgroundColor: "white",
            border: "groove",
            height: 550,
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
              style={{
                borderColor: mobileValidation ? "red" : "#ced4da",
              }}
              onChange={(e) => {
                setMobileEmail(e.target.value);
              }}
              value={mobileEmail}
              className={styles.input}
              type="text"
              placeholder=" Mobile number or email address"
            />
            <br />
            <input
              style={{ borderColor: nameValidation ? "red" : "#ced4da" }}
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              className={styles.input}
              type="text"
              placeholder=" Full Name"
            />
            <br />
              
            <input
              style={{ borderColor: userNameValidation ? "red" : "#ced4da" }}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={userName}
            className={styles.input}
            type="text"
            placeholder=" Username"
          />
          <br />
          <input
            style={{ borderColor: passwordValidation ? "red" : "#ced4da" }}
            onChange={(e) => {
              setPassword(e.target.value);
              
            }}
            value={password}
            className={styles.input}
            type="password"
            placeholder=" Password"
          />
          <p className={styles.terms}>
            By signing up, you agree to our Terms, Privacy Policy and Cookies
            Policy.
          </p>

          <LoginButton className={styles.loginbutton} type="submit">
            Sign Up
          </LoginButton>
        </form>
        <p className={styles.signup}>
          Have an account
          <a className={styles.link} href="login">
            {" "}
            Log in
          </a>
        </p>
       

      </Container>
    </div>
  );
};

export default SignUp;
