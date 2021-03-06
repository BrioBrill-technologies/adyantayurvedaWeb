import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, InputBase, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { getSingleApproved, getSinglePatient, loadScript } from "../../Hooks/useFetch";
import Footer from "../../Components/Navbar/Footer";
import { makeStyles } from '@material-ui/core'
import { addBooking } from '../../Hooks/usePost';
import moment from "moment";
const useStyles = makeStyles({
    btn4: {
        background: '#74613C',
        color: 'white !important',
        position: 'relative',
        top: '2vw',
        padding: '1vw',
        borderRadius: '15px',
        fontFamily: 'Josefin Sans !important',
        fontWeight: '600 !important',
        textTransform: 'none !important',
        '&:hover': {
          color: 'white',
        },
    },
    
})

function Pay(){
    const {state} = useLocation();
    const [user, loading, error] = useAuthState(auth);
    const [doctor, setDoctor] = useState(null);
    const [amount, setAmount] = useState(state.amount);
    const [totalAmount, setTotalAmount] = useState(amount);
    const [date, setDate] = useState(new Date(state.date));
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const classes = useStyles();
    const navigate = useNavigate();
    const fetchDoctor = async () => {
        try {
            const data = await getSingleApproved(state.id, state.type);
            console.log(data);
            setDoctor(data);
        } catch (err) {
            console.error(err);
            alert("An error occurred while fetching user data");
        }
    };

    const fetchUserName = async () => {
        try {
            const data = await getSinglePatient(user.uid);
            setName(data.name);
            setEmail(data.email);
            setPhone(data.phone);
        } catch (err) {
            console.error(err);
            alert("An error occurred while fetching user data");
        }
    };

    const displayRazorpay = async () => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if(!res) {
            alert('You are offline... Failed to load Razorpay SDK')
            return
        }

        const options = {
            key: 'rzp_test_sOH0VCpkBQ9hOl',
            currency: 'INR',
            amount: 100 * totalAmount,
            name: name,
            description: 'Booking for ' + doctor.name,
            image:'https://adyantayurveda.com/wp-content/uploads/2021/01/Adyant-Logo.png',
            prefill: {
                name: name,
                email: email,
                contact: phone
            },
            handler: function (response){
                addBooking({
                    DocId:state.id,
                    type:state.type,
                    patientId:user.uid,
                    date:date,
                    paymentId:response.razorpay_payment_id,
                    time:state.time, 
                    status: "Booked",
                    amount: state.amount,
                }).then(() => {
                    navigate('/appointments');
                }).catch(err => {
                    console.log(err);
                });
            },
        };

        const PaymentObject = new window.Razorpay(options)
        PaymentObject.open()
    }

    useEffect(() => {
        if(!user) return navigate("/");
        if(loading) return;
        fetchDoctor();
        fetchUserName();
    }, [user, loading]);

    return (
        <div>
        <div style={{zIndex:-1,position:'absolute',top:0}}>
            <svg width="530" height="676" viewBox="0 0 530 676" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M201.233 661.903C91.3224 681.028 -31.9961 688.711 -117.595 617.214C-205.677 543.643 -234.938 418.992 -226.576 304.572C-219.014 201.086 -155.635 112.168 -75.8345 45.7823C-6.293 -12.0693 84.5632 -17.706 174.342 -28.9526C277.828 -41.9163 397.071 -92.2216 475.265 -23.254C553.787 46.0031 526.758 171.111 519.556 275.529C513.397 364.832 494.692 451.474 437.757 520.581C377.059 594.254 295.309 645.534 201.233 661.903Z" fill="#FFF6E4"/>
            </svg>
        </div>
            {doctor && (
            <Grid display="flex" sx={{marginTop:10}}>
                <Grid item md={3} style={{marginLeft:"14%"}}>
                    <Card 
                        sx={{
                            height:'22vw',
                            width:'32vw',
                            border: '1px solid #DDDDDD',}}>
                        <CardContent>
                            <Typography 
                                sx={{
                                    fontFamily:'Josefin Sans',
                                    fontWeight:600,
                                    fontSize:'16px',
                                    marginTop:'1vw'}}
                                    >{state.place}</Typography>
                            <Typography
                                sx={{
                                    fontFamily:'Josefin Sans',
                                    fontSize:'14px',
                                    color:'#7E7E7E',
                                    marginTop:'0.6vw'}}
                                    >Includes Prescription</Typography>
                            <Divider style={{borderColor:"black", margin:'0.5vw 0'}}/>
                            <Box display="flex" >
                                <Typography 
                                    sx={{
                                        fontFamily:'Josefin Sans',
                                        fontWeight:600,
                                        fontSize:'18px',
                                        marginTop:'1vw'}}>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1999 6.75H1.7999V16.2H16.1999V6.75ZM16.1999 5.85H1.7999V2.7H16.1999V5.85ZM17.0999 2.7C17.0999 2.20294 16.697 1.8 16.1999 1.8H1.7999C1.30285 1.8 0.899902 2.20294 0.899902 2.7V16.2C0.899902 16.6971 1.30285 17.1 1.7999 17.1H16.1999C16.697 17.1 17.0999 16.6971 17.0999 16.2V2.7Z" fill="#3E3E3E"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.9499 4.5V0H5.8499V4.5H4.9499ZM12.1499 4.5V0H13.0499V4.5H12.1499Z" fill="#3E3E3E"/>
                                    </svg>
                                    <span style={{marginLeft:'0.8vw'}}>{moment(date).format('DD-MM-YYYY')}</span>
                                </Typography>
                                <Typography 
                                    style={{
                                        marginLeft:"auto",
                                        fontFamily:'Josefin Sans',
                                        fontWeight:600,
                                        fontSize:'18px',
                                        marginTop:'1vw',}}>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 17.1C13.4735 17.1 17.1 13.4735 17.1 9C17.1 4.52649 13.4735 0.9 9 0.9C4.52649 0.9 0.9 4.52649 0.9 9C0.9 13.4735 4.52649 17.1 9 17.1ZM9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#3E3E3E"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.1 4.05H9V8.3636L13.3682 12.7318L12.7318 13.3682L8.1 8.7364V4.05Z" fill="#3E3E3E"/>
                                    </svg>
                                    <span style={{marginLeft:'0.8vw'}}>At {state.time}</span>
                                </Typography>
                            </Box>
                            <Typography 
                                sx={{
                                    fontFamily:'Josefin Sans',
                                    fontSize:'14px',
                                    color:'#7E7E7E',
                                    marginTop:'0.6vw'}}>Change date & time</Typography>
                            <Divider style={{borderColor:"black", margin:'0.5vw 0'}}/>
                            <Box display="flex" flexDirection="row" >
                                <CardMedia
                                    component="img"
                                    style={{
                                        position:'absolute',
                                        height:'5vw',
                                        width:'5vw', 
                                        borderRadius: '50%',
                                        marginTop: '1vw',
                                        border: '4px solid #fff',
                                        filter: 'drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25))',
                                    }}
                                    image={doctor.photoURL}/>
                                <Box display="flex" flexDirection="column" style={{marginLeft: '8vw',marginTop:'0.5vw'}}>
                                    <Typography 
                                        style={{
                                            fontFamily:'Josefin Sans',
                                            fontWeight:600,
                                            fontSize:'18px',
                                            marginTop:'1vw'}}>{doctor.name}</Typography>
                                    <Typography 
                                        sx={{
                                            fontFamily:'Josefin Sans',
                                            fontSize:'14px',
                                            color:'#7E7E7E'}}>{doctor.education}</Typography>
                                    <Typography 
                                        sx={{
                                            fontFamily:'Josefin Sans',
                                            fontSize:'13px',
                                            color:'#7E7E7E'}}>{doctor.specialization}</Typography>
                                </Box>
                            </Box>
                        </ CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Box style={{marginLeft: '16vw'}}>
                        <Typography 
                            sx={{
                                fontFamily:'Lora',
                                fontSize:'28px',
                                color:'#3E3E3E',
                                fontWeight:600,}}>Patient Details</Typography>
                        <Typography 
                            sx={{
                                fontFamily:'Josefin Sans',
                                fontSize:'20px',
                                color:'#3E3E3E',
                                fontWeight:600,
                                marginTop:'0.8vw'}}>This in-clinic appointment is for:</Typography>
                        <Typography 
                            sx={{
                                border:'1px solid #DDDDDD',
                                padding: '8px 6vw 8px 18px',
                                fontFamily:'Josefin Sans',
                                fontWeight:400,
                                fontSize:'20px',
                                width:'68%'}}>{name}</Typography>
                        <Typography 
                            sx={{
                                fontFamily:'Josefin Sans',
                                fontSize:'20px',
                                color:'#3E3E3E',
                                fontWeight:600,
                                marginTop:'0.8vw'}}>Please provide following information about {name}</Typography>
                        <Typography 
                            sx={{
                                fontFamily:'Josefin Sans',
                                fontSize:'20px',
                                color:'#3E3E3E',
                                fontWeight:400,
                                marginTop:'0.8vw',
                            }}>
                            Full Name*
                        </Typography>
                        <InputBase
                             sx={{
                                border:'1px solid #DDDDDD',
                                padding: '8px 16vw 8px 18px'}}
                            id="name" 
                            value={name}
                            placeholder="Your Name"  />
                        <Typography 
                            sx={{
                                fontFamily:'Josefin Sans',
                                fontSize:'20px',
                                color:'#3E3E3E',
                                fontWeight:400,
                                marginTop:'0.8vw',}}>
                            Your Mobile Number*
                        </Typography>
                        <InputBase sx={{border:'1px solid #DDDDDD', padding: '8px 16vw 8px 18px'}}
                         id="mobile"
                            value={phone}
                         placeholder="Mobile Number"  />
                        <Typography
                            sx={{
                                fontFamily:'Josefin Sans',
                                fontSize:'24px',
                                fontWeight:500,
                                marginTop:'0.8vw'}}>
                            Bill Details
                        </Typography>
                        <Box display="flex" flexDirection="row">
                            <Typography sx={{fontFamily:'Josefin Sans',
                                         fontSize:'18px',
                                         fontWeight:400,
                                         marginTop:'0.8vw'}}>
                            Consultation fee
                            </Typography>
                            <Typography sx={{marginLeft: '17vw',
                                             fontFamily:'Josefin Sans',
                                             fontSize:'18px',
                                             fontWeight:400,
                                             marginTop:'0.8vw'}}>
                            {state.amount}
                            </Typography>
                        </Box>
                        <svg width="472" height="2" viewBox="0 0 472 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="1.0332" x2="472.001" y2="1.0332" stroke="#D9D9D9"/>
                        </svg>
                        <Box display="flex" flexDirection="row">
                            <Typography sx={{fontFamily:'Josefin Sans',
                                         fontSize:'24px',
                                         fontWeight:500,
                                         marginTop:'0.8vw'}}>
                            Amount to pay
                            </Typography>
                            <Typography sx={{marginLeft: '15.1vw',
                                            fontFamily:'Josefin Sans',
                                            fontSize:'18px',
                                            fontWeight:400,
                                            marginTop:'0.8vw'}}>
                            {totalAmount}
                            </Typography>
                        </Box>
                        <Button variant="contained" color="primary" className={classes.btn4} onClick={() => displayRazorpay()}>
                            Confirm & Pay
                        </Button>
                    
                    </Box>
                </Grid>
            </Grid>
            )}
            < Footer />
        </div>
    );
}

export default Pay;