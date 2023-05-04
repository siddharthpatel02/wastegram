import Container from "@mui/material/Container";
import CompanyName from "../assets/Instagram.png";
import styles from "./signIn.module.css";
import LoginButton from "../utilities/LoginButton";

function SignIn() {
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
        <form>
          <input
            className={styles.input}
            type="text"
            placeholder=" Phone number,username or email address"
          />
          <br />
          <input
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
          <a className={styles.link} href="signup">
            Sign Up
          </a>
        </p>
      </Container>
    </div>
  );
}

export default SignIn;
