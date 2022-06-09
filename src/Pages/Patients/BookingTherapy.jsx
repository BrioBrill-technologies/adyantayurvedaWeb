import { 
    Box,
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
    ToggleButton
} from '@mui/material';
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Footer from '../../Components/Navbar/Footer';
import { getSingleTherapy } from '../../Hooks/useFetch';
function BookingTherapy () {
    const { state } = useLocation();
    const [time, setTime] = useState('');
    const [date, setDate] = useState(null);
    const [user, loading, error] = useAuthState(auth);
    const [place, setPlace] = useState(null);
    const [amount, setAmount] = useState(0);
    const [therapy, setTherapy] = useState(null);
    const navigate = useNavigate();


    const fetchTherapyDetails = async () => {
        try{
            const data = await getSingleTherapy(state.id);
            setTherapy(data);
            console.log(data);
        }catch(err){
            console.log(err);
        }
    }
    
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        if (state.type === 'Therapies') fetchTherapyDetails()
    }, [loading]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/pay", { state: { 
            id: state.id,
            type: state.type,
            place: place,
            date: date,
            time: time,
            amount: amount,
        } });
    }

    const handlePlace = (e) => {
        setPlace(e.target.value);
        if(e.target.value === 'price'){
            setAmount(therapy.price);
        } else if(e.target.value === 'session1'){
            setAmount(therapy.session1);
        } else if(e.target.value === 'session5'){
            setAmount(therapy.session5);
        } else if(e.target.value === 'session7'){
            setAmount(therapy.session7);
        } else if(e.target.value === 'session12'){
            setAmount(therapy.session12);
        } else if(e.target.value === 'session8'){
            setAmount(therapy.session8);
        }
    }

    return(
        <div >
            <div style={{zIndex:-1,position:'absolute',top:0}}>
                <svg width="530" height="676" viewBox="0 0 530 676" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M201.233 661.903C91.3224 681.028 -31.9961 688.711 -117.595 617.214C-205.677 543.643 -234.938 418.992 -226.576 304.572C-219.014 201.086 -155.635 112.168 -75.8345 45.7823C-6.293 -12.0693 84.5632 -17.706 174.342 -28.9526C277.828 -41.9163 397.071 -92.2216 475.265 -23.254C553.787 46.0031 526.758 171.111 519.556 275.529C513.397 364.832 494.692 451.474 437.757 520.581C377.059 594.254 295.309 645.534 201.233 661.903Z" fill="#FFF6E4"/>
                </svg>
            </div>
            <Box display="flex" flexDirection="row">
                <Paper style={{padding:20, marginTop:50, width:580, height:'fit-content'}}>
                    <Typography variant="h4" style={{marginBottom:20}}>
                        {state.type === 'Therapies' ? therapy?.name : state.type}
                    </Typography>
                    <Divider />
                    <Typography variant="body1" style={{marginBottom:20}}>
                        {state.type === 'Therapies' ? therapy?.description : state.type}
                    </Typography>
                    <Divider />
                </Paper>
            <Paper sx={{ ml:5, mt:3}}>
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
                <FormControl sx={{padding:'10vw 10vw 0'}}>
                    { therapy?.price && (
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            onChange={handlePlace}
                            value = {place}
                            name="radio-buttons-group">
                            <FormControlLabel  value='price' control={<Radio />} label={<Typography style={{fontFamily:'Josefin Sans'}}>₹ {therapy.price}</Typography> }/>
                        </RadioGroup>
                    )}
                    { therapy?.session && (
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            onChange={handlePlace}
                            value = {place}
                            name="radio-buttons-group">
                            <FormControlLabel  value="session8" control={<Radio />} label={<Typography style={{fontFamily:'Josefin Sans'}}>8 Session ₹ {therapy.session8} ({therapy.duration}) minutes</Typography> }/>
                        </RadioGroup>
                    )}
                    { therapy?.session1 && (
                        <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        onChange={handlePlace}
                        value = {place}
                        name="radio-buttons-group">
                            <FormControlLabel  value="Session1" control={<Radio />} label={<Typography style={{fontFamily:'Josefin Sans'}}>1 Session ₹ {therapy.session1} ({therapy.duration}) minutes</Typography> }/>
                            <FormControlLabel  value="Session5" control={<Radio />} label={<Typography style={{fontFamily:'Josefin Sans'}}>5 Session ₹ {therapy.session5} ({therapy.duration}) minutes</Typography> }/>
                            <FormControlLabel  value="Session7" control={<Radio />} label={<Typography style={{fontFamily:'Josefin Sans'}}>7 Session ₹ {therapy.session7} ({therapy.duration}) minutes</Typography> }/>
                            <FormControlLabel  value="Session12" control={<Radio />} label={<Typography style={{fontFamily:'Josefin Sans'}}>12 Session ₹ {therapy.session12} ({therapy.duration}) minutes</Typography> }/>
                        </RadioGroup>
                    )}
                    <Divider sx={{mb:2,marginTop:'1vw'}} />
                    <LocalizationProvider dateAdapter={AdapterDateFns} sx={{marginTop:'2vw'}} >
                        <DatePicker
                            minDate= {new Date()}
                            label={<Typography style={{fontFamily:'Josefin Sans'}}>Date of Appointment</Typography>}
                            value={date}
                            onChange={(e) => { setDate(e) }}
                            renderInput={(params) => <TextField style={{width:'100%'}} {...params} />}/>
                    </LocalizationProvider>
                    <Button variant='contained' color='primary' onClick={handleSubmit} sx={{mb:10, width:'fit-content', p:2,fontFamily: 'Josefin Sans',marginTop:'2vw'}}>
                        Book Appointment
                    </Button>
                </FormControl>
            </Paper>
            </Box>
            <Footer />
        </div>
    )
}

export default BookingTherapy;