import { Button, Card, CardContent, Grid, Typography, Box, TextField, InputAdornment, CardActions, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { getApproved } from "../../Hooks/useFetch";
import { makeStyles } from '@material-ui/core'
import Footer from "../../Components/Navbar/Footer";
import Mobile from "../../Components/mobile";

const useStyles = makeStyles({
    firstTypo: {
        position:'absolute',
        color: '#3E3E3E',
        fontFamily: 'Lora !important',
        fontWeight: '600 !important',
        fontStyle: 'normal !important',
        top:'14vw',
        left:'6vw',
    },

    secondFont: {
        position:'absolute',
        top:'24.7vw',
        color: '#3E3E3E',
        fontFamily: 'Josefin Sans !important',
        padding: '0 0 0 5vw',
        left:'1.2vw',
    },

    btn: {
        background: '#74613C',
        color: 'white !important',
        marginLeft: '5vw',
        marginTop: '3vw',
        padding: '1vw 2vw',
        borderRadius: '15px',
        fontFamily: 'Josefin Sans !important',
        fontWeight: '600 !important',
        fontSize: '24px !important',
        '&:hover': {
          color: 'white',
        },
    },

    head11: {
        fontFamily: 'Lora !important',
        fontWeight: '600 !important',
        fontSize: '40px !important',
    },
})

function Doctors(){
    const classes = useStyles();
    const [user, loading, error] = useAuthState(auth);
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();
    const fetchDoctors = async () => {
        try {
            const docs = await getApproved("doctors");
            setDoctors(docs);
        } catch (err) {
            console.error(err);
            alert("An error occurred while fetching user data");
        }
    }

    useEffect(() => {
        if (doctors.length === 0) {
            fetchDoctors();
        }
    }, [doctors]);

    const handleBooking = (id) => {
        if(user) navigate(`/booking/` , { state: { id , type: 'doctors', amount: 3000} });
        else navigate("/login");
    }

    const handleView = (id) => {
        if(user) navigate(`/doctorDetails/` , { state: { id } });
        else navigate("/login");
    }
    return (
        <div style={{ position: 'absolute',
            top: 0,
            width: '-webkit-fill-available',
            zIndex: -1}}>
            <Grid style={{display:'flex', flexDirection:'row', background:'#FFFBF3', paddingTop:'5vw'}}>
                <Grid item xs={12} >
                    <Box className={classes.boxType}>
                        <Typography className={classes.firstTypo} variant="h3">
                            Your health comes first<br></br>
                            and for us, you.
                        </Typography>
                        <Typography className={classes.secondFont} variant="h6">
                            Find and book
                        </Typography>
                        <TextField
                            id="outlined-start-adornment"
                            placeholder="Search doctors, services, specialisation"
                            sx={{
                                position:'absolute', 
                                m: 1,
                                width: '40ch',
                                background: '#FFFFFF',
                                borderRadius: '15px',
                                border: '1px solid #E0E0E0',
                                fontFamily: 'Josefin Sans !important',
                                fontWeight: '600 !important',
                                fontSize: '24px !important',
                                top:'28.5vw',
                                left:'5.3vw',
                                '&:hover': {
                                    border: '1px solid #E0E0E0',
                                },
                            }}
                            InputProps={{
                                startAdornment: 
                                    <InputAdornment position="start">
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8.80547" cy="8.80541" r="7.49047" stroke="#8B8B8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M14.0153 14.4043L16.9519 17.3334" stroke="#8B8B8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </InputAdornment>,
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} style={{zIndex:'1'}}>
                    <Box>
                        <img src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fdoctors.png?alt=media&token=b51840e5-82b8-422e-9141-4aca3aa6b6e9" style={{width: '80%',marginLeft: '20%'}}/>
                    </Box>
                </Grid>
            </Grid>
            <div style={{zIndex:'-1', marginTop:'-10vw'}}>
                <svg width="1440" height="432" viewBox="0 0 1440 432" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 432L60 382C120 331 240 230 360 194C480 158 600 187 720 202C840 216 960 216 1080 187C1200 158 1320 101 1380 72L1440 43V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V432Z" fill="#FFFBF3"/>
                </svg>
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2FleftTree.png?alt=media&token=35388919-8f64-4977-9f5f-a520c227e5ac" style={{position:'absolute', top:"70vh"}}/>
            <Box sx={{marginBottom:'5vw', marginTop:'-10vw'}}>
                <Typography 
                    className={classes.head11}
                    style={{
                        textAlign:'center',
                        marginBottom: '8vw',
                        marginTop: '2vw',
                    }}>Our Qualified Doctors
                </Typography>
                <Grid container spacing={3} style={{justifyContent:'center', marginTop:'5vw'}}>
                    {doctors.map(doctor => (
                        <Grid item xs={12} sm={6} md={3} lg={3} key={doctor.id}>
                            <Card>
                                <div style={{alignItems:'right', position:'absolute'}}>
                                    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.747 11.1611L22.764 9.11147C22.6137 8.95603 22.5434 8.73989 22.5737 8.52573L22.9725 5.70229C23.0635 5.05829 22.6272 4.45863 21.9867 4.34546L19.1779 3.85285C18.9648 3.81548 18.7809 3.68188 18.6795 3.4908L17.3434 0.972627C17.04 0.399794 16.3342 0.169961 15.7509 0.455794L13.1888 1.70769C12.9945 1.80262 12.7673 1.80262 12.573 1.70769L10.0109 0.455794C9.42754 0.169961 8.72171 0.399794 8.41721 0.973794L7.08104 3.49304C6.97966 3.68417 6.79574 3.81782 6.58264 3.85519L3.77387 4.34779C3.13337 4.45979 2.69704 5.05946 2.78804 5.70346L3.18693 8.5269C3.21718 8.74106 3.14693 8.95719 2.99654 9.11263L1.01354 11.1623C0.560875 11.6301 0.560875 12.371 1.01354 12.8388L2.99654 14.8885C3.14693 15.0439 3.21718 15.26 3.18693 15.4742L2.78804 18.2976C2.69704 18.9416 3.13337 19.5413 3.77387 19.6545L6.58271 20.1471C6.79577 20.1844 6.97967 20.318 7.08106 20.5091L8.41721 23.0273C8.72171 23.6013 9.42754 23.8311 10.012 23.5453L12.5729 22.2925C12.7672 22.1974 12.9946 22.1973 13.1889 22.2923L15.7509 23.5441C16.3354 23.83 17.04 23.6001 17.3457 23.0261L18.6819 20.508C18.7832 20.3169 18.9671 20.1833 19.1802 20.1459L21.989 19.6533C22.6295 19.5413 23.0659 18.9405 22.9749 18.2965L22.576 15.473C22.5457 15.2589 22.616 15.0427 22.7664 14.8873L24.7494 12.8376C25.1985 12.371 25.1985 11.629 24.747 11.1611ZM12.2101 16.6537C11.9362 16.9276 11.4922 16.9276 11.2183 16.6537L7.88527 13.3207C7.61139 13.0468 7.61139 12.6028 7.88527 12.3289L8.54315 11.671C8.81702 11.3971 9.26106 11.3971 9.53493 11.671L11.2183 13.3544C11.4922 13.6283 11.9362 13.6283 12.2101 13.3544L17.3935 8.17102C17.6674 7.89715 18.1114 7.89715 18.3853 8.17102L19.0431 8.8289C19.317 9.10277 19.317 9.54681 19.0431 9.82069L12.2101 16.6537Z" fill="#74613C"/>
                                    </svg>
                                </div>
                                <CardMedia
                                    component="img"
                                    style={{
                                        height:'15vw',
                                        width:'15vw', 
                                        marginLeft:'auto',
                                        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2FDocbg.png?alt=media&token=90baa393-e0f7-4358-9277-7ea51928ef5f)`,
                                        marginRight:'auto'}}
                                    image={doctor.photoURL}
                                />
                                <CardContent>
                                    
                                    <Typography variant="h5" component="h2">
                                        {doctor.name}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        {doctor.email}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        {doctor.phone}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        {doctor.address}
                                    </Typography>
                                    
                                </CardContent>
                                <CardActions style={{justifyContent:'center'}}>
                                    <Button variant="outlined" color="primary" onClick={() => handleView(doctor.uid)}>
                                        View Profile
                                    </Button>
                                    <Button variant="contained" color="primary" onClick={() => handleBooking(doctor.uid)}>
                                        Book Now
                                    </Button>
                                </CardActions>
                            </Card> 
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Mobile />
            <Footer />
        </div>
    )
}

export default Doctors;