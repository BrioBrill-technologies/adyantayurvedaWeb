// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     Box,
//     Avatar,
// } from '@mui/material';
// import { makeStyles } from '@material-ui/core'
// import React from "react"; 
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../../firebase";

// const useStyles = makeStyles({
//   typo: {
//     color: 'black',
//     padding: '0 0 0 2vw',
//     cursor: 'pointer',
//     fontFamily: 'Lora !important',
//   },
//   firstTypo: {
//     color: 'black',
//     padding: '0 0 0 5vw',
//     cursor: 'pointer',
//     fontFamily: 'Lora !important',
//   },
//   logo: {
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     width: '7vw',
//   },
//   endLogin: {
//     marginLeft: 'auto',
//     marginRight: '5vw',
//     cursor: 'pointer',
//   },
// })
// function Menubar(){
//   const classes = useStyles();
//     const [user, loading, error] = useAuthState(auth);
//     const navigate = useNavigate();

//     const profile = () => {
//       if(user){
//         if(user.type === "doctor"){
//           navigate("/doctor/profile");
//         } else if(user.type === "patient"){
//           navigate('/profile')
//         } else if(user.type === "admin"){
//           navigate("/admin/profile");
//         } else if(user.type === "therapist"){
//           navigate("/therapist/profile");
//         } else {
//           console.log('error');
//         }
//       } else {
//         navigate("/login");
//       }
//     }

//     return (
//       <Box sx={{ flexGrow: 1, background:'#FFFBF3' }}>
//         <AppBar position="static" style={{background: 'transparent', boxShadow:'none'}}>
//           <Toolbar>
            
//             <Typography className={classes.firstTypo} onClick={() => {navigate('/therapies')}}>
//               Specialties
//             </Typography> 
//             <Typography className={classes.typo} onClick={() => {navigate('/doctors')}}>
//               Doctors
//             </Typography>
//             <Typography className={classes.typo} onClick={() => {navigate('/therapies')}}>
//               Contact Us
//             </Typography>
//             <img className={classes.logo} src='https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Flogo.png?alt=media&token=133422cd-c16f-4575-8d80-afb240030125' alt="logo" />
//             <Avatar className={classes.endLogin} onClick={profile} src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fprofile.svg?alt=media&token=7592369f-93b5-4300-96f2-de1c52da98ad"/>
            
//           </Toolbar>
//         </AppBar>
//       </Box>        
//     )
// }

// export default Menubar;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Specifications', 'Doctors', 'Contact us'];
const settings = ['Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color = "inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 15 }} />
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 85 }} />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
               <Avatar src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fprofile.svg?alt=media&token=7592369f-93b5-4300-96f2-de1c52da98ad"/> 
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

