import { useState } from "react";
import RegistrationHeader from "./RegistrationHeader"
import classes from "./RegisteredPage.module.css";
import "../../App.css";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import PWDRequisite from "./PasswordRequisite"
import Axios from "axios";

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
  const [pwdRequisite, setPwdRequisite] = useState(false)

    // P A S S W O R D  V A L I D A T I O N
    const[checks,setChecks] = useState({
      capsLetterCheck:false,
      numberCheck:false,
      pwdLengthCheck:false,
      specialCharCheck:false
    })
   
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  // R E G E X  V A L I D A T I O N
  
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log('submit')
    setEnteredFirstNameIsTouched(false)
    setEnteredLastNameIsTouched(false)
    setPwdRequisite(false)
    // Axios.post('/users/register',{
      setEnteredFirstName("")
      setEnteredLastName("")
      setEnteredPassword("")
      setEmail("")
      setChecks({
        capsLetterCheck:false,
        numberCheck:false,
        pwdLengthCheck:false,
        specialCharCheck:false
      })
    // })

   
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

  const passwordFocusHandler = () => {
    setPwdRequisite(true)
  }

  const passwordBlurHandler = () => {
    setPwdRequisite(false)
  }

  const passwordKeyHandler = (e) => {
    const {value} = e.target
    // const pwdLengthCheck = /(?=.*[_\W]).{8,15}$/.test(value) 
    const pwdLengthCheck = value.length >= 8  // has to be 8 to 15 characters
    // const lowerCaseRegex = /(?=.*[a-z])/.test(value) //lower case
    const capsLetterCheck = /(?=.*[A-Z])/.test(value) // capital letter
    const numberCheck = /[0-9]/.test(value)
    const specialCharCheck = /(?=.*[_\W])/.test(value)
    setChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      specialCharCheck,

    })
  }
 
  
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
  };

  // TODO

  return (
    <>
    <RegistrationHeader/>
      <form className={classes["form-box"]} onSubmit={formSubmitHandler}>
        <div className={classes["form-inner"]}>
          <h2 className="title"> Registration </h2>

          <div className={classes["form-group"]}>
            <h4> Full Name</h4>
          </div>
          <div className={classes["form-group"]}>
            {inputFirstNameIsInvalid && (
              <p style={{ color: "red", marginBottom:0}}> First name must not be empty</p>
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
              <p style={{ color: "red" , marginBottom:0 }}> Last name must not be empty</p>
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
              type="password"
              placeholder="Enter Password"
              onChange={inputPasswordHandler}
              value={enteredPassword}
              onFocus={passwordFocusHandler}
              onBlur={passwordBlurHandler}
              onKeyUp={passwordKeyHandler}
            />
            {pwdRequisite ? (<PWDRequisite 
              capsLetterFlag = {checks.capsLetterCheck ? "valid" : "invalid"}
              numberCheckFlag = {checks.numberCheck ? "valid" : "invalid"}
              pwdLengthCheckFlag = {checks.pwdLengthCheck ? "valid" : "invalid"}
              specialCharCheckFlag = {checks.specialCharCheck ? "valid" : "invalid"}
            
            
            />) : null}
            <label htmlFor="Password"> Enter New Password</label>
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
