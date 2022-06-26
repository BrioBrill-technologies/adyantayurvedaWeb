import { Box, Button, Grid } from "@material-ui/core";
import { InputBase, TextareaAutosize, Typography,
  Card, 
  CardActionArea, 
  CardContent, 
  CardMedia,
  Stack
   } from "@mui/material";
import React, {  } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core'
import Footer from "../Components/Navbar/Footer";
import Mobile from "../Components/mobile";


const useStyles = makeStyles((theme) => ({
  typo: {
    color: '#74613C',
    fontFamily: 'Josefin Sans !important',
    padding: '7vw 0 0 5vw',
    [theme.breakpoints.down("md")]: {
      paddingLeft:'2vw',
      paddingTop:'20vw',
      fontSize:'h1 !important'
    },
  },
  firstTypo: {
    color: '#3E3E3E',
    fontFamily: 'Lora !important',
    fontWeight: '600 !important',
    fontStyle: 'normal !important',
    lineHeight: '1.5em',
    padding: '0 0 0 5vw',
    [theme.breakpoints.down("md")]: {
      paddingLeft:'1vw',
    },
  },
  secondFont: {
    color: '#3E3E3E',
    fontFamily: 'Josefin Sans !important',
    padding: '0 0 0 5vw',
    [theme.breakpoints.down("md")]: {
      paddingLeft:'1vw',
    },
  },

  button: {
    [theme.breakpoints.down("md")]: {
      paddingLeft:'1vw',
    },
  },

  img: {
    [theme.breakpoints.down("md")]: {
      marginTop:'1.8rem',
      marginLeft:'2.5rem',
      width:'20rem',
      
    },
  },

  grid:{
    [theme.breakpoints.up("md")]: {
      display:'flex'  
    },
    
  },

  btn1: {
    background: '#74613C',
    color: 'white !important',
    marginTop: '2vw',
    marginLeft:'0',
    marginBottom: '4vw',
    left: '50%',
    padding: '1vw 2vw',
    borderRadius: '15px',
    fontFamily: 'Josefin Sans !important',
    fontWeight: '600 !important',
    transform: 'translateX(-50%)',
    textTransform: 'none',
    '&:hover': {
      color: 'white',
    },
  },
  openHours: {
    width: 'fit-content',
    marginLeft: '5vw !important',
    marginRight: '2vw !important',
    zIndex: '1',
    fontFamily: 'Josefin Sans !important',
  },
  contactUs: {
    width: 'fit-content',
    marginRight:'2vw !important',
    fontFamily: 'Josefin Sans !important',
    zIndex:'1'
  },

  callUs: {
    width: 'fit-content',
    fontFamily: 'Josefin Sans !important',
    zIndex:'1'
  },

  head1: {
    fontFamily: 'Lora !important',
    color: '#74613C',
    fontWeight: '600 !important',
    fontStyle: 'normal !important',
    lineHeight: '1.5em',
    padding: '0 0 0 5vw',
    textAlign: 'center',
    marginTop: '-15vw !important',
  },

  head2: {
    fontFamily: 'Josefin Sans !important',
    color: '#3E3E3E',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
    padding: '0 0 0 5vw',
    textAlign: 'center',
    marginTop: '2vw !important',
    marginBottom: '4vw !important',
  },

  maskPik: {
    width: 'fit-content',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },

  head3: {
    fontFamily: 'Josefin Sans !important',
    color: '#3E3E3E',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
    marginTop: '-3vw !important',
    padding: '0 0 0 3vw',
  },

  box1: {
    marginTop: '30vw !important',
  },

  box2: {
    width: 'fit-content',
    marginLeft: 'auto !important',
    marginTop: '-35vw !important',
  },

  box3: {
    width: 'fit-content',
    marginLeft: 'auto !important',
    marginTop: '15vw !important',
  },

  rightTree: {
    position: 'absolute',
    right: '0',
    marginTop: '10vw !important',
  },

  head4: {
    fontFamily: 'Josefin Sans !important',
    color: '#74613C',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
    textAlign: 'center',
  },

  head5: {
    fontFamily: 'Lora !important',
    color: '#3E3E3E',
    fontWeight: '600 !important',
    fontStyle: 'normal !important',
    lineHeight: '1.5em',
    textAlign: 'center',
    marginBottom: '5vw !important',
  },

  bodyImage: {
    width: 'fit-content',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    [theme.breakpoints.down("md")]: {
      width:'50%',
      position: 'relative',
    },
  },

  head6: {
    fontFamily: 'Lora !important',
    color: '#74613C',
    fontWeight: '600 !important',
    fontStyle: 'normal !important',
    lineHeight: '1.5em',
    textAlign: 'center',
    [theme.breakpoints.down("md")]: {
      marginLeft:'5vw'
    },
  },

  head7: {
    fontFamily: 'Josefin Sans !important',
    color: '#3E3E3E',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
    textAlign: 'center',
  },

  head11: {
    fontFamily: 'Josefin Sans !important',
    color: '#74613C',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
    textAlign: 'center',
    marginBottom: '1vw !important',
  },

  head12: {
    fontFamily: 'Lora !important',
    color: '#0C0C0C',
    fontWeight: '700 !important',
    fontStyle: 'normal !important',
    lineHeight: '1.5em',
    textAlign: 'center',
  },

  head13: {
    fontFamily: 'Josefin Sans !important',
    color: '#303030',
    fontWeight: '700 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
    textAlign: 'center',
    marginTop: '-1vw !important',
    paddingTop: '2vw !important',
    marginBottom: '1vw !important',
    marginLeft: '1vw !important',
    [theme.breakpoints.down("md")]: {
      marginTop: '3vw !important',
      marginLeft: '3vw !important',
    },
  },

  head14: {
    fontFamily: 'Josefin Sans !important',
    color: '#303030',
    fontWeight: '700 !important',
    [theme.breakpoints.down("md")]: {
      marginTop: '3vw !important',
      marginLeft: '3vw !important',
    },
  },

  head15: {
    fontFamily: 'Josefin Sans !important',
    color: '#303030',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
    [theme.breakpoints.down("md")]: {
      marginTop: '1vw !important',
      marginLeft: '4vw !important',
    },
  },

  head16: {
    fontFamily: 'Josefin Sans !important',
    color: '#0C0C0C',
    fontWeight: '500 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
    textAlign: 'center',
    marginTop: '2vw !important',
    paddingTop: '2vw !important',
    marginBottom: '1vw !important',
  }, 

  head17: {
    fontFamily: 'Lora !important',
    color: '#0C0C0C',
    fontWeight: '600 !important',
    fontStyle: 'normal !important',
    lineHeight: '1.5em',
    textAlign: 'center',
  },

  head18: {
    fontFamily: 'Josefin Sans !important',
    color: '#0C0C0C',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
    textAlign: 'center',
    marginBottom: '1vw !important',
  },

  input: {
    width: '436.01px !important',
    border: 'none !important',
    borderRadius: '15px',
    fontFamily: 'Josefin Sans !important',
    background: '#FAFAFA',
    color: '#74613C',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
    padding: '1vw 0',
    textAlign: 'center',
    marginTop: '2vw !important',
    marginBottom: '1vw !important',
  },

  btn4: {
    background: '#74613C',
    color: 'white !important',
    marginTop: '4vw',
    padding: '1vw',
    borderRadius: '15px',
    fontFamily: 'Josefin Sans !important',
    fontWeight: '600 !important',
    textTransform: 'none !important',
    '&:hover': {
      color: 'white',
    },
  },

  textarea: {
    border: 'none !important',
    borderRadius: '15px',
    fontFamily: 'Josefin Sans !important',
    background: '#FAFAFA',
    color: '#74613C',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
  },

  gridcard: {
    [theme.breakpoints.up("md")]: {
      maxWidth:'21%'
      
    },
    [theme.breakpoints.down("md")]: {
      maxWidth:'17%',
      justifyContent:'center',
    },
  },

  g:{
    [theme.breakpoints.up("md")]: {
      maxWidth:'21%' 
    },
  },

  doc:{
    [theme.breakpoints.up("md")]: {
      maxWidth:'20%' 
    },
  },

  testbox1: {
    [theme.breakpoints.up("md")]: {
      marginTop:'50vw'
    },
    [theme.breakpoints.down("md")]: {
      marginTop:'10vw'
    },
  },

  testbox2: {
    [theme.breakpoints.up("md")]: {
      display:'flex',
      marginLeft: '5vw',
    },
    [theme.breakpoints.down("md")]: {
      width:'50vw'
    },
  },

  testbox3: {
    [theme.breakpoints.up("md")]: {
      padding: '2vw 2vw 0 4vw',
      height: '300px',
      width: '500px',
    },
    [theme.breakpoints.down("md")]: {
      width:'300px',
      height: '220px',
      padding: '2vw 2vw 0 4vw',
    },
  },

  testimg1: {
    [theme.breakpoints.down("md")]: {
      width:'20rem',
      justifyContent:'center',
    },
  },

  testimg2: {
    [theme.breakpoints.down("md")]: {
      width:'20rem',
      
    },
  },

  map: {
    [theme.breakpoints.up("md")]: {
      width:"600px",
      height:"600px",
      marginLeft: '10vw',
    },
    [theme.breakpoints.down("md")]: {
      width:"300px",
      height:"300px",
      justifyContent:'center',
      marginLeft: '8vw',
    },
  },

  mapbox1: {
    [theme.breakpoints.up("md")]: {
      display:'flex'
    },
  },

  mapbox2: {
    [theme.breakpoints.up("md")]: {
      width:'fit-content',
      marginLeft:'5vw', 
    },
    [theme.breakpoints.down("md")]: {
      width:'70%',
      justifyContent:'center',
      marginLeft:'12vw', 
      marginTop:'10vw', 
    },
  },

  head20: {
    fontFamily: 'Josefin Sans !important',
    color: '#3E3E3E',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
  },
}));

function Land() {
  const classes = useStyles();
  let navigate = useNavigate();
  return (
    <div style={{ 
      position: 'absolute',
      top: 0,
      width: '-webkit-fill-available',
      zIndex: -1}}>
      <Grid className={classes.grid} style={{ flexDirection:'row', background:'#FFFBF3', paddingTop:'5vw'}}>
        <Grid item xs={14} >
          <Box style={{ paddingLeft: '24px'}}>
            <Typography className={classes.typo} variant="h6" fontSize={{lg: 30,xs: 12}}>
              AYURVEDIC CARE
            </Typography>
            <Typography className={classes.firstTypo} variant="h2" fontSize={{lg: 60,xs: 30}}>
              ADYANT AYURVEDA
              HOME SERVICE
            </Typography>
            <Typography className={classes.secondFont} variant="h6" fontSize={{lg: 20,xs: 15}}>
              Ayurveda Health Solution for Your<br></br>
              Health Needs at Your Doorstep.
            </Typography>
            {/* <Box style={{display:'flex', flexDirection:'row'}}> */}
              <Stack spacing={2} direction='row'>
              <Button variant="contained" color="primary" className={classes.button} style={{
                  background: '#74613C',
                 color: 'white !important',
                 marginLeft: '5vw',
                 marginTop: '3vw',
                 padding: '1vw 2vw',
                 borderRadius: '10px',
                 fontFamily: 'Josefin Sans !important',
                 fontWeight: '600 !important',
                 fontSize: '24px !important',
                 '&:hover': {
                   color: 'white',
                 },
                } 
              } onClick={() => navigate('/doctors')}>
                Consult Now
              </Button>
              <Button variant="contained" color="primary" style={{
                  background: '#74613C',
                 color: 'white !important',
                 marginLeft: '5vw',
                 marginTop: '3vw',
                 padding: '1vw 2vw',
                 borderRadius: '10px',
                 fontFamily: 'Josefin Sans !important',
                 fontWeight: '600 !important',
                 fontSize: '24px !important',
                 '&:hover': {
                   color: 'white',
                 },}
              }  onClick={() => navigate('/therapies')}>
                Book Therapy
              </Button>
              </Stack>
            {/* </Box> */}
          </Box>
        </Grid>
        <Grid item  style={{zIndex:'1'}}>
          <Box style={{width:'fit-content'}}>
            <img className={classes.img} src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2FPlaceImage.png?alt=media&token=6c137edf-1cd5-4ea4-8666-dbaa62cd39af"/>
          </Box>
        </Grid>
      </Grid>
      <div style={{zIndex:'-1', marginTop:'-10vw', marginBottom:'-10vw'}}>
        <svg width="1440" height="432" viewBox="0 0 1440 432" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 432L60 382C120 331 240 230 360 194C480 158 600 187 720 202C840 216 960 216 1080 187C1200 158 1320 101 1380 72L1440 43V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V432Z" fill="#FFFBF3"/>
        </svg>
      </div>

      <Mobile />

      <Grid xs={12} style={{marginTop:'5vw'}}>
        <Typography className={classes.head6} variant="h2" fontSize={{lg: 60,xs: 30}}>
          Our Ayurvedic Services
        </Typography>
        <Typography className={classes.head7} variant="h6" fontSize={{lg: 40,xs: 15}}>
          Personalized Offline Therapies with verified therapists in all Specialities
        </Typography>
      </Grid>
      <Grid container spacing={3} style={{justifyContent:'center', marginTop:'1vw', textAlign:'center'}}>
        <Grid className={classes.g} item xs={12} sm={6} md={3} lg={3}>
          
          <Card sx={{
            width: 'fit-content',
            marginLeft: 'auto',
            marginRight: 'auto',}} >
            <CardMedia
                component="img"
                style={{
                    height:'10vw',
                    marginLeft:'auto',
                    marginRight:'auto'}}
                image="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fspec1.png?alt=media&token=9904f2ad-fd51-4cad-a1f6-3de6a67a862e"
            />
            <CardContent>
                <Typography className={classes.head11} fontSize={{lg: 16,xs: 12}}>
                Rejuvenative Treatments
                </Typography>
                <CardActionArea>
                    <Button 
                    variant="outlined" 
                    onClick={() => {
                        navigate('therapyType', { state: { therapyType: 'Rejuvenative Treatments' } })
                    }} >
                        Book Now 
                    </Button>
                </CardActionArea>
            </CardContent>
          </Card>
        </Grid>
        <Grid className={classes.g} item xs={12} sm={6} md={3} lg={3} >
          <Card sx={{
            width: 'fit-content',
            padding: '0 0.5rem',
            marginLeft: 'auto',
            marginRight: 'auto',}} >
            <CardMedia
                component="img"
                style={{
                    height:'10vw',
                    marginLeft:'auto',
                    marginRight:'auto'}}
                image="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fspec2.png?alt=media&token=f8803d36-3006-4179-b4ed-ecffcc56bdeb"
            />
            <CardContent>
                <Typography className={classes.head11} fontSize={{lg: 16,xs: 12}}>
                Spine and Joint Care
                </Typography>
                <CardActionArea>
                    <Button 
                    variant="outlined"
                    onClick={() => {
                      navigate('therapyType', { state: { therapyType: 'Spine and Joint Care' } })
                    }}>
                        Book Now 
                    </Button>
                </CardActionArea>
            </CardContent>
          </Card>
        </Grid>
        <Grid className={classes.g} item xs={12} sm={6} md={3} lg={3} >
          
          <Card sx={{
            width: 'fit-content',
            marginLeft: 'auto',
            marginRight: 'auto',}} >
            <CardMedia
                component="img"
                style={{
                    height:'10vw',
                    marginLeft:'auto',
                    marginRight:'auto'}}
                image="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fspec2.png?alt=media&token=f8803d36-3006-4179-b4ed-ecffcc56bdeb"
            />
            <CardContent>
                <Typography className={classes.head11} fontSize={{lg: 16,xs: 12}}>
                Elderly care
                </Typography>
                <CardActionArea>
                    <Button 
                    variant="outlined"
                    onClick={() => {
                      navigate('therapyType', { state: { therapyType: 'Elderly care' } })
                    }}>
                        Book Now 
                    </Button>
                </CardActionArea>
            </CardContent>
          </Card>
        </Grid>
        <Grid className={classes.g} item xs={12} sm={6} md={3} lg={3} >
          <Card sx={{
            width: 'fit-content',
            marginLeft: 'auto',
            marginRight: 'auto',}} >
            <CardMedia
                component="img"
                style={{
                    height:'10vw',
                    marginLeft:'auto',
                    marginRight:'auto'}}
                image="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fspec2.png?alt=media&token=f8803d36-3006-4179-b4ed-ecffcc56bdeb"
            />
            <CardContent>
                <Typography className={classes.head11} fontSize={{lg: 16,xs: 12}}>
                Prenatal / Post-natal care
                </Typography>
                <CardActionArea>
                    <Button 
                    variant="outlined"
                    onClick={() => {
                      navigate('therapyType', { state: { therapyType: 'Prenatal care – Post-natal care' } })
                    }}>
                        Book Now 
                    </Button>
                </CardActionArea>
            </CardContent>
          </Card>
        </Grid>
        <Grid className={classes.g} item xs={12} sm={6} md={3} lg={3} >
          <Card sx={{
            width: 'fit-content',
            marginLeft: 'auto',
            marginRight: 'auto',}} >
            <CardMedia
                component="img"
                style={{
                    height:'10vw',
                    marginLeft:'auto',
                    marginRight:'auto'}}
                image="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fspec2.png?alt=media&token=f8803d36-3006-4179-b4ed-ecffcc56bdeb"
            />
            <CardContent>
                <Typography className={classes.head11} fontSize={{lg: 16,xs: 12}}>
                Skin and Haircare
                </Typography>
                <CardActionArea>
                    <Button 
                    variant="outlined"
                    onClick={() => {
                      navigate('therapyType', { state: { therapyType: 'Skin and Haircare' } })
                    }}>
                        Book Now 
                    </Button>
                </CardActionArea>
            </CardContent>
          </Card>
        </Grid>
        <Grid className={classes.g} item xs={12} sm={6} md={3} lg={3} >
          <Card sx={{
            width: 'fit-content',
            marginLeft: 'auto',
            marginRight: 'auto',}} >
            <CardMedia
                component="img"
                style={{
                    height:'10vw',
                    marginLeft:'auto',
                    marginRight:'auto'}}
                image="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fspec2.png?alt=media&token=f8803d36-3006-4179-b4ed-ecffcc56bdeb"
            />
            <CardContent>
                <Typography className={classes.head11} fontSize={{lg: 16,xs: 12}}>
                Weight Management
                </Typography>
                <CardActionArea>
                    <Button 
                    variant="outlined"
                    onClick={() => {
                      navigate('therapyType', { state: { therapyType: 'Weight Management' } })
                    }}>
                        Book Now 
                    </Button>
                </CardActionArea>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Button 
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: '2rem',
          backgroundColor: '#74613C',
          color: 'white',
          fontFamily: 'Josefin Sans',
          fontSize: '1rem',
          fontWeight: 'bold',
        }}
        variant="contained" 
        color="primary" 
        onClick={()=>{
          navigate('/therapies')
        }}>
          Browse All Specialties
      </Button> 

        <Grid xs={12} style={{marginTop:'5vw'}}>
          <Typography className={classes.head6} variant="h2" fontSize={{lg:60,xs:30}}>
            Consult top doctors online
          </Typography>
          <Typography className={classes.head7} variant="h6" fontSize={{lg: 40,xs: 15}}>
            Online consultations with verified doctors in all specialties
          </Typography>
        </Grid>
        <Grid container spacing={0} style={{textAlign:'center'}}>
          <Grid className={classes.doc} item xs={12} sm={6} md={3} lg={3} >
          <Box>
            <img src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2FdocPlaceholer.png?alt=media&token=100b2a89-a515-4243-9bcb-7e32c452298d"/>
            <Typography>LOREM IPSUM</Typography>
          </Box>
          </Grid>
          <Grid className={classes.doc} item xs={12} sm={6} md={3} lg={3}>
            <Box>
            <img src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2FdocPlaceholer.png?alt=media&token=100b2a89-a515-4243-9bcb-7e32c452298d"/>
            <Typography>LOREM IPSUM</Typography>
          </Box>
          </Grid>
          <Grid className={classes.doc} item xs={12} sm={6} md={3} lg={3}>
          <Box>
            <img src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2FdocPlaceholer.png?alt=media&token=100b2a89-a515-4243-9bcb-7e32c452298d"/>
            <Typography>LOREM IPSUM</Typography>
          </Box>

          </Grid>
          <Grid className={classes.doc} item xs={12} sm={6} md={3} lg={3}>
          <Box>
            <img src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2FdocPlaceholer.png?alt=media&token=100b2a89-a515-4243-9bcb-7e32c452298d"/>
            <Typography>LOREM IPSUM</Typography>
          </Box>

          </Grid>
          <Grid className={classes.doc} item xs={12} sm={6} md={3} lg={3}>
          <Box>
            <img src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2FdocPlaceholer.png?alt=media&token=100b2a89-a515-4243-9bcb-7e32c452298d"/>
            <Typography>LOREM IPSUM</Typography>
          </Box>
          </Grid>
        </Grid>
        <Button variant="contained" color="primary"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: '2rem',
            backgroundColor: '#74613C',
            color: 'white',
            fontFamily: 'Josefin Sans',
            fontSize: '1rem',
            fontWeight: 'bold',
            marginBottom:'5vw'
          }}
          onClick={()=>{
            navigate('/doctors')
          }}>
           More Doctors
        </Button>
      
      <Box>
        <Typography className={classes.head4} variant="h6" fontSize={{lg:25,xs:15}}>
          WHAT WE TREAT 
        </Typography>
        <Typography className={classes.head5} variant="h2" fontSize={{lg:60,xs:30}}>
          The spirit of healing<br></br>
          is profound empathy.
        </Typography> 
        <img className={classes.bodyImage} src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fbody.png?alt=media&token=55c4fb64-6fb5-45aa-9b2b-be2031ad9d90"/>
      </Box>

      <Box className={classes.testbox1} style={{background:'#FFFBF3', paddingBottom:'5vw'}}>
        <Typography className={classes.head11} variant="h5" fontSize={{lg: 20,xs: 12}}>
        OUR TESTIMONIALS
        </Typography>
        <Typography className={classes.head12} variant="h3" fontSize={{lg: 50,xs: 30}}>
        What Our Clients Say About Us
        </Typography>
        <Box className={classes.testbox2} style={{
          
          marginTop: '2vw',
          
        }}>
          <img className={classes.testimg1}
          style={{
            marginLeft: '5vw',
          }}
            src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Freview.png?alt=media&token=6b1143cf-8767-4dcd-862c-bd1ed2f77b85"/>
          <Box className={classes.testbox3} style={{
            color: '#303030',
            background: '#FFFFFF',
            marginTop: '5vw',
            
            
            marginLeft: '5vw',
            boxShadow:' 0px 4px 24px rgba(0, 0, 0, 0.05)',
            borderRadius: '28px 120px',
          }}>
            <Box  style={{display:'flex'}}>
              <img className={classes.testimg2}
                style={{
                  width: '60.74px',
                  height: '60.74px',
                }}
                src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fava.png?alt=media&token=21721680-d760-4c0f-9286-1607c8ad3635"/>
              <Typography className={classes.head13} variant="h6" fontSize={{lg: 20,xs: 15}}>
                Agatha Christ,32
              </Typography>
            </Box>
            <Typography className={classes.head14} variant="h6" fontSize={{lg: 20,xs: 12}}>
              “It was a very good experience.”
            </Typography>
            <Typography className={classes.head15} fontSize={{lg: 18,xs: 11}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit. Cursus nibh mauris, nec turpis orci lectus<br></br> maecenas. Suspendisse sed magna eget nibh in<br></br> turpis. Consequat duis diam lacus arcu. Faucibus <br></br>venenatis felis id augue sit cursus pellentesque enim.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box style={{marginBottom:'2vw'}}>
          <Typography className={classes.head16} variant="h5" fontSize={{lg: 30,xs: 14}}>
            PAY US A VISIT
          </Typography>
          <Typography className={classes.head17} variant="h3" fontSize={{lg: 50,xs: 35}}>
            We are  right here in Bangalore
          </Typography>
          <Typography className={classes.head18} variant="h6" fontSize={{lg: 20,xs: 12}}>
            Come visit our friendly staff at one of our ayurveda centres.
          </Typography>
          <Box className={classes.mapbox1} style={{
            
            marginTop: '2vw',
            
          }}>
            <iframe className={classes.map} src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d248888.97900990263!2d77.4927761!3d12.9147718!3m2!1i1024!2i768!4f13.1!2m1!1sAdyant%20Ayurveda!5e0!3m2!1sen!2sin!4v1654586879569!5m2!1sen!2sin" width="600" height="600" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <Box className={classes.mapbox2} style={{display:'flex', 
              flexDirection:'column',
              borderRadius: '18px 80px', 
              padding:'2vw',
              boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.05)' }} 
              component="form">
              
              <InputBase className={classes.input} id="name" placeholder="Your Name"  />
              <InputBase className={classes.input} id="email" placeholder="Your Email"  />
              <InputBase className={classes.input} id=" phone" placeholder="Your Phone Number"  />
              <TextareaAutosize minRows={3} type="submit" className={classes.textarea} placeholder="Message" />
              <Button className={classes.btn4} variant="contained" color="primary">
                Send
              </Button>
            </Box>
          </Box>
        </Box>
        <Footer/>
    </div>
  );
}

export default Land;
