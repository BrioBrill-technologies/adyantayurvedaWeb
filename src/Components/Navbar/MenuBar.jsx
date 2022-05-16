import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Avatar,
} from '@mui/material';
import { makeStyles } from '@material-ui/core'
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const useStyles = makeStyles({
  typo: {
    color: 'black',
    padding: '0 0 0 2vw',
    cursor: 'pointer',
    fontFamily: 'Lora !important',
  },
  firstTypo: {
    color: 'black',
    padding: '0 0 0 5vw',
    cursor: 'pointer',
    fontFamily: 'Lora !important',
  },
  logo: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '7vw',
  },
  endLogin: {
    marginLeft: 'auto',
    marginRight: '5vw',
    cursor: 'pointer',
  },
})
function Menubar(){
  const classes = useStyles();
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const profile = () => {
      if(user){
        console.log('here');
        if(user.type === "doctor"){
          navigate("/doctor/profile");
        } else if(user.type === "patient"){
          navigate('/profile')
        } else if(user.type === "admin"){
          navigate("/admin/profile");
        } else if(user.type === "therapist"){
          navigate("/therapist/profile");
        } else {
          console.log('error');
        }
      } else {
        navigate("/login");
      }
    }

    return (
      <Box sx={{ flexGrow: 1, background:'#FFFBF3' }}>
        <AppBar position="static" style={{background: 'transparent', boxShadow:'none'}}>
          <Toolbar>
            <Typography className={classes.firstTypo} onClick={() => {navigate('/therapies')}}>
              Specialties
            </Typography> 
            <Typography className={classes.typo} onClick={() => {navigate('/doctors')}}>
              Doctors
            </Typography>
            <Typography className={classes.typo} onClick={() => {navigate('/therapies')}}>
              Contact Us
            </Typography>
            <img className={classes.logo} src='https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Flogo.png?alt=media&token=133422cd-c16f-4575-8d80-afb240030125' alt="logo" />
            <Avatar className={classes.endLogin} onClick={profile} src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fprofile.svg?alt=media&token=7592369f-93b5-4300-96f2-de1c52da98ad"/>
          </Toolbar>
        </AppBar>
      </Box>        
    )
}

export default Menubar;