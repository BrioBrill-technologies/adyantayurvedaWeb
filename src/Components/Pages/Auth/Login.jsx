import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../../../firebase';
import {signInWithGoogle,logInWithEmailAndPassword} from '../../../Hooks/useAuth';
import { useAuthState } from "react-firebase-hooks/auth";
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
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const googleRegister = () => {
    signInWithGoogle('patient');
  };

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container component="main" className="root">
          <Grid item xs={false} sm={4} md={8} className="image">
              <img src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/doctor.jpeg?alt=media&token=b764f32b-f712-4e78-acf4-4b8ca8d43425"
               width={'80%'} style={{margin:'2vw'}}  alt="doctor" />
          </Grid>
          <Grid item xs={12} sm={8} md={3} component={Container}>
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
                LOGIN
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
              label="Remember me"
            />
            <Button
              type="submit"
              title="Login"
              onClick={() => logInWithEmailAndPassword(email, password)}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
                LOGIN
            </Button>
            <Button
              className="register__btn register__google"
              onClick={googleRegister}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Login with Google
            </Button>
            <Link to="/reset">Forgot Password</Link>
              <div>
                Don't have an account?  <Link to="/register">Register</Link> now.
              </div>
          </Box>
        </Container>
        </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default Login;
