import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import classes from "./Header.module.css";
import Chest from "../Exercises/Chest/Chest.jsx";
import Back from "../Exercises/Back.jsx";
import Legs from "../Exercises/Legs.jsx";
import Biceps from "../Exercises/Biceps.jsx";
import Profile from "./Profile.jsx";
import Shoulders from "../Exercises/Shoulders.jsx";
import Abdominals from "../Exercises/Abdominals.jsx";
import Triceps from "../Exercises/Triceps.jsx";
import Default from "./Default.jsx";
import RoutineCart from "../Routine/RoutineCart";
import RoutineProvider from "../../store/RoutineProvider";
import RoutineButton from "./RoutineButton";
import { useEffect } from "react";
import {useHistory} from 'react-router-dom'
// TODO
// make seperate components for buttons
//pass props into them

const Header = (props) => {
  const [value, setValue] = useState("one");
  const [openChest, setOpenChest] = useState(false);
  const [openBack, setOpenBack] = useState(false);
  const [openLegs, setOpenLegs] = useState(false);
  const [openBiceps, setOpenBiceps] = useState(false);
  const [openShoulders, setOpenShoulders] = useState(false);
  const [openAbdominals, setOpenAbdominals] = useState(false);
  const [openTriceps, setOpenTriceps] = useState(false);
  const [defaultChange, setDefaultChange] = useState(true)


  const [routineIsShown, setRoutineIsShown] = useState(false)
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

const navigate = useHistory()

useEffect(() => {
  if(!localStorage.getItem('date')){
    navigate.push('/login')
  }
},[])
  const closeHandler = () => {
    
    setOpenChest(true);
    setDefaultChange(false)
    setOpenBack(false);
    
    setOpenLegs(false);
    setOpenBiceps(false);
    setOpenShoulders(false);
    setOpenAbdominals(false);
    setOpenTriceps(false);

   
  };

  const backClickHandler = () => {
    setOpenBack(true);
    setDefaultChange(false)
    setOpenChest(false);
    setOpenLegs(false);
    setOpenBiceps(false);
    setOpenShoulders(false);
    setOpenAbdominals(false);
    setOpenTriceps(false);
  };


  const legsClickHandler = () => {
    setOpenLegs(true);
    setDefaultChange(false)
    
    setOpenBack(false);
    setOpenChest(false);
    setOpenBiceps(false);
    setOpenShoulders(false);
    setOpenAbdominals(false);
    setOpenTriceps(false);
  };

  const bicepsClickHandler = () => {
    setOpenBiceps(true);
    setDefaultChange(false)
    setOpenLegs(false);
    
    setOpenBack(false);
    setOpenChest(false);
    setOpenShoulders(false);
    setOpenAbdominals(false);
    setOpenTriceps(false);
  };

  const shoulderClickHandler = () => {
    setOpenShoulders(true);
    setDefaultChange(false)
    setOpenBiceps(false);
    setOpenLegs(false);
    
    setOpenBack(false);
    setOpenChest(false);
    setOpenAbdominals(false);
    setOpenTriceps(false);
  };

  const abdominalsClickHandler = () => {
    setOpenAbdominals(true);
    setDefaultChange(false)
    setOpenBiceps(false);
    setOpenShoulders(false)
    setOpenLegs(false);
    
    setOpenBack(false);
    setOpenChest(false);
    setOpenTriceps(false);
  };

  const tricepsClickHandler = () => {
    setOpenTriceps(true);
    setDefaultChange(false)
    setOpenAbdominals(false);
    setOpenShoulders(false)
    setOpenBiceps(false);
    setOpenLegs(false);
    
    setOpenBack(false);
    setOpenChest(false);
  };

  const showRoutineCartHandler = () => {
    setRoutineIsShown(true)
  }

  const hideRoutineCartHandler = () => {
    setRoutineIsShown(false)
  }
  return (
    <RoutineProvider>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage: "linear-gradient(to bottom right, #000000 , #130F40 )",
          
        }}
      >
        <Toolbar>
          <FitnessCenterIcon />
          <h1 className={classes["title-box"]}> Fitness Tracker</h1>

          <Tabs
            sx={{
              overflow: "visible",
              justifyContent: "space-around",
              marginLeft: "auto",
            }}
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab
              onClick={closeHandler}
              sx={{ transform: "none", left: "0%" }}
              value="one"
              label=" Chest"
            />

            <Tab
              onClick={backClickHandler}
              sx={{ transform: "none", left: "0%" }}
              value="two"
              label="Back"
            />
            <Tab
              sx={{ transform: "none", left: "0%" }}
              value="four"
              onClick={abdominalsClickHandler}
              label="Abdominals"
            />
            <Tab
              onClick={legsClickHandler}
              sx={{ transform: "none", left: "0%" }}
              value="five"
              label="Legs"
            />
            <Tab
              onClick={shoulderClickHandler}
              sx={{ transform: "none", left: "0%" }}
              value="six"
              label="Shoulders"
            />
            <Tab
              onClick={bicepsClickHandler}
              sx={{ transform: "none", left: "0%" }}
              value="seven"
              label="Biceps"
            />
            <Tab
              onClick={tricepsClickHandler}
              sx={{ transform: "none", left: "0%" }}
              value="eight"
              label="Triceps"
            />
          </Tabs>

          {/* <Fab
          onClick={showRoutineCartHandler}
            variant="extended"
            color="secondary"
            sx={{
              transform: "none",
              marginRight: "auto",
              left: "8%",
              borderRadius: "50",
            }}
          >
            <AssignmentIcon sx={{ mr: 1 }} />
            Routine
          </Fab> */}
          <RoutineButton showRoutineCard={showRoutineCartHandler}/>
          {routineIsShown && <RoutineCart onClose={hideRoutineCartHandler} />}
          <Profile style={{top:'-10px'}} />
        </Toolbar>
      </AppBar>
     
      {defaultChange ? <Default/> : ""}
      {openChest ? <Chest /> : ""}

      {openBack ? <Back /> : ""}

      {openLegs ? <Legs /> : ""}

      {openBiceps ? <Biceps /> : ""}

      {openShoulders ? <Shoulders /> : ""}

      {openAbdominals ? <Abdominals /> : ""}

      {openTriceps ? <Triceps /> : ""}
    </Box>
    </RoutineProvider>
   
  );
};

export default Header;
