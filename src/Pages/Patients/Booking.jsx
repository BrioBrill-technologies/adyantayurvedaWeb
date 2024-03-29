import { 
    Button,
    TextField,
    FormControl,
    Typography,
    Paper,
    RadioGroup,
    FormControlLabel,
    Radio,
    Divider,
    ToggleButtonGroup,
    ToggleButton,
    Alert
} from '@mui/material';
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Footer from '../../Components/Navbar/Footer';
function Booking () {
    const { state } = useLocation();
    const [time, setTime] = useState('');
    const [date, setDate] = useState(null);
    const [user, loading, error] = useAuthState(auth);
    const [place, setPlace] = useState(null);
    const [amount, setAmount] = useState(0);
    const [morning, setMorning] = useState(true);
    const [afternoon, setAfternoon] = useState(true);
    const [evening, setEvening] = useState(true);
    const [alert, setAlert] = useState(false);
    const [alertText, setAlertText] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
    }, [loading]);

    const handleDateChange = (date) => {
        if(date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
            if(new Date().getHours() > 12) setMorning(false);
            if(new Date().getHours() >= 14) setAfternoon(false);
            if(new Date().getHours() > 21) setEvening(false);
        } else {
            setMorning(true);
            setAfternoon(true);
            setEvening(true);
        }
        setDate(date);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(place === null) {
            setAlert(true);
            setAlertText('Please select a place');
            return;
        } else if(date === null) {
            setAlert(true);
            setAlertText('Please select a date');
            return;
        } else if(time === '') {
            setAlert(true);
            setAlertText('Please select a time');
            return;
        } else {
            navigate("/pay", { state: { 
                id: state.id,
                type: state.type,
                place: place,
                date: date,
                time: time,
                amount: amount,
            }});
        }
    }

    const handlePlace = (e) => {
        setPlace(e.target.value);
        if(e.target.value === 'IN-CLINIC APPOINTMENT'){
            setAmount(700);
        } else if(e.target.value === 'VIDEO CONSULTATION'){
            setAmount(500);
        }
    }

    const handleChange = (event, newAlignment) => setTime(newAlignment);

    return(
        <div >
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
                        fontFamily:'Josefin Sans',
                        fontWeight: 500,
                        fontSize: '22px'
                    }}
                    src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2FTopTree.png?alt=media&token=184c4654-8237-454c-ba6a-de617cd2a5cf" />
                <FormControl sx={{ml:25, pt:10}}>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        onChange={handlePlace}
                        value = {place}
                        name="radio-buttons-group">
                        <FormControlLabel  value="IN-CLINIC APPOINTMENT" control={<Radio />} label={<Typography style={{fontFamily:'Josefin Sans'}}>IN-CLINIC APPOINTMENT ₹ 700</Typography> }/>
                        <FormControlLabel value="VIDEO CONSULTATION" control={<Radio />} label={<Typography style={{fontFamily:'Josefin Sans'}}>VIDEO CONSULTATION ₹ 500</Typography>} />
                    </RadioGroup>
                    <Divider sx={{mb:2,marginTop:'1vw'}} />
                    <LocalizationProvider dateAdapter={AdapterDateFns} sx={{marginTop:'2vw'}} >
                        <DatePicker
                            minDate= {new Date()}
                            label={<Typography style={{fontFamily:'Josefin Sans'}}>Date of Appointment</Typography>}
                            value={date}
                            onChange={handleDateChange}
                            renderInput={(params) => <TextField style={{width:'70%'}} {...params} />}/>
                    </LocalizationProvider>
                    <Typography sx={{fontFamily: 'Josefin Sans',marginTop:'1.5vw'}}>
                        Morning (5 slots)
                    </Typography>
                    <ToggleButtonGroup sx={{marginTop:'1vw'}} disabled={!date || !afternoon }  value={time} exclusive onChange={handleChange}>
                        <ToggleButton disabled={!morning} sx={{borderRadius:'15px',fontFamily: 'Josefin Sans'}} value="10:00 AM">10:00 AM</ToggleButton>
                        <ToggleButton disabled={!morning} sx={{borderRadius:'15px',fontFamily: 'Josefin Sans'}} value="11:00 AM">11:00 AM</ToggleButton>
                        <ToggleButton disabled={!morning} sx={{borderRadius:'15px',fontFamily: 'Josefin Sans'}} value="12:00 PM">12:00 PM</ToggleButton>
                        <ToggleButton sx={{borderRadius:'15px',fontFamily: 'Josefin Sans'}} value="01:00 PM">01:00 PM</ToggleButton>
                        <ToggleButton sx={{borderRadius:'15px',fontFamily: 'Josefin Sans'}} value="02:00 PM">02:00 PM</ToggleButton>
                        
                    </ToggleButtonGroup>
                    <Typography sx={{fontFamily: 'Josefin Sans',marginTop:'1.6vw'}}>
                        Evening (5 slots)
                    </Typography>
                    <ToggleButtonGroup sx={{marginTop:'1vw',mb:2}} disabled={!date || !evening } value={time} exclusive onChange={handleChange} >
                        <ToggleButton sx={{borderRadius:'15px',fontFamily: 'Josefin Sans'}} value="05:00 PM">05:00 PM</ToggleButton>
                        <ToggleButton sx={{borderRadius:'15px',fontFamily: 'Josefin Sans'}} value="06:00 PM">06:00 PM</ToggleButton>
                        <ToggleButton sx={{borderRadius:'15px',fontFamily: 'Josefin Sans'}} value="07:00 PM">07:00 PM</ToggleButton>
                        <ToggleButton sx={{borderRadius:'15px',fontFamily: 'Josefin Sans'}} value="08:00 PM">08:00 PM</ToggleButton>
                        <ToggleButton sx={{borderRadius:'15px',fontFamily: 'Josefin Sans'}} value="09:00 PM">09:00 PM</ToggleButton>
                    </ToggleButtonGroup>                        
                    { alert && (
                            <Alert severity="error"> {alertText} </Alert>
                    )}
                    <Button variant='contained' color='primary' onClick={handleSubmit} sx={{mb:10, width:'fit-content', p:2,fontFamily: 'Josefin Sans',marginTop:'2vw'}}>
                        Book Appointment
                    </Button>
                </FormControl>
            </Paper>
            <Footer />
        </div>
    )
}

export default Booking;