import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, InputBase, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { getSingleApproved } from "../../Hooks/useFetch";
import Footer from "../../Components/Navbar/Footer";

function Pay(){
    const {state} = useLocation();
    const [user, loading, error] = useAuthState(auth);
    const [doctor, setDoctor] = useState(null);

    const navigate = useNavigate();
    const fetchDoctor = async () => {
        try {
            console.log(state.id, state.type);
            const data = await getSingleApproved(state.id, state.type);
            console.log(data);
            setDoctor(data);
        } catch (err) {
            console.error(err);
            alert("An error occurred while fetching user data");
        }
    };

    useEffect(() => {
        if(!user) return navigate("/");
        if(loading) return;
        fetchDoctor();
    }, [user, loading]);
    return (
        <div>
        <div style={{zIndex:-1,position:'absolute',top:0}}>
            <svg width="530" height="676" viewBox="0 0 530 676" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M201.233 661.903C91.3224 681.028 -31.9961 688.711 -117.595 617.214C-205.677 543.643 -234.938 418.992 -226.576 304.572C-219.014 201.086 -155.635 112.168 -75.8345 45.7823C-6.293 -12.0693 84.5632 -17.706 174.342 -28.9526C277.828 -41.9163 397.071 -92.2216 475.265 -23.254C553.787 46.0031 526.758 171.111 519.556 275.529C513.397 364.832 494.692 451.474 437.757 520.581C377.059 594.254 295.309 645.534 201.233 661.903Z" fill="#FFF6E4"/>
            </svg>
        </div>
            {doctor && (
            <Grid display="flex" justifyContent="center" alignItems="center" sx={{marginTop:10}}>
                <Grid item sx={3} md={{marginLeft:40}}>
                    <Card>
                        <CardContent>
                            <Typography>{state.place}</Typography>
                            <Typography>Includes Prescription</Typography>
                            <Divider />
                            <Box display="flex" >
                                <Typography>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1999 6.75H1.7999V16.2H16.1999V6.75ZM16.1999 5.85H1.7999V2.7H16.1999V5.85ZM17.0999 2.7C17.0999 2.20294 16.697 1.8 16.1999 1.8H1.7999C1.30285 1.8 0.899902 2.20294 0.899902 2.7V16.2C0.899902 16.6971 1.30285 17.1 1.7999 17.1H16.1999C16.697 17.1 17.0999 16.6971 17.0999 16.2V2.7Z" fill="#3E3E3E"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.9499 4.5V0H5.8499V4.5H4.9499ZM12.1499 4.5V0H13.0499V4.5H12.1499Z" fill="#3E3E3E"/>
                                    </svg>
                                    On May 22, 2022
                                </Typography>
                                <Typography style={{marginLeft:"auto"}}>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 17.1C13.4735 17.1 17.1 13.4735 17.1 9C17.1 4.52649 13.4735 0.9 9 0.9C4.52649 0.9 0.9 4.52649 0.9 9C0.9 13.4735 4.52649 17.1 9 17.1ZM9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#3E3E3E"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.1 4.05H9V8.3636L13.3682 12.7318L12.7318 13.3682L8.1 8.7364V4.05Z" fill="#3E3E3E"/>
                                    </svg>
                                    At 10:00 AM
                                </Typography>
                            </Box>
                            <Typography>Change date & time</Typography>
                            <Divider />
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <CardMedia
                                    component="img"
                                    style={{
                                        height:'5vw',
                                        width:'5vw', 
                                        borderRadius: '50%',
                                        marginRight: '1vw',
                                        marginLeft: '-1vw',
                                        marginTop: '1vw',
                                    }}
                                    image={doctor.photoURL}/>
                                <Box display="flex" flexDirection="column">
                                    <Typography>{doctor.name}</Typography>
                                    <Typography>{doctor.education}</Typography>
                                    <Typography>{doctor.specialization}</Typography>
                                </Box>
                            </Box>
                        </ CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Box style={{marginLeft: '10vw'}}>
                        <Typography>Patient Details</Typography>
                        <Typography>This in-clinic appointment is for:</Typography>
                        <Typography>{user.name}</Typography>
                        <Typography>Please provide following information about {user.name}</Typography>
                        <Typography>
                            Full Name*
                        </Typography>
                        <InputBase id="name" placeholder="Your Name"  />
                        <Typography>
                            Your Mobile Number*
                        </Typography>
                        <InputBase id="mobile" placeholder="Mobile Number"  />
                        <Typography>
                            Bill Details
                        </Typography>
                        <Box display="flex" flexDirection="row">
                            <Typography>
                            Consultation fee
                            </Typography>
                            <Typography sx={{marginLeft: '10vw'}}>
                            {state.amount}
                            </Typography>
                        </Box>
                        <Box display="flex" flexDirection="row">
                            <Typography>
                            Tax
                            </Typography>
                            <Typography sx={{marginLeft: '10vw'}}>
                            {state.amount}
                            </Typography>
                        </Box>
                        <Button variant="contained" color="primary" style={{marginTop: '1vw'}}>
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