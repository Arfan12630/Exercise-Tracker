import React from "react";
import Modal from "./Modal.jsx";
import classes from "./RoutineCard.module.css";
import { useContext } from "react";
import RoutineContext from "../../store/routine-context.jsx";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const RoutineCart = (props) => {
  // TODO
  // have to use .push to add the reps, sets, and exercise names
  const routineCtx = useContext(RoutineContext);
  const numberofCartItems = routineCtx.exercises.length;
  // const selectedExercises = (
  // use local storage to keep the routine

  // )

  return (
    <Modal onClose={props.onClose}>
      <h1 className={classes.title}> Routine </h1>
      {/* {selectedExercises} */}
      <TableContainer component={Paper}>
        <Table border="1" style={{backgroundImage:'linear-gradient(to bottom right, #000000  , #130F40 )', color:'white', borderTop:'black', borderRight:'black', borderLeft:'black', borderBottom:'black'}}>
        <TableHead>
        <TableRow style={{color:'white'}}>
          <TableCell  style={{color:'white', borderRight:'white'}} align="center">Number</TableCell>
          <TableCell  style={{color:'white'}} align="center"> Exercise </TableCell>
          <TableCell  style={{color:'white'}} align="center"> Sets </TableCell>
          <TableCell style={{color:'white'}} align="center"> Reps </TableCell>
          </TableRow>
          </TableHead>

          <TableBody>
          {routineCtx.exercises.map((exercise, index) => (
            
            <TableRow style={{borderRight:'white'}}>
              <TableCell style={{color:'white',}} > {index + 1}. </TableCell>
              <TableCell style={{color:'white'}} >{exercise.name}</TableCell>
              <TableCell style={{color:'white'}} >{exercise.sets}</TableCell>
              <TableCell style={{color:'white'}} > {exercise.reps}</TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <button style={{top:'272px', border:'1px solid black', left:'68 %'}} onClick={props.onClose}> Close</button> */}
      <h4
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
     
        You have {numberofCartItems} exercises in total
      </h4>
      {/* <button style={{top:'272px', border:'1px solid black', left:'80%'}}>  Complete </button> */}
    </Modal>
  );
};

export default RoutineCart;
