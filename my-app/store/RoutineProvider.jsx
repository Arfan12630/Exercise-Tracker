import RoutineContext from "./routine-context";
import { useReducer } from "react";

const initialRoutineState = {
  exercises:[],
  totalExercises:0
}
const routineReducer = (state,action) => {
  if(action.type === 'ADD'){
    const updatedExercises = state.exercises.concat(action.exercise)
    return {
      exercises:updatedExercises
  }

}
return initialRoutineState
}

const RoutineProvider = (props) => {
const [routineState, dispatchRoutineState] = useReducer(routineReducer, initialRoutineState)
    const addExerciseToRoutine = (exercise) => {
      dispatchRoutineState({type:'ADD', exercise:exercise})
    }

    const removeExerciseToRoutine = (id) => {
        dispatchRoutineState({type:'REMOVE', id:id})
    }

  const routineContext = {
    exercises:routineState.exercises,
    totalExercises: routineState.totalExercises,
    addExercise:addExerciseToRoutine,
    removeExercise:removeExerciseToRoutine,
  };
  return <RoutineContext.Provider value={routineContext}>{props.children}</RoutineContext.Provider>;
};

export default RoutineProvider;
