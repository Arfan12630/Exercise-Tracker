import { useState } from "react";
import classes from "./LoginForm.module.css";
import Button from "@mui/material/Button";
import Card from '../Card.jsx'


const LoginForm = () => {
  // State values
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  //touched state
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredPasswordIsTouched, setEnteredPasswordIsTouched] = useState(false);

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

  const submitHandler = (event) => {
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
    setEnteredUsername("");
    setEnteredPassword("");
    setEnteredNameIsTouched(false);
    setEnteredPasswordIsTouched(false);
  };

  const nameInputHandler = (event) => {
    setEnteredUsername(event.target.value);
    console.log("BOOM");
  };

  const nameBlurHandler = () => {
    setEnteredNameIsTouched(true);
    console.log("touched");
  };
  const passwordInputHandler = (event) => {
    setEnteredPassword(event.target.value);
    console.log("bueno");
  };

  const passwordBlurHandler = () => {
    setEnteredPasswordIsTouched(true);
    console.log("touch");
  };

  return (
    <Card>
    <form className={classes["form-box"]} onSubmit={submitHandler}>
      <div className={classes["form-inner"]}>
        <h2 className="title"> Login </h2>

        <div className={classes["form-group"]}>
          <label htmlFor="name">
            <b> Username</b>
          </label>
          <input
            style={{ backgroundColor: nameInputIsInvalid ? "red" : "white" }}
            type="text"
            placeholder="Enter Username"
            value={enteredUsername}
            onChange={nameInputHandler}
            onBlur={nameBlurHandler}
          />

           {nameInputIsInvalid && <p style={{color:"red"}}> Name should not be empty</p>} 
        </div>

        <div className={classes["form-group"]}>
          <label htmlFor="password">
            <b> Password </b>
          </label>
          <input
            style={{
              backgroundColor: passwordInputIsInvalid ? "red" : "white",
            }}
            type="text"
            placeholder="Enter Password"
            value={enteredPassword}
            onChange={passwordInputHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordInputIsInvalid && <p style={{color:"red"}}> Password should not be empty</p>}
        </div>
        <div className={classes['button-div']}>
          <Button
            className={classes["button-mui"]}
            variant="contained"
            color="secondary"
            onClick={submitHandler}
            sx={{top: "27px", left:"50%" }}
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
    </Card>
  );
};

export default LoginForm;
