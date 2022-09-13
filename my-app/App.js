import {useState} from 'react'
// import RegistrationPage from './components/RegisterPage/RegistrationPage';
//import LoginForm from "./components/LoginPage/LoginForm.jsx"
import Header from "./components/Header/Header.jsx";
import RoutineCart from "./components/Routine/RoutineCart.jsx";

import React from "react";
function App() {
const [routineIsShown, setRoutineIsShown] = useState(false)

const showRoutineCartHandler = () => {
  setRoutineIsShown(true)
}

const hideRoutineCartHandler = () => {
  setRoutineIsShown(false)
}
  return (
    <>
      {routineIsShown && <RoutineCart onClose={hideRoutineCartHandler} />}
      <Header onShowRoutineCart={showRoutineCartHandler}/>
      
      {/* <RegistrationPage/> */}
      {/* <LoginForm/> */}
    </>
  );
}

export default App;
