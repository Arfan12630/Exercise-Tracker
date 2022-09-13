import React from 'react'
import Modal from './Modal.jsx'
import classes from "./RoutineCard.module.css"
const RoutineCart = (props) => {
  // TODO
  // have to use .push to add the reps, sets, and exercise names
  return (
    <Modal onClose={props.onClose}>
    <h1 className={classes.title}> Routine </h1>
    <h4>Bench Press</h4>
    <button onClick={props.onClose}> Close</button>
  </Modal>
  )

}

export default RoutineCart