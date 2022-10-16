import {createContext} from 'react'

const RoutineContext = createContext({
    exercises:[],
    totalExercises:0,
    addExercise: (exercise) => {},
    removeExercise:(item) => {}
})

export default RoutineContext