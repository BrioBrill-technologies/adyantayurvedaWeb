import {
  Menu,
  MenuItem,
  Typography
} from '@mui/material';
import {
  makeStyles,
  Container,
  Toolbar,
  AppBar,
  Avatar,
  Box
} from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { logout } from '../../Hooks/useAuth';

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
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  endLogin: {
    marginLeft: 'auto',
    marginRight: '5vw',
    cursor: 'pointer',
  },
})
function Menubar() {
  const classes = useStyles();
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [userAvatar, setUserAvatar] = useState(null);
  const [userNav, setUserNav] = useState(null);

  const handleProfile = () => {
    handleCloseUserMenu();
    if (user.type === "doctor") navigate("/doctor/profile");
    else if (user.type === "patient") navigate('/profile')
    else if (user.type === "admin") navigate("/admin/profile");
    else if (user.type === "therapist") navigate("/therapist/profile");
    else console.log('error');
  };

  const handleCloseUserMenu = () => {
    setUserAvatar(null);
    setUserNav(null);
  };

  const handleNav = (event) => {
    setUserNav(event.currentTarget);
  }

  const profile = (event) => {
    setUserNav(null);
    if (user) {
      setUserAvatar(event.currentTarget);
    } else {
      navigate("/login");
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            <Hidden xsDown>
              <Typography className={classes.firstTypo} onClick={() => {navigate('/therapies')}}>
              Specialties
            </Typography> 
            <Typography className={classes.typo} onClick={() => {navigate('/doctors')}}>
              Doctors
            </Typography>
            <Typography className={classes.typo} onClick={handleNav}>
              Partner With Us
            </Typography>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={userNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(userNav)}
              onClose={handleCloseUserMenu}>
                <MenuItem onClick={() => {navigate('/doctor/register')}}>
                  <Typography textAlign="center">Register as Doctor</Typography>
                </MenuItem>
                <MenuItem onClick={()=>{navigate('/therapist/register')}}>
                  <Typography textAlign="center">Register as Therapist</Typography>
                </MenuItem>
            </Menu>
            </Hidden>
            <Hidden smUp>
              <IconButton>
                <MenuIcon onClick={() => setOpen(true)} />
              </IconButton>
            </Hidden>

            <img 
              onClick={() => {navigate('/')}} 
              className={classes.logo} 
              sx={{ width: '15vw' }}
              md={{ width: '8vw' }}
              src='https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Flogo.png?alt=media&token=133422cd-c16f-4575-8d80-afb240030125' alt="logo" />
            <Avatar 
              className={classes.endLogin} 
              onClick={profile} 
              src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fprofile.svg?alt=media&token=7592369f-93b5-4300-96f2-de1c52da98ad" />
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={userAvatar}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(userAvatar)}
              onClose={handleCloseUserMenu}>
                <MenuItem onClick={handleProfile}>
                  <Typography textAlign="center">View/Update profile</Typography>
                </MenuItem>
                <MenuItem onClick={()=>{navigate('/appointments')}}>
                  <Typography textAlign="center">My Dashboard</Typography>
                </MenuItem>
                <MenuItem onClick={handleProfile}>
                  <Typography textAlign="center">Settings</Typography>
                </MenuItem>
                <MenuItem onClick={logout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
        <SwipeableDrawer
          anchor="left"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}>
          <div>
            <IconButton>
              <ChevronLeftIcon onClick = {() => setOpen(false)} />
            </IconButton>
          </div>
          <Divider />
          <List>
            <Typography className={classes.firstTypo} style={{padding:'0 0 0 2vw'}} onClick={() => { navigate('/therapies') }}>
              Specialties
            </Typography>
            <Typography className={classes.typo} onClick={() => { navigate('/doctors') }}>
              Doctors
            </Typography>
            <Typography className={classes.typo} onClick={() => {navigate('/doctor/register')}}>
              Register as Doctor
            </Typography>
            <Typography className={classes.typo} onClick={() => {navigate('/therapist/register')}}>
              Register as Therapist
            </Typography>
          </List>
        </SwipeableDrawer>
      </AppBar>
    </Box>
  )
}

export default Menubar;



