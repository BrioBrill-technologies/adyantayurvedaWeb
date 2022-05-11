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
  Avatar,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  Container,
  Grid
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function TherapistRegister() {
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
      <Grid container component="main" className="root">
      <Grid item xs={12} sm={8} md={4} component={Container}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              REGISTER
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
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
            </Box>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"/>
            <Button
              type="submit"
              title="Login"
              onClick={register}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
                Register
            </Button>
            <Button
              className="register__btn register__google"
              onClick={googleRegister}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Register with Google
            </Button>
            <div>
              Already have an account? <Link to="/login">Login</Link> now.
            </div>
          </Box>
        </Container>
        </Grid>
        <Grid item xs={false} sm={4} md={8} className="image">
              <img src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/docreg.webp?alt=media&token=6dc9e064-0393-45ad-9fa8-7a83bd4bf65d" 
              width={'80%'} style={{margin:'2vw'}}  alt="doctor" />
          </Grid>
      </Grid>
      </ThemeProvider>
    </>
  );
}

export default TherapistRegister;
