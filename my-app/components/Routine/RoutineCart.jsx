import React from 'react'
import Modal from './Modal.jsx'
import classes from "./RoutineCard.module.css"
const RoutineCart = (props) => {
  // TODO
  // have to use .push to add the reps, sets, and exercise names
  return (
    <Modal onClose={props.onClose}>
    <h1 className={classes.title}> Routine </h1>
    <button style={{top:'272px', border:'1px solid black'}} onClick={props.onClose}> CLOSe BRO</button>
  </Modal>
  )

}

export default RoutineCart