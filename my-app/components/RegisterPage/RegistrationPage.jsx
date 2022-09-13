import { useState } from "react";
import Card from "../Card.jsx";
import classes from "./RegisteredPage.module.css";
import "../../App.css"
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import PasswordRequisite from "./PasswordRequisite.jsx";
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
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    lowerCaseLetterCheck: false,
    passwordLengthCheck: false,
    specialCharacterCheck: false,
    passwordNumberCheck: false,
  });
  // R E G E X  V A L I D A T I O N

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  // F I R S T  N A M E
  const inputFirstNameHandler = (event) => {
    setEnteredFirstName(event.target.value);
    console.log("firstName");
  };

  const firstNameTouchedHandler = () => {
    setEnteredFirstNameIsTouched(true);
    console.log("Touched");
  };

  // L A S T  N A M E
  const inputLastNameHandler = (event) => {
    setEnteredLastName(event.target.value);
    console.log("Last Name");
  };

  const lastNameTouchedHandler = () => {
    setEnteredLastNameIsTouched(true);
    console.log("touched2");
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

  // TODO 
  const keyUpHandler = (event) => {
    const { value } = event.target;
    const enteredPassword = event.target
    const upperCase = /(?=.*[A-Z])/g.test(value);
    const lowerCase = /([a-z])/g.test(value);
    const numberRange = /([0-9])/g.test(value);
    const lengthofNumber = enteredPassword.length >=8;
    // const specialCharacter = /(?=.[!@#$%^&])/g.test(value)
    setChecks({
      capsLetterCheck: true,
      lowerCaseLetterCheck: true,
      passwordLengthCheck:true,
      // specialCharacterCheck: false,
      passwordNumberCheck: true,
    });
  };
  return (
    <Card>
      <form className={classes["form-box"]} onSubmit={formSubmitHandler}>
        <div className={classes["form-inner"]}>
          <h2 className="title"> Register </h2>

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
              onKeyUp={keyUpHandler}
              onFocus={passwordFocusHandler}
              onBlur={passwordTouchHandler}
            />
            <label htmlFor="Password"> Enter New Password</label>
          </div>
          {enteredPasswordIsTouched ? (
            <PasswordRequisite
              capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
              lowerCaseLetterFlag={
                checks.lowerCaseLetterCheck ? "valid" : "invalid"
              }
              passwordLengthCheckFlag={
                checks.passwordLengthCheck ? "valid" : "invalid"
              }
              // specialCharacterLengthCheckFlag={
              //   checks.specialCharacterCheck ? "valid" : "invalid"
             // }
              passwordNumberCheckFlag={
                checks.passwordNumberCheck ? "valid" : "invalid"
              }
            />
          ) : null}

          <div className={classes["form-group"]}>
            <input type="text" placeholder="Enter Password" />
            <label htmlFor="Password"> Confirm New Password</label>
          </div>

          <div className={classes["form-group"]}>
            <h4> Email Adress Verification</h4>
          </div>
          <div className={classes["form-group"]}>
            <input type="email" placeholder="Enter Email Adress" />
            <label htmlFor="EmailAdress"> Email Adress</label>
          </div>
          <br></br>
          <Box textAlign="center">
            <Fab
              variant="extended"
              color="primary"
              size="medium"
              aria-label="add"
            >
              <NavigationIcon sx={{ mr: 1, justifyContent: "center" }} />
              Submit
            </Fab>
          </Box>
        </div>
      </form>
    </Card>
  );
};

export default RegistrationPage;
