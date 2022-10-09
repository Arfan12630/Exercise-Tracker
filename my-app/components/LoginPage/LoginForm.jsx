import { useState } from "react";
import classes from "./LoginForm.module.css";
import Button from "@mui/material/Button";
import Axios from 'axios'
// import Card from '../Card.jsx'

const LoginForm = () => {
  // State values
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  //touched state
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredPasswordIsTouched, setEnteredPasswordIsTouched] =
    useState(false);

  const enteredNameIsValid = enteredUsername.trim() !== "";
  const enteredPasswordIsValid = enteredPassword.trim() !== "";

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  const passwordInputIsInvalid =
    !enteredPasswordIsValid && enteredPasswordIsTouched;

  //TODO
  // W I L L  A D D   L A T E R
  // const authorizedInformation ={
  //   userName:"arfanrahman464@fitdis.com",
  //   password:"123"
  // }

  const submitHandler = async (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true);
    setEnteredPasswordIsTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    if (!enteredPasswordIsValid) {
      return;
    }
    console.log("submitted");

    setEnteredNameIsTouched(false);
    setEnteredPasswordIsTouched(false);
    setEnteredUsername("");
    setEnteredPassword("");

    // POST Request to backend
    // const response = await fetch("/users/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify({
    //     enteredUsername,
    //     enteredPassword,
    //   }),
    // });

    // const data = await response.json();
    // console.log(data);

    Axios.post('http://localhost:5000/users/signup',{
     "enteredUsername":enteredUsername,
      "enteredPassword":enteredPassword
    })
    .then(res => {
      console.log(res.data)
    })
  };

  const nameInputHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const nameBlurHandler = () => {
    setEnteredNameIsTouched(true);
  };
  const passwordInputHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const passwordBlurHandler = () => {
    setEnteredPasswordIsTouched(true);
  };

  return (
    <form className={classes["form-box"]} onSubmit={submitHandler}>
      <div className={classes["form-inner"]}>
        <h2 className="title"> Login </h2>

        <div className={classes["form-group"]}>
          <label htmlFor="name">
            <b> Username</b>
          </label>
          <input
            type="text"
            name="name"
            style={{ backgroundColor: nameInputIsInvalid ? "red" : "white" }}
            placeholder="Enter Username"
            value={enteredUsername}
            onChange={nameInputHandler}
            onBlur={nameBlurHandler}
          />

          {nameInputIsInvalid && (
            <p style={{ color: "red" }}> Name should not be empty</p>
          )}
        </div>

        <div className={classes["form-group"]}>
          <label htmlFor="password">
            <b> Password </b>
          </label>
          <input
            type="text"
            name="password"
            style={{
              backgroundColor: passwordInputIsInvalid ? "red" : "white",
            }}
            placeholder="Enter Password"
            value={enteredPassword}
            onChange={passwordInputHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordInputIsInvalid && (
            <p style={{ color: "red" }}> Password should not be empty</p>
          )}
        </div>
        <div className={classes["button-div"]}>
          <Button
            className={classes["button-mui"]}
            variant="contained"
            color="secondary"
            onClick={submitHandler}
            sx={{ top: "27px", left: "50%" }}
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
