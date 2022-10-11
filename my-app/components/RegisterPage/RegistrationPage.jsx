import { useState } from "react";

import classes from "./RegisteredPage.module.css";
import "../../App.css";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";

//TODO password truthy falsy functinality
const RegistrationPage = () => {
  // First Name Functionality
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredFirstNameIsTouched, setEnteredFirstNameIsTouched] =
    useState(false);
  const enteredFirstNameIsValid = enteredFirstName.trim() !== "";
  const inputFirstNameIsInvalid =
    !enteredFirstNameIsValid && enteredFirstNameIsTouched;

  // Last Name Functionality
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredLastNameIsTouched, setEnteredLastNameIsTouched] =
    useState(false);
  const enteredLastNameIsValid = enteredLastName.trim() !== "";
  const inputLastNameIsInvalid =
    !enteredLastNameIsValid && enteredLastNameIsTouched;

  //Password Validity
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordIsTouched, setEnteredPasswordIsTouched] =
    useState(false);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  // R E G E X  V A L I D A T I O N
  
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("pressed")
   
  };

  // F I R S T  N A M E
  const inputFirstNameHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const firstNameTouchedHandler = () => {
    setEnteredFirstNameIsTouched(true);
  };

  // L A S T  N A M E
  const inputLastNameHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const lastNameTouchedHandler = () => {
    setEnteredLastNameIsTouched(true);
  };

  // P A S S W O R D  H A N D L E R S
  const inputPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const passwordTouchHandler = () => {
    setEnteredPasswordIsTouched(false);
  };

  const passwordFocusHandler = () => {
    setEnteredPasswordIsTouched(true);
  };
  
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }


  const inputEmailHandler = (event) => {
   if(!isValidEmail(event.target.value)){
      setMessage('Email is Invalid')
    }
    else{
      setMessage(null)
    }
    setEmail(event.target.value)
    console.log("email");
  };

  // TODO

  return (
    <>
      <form className={classes["form-box"]} onSubmit={formSubmitHandler}>
        <div className={classes["form-inner"]}>
          <h2 className="title"> Registration </h2>

          <div className={classes["form-group"]}>
            <h4> Full Name</h4>
          </div>
          <div className={classes["form-group"]}>
            {inputFirstNameIsInvalid && (
              <p style={{ color: "red" }}> First name must not be empty</p>
            )}
            <input
              style={{
                backgroundColor: inputFirstNameIsInvalid ? "red" : "white",
              }}
              type="text"
              placeholder="Enter first name"
              onChange={inputFirstNameHandler}
              value={enteredFirstName}
              onBlur={firstNameTouchedHandler}
            />
            <label htmlFor="firstName"> First Name </label>
          </div>
          <div className={classes["form-group"]}>
            {inputLastNameIsInvalid && (
              <p style={{ color: "red" }}> Last name must not be empty</p>
            )}
            <input
              type="text"
              placeholder="Enter last name"
              onChange={inputLastNameHandler}
              value={enteredLastName}
              onBlur={lastNameTouchedHandler}
            />
            <label htmlFor="lastName"> Last Name </label>
          </div>

          <div className={classes["form-group"]}>
            <h4> Password Verification</h4>
          </div>
          <div className={classes["form-group"]}>
            <input
              type="text"
              placeholder="Enter Password"
              value={enteredPassword}
              onChange={inputPasswordHandler}
              onFocus={passwordFocusHandler}
              onBlur={passwordTouchHandler}
            />
            <label htmlFor="Password"> Enter New Password</label>
          </div>
          <div className={classes["form-group"]}>
            <input type="text" placeholder="Enter Password" />
            <label htmlFor="Password"> Confirm New Password</label>
          </div>

          <div className={classes["form-group"]}>
            <h4> Email Adress Verification</h4>
          </div>
          <div className={classes["form-group"]}>
            <input
              type="text"
              placeholder="Enter Email Adress"
              onChange={inputEmailHandler}
              value={email}
            />
            {message && <p style={{color:'red'}}>{message}</p>}
            <label htmlFor="EmailAdress"> Email Adress</label>

          </div>
          <Box textAlign="center">
            <Fab
              variant="extended"
              color="primary"
              size="medium"
              aria-label="add"
              onClick={formSubmitHandler}
            >
              <NavigationIcon sx={{ mr: 1, justifyContent: "center" }} />
              Register
            </Fab>
    
          </Box>
       
        </div>
      </form>
    </>
  );
};

export default RegistrationPage;
