import { Button,
    CssBaseline,
    TextField,
    Chip,
    Stack,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Container,
    Typography} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import * as React from 'react';
import { addBooking, auth, getDoctor } from '../../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import {useNavigate, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react'
import "flatpickr/dist/themes/dark.css";
import Flatpickr from "react-flatpickr";
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles({
    marginT: {
        marginTop: '1rem !important'
    },
    font45:{
        fontSize: '25px !important'
    },
    sub:{
        margin: '1rem 0 0 !important',
        left:'50%',
        transform: 'translateX(-50%)',
    }
})

const theme = createTheme();
function Booking () {
    const classes = useStyles();
    const { state } = useLocation();
    const [time, setTime] = useState(null);
    const [date, setDate] = useState(null);
    const [status, setStatus] = useState(null);
    const [user, loading, error] = useAuthState(auth);
    const [doctor, setDoctor] = useState(null);
    const [name, setName] = useState(null);
    const [birthday, setBirthday] = useState(null);
    const [chipId, setChipId] = useState('1');
    const navigate = useNavigate();

    const fetchDoctor = async () => {
        try {
            const doc = await getDoctor(state.uid);
            const data = doc
            console.log(data);
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
    }, [user, loading]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBooking(user, state.uid, date[0].toString(), time, status);
        navigate("/");
    }

    const handleGender = (e) => {
        setStatus(e.target.value);
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}>
                <Typography className={classes.font45}>Book an Appointment</Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                <FormControl fullWidth className={classes.marginT}>
                    <Flatpickr
                        value={date}
                        options={{
                            enableTime: false,
                            dateFormat: "Y-m-d",
                            minDate: "today",
                        }}
                        onChange={(e) => setDate(e)}
                    />
                    </FormControl>
                    <Stack direction="row" spacing={3} className={classes.marginT}>
                        <Chip label="09:00"   onClick={()=>{setTime('9:00')
                            console.log('here')}}/>
                        <Chip label="10:00" variant="outlined" onClick={()=>{setTime('10:00')
                            console.log('here')}}/>
                        <Chip label="11:00" variant="outlined" onClick={()=>{setTime('11:00')
                            console.log('here')}}/>
                        <Chip label="12:00" variant="outlined" onClick={()=>{setTime('12:00')
                            console.log('here')}}/>
                        <Chip label="13:00" variant="outlined" onClick={()=>{setTime('13:00')
                            console.log('here')}}/>
                        <Chip label="14:00" variant="outlined" onClick={()=>{setTime('15:00')
                            console.log('here')}}/>
                        <Chip label="15:00" variant="outlined" onClick={()=>{setTime('16:00')
                            console.log('here')}}/>
                    </Stack>
                    <FormControl fullWidth className={classes.marginT}>
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
                        fullWidth
                        label="Full Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField className={classes.marginT}
                    fullWidth
                        label="Date of Birth"
                        onChange={(e) => setBirthday(e.target.value)}
                    />
                    <Button className={classes.sub}
                        variant="contained"
                        color="primary"
                        onClick={(e) => handleSubmit(e)}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </Container>
      </ThemeProvider>
    );
}

export default Booking;