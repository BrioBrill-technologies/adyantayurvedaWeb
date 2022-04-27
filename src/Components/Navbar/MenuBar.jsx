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
import { auth, db, logout } from "../../firebase";
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
  },
  lastTypo: {
    color: 'black',
    padding: '0 10vw 0 2vw',
  },
})
function Menubar(){
  const classes = useStyles();
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const profile = () => {
      navigate('/profile')
    }
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };
  
    useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/");
      fetchUserName();
    }, [user, loading]);
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{background: 'transparent', marginBottom:'2vw'}}>
          <Toolbar>
            <Link to='/'>
              <img src='/logo.png' alt='logo' style={{width: '5vw', marginLeft:'10vw'}}/>
            </Link>
            <Typography className={classes.firstTypo}> Find Doctors</Typography>
            <Typography className={classes.typo}> Video Consult </Typography>
            <Typography className={classes.typo}> Medicines </Typography>
            <Typography className={classes.typo}> Lab Tests </Typography>
            <Typography className={classes.lastTypo}>Therapies</Typography>
            <Avatar onClick={profile}>
              {name.charAt(0).toUpperCase()}
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