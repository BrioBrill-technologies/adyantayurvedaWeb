import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {auth} from "../../../firebase";
import { 
  signInWithGoogle,
  registerWithEmailAndPassword,
} from '../../../Hooks/useAuth';
import { 
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  Container,
  Paper} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from "../../Navbar/Footer";
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  login : {
    fontFamily: 'Josefin Sans !important',
    fontSize: '28px !important',
    fontWeight: '600 !important',
    color: '#3E3E3E !important',
  }, 
  register__btn: {
    fontFamily: 'Josefin Sans !important',
    fontSize: '20px !important',
    fontWeight: '400 !important',
    color: '#3E3E3E !important',
    textTransform: 'none !important',
  },
});

const theme = createTheme();

function TherapistRegister() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    const newRegister = registerWithEmailAndPassword( email, password, 'therapist');
    if(newRegister) {
      navigate('/therapist/profile');
    } else {
      alert('Something went wrong');
    }
  };

  const googleRegister = () => {
    signInWithGoogle('doctor');
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <div style={{zIndex:-1,position:'absolute',top:0}}>
          <svg width="530" height="676" viewBox="0 0 530 676" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M201.233 661.903C91.3224 681.028 -31.9961 688.711 -117.595 617.214C-205.677 543.643 -234.938 418.992 -226.576 304.572C-219.014 201.086 -155.635 112.168 -75.8345 45.7823C-6.293 -12.0693 84.5632 -17.706 174.342 -28.9526C277.828 -41.9163 397.071 -92.2216 475.265 -23.254C553.787 46.0031 526.758 171.111 519.556 275.529C513.397 364.832 494.692 451.474 437.757 520.581C377.059 594.254 295.309 645.534 201.233 661.903Z" fill="#FFF6E4"/>
          </svg>
        </div>
        <Paper sx={{ ml:50, pt:15 }}>
          <Box sx={{ display:'flex', flexDirection:'row', alignItems:'center'}}>
            <Typography sx={{marginLeft:10 }} className={classes.login}>
              Register
            </Typography>
            <Button variant="text" className={classes.register__btn} sx={{fontWeight:'bold', marginLeft:25}} onClick={() => navigate('/register')}>
              Are you a Customer? Register here
            </Button>
          </Box>
          <Container maxWidth="xs" sx={{ ml:20 }}>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <FormControlLabel
                  sx={{marginLeft:-10}}
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Link to="/reset" 
                  style={{
                    textDecoration:'none',
                    color:'#3E3E3E',
                    fontSize:14,
                    fontWeight:'400',
                    marginLeft:30
                  }}>Forgot Password?</Link>
              </Box>
              <Button
                type="submit"
                title="Login"
                onClick={register}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, background:'#74613C', textTransform: 'none !important'}}>
                  Register
              </Button>
              <Typography variant="h6" sx={{fontWeight:'bold' }}>
                Or Register with
              </Typography>
              <Button
                className="register__btn register__google"
                onClick={googleRegister}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, background:'#EFEFF1', color:"black", textTransform: 'none !important', }}>
                Login with Google
              </Button>
            </Box>
          </Container>
        </Paper>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default TherapistRegister;
