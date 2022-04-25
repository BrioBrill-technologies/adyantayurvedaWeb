import { Button,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
const theme = createTheme();
function Menubar(){
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
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
          <Toolbar>
            <img src='/logo.jpeg' alt='logo' style={{width: '100px'}}/>
            <Button
                variant="contained"
                color="primary"
                onClick={logout}>
                Logout
            </Button>
            <Avatar onClick={profile}>
              {name.charAt(0).toUpperCase()}
            </Avatar>
          </Toolbar>
        </AppBar>
      </Box>        
    )
}

export default Menubar