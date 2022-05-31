import { 
    Button, 
    Card, 
    CardActionArea, 
    CardContent, 
    Grid, 
    Typography,
    TextField,
    InputAdornment,
} from "@mui/material";
import { Box } from "@mui/system";
import React, {useEffect, useState} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Navbar/Footer";
import { auth } from '../firebase';
import { getTherapies, getTherapyType } from '../Hooks/useFetch';
import { makeStyles } from '@material-ui/core'

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
        top:'28vw',
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

function Therapies(){
    const classes = useStyles();
    const [user, loading, error] = useAuthState(auth);
    const [Therapy, setTherapy] = useState([]);
    const [therapyType, setTherapyType] = useState([]);
    const navigate = useNavigate();
    
    const fetchTherapies = async () => {
        try {
            const data = await getTherapies();
            setTherapy(data);
            const data2 = await getTherapyType();
            setTherapyType(data2);
        } catch (err) {
            console.error(err);
            alert("An error occurred while fetching Therapy data");
        }
    }

    useEffect(() => {
        fetchTherapies();
    }, [loading]);

    const fetchAyurveda = async (ayurveda) => {
        try {
            setTherapy([])
            const data = await getTherapies();
            for (let i = 0; i < data.length; i++) {
                if (data[i].type === ayurveda) {
                    setTherapy(prev => [...prev, data[i]]);
                }
            }
            setTherapy(items => items.filter(item => item.type === ayurveda));
        } catch (err) {
            console.error(err);
            alert("An error occurred while fetching Therapy data");
        }
    }

    const handleBooking = (id, amount) => {
        console.log(id, amount);
        if(user) navigate(`/booking/` , { state: { id , type: 'Therapies', amount} });
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
                            Our rejuvenating therapies will<br></br>
                            replenish, nurture and balance<br></br>
                            the body and soul of yours.
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
                                top:'30vw',
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
                        <img src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Ftherapists.png?alt=media&token=6f6c9583-ba05-45b7-a7e5-a100acdabc6f" style={{width: '80%',marginLeft: '20%'}}/>
                    </Box>
                </Grid>
            </Grid>
            <div style={{zIndex:'-1', marginTop:'-10vw'}}>
                <svg width="1440" height="432" viewBox="0 0 1440 432" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 432L60 382C120 331 240 230 360 194C480 158 600 187 720 202C840 216 960 216 1080 187C1200 158 1320 101 1380 72L1440 43V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V432Z" fill="#FFFBF3"/>
                </svg>
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2FleftTree.png?alt=media&token=35388919-8f64-4977-9f5f-a520c227e5ac" style={{position:'absolute', top:"70vh"}}/>
            
        {therapyType.map(item => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Button onClick={() => fetchAyurveda(item)}>{item}</Button>
            </Grid>
        ))}
        <Grid sx={{ flexGrow: 1 }} justifyContent="center" marginTop="2vw" marginLeft="0.25vw" container spacing={2}>
            {Therapy.map((therapy) => (
                <Grid item xs={10} sm={10} md={2}  key={therapy.id}>
                    <Card sx={{maxHeight: 200, maxWidth:200}} >
                        <CardContent>
                            <Typography>
                                {therapy.name}
                            </Typography>
                            <Typography>
                                {therapy.type}
                            </Typography>

                            <CardActionArea>
                                <Button onClick={() => {
                                    console.log(therapy.id, therapy.amount);
                                    handleBooking(therapy.id, therapy.amount)
                                }}>
                                    Book Now 
                                </Button>
                            </CardActionArea>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
        <Footer />
    </div>
    )
}

export default Therapies;