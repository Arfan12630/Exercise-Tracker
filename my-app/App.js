// import {useState} from 'react'
// import RegistrationPage from './components/RegisterPage/RegistrationPage';
import Header from "./components/Header/Header.jsx";
import LoginForm from './components/LoginPage/LoginForm';
// import RoutineCart from "./components/Routine/RoutineCart.jsx";
import './App.css'
// import AuthenticationHeader from "./components/Authentication/AuthenticationHeader.jsx"
import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
// const [routineIsShown, setRoutineIsShown] = useState(false)

// const showRoutineCartHandler = () => {
//   setRoutineIsShown(true)
// }

// const hideRoutineCartHandler = () => {
//   setRoutineIsShown(false)
// }
  return (
    <Router>
      <Switch>
      {/* {routineIsShown && <RoutineCart onClose={hideRoutineCartHandler} />}
      <Header onShowRoutineCart={showRoutineCartHandler}/>
       */}
      {/* <RegistrationPage/> */}
      <Route exact path="/" component={LoginForm}/>
      <Route exact path="/mainHeader" component={Header}/>
   
      {/* <LoginForm/> */}
      </Switch>
    </Router>
  );
}

export default App;
