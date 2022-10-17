import React from 'react'
import IconButton from "@mui/material/IconButton";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";

const InstructionButton = (props) => {
  return (
    <IconButton onClick={props.onShowInstructionsHandler}  sx={{ color: "black" }}>
          <InfoSharpIcon sx={{ color: "white" }} />
        </IconButton>
  )
}

export default InstructionButton