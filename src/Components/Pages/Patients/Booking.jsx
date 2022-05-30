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
    Grid,
    Paper,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormLabel,
    Divider,
    ToggleButtonGroup,
    ToggleButton
} from '@mui/material';
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
import Footer from '../../Navbar/Footer';
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
    fontJosefin:{
        fontFamily: 'Josefin Sans !important'
    },
})
function Booking () {
    const classes = useStyles();
    const { state } = useLocation();
    const [time, setTime] = useState('');
    const [date, setDate] = useState(null);
    const [status, setStatus] = useState(null);
    const [user, loading, error] = useAuthState(auth);
    const [place, setPlace] = useState(null);
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

    const handlePlace = (e) => {
        setPlace(e.target.value);
    }

    const handleChange = (event, newAlignment) => {
      setTime(newAlignment);
    };

    return(
        <div>
            <div style={{zIndex:-1,position:'absolute',top:0}}>
                <svg width="530" height="676" viewBox="0 0 530 676" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M201.233 661.903C91.3224 681.028 -31.9961 688.711 -117.595 617.214C-205.677 543.643 -234.938 418.992 -226.576 304.572C-219.014 201.086 -155.635 112.168 -75.8345 45.7823C-6.293 -12.0693 84.5632 -17.706 174.342 -28.9526C277.828 -41.9163 397.071 -92.2216 475.265 -23.254C553.787 46.0031 526.758 171.111 519.556 275.529C513.397 364.832 494.692 451.474 437.757 520.581C377.059 594.254 295.309 645.534 201.233 661.903Z" fill="#FFF6E4"/>
                </svg>
            </div>
            <Paper sx={{ ml:60, mt:5 }}>
                <img
                    style={{
                        position: 'absolute',
                        right: 0,
                        width: '20%',
                    
                    }}
                    src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2FTopTree.png?alt=media&token=184c4654-8237-454c-ba6a-de617cd2a5cf" />
                <FormControl sx={{ml:25, pt:10}}>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        onChange={handlePlace}
                        value = {place}
                        name="radio-buttons-group">
                        <FormControlLabel value="female" control={<Radio />} label="IN-CLINIC APPOINTMENT ₹ 700" />
                        <FormControlLabel value="male" control={<Radio />} label="VIDEO CONSULTATION ₹ 500" />
                    </RadioGroup>
                    <Divider sx={{mb:2}} />
                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                        <DatePicker
                            minDate= {new Date()}
                            label="Date of Appointment"
                            value={date}
                            onChange={(e) => { setDate(e) }}
                            renderInput={(params) => <TextField style={{width:'70%'}} {...params} />}/>
                    </LocalizationProvider>
                    <Typography>
                        Morning (5 slots)
                    </Typography>
                    <ToggleButtonGroup value={time} exclusive onChange={handleChange}>
                        <ToggleButton value="5:00">05:00 PM</ToggleButton>
                        <ToggleButton value="6:00">06:00 PM</ToggleButton>
                        <ToggleButton value="7:00">07:00 PM</ToggleButton>
                        <ToggleButton value="8:00">08:00 PM</ToggleButton>
                        <ToggleButton value="9:00">09:00 PM</ToggleButton>
                    </ToggleButtonGroup>
                    <Typography>
                        Morning (5 slots)
                    </Typography>
                    <ToggleButtonGroup value={time} exclusive onChange={handleChange} sx={{mb:2}}>
                        <ToggleButton value="10:00">10:00 AM</ToggleButton>
                        <ToggleButton value="11:00">11:00 AM</ToggleButton>
                        <ToggleButton value="12:00">12:00 PM</ToggleButton>
                        <ToggleButton value="01:00">01:00 PM</ToggleButton>
                        <ToggleButton value="02:00">02:00 PM</ToggleButton>
                    </ToggleButtonGroup>
                    <Button variant='contained' color='primary' onClick={handleSubmit} sx={{mb:10, width:'fit-content', p:2}}>
                        Book Appointment
                    </Button>
                </FormControl>
            </Paper>
            <Footer />
        </div>
    )
}

export default Booking;