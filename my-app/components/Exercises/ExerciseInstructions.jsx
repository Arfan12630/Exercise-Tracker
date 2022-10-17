import React from 'react'
import classes from "../Routine/RoutineCard.module.css"
import InstructionsModal from "./InstructionsModal"
const ExerciseInstructions = (props) => {
  return (
    <InstructionsModal onClose={props.onClose}>
        <h1 className={classes.title}> Instructions for {props.onShowName}</h1>
          <h6 style={{alignItems:'center', justifyContent:'center',textAlign:'center', marginTop:0 }}> (Click outside box to exit)</h6>
     <p>  {props.onShowInstructions.map((item, index) => {
              return (
                <ul key={index}>
                  <li>{item} </li>
                </ul>
              );
            
          })}
          </p>
    {/* <button style={{top:'500px', border:'1px solid black', left:'68 %'}} onClick={props.onClose}> Close</button> */}
  </InstructionsModal>
  )
}

export default ExerciseInstructions