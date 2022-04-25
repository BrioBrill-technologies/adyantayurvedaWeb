import { Button,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();
function Navbar(){
    const handleLogin = () => {
        navigate('/login')
    }
    let navigate = useNavigate();
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
          <Toolbar>
            <img src='/logo.jpeg' alt='logo' style={{width: '100px'}}/>
            <Button
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