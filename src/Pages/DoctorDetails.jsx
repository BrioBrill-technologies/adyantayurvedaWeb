import {useAuthState} from 'react-firebase-hooks/auth';
import {useEffect, useState} from 'react';
import {auth} from '../firebase';
import {useNavigate, useLocation} from 'react-router-dom';
import { getSingleApproved } from '../Hooks/useFetch';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { 
    Button,
    Grid,
    Box,
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
import Footer from '../Components/Navbar/Footer';

function DoctorDetails(){
    const { state } = useLocation();
    const [time, setTime] = useState('');
    const [date, setDate] = useState(null);
    const [user, loading, error] = useAuthState(auth);
    const [place, setPlace] = useState(null);
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();
    const [doctor, setDoctor] = useState(null);

    const fetchDoctor = async () => {
        try{
            const docs = await getSingleApproved(state.id, 'doctors');
            setDoctor(docs);
        } catch(error){
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/pay", { state: { 
            id: state.id,
            type: 'doctors',
            place: place,
            date: date,
            time: time,
            amount: amount,
        } });
    }

    const handlePlace = (e) => {
        setPlace(e.target.value);
        if(e.target.value === 'IN-CLINIC APPOINTMENT'){
            setAmount(700);
        } else if(e.target.value === 'VIDEO CONSULTATION'){
            setAmount(500);
        }
    }

    const handleChange = (event, newAlignment) => {
      setTime(newAlignment);
    };

    useEffect(() => {
        if(loading) return;
        fetchDoctor();
    },[loading]);

    return(
        <div style={{ position: 'absolute',
        top: 0,
        width: '-webkit-fill-available',
        zIndex: -1}}>
            <Grid style={{display:'flex', flexDirection:'row', background:'#FFFBF3', paddingTop:'5vw'}}>
                <Grid item xs={12} sm={12} md={7} lg={7} xl={7} style={{marginLeft:'5vw'}}>
                    <Box style={{display:'flex', flexDirection:'row', paddingTop:'40px', background:'#FFFFFF', border: '1px solid #DDDDDD',borderRadius: '12px'}}>
                        <img 
                            src={doctor? doctor.photoURL : null} 
                            style={{
                                height:'130px',
                                width:'130px', 
                                borderRadius: '50%',
                                marginTop: '1vw',
                                border: '4px solid #fff',
                                filter: 'drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25))'
                            }}/>
                        <Box style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <Typography variant='h4' style={{fontWeight:'bold', color:'#3F3D56'}}>
                                {doctor? doctor.name : null}
                            </Typography>
                            <Typography variant='h6' style={{fontWeight:'bold', color:'#3F3D56'}}>
                                {doctor? doctor.education : null}
                            </Typography>
                            <Typography variant='h6' style={{fontWeight:'bold', color:'#3F3D56'}}>
                                {doctor? doctor.specialization : null}
                            </Typography>
                            <Typography variant='h6' style={{fontWeight:'bold', color:'#3F3D56'}}>
                                {doctor? doctor.experience : null}
                            </Typography>
                            <Typography variant='h6' style={{fontWeight:'bold', color:'#3F3D56'}}>
                                {doctor? doctor.description : null}
                            </Typography>

                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={3} xl={3} style={{marginLeft:'5vw'}}>
                    <FormControl sx={{p:3}} style={{background:'white', border: '1px solid #DDDDDD',borderRadius: '12px'}}>
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
                                onChange={(e) => { setDate(e) }}
                                renderInput={(params) => <TextField style={{width:'70%'}} {...params} />}/>
                        </LocalizationProvider>
                        <Typography sx={{fontFamily: 'Josefin Sans',marginTop:'1.6vw'}}>
                            Evening (5 slots)
                        </Typography>
                        <ToggleButtonGroup sx={{marginTop:'1vw'}} value={time} exclusive onChange={handleChange}>
                            <ToggleButton sx={{borderRadius:'15px',fontFamily: 'Josefin Sans'}} value="05:00 PM">05:00 PM</ToggleButton>
                            <ToggleButton sx={{borderRadius:'15px',fontFamily: 'Josefin Sans'}} value="06:00 PM">06:00 PM</ToggleButton>
                            <ToggleButton sx={{borderRadius:'15px',fontFamily: 'Josefin Sans'}} value="07:00 PM">07:00 PM</ToggleButton>
                            <ToggleButton sx={{borderRadius:'15px',fontFamily: 'Josefin Sans'}} value="08:00 PM">08:00 PM</ToggleButton>
                            <ToggleButton sx={{borderRadius:'15px',fontFamily: 'Josefin Sans'}} value="09:00 PM">09:00 PM</ToggleButton>
                        </ToggleButtonGroup>
                        <Typography sx={{fontFamily: 'Josefin Sans',marginTop:'1.5vw'}}>
                            Morning (5 slots)
                        </Typography>
                        <ToggleButtonGroup sx={{marginTop:'1vw',mb:2}} value={time} exclusive onChange={handleChange} >
                            <ToggleButton sx={{borderRadius:'15px',fontFamily: 'Josefin Sans'}} value="10:00 AM">10:00 AM</ToggleButton>
                            <ToggleButton sx={{borderRadius:'15px',fontFamily: 'Josefin Sans'}} value="11:00 AM">11:00 AM</ToggleButton>
                            <ToggleButton sx={{borderRadius:'15px',fontFamily: 'Josefin Sans'}} value="12:00 PM">12:00 PM</ToggleButton>
                            <ToggleButton sx={{borderRadius:'15px',fontFamily: 'Josefin Sans'}} value="01:00 PM">01:00 PM</ToggleButton>
                            <ToggleButton sx={{borderRadius:'15px',fontFamily: 'Josefin Sans'}} value="02:00 PM">02:00 PM</ToggleButton>
                        </ToggleButtonGroup>
                        <Button variant='contained' color='primary' onClick={handleSubmit} sx={{mb:10, width:'fit-content', p:2,fontFamily: 'Josefin Sans',marginTop:'2vw'}}>
                            Book Appointment
                        </Button>
                    </FormControl>
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}
export default DoctorDetails;