import React from 'react'
import Fab from "@mui/material/Fab";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
const SubmitButton = () => {
  return (
    <Fab variant="extended">
    <AppRegistrationIcon sx={{ mr: 1 }} />
    Navigate
  </Fab>
  )
}

export default SubmitButton