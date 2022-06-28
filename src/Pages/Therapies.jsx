import { 
    Button, 
    Card, 
    CardActionArea, 
    CardContent, 
    CardMedia,
    Grid, 
    Typography,
    TextField,
    InputAdornment,
} from "@mui/material";
import { Box } from "@mui/system";
import React, {useEffect, useState} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Components/Navbar/Footer";
import { auth } from '../firebase';
import { getTherapies, getTherapyType } from '../Hooks/useFetch';
import { makeStyles } from '@material-ui/core'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
        fontFamily: 'Josefin Sans !important',
        fontWeight: '600 !important',
        fontSize: '24px !important',
        paddingLeft: '0.5vw',
    },

    bookBtn: {
        color: '#74613C',
        fontFamily: 'Josefin Sans !important',
        fontWeight: '600 !important',
        fontSize: '24px !important',
        '&:hover': {
            color: '#74613C',
        },
    },
})

function Therapies(){
    const classes = useStyles();
    const { state } = useLocation();
    const [user, loading, error] = useAuthState(auth);
    const [Therapy, setTherapy] = useState([]);
    const [therapyType, setTherapyType] = useState([]);
    const [value, setValue] = useState('one');
    const navigate = useNavigate();
    
    const fetchTherapies = async () => {
        setTherapy([])
        if(state?.therapyType){
            setValue(state.therapyType);
            fetchAyurveda(state.therapyType);
            const data2 = await getTherapyType();
            setTherapyType(data2);
            state.therapyType = '';
        } else {
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
    }

    useEffect(() => {
        fetchTherapies();
    }, [loading]);

    const searchResults = async (e) => {
        e.preventDefault();
        setTherapy([])
        const search = e.target.value;
        const data = await getTherapies();
        const filtered = data.filter(item => {
            return item.name.toLowerCase().includes(search.toLowerCase());
        });
        setTherapy(filtered);
    }

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

    const handleBooking = (id) => {
        if(user) navigate(`/bookingTherapy/` , { state: { id , type: 'Therapies'} });
        else navigate("/login");
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if(newValue === 'one'){
            fetchTherapies();
        } else {
            fetchAyurveda(newValue);
        }
    };

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
                        Find and book your next rejuvenating therapy.
                    </Typography>
                    <TextField
                        id="outlined-start-adornment"
                        placeholder="Search Therapies"
                        onChange={
                            (e) => {
                                if(e.target.value === '') fetchTherapies();
                                else searchResults(e);
                            }
                        }

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
                        }}/>
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
            <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', marginTop: '-5vw' }}>    
                <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}  
                    textColor="primary"
                    indicatorColor="primary"
                    sx={{ 
                        borderColor: 'divider'
                    }}>
                        <Tab label="All Categories" value="one" />
                        {therapyType.map((item, index) => (
                            <Tab key={index} label={item} value={item} />
                        ))}
                </Tabs>
                <Grid justifyContent="center" marginLeft="0.25vw" container spacing={3}>
                    <Typography style={{
                        fontFamily: 'Josefin Sans !important', 
                        fontWeight: '600 !important', 
                        fontSize: '24px !important', 
                        paddingLeft: '5vw',
                        paddingRight: '30vw'}}>
                        <h2
                            style={{
                                marginBottom: '0.5vw !important',
                            }}
                        >Nourishing Therapies</h2> <br/>
                        Click on the therapy name card  to book and know more about them.
                    </Typography>
                    {Therapy.map((therapy) => (
                        <Grid item xs={12} sm={6} md={3} lg={4}  key={therapy.id}
                        style={{ maxWidth: '25.333333%'}}>
                            <Card sx={{
                                marginLeft: 'auto',
                                marginRight: 'auto',}} >
                                <CardMedia
                                    component="img"
                                    style={{
                                        height:'15vw',
                                        marginLeft:'auto',
                                        marginRight:'auto'}}
                                    image={therapy.image}
                                />
                                <CardContent>
                                    <Typography className={classes.head11}>
                                        {therapy.name}
                                    </Typography>
                                    <CardActionArea>
                                        <Button 
                                        variant="outlined"
                                        className={classes.bookBtn}
                                        onClick={() => {
                                            handleBooking(therapy.id)
                                        }}>
                                            Book Now 
                                        </Button>
                                    </CardActionArea>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid> 
            </Box>
        <Footer />
    </div>
    )
}

export default Therapies;