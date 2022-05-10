import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Avatar,
    Button,
} from '@mui/material';
import { makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import { auth, db } from "../../firebase";
import { logout } from '../../Hooks/useAuth';
import { query, collection, getDocs, where } from "firebase/firestore";
const theme = createTheme();

const useStyles = makeStyles({
  typo: {
    color: 'black',
    padding: '0 2vw 0 2vw',
  },
  firstTypo: {
    color: 'black',
    padding: '0 2vw 0 10vw',
    cursor: 'pointer',
  },
  lastTypo: {
    color: 'black',
    padding: '0 10vw 0 2vw',
    cursor: 'pointer',
  },
})
function Menubar(){
  const classes = useStyles();
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const profile = () => {
      if(user.type === "doctor"){
        navigate("/doctor/profile");
      } else if(user.type === "patient"){
        navigate('/profile')
      } else if(user.type === "admin"){
        navigate("/admin/profile");
      } else {
        navigate("/therapist/profile");
      }
    }

    const fetchUserName = async () => {
      try {
        let l
        if(user.type === 'admin'){
          l = query(collection(db, "admins"), where("uid", "==", user?.uid));
        } else if (user.type === 'doctor'){
          l = query(collection(db, "doctors"), where("uid", "==", user?.uid));
        } else if (user.type === 'therapists'){
          l = query(collection(db, "therapists"), where("uid", "==", user?.uid));
        } else {
          l = query(collection(db, "patients"), where("uid", "==", user?.uid));
        }
        const doc1 = await getDocs(l);
        const data1 = doc1.docs[0].data();
        if(data1.name) setName(data1.name);
        else setName(data1.email);
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };
  
    useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/");
      if(user.type){
        fetchUserName();
      }
    }, [user, loading]);
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{background: 'aliceblue'}}>
          <Toolbar>
            <Link to='/'>
              <img src='/logo.png' alt='logo' style={{
                width: '5vw', 
                marginLeft:'10vw'
              }}/>
            </Link>
            <Typography className={classes.firstTypo} onClick={() => { navigate('/doctors')}}> Find Doctors</Typography>
            <Typography className={classes.typo}> Video Consult </Typography>
            <Typography className={classes.typo}> Medicines </Typography>
            <Typography className={classes.typo}> Lab Tests </Typography>
            <Typography className={classes.lastTypo} onClick={() => { navigate('therapies')}}>Therapies</Typography>
            <Avatar onClick={profile}>
              {name ? name.charAt(0).toUpperCase() : "U"}
            </Avatar>
            <Button style={{left: '5vw'}}
                variant="contained"
                color="secondary"
                onClick={logout}>
                LOGOUT
            </Button>
          </Toolbar>
        </AppBar>
      </Box>        
    )
}

export default Menubar