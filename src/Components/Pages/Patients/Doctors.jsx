import { Button, Card, CardContent, Grid, Typography, Box, TextField, InputAdornment, CardActions } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import { getApproved } from "../../../Hooks/useFetch";
import { makeStyles } from '@material-ui/core'
import Footer from "../../Navbar/Footer";

const useStyles = makeStyles({
    firstTypo: {
        color: '#3E3E3E',
        fontFamily: 'Lora !important',
        fontWeight: '600 !important',
        fontStyle: 'normal !important',
        lineHeight: '1.5em',
        padding: '0 0 0 5vw',
      },
      secondFont: {
        color: '#3E3E3E',
        fontFamily: 'Josefin Sans !important',
        padding: '0 0 0 5vw',
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
                            sx={{ 
                                m: 1,
                                width: '50ch',
                                background: '#FFFFFF',
                                borderRadius: '15px',
                                border: '1px solid #E0E0E0',
                                fontFamily: 'Josefin Sans !important',
                                fontWeight: '600 !important',
                                fontSize: '24px !important',
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
                    <Box style={{width:'fit-content', marginLeft:'auto'}}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fdoctors.png?alt=media&token=b51840e5-82b8-422e-9141-4aca3aa6b6e9"/>
                    </Box>
                </Grid>
            </Grid>
            <div style={{zIndex:'-1', marginTop:'-10vw'}}>
                <svg width="1440" height="432" viewBox="0 0 1440 432" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 432L60 382C120 331 240 230 360 194C480 158 600 187 720 202C840 216 960 216 1080 187C1200 158 1320 101 1380 72L1440 43V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V432Z" fill="#FFFBF3"/>
                </svg>
            </div>
            <Box sx={{marginBottom:'5vw'}}>
                <Typography variant="h4" style={{textAlign:'center'}}>
                    Our Qualified Doctors
                </Typography>
                <Grid container spacing={3}>
                    {doctors.map(doctor => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={doctor.id}>
                            <Card>
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
            <Box style={{display:'flex'}}>
                <Box style={{marginLeft:'5vw'}}>
                    <img style={{
                            marginTop: '13vw',
                            marginLeft: '5vw',
                        }}
                        src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fbgdoc.png?alt=media&token=d892d555-b44c-4ab0-9871-90eec511a5ae"/>
                    <img style={{
                            position: 'absolute',
                            marginLeft: '-5vw',
                        }}
                        src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Frating.png?alt=media&token=87926b2f-fce9-4613-8a9c-6ecabb3c236f"/>
                    <img 
                        style={{
                            position: 'absolute',
                            marginTop: 0,
                            left: '10vw',
                        }}
                        src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fmobile.png?alt=media&token=ce93bf58-f45b-4456-8092-faedd9c0ef53"/>
                    <img style={{
                        position: 'absolute',
                        left: '9vw',
                        marginTop: '35vw',
                        }}
                        src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2FdocCard.png?alt=media&token=ab0cad4b-b9ff-46eb-9c6b-bb6a7a223cec"/>
                </Box>
                <Box>
                    <Typography className={classes.head8} variant="h6">
                    NOW IN YOUR POCKETS 
                    </Typography>
                    <Typography className={classes.head9} variant="h3">
                    Your personal therapist <br></br>
                    is here..
                    </Typography>
                    <Typography className={classes.head10} variant="h5">
                    Let your skin heal and glow from within,<br></br>
                    with our intensive Ayurveda Therapies.
                    </Typography>
                    <Button className={classes.btn2} variant="contained" color="primary">
                    Download Now
                    </Button>
                </Box>
            </Box>
            <Footer />
        </div>
    )
}

export default Doctors;