import { Button,
    AppBar,
    Toolbar,
    Typography,
    Box,
} from '@mui/material';
import React from "react";
import { makeStyles } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { createTheme } from '@mui/material/styles';
const theme = createTheme();
const useStyles = makeStyles({
  typo: {
    color: 'black',
    padding: '0 2vw 0 2vw',
  },
  firstTypo: {
    color: 'black',
    padding: '0 2vw 0 20vw',
  },
  lastTypo: {
    color: 'black',
    padding: '0 10vw 0 2vw',
  },
})
function Navbar(){
  const classes = useStyles();
    const handleLogin = () => {
        navigate('/login')
    }
    let navigate = useNavigate();
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background:'transparent'}}>
          <Toolbar>
            <img src='/logo.png' alt='logo' style={{width: '5vw', borderRadius:'5vw'}}/>
            <Typography className={classes.firstTypo}> Find Doctors</Typography>
            <Typography className={classes.typo}> Video Consult </Typography>
            <Typography className={classes.typo}> Medicines </Typography>
            <Typography className={classes.typo}> Lab Tests </Typography>
            <Typography className={classes.lastTypo}>Therapies</Typography>
            <Button style={{marginLeft: 'auto'}}
                variant="contained"
                color="primary"
                onClick={handleLogin}>
                Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
            
    )
}

export default Navbar