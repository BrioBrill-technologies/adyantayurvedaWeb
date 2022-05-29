import { 
    Box,
    Button,
    CssBaseline,
    TextField,
    Chip,
    Stack,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Container,
    Typography,
    Grid
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import { getSingleApproved } from "../../../Hooks/useFetch";
import { makeStyles } from '@material-ui/core';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { addBooking } from '../../../Hooks/usePost';
const useStyles = makeStyles({
    marginT: {
        marginTop: '1rem !important'
    },
    font45:{
        fontSize: '25px !important'
    },
    sub:{
        margin: '2vw 4vw 0 !important',
    },
    back:{
        background: 'URL(https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/istockphoto-1157591198-612x612.jpeg?alt=media&token=e1c2d5f5-533e-4c2b-a8c5-0899c25217fa)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
    },
})
const theme = createTheme();
function Booking () {
    const classes = useStyles();
    const { state } = useLocation();
    const [time, setTime] = useState(null);
    const [date, setDate] = useState(null);
    const [status, setStatus] = useState(null);
    const [user, loading, error] = useAuthState(auth);
    const [doctor, setDoctor] = useState([]);
    const [name, setName] = useState(null);
    const [birthday, setBirthday] = useState(null);
    const navigate = useNavigate();
    
    const fetchDoctor = async () => {
        try {
            const data = await getSingleApproved(state.id, state.type);
            setDoctor(data);
        } catch (err) {
            console.error(err);
            alert("An error occurred while fetching user data");
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchDoctor();
    }, [loading]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBooking({
            DocId:state.id,
            type:state.type,
            patientId:user.uid,
            date, 
            time, 
            status,
            amount:state.amount,
        }).then(() => {
            navigate('/appointments');
        }).catch(err => {
            console.log(err);
        });
    }

    const handleGender = (e) => {
        setStatus(e.target.value);
    }

    return(
        <ThemeProvider theme={theme}>
            <div className={classes.back}>
            <Grid container component="main" className="root">
                <Grid item xs={false} sm={4} md={3.5}></Grid>
                <Grid item xs={12} sm={8} md={5} component={Container}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 15,
                                    background:'#ffffff6e',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    border: '1px solid grey',
                                    borderRadius: '2vw',
                                    padding: '1rem',
                                }}>
                            <Typography className={classes.font45}>Book an Appointment</Typography>
                            <Box component="form" noValidate sx={{ mt: 1, ml:10}}>
                                <LocalizationProvider dateAdapter={AdapterDateFns} >
                                    <DatePicker
                                        minDate= {new Date()}
                                        label="Date of Appointment"
                                        value={date}
                                        onChange={(e) => {
                                            setDate(e);
                                        }}
                                        renderInput={(params) => <TextField style={{width:'70%'}} {...params} />}
                                    />
                                </LocalizationProvider>
                                <Stack direction="column" spacing={3} className={classes.marginT} sx={{ml:-7}}>
                                    <Stack direction="row" spacing={3}>
                                    <Chip label="09:00" onClick={()=>{setTime('9:00')}}/>
                                    <Chip label="10:00" variant="outlined" onClick={()=>{setTime('10:00')}}/>
                                    <Chip label="11:00" variant="outlined" onClick={()=>{setTime('11:00')}}/>
                                    <Chip label="12:00" variant="outlined" onClick={()=>{setTime('12:00')}}/>
                                    </Stack>
                                    <Stack direction="row" spacing={3}>
                                    <Chip label="13:00" variant="outlined" onClick={()=>{setTime('13:00')}}/>
                                    <Chip label="14:00" variant="outlined" onClick={()=>{setTime('14:00')}}/>
                                    <Chip label="15:00" variant="outlined" onClick={()=>{setTime('15:00')}}/>
                                    <Chip label="16:00" variant="outlined" onClick={()=>{setTime('16:00')}}/>
                                    </Stack>
                                </Stack>
                                <FormControl style={{width:'70%'}} className={classes.marginT}>
                                    <InputLabel id="GenderLabel">Gender</InputLabel>
                                    <Select
                                        labelId="GenderLabel"
                                        defaultValue={''}
                                        id="demo-simple-select"
                                        label="Gender"
                                        onChange={handleGender}>
                                        <MenuItem value={'Male'}>Male</MenuItem>
                                        <MenuItem value={'Female'}>Female</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField 
                                    className={classes.marginT}
                                    style={{marginBottom:'1vw',width:'70%'}}
                                    label="Full Name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <LocalizationProvider dateAdapter={AdapterDateFns} >
                                    <DatePicker
                                        maxDate= {new Date()}
                                        label="Date of Birth"
                                        value={birthday}
                                        onChange={(e) => {
                                            setBirthday(e);
                                        }}
                                        renderInput={(params) => <TextField style={{width:'70%'}} {...params} />}
                                    />
                                </LocalizationProvider>
                                <div></div>
                                <Button 
                                    className={classes.sub}
                                    variant="contained"
                                    color="primary"
                                    onClick={(e) => handleSubmit(e)}>
                                    Submit
                                </Button>
                            </Box>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
            </div>
        </ThemeProvider>
    )
}

export default Booking;