import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth, db } from '../../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { 
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Paper
} from '@mui/material';
import Footer from "../../Components/Navbar/Footer";
import { makeStyles } from '@material-ui/core'
import { addDoc, collection } from "firebase/firestore";

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

function Login() {
  const classes = useStyles();
  const [phone, setPhone] = useState("");
  const [otp, setotp] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState('');
  const navigate = useNavigate();

    const generateRecaptchaVerifier = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            }
        }, auth);
    }
  
    const signIn = async () => {
        generateRecaptchaVerifier();
        const phoneNumber = "+91" + phone;
        const appVerifier = window.recaptchaVerifier;
        generateRecaptchaVerifier();
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then(confirmationResult => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            setshow(true);
        }).catch(error => {
            console.log(error);
        });
    }   

    const verify = async () => {
        const appVerifier = window.recaptchaVerifier;
        const code = otp;
        window.confirmationResult.confirm(code)
        .then(result => {
            const user = result.user;
            addDoc(collection(db, "users"), {
                type: 'patient',
                uid: user.uid,
            });
            addDoc(collection(db, "patients"), {
                uid: user.uid,
                phone: phone,
                name: user?.displayName || '',
            });
            setfinal(result);
        })
        .catch(error => {
            console.log(error);
        });
    }

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

  return (
    <div>
        <div id="sign-in-button"></div>
        <div style={{zIndex:-1,position:'absolute',top:0}}>
          <svg width="530" height="676" viewBox="0 0 530 676" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M201.233 661.903C91.3224 681.028 -31.9961 688.711 -117.595 617.214C-205.677 543.643 -234.938 418.992 -226.576 304.572C-219.014 201.086 -155.635 112.168 -75.8345 45.7823C-6.293 -12.0693 84.5632 -17.706 174.342 -28.9526C277.828 -41.9163 397.071 -92.2216 475.265 -23.254C553.787 46.0031 526.758 171.111 519.556 275.529C513.397 364.832 494.692 451.474 437.757 520.581C377.059 594.254 295.309 645.534 201.233 661.903Z" fill="#FFF6E4"/>
          </svg>
        </div>
        <Paper sx={{ ml:50, pt:15 }}>
          <Box sx={{ display:'flex', flexDirection:'row', alignItems:'center'}}>
            <Typography sx={{
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign:"center" }} className={classes.login}>
              Login
            </Typography>
          </Box>
          <Container maxWidth="xs" sx={{ ml:20 }}>
            <Box sx={{flexDirection:'column', alignItems:'center'}} style={{ display: !show ? 'flex' : 'none' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="mobile"
                label="Mobile Number"
                name="phone"
                autoFocus
                onChange={(e) => setPhone(e.target.value)}
              />
              <Button
                type="submit"
                title="Login"
                onClick={signIn}
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2, textTransform: 'none !important'}}>
                  Send OTP
              </Button>
            </Box>
            <Box sx={{flexDirection:'column', alignItems:'center'}} style={{ display: show ? 'flex' : 'none' }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="otp"
                    label="OTP"
                    name="otp"
                    autoFocus
                    onChange={(e) => setotp(e.target.value)}
                />
                <Button
                    type="submit"
                    title="Login"
                    onClick={verify}
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2, textTransform: 'none !important'}}>
                    Verify OTP
                </Button>
            </Box>
          </Container>
        </Paper>
        <Footer />
    </div>
  );
}

export default Login;
