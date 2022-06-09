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
                    <Box>
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
                        <Box style={{display:'flex', flexDirection:'row', paddingTop:'40px'}}>
                            <Box style={{display:'flex', flexDirection:'column'}}>
                                <Typography variant='h6' style={{fontWeight:'bold', color:'#3F3D56'}}>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.89355 14V16L6.89355 16.7V14.7L8.89355 14Z" fill="#3E3E3E"/>
                                    <path d="M9.89355 9.69995V11.7L11.8936 11V9L9.89355 9.69995Z" fill="#3E3E3E"/>
                                    <path d="M8.89355 8V6L6.89355 6.69995V8.69995L8.89355 8Z" fill="#3E3E3E"/>
                                    <path d="M11.8936 5L9.89355 5.69995V7.69995L11.8936 7V5Z" fill="#3E3E3E"/>
                                    <path d="M8.89355 10V12L6.89355 12.7V10.7L8.89355 10Z" fill="#3E3E3E"/>
                                    <path d="M9.89355 15.7L11.8936 15V13L9.89355 13.7V15.7Z" fill="#3E3E3E"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.39357 5L14.3936 1L19.3936 5V20L0.393555 19.9999V14.4999L4.39357 12.9999V5ZM5.39357 5.67703L13.8936 2.27703V19L1.39355 19V15.1929L5.39357 13.6929V5.67703ZM14.8936 2.68063V19H18.3936V5.48062L14.8936 2.68063Z" fill="#3E3E3E"/>
                                    <path d="M8.89355 14V16L6.89355 16.7V14.7L8.89355 14Z" stroke="#3E3E3E" stroke-width="0.5"/>
                                    <path d="M9.89355 9.69995V11.7L11.8936 11V9L9.89355 9.69995Z" stroke="#3E3E3E" stroke-width="0.5"/>
                                    <path d="M8.89355 8V6L6.89355 6.69995V8.69995L8.89355 8Z" stroke="#3E3E3E" stroke-width="0.5"/>
                                    <path d="M11.8936 5L9.89355 5.69995V7.69995L11.8936 7V5Z" stroke="#3E3E3E" stroke-width="0.5"/>
                                    <path d="M8.89355 10V12L6.89355 12.7V10.7L8.89355 10Z" stroke="#3E3E3E" stroke-width="0.5"/>
                                    <path d="M9.89355 15.7L11.8936 15V13L9.89355 13.7V15.7Z" stroke="#3E3E3E" stroke-width="0.5"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.39357 5L14.3936 1L19.3936 5V20L0.393555 19.9999V14.4999L4.39357 12.9999V5ZM5.39357 5.67703L13.8936 2.27703V19L1.39355 19V15.1929L5.39357 13.6929V5.67703ZM14.8936 2.68063V19H18.3936V5.48062L14.8936 2.68063Z" stroke="#3E3E3E" stroke-width="0.5"/>
                                </svg>
                                    Adyant Ayurveda Clinic
                                </Typography>
                                <Typography variant='h6' style={{fontWeight:'bold', color:'#3F3D56'}}>
                                    5.0
                                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.39355 0L10.1897 5.52786H16.002L11.2997 8.94427L13.0958 14.4721L8.39355 11.0557L3.69127 14.4721L5.48738 8.94427L0.785102 5.52786H6.59744L8.39355 0Z" fill="#74613C"/>
                                    </svg>

                                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.39355 0L10.1897 5.52786H16.002L11.2997 8.94427L13.0958 14.4721L8.39355 11.0557L3.69127 14.4721L5.48738 8.94427L0.785102 5.52786H6.59744L8.39355 0Z" fill="#74613C"/>
                                    </svg>

                                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.39355 0L10.1897 5.52786H16.002L11.2997 8.94427L13.0958 14.4721L8.39355 11.0557L3.69127 14.4721L5.48738 8.94427L0.785102 5.52786H6.59744L8.39355 0Z" fill="#74613C"/>
                                    </svg>

                                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.39355 0L10.1897 5.52786H16.002L11.2997 8.94427L13.0958 14.4721L8.39355 11.0557L3.69127 14.4721L5.48738 8.94427L0.785102 5.52786H6.59744L8.39355 0Z" fill="#74613C"/>
                                    </svg>

                                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.39355 0L10.1897 5.52786H16.002L11.2997 8.94427L13.0958 14.4721L8.39355 11.0557L3.69127 14.4721L5.48738 8.94427L0.785102 5.52786H6.59744L8.39355 0Z" fill="#74613C"/>
                                    </svg>
                                </Typography>
                                <Typography variant='h6' style={{fontWeight:'bold', color:'#74613C'}}>
                                    <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.3936 9.18182C17.3936 15.5455 9.39355 21 9.39355 21C9.39355 21 1.39355 15.5455 1.39355 9.18182C1.39355 7.01187 2.23641 4.93079 3.7367 3.3964C5.23699 1.86201 7.27182 1 9.39355 1C11.5153 1 13.5501 1.86201 15.0504 3.3964C16.5507 4.93079 17.3936 7.01187 17.3936 9.18182Z" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.89355 11C10.2743 11 11.3936 9.88071 11.3936 8.5C11.3936 7.11929 10.2743 6 8.89355 6C7.51284 6 6.39355 7.11929 6.39355 8.5C6.39355 9.88071 7.51284 11 8.89355 11Z" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    Get Directions
                                </Typography>
                                <Typography variant='h6' style={{ color:'#3F3D56'}}>
                                No.290, 71, 38th Cross Rd, <br/>
                                8th Block, Jayanagar, <br/>
                                Bengaluru, <br/>
                                Karnataka 560082 <br/>
                                </Typography>
                            </Box>
                            <Box style={{display:'flex', flexDirection:'column', marginLeft:'20vw'}}>
                                <Typography variant='h6' style={{fontWeight:'bold', color:'#3F3D56'}}>
                                    <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3936 8.5H1.39355V19H17.3936V8.5ZM17.3936 7.5H1.39355V4H17.3936V7.5ZM18.3936 4C18.3936 3.44772 17.9458 3 17.3936 3H1.39355C0.84127 3 0.393555 3.44772 0.393555 4V19C0.393555 19.5523 0.84127 20 1.39356 20H17.3936C17.9458 20 18.3936 19.5523 18.3936 19V4Z" fill="#3E3E3E"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.89355 6V1H5.89355V6H4.89355ZM12.8936 6V1H13.8936V6H12.8936Z" fill="#3E3E3E"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3936 8.5H1.39355V19H17.3936V8.5ZM17.3936 7.5H1.39355V4H17.3936V7.5ZM18.3936 4C18.3936 3.44772 17.9458 3 17.3936 3H1.39355C0.84127 3 0.393555 3.44772 0.393555 4V19C0.393555 19.5523 0.84127 20 1.39356 20H17.3936C17.9458 20 18.3936 19.5523 18.3936 19V4Z" stroke="#3E3E3E" stroke-width="0.5"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.89355 6V1H5.89355V6H4.89355ZM12.8936 6V1H13.8936V6H12.8936Z" stroke="#3E3E3E" stroke-width="0.5"/>
                                    </svg>
                                    Mon - Sat
                                </Typography>
                                <Typography variant='h6' style={{ color:'#3F3D56'}}>
                                9:00 AM - 2:00 PM
                                </Typography>
                                <Typography variant='h6' style={{color:'#3F3D56'}}>
                                9:00 AM - 2:00 PM
                                </Typography>
                                <Typography variant='h6' style={{color:'#3F3D56'}}>
                                <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.39343 5.00006C1.28892 5.00013 0.393555 5.89553 0.393555 7.00006V18.0001C0.393555 19.1046 1.28899 20.0001 2.39355 20.0001H16.3936C17.4981 20.0001 18.3936 19.1046 18.3936 18.0001V7.00006C18.3936 5.89549 17.4981 5.00006 16.3936 5.00006H15.9936L14.3936 1L2.39343 5.00006ZM13.8153 2.24685L14.9165 4.99994H5.55588L13.8153 2.24685ZM2.39355 6.00006H16.3936C16.9458 6.00006 17.3936 6.44778 17.3936 7.00006V10.9999H14.3936C13.5651 10.9999 12.8936 11.6715 12.8936 12.4999C12.8936 13.3284 13.5651 13.9999 14.3936 13.9999H17.3936V18.0001C17.3936 18.5523 16.9458 19.0001 16.3936 19.0001H2.39355C1.84127 19.0001 1.39355 18.5523 1.39355 18.0001V7.00006C1.39355 6.44778 1.84127 6.00006 2.39355 6.00006Z" fill="#3E3E3E" stroke="#3E3E3E" stroke-width="0.5"/>
                                </svg>
                                Online Payment Available
                                </Typography>
                                <Typography variant='h6' style={{color:'#3F3D56'}}>
                                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.77841 0.0125757L9.8381 0.00112062L10.5672 6.3496e-05L10.9703 1.95682e-08C11.3733 -6.39803e-05 11.4832 0.156864 11.302 0.420575L10.757 1.23513C10.5675 1.5184 10.5675 1.5184 10.1703 1.5184H9.84128H7.71853C8.24033 2.04224 8.6227 2.64511 8.63644 3.15711L10.5709 3.13535C10.9768 3.13055 11.6458 3.04255 11.3085 3.54175L10.7635 4.34815C10.5507 4.66335 10.3529 4.63263 10.1768 4.63551L8.60443 4.66207C8.33516 6.65855 6.5965 7.93086 4.29249 8.40286C3.66037 8.51038 3.55113 8.71678 3.90173 9.1427L9.04792 15.3913C9.29807 15.695 9.54263 15.9987 9.0492 15.999L7.19612 16C6.99051 16 6.83072 15.9539 6.66038 15.7513L1.08471 9.11774C0.823673 8.80702 0.773436 8.56382 0.777452 8.38494L0.794421 7.6259C0.801384 7.31358 1.21498 7.3283 1.70686 7.34654C4.11899 7.40286 5.93272 6.92478 6.38848 4.62879L0.71756 4.59743C0.472138 4.59615 0.357926 4.50815 0.508372 4.26719L1.09888 3.32159C1.2306 3.11071 1.34611 3.02431 1.78474 3.03039L6.13903 3.09023C5.43987 1.7104 3.59583 1.47008 0.736762 1.536C0.216218 1.55104 0.355602 1.31712 0.735184 0.782525L1.00697 0.397919C1.28445 0.0132799 1.43856 0.0130557 1.77655 0.0125757H1.77841ZM1.77841 0.0125757H1.77655H1.77841ZM1.77841 0.0125757C1.77778 0.0125757 1.77718 0.0125757 1.77655 0.0125757H1.77841Z" fill="#3E3E3E"/>
                                    </svg>
                                    700
                                </Typography>
                            </Box>
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
            <div style={{zIndex:'-1', marginTop:'-10vw', marginBottom:'-10vw'}}>
                <svg width="1440" height="432" viewBox="0 0 1440 432" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 432L60 382C120 331 240 230 360 194C480 158 600 187 720 202C840 216 960 216 1080 187C1200 158 1320 101 1380 72L1440 43V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V432Z" fill="#FFFBF3"/>
                </svg>
            </div>
            <Paper>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box sx={{p:3}}>
                            <Typography style={{fontFamily:'Josefin Sans', fontSize:'2.5vw'}}>
                            Reviews (6)
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
            <Footer />
        </div>
    )
}
export default DoctorDetails;