import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useHistory } from 'react-router-dom';

const AuthenticationHeader = () => {
  let history = useHistory()
  const registerHandler = () => {
    history.push("/register")
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
     sx={{backgroundImage: "linear-gradient(to bottom right, #000000 , #130F40 )"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr:1, top:'100%', left:'14px' }}
          >
     <FitnessCenterIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FitnessTracker
          </Typography>
          <Typography variant="h9" sx={{ flexGrow: 0.18 }}>
          Don't have an account ? Sign up here 
          </Typography>
          <Button variant="outlined" onClick={registerHandler}sx={{color:'white', right:'15px', top:'100%', border:'1px solid white', borderRadius:'25px' ,left:'-50px'}}>Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AuthenticationHeader
