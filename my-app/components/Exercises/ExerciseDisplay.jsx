import {useState} from 'react'
import Card from "../Card.jsx";
import Fab from "@mui/material/Fab";
import "./ExerciseDisplay.module.css";
import classes from "./ExerciseDisplay.module.css";
import NavigationIcon from "@mui/icons-material/Navigation";
import { useContext } from "react";
import InstructionButton from './InstructionButton.jsx';
import RoutineProvider from "../../store/RoutineProvider.jsx";
import RoutineContext from "../../store/routine-context";
import ExerciseInstructions from "./ExerciseInstructions.jsx";
const ExerciseDisplay = (props) => { 
  const [instructionsIsShown, setInstructionsIsShown] = useState(false)
const routineCtx = useContext(RoutineContext)
// TODO
// - remove exercises

const showInstructionsHandler = () => {
  setInstructionsIsShown(true)
}

const hideInstructionsHandler = () => {
  setInstructionsIsShown(false)
}
const addExerciseToRoutine = () => {
  routineCtx.addExercise({
    id:props.id,
    name:props.name,
    sets: "3-4",
    reps:"7-12"
  })
}
  return (
    <ul>
      <RoutineProvider>
      <Card>
        <h1 className={classes.structure}> {props.name}</h1>
        <img alt="h2" src={props.image}></img>
        <h4 className={classes.benefits}>Benefits</h4>
        <div style={{ color: "white" }}>
          {props.tags.map((item, index) => {
            if (index < 3) {
              return (
                <ul key={index}>
                  <li>{item} </li>
                </ul>
              );
            }
          })}
        </div>
        <div className={classes.format}>
          <h4 className={classes.sets}>Sets: 7-12</h4>
          <h4 className={classes.reps}>Reps: 3-4</h4>
          <Fab
          onClick={addExerciseToRoutine}
            variant="extended"
            sx={{
              left: "114px",
              top: "0",
              height: "30px",
              display: "absolute",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <NavigationIcon sx={{ mr: 1 }} />
            Add to Routine
          </Fab>
        </div>

<InstructionButton onShowInstructionsHandler = {showInstructionsHandler}/>
  {instructionsIsShown && <ExerciseInstructions onShowName={props.name} onShowInstructions={props.instructions} onClose={hideInstructionsHandler}/>}
      </Card>
      </RoutineProvider>
    </ul>
  );
};

export default ExerciseDisplay;
