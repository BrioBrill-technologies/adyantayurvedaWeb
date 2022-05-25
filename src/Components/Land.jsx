import { Box, Button, Grid, TextField } from "@material-ui/core";
import { CssBaseline, Input, InputBase, TextareaAutosize, Typography } from "@mui/material";
import React, {  } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const useStyles = makeStyles({
  typo: {
    color: '#74613C',
    fontFamily: 'Josefin Sans !important',
    padding: '7vw 0 0 5vw',
  },
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

  btn1: {
    background: '#74613C',
    color: 'white !important',
    marginTop: '25vw',
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
  boxType: {
    paddingLeft: '24px',
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
    marginTop: '30vw !important',
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
  },

  head6: {
    fontFamily: 'Lora !important',
    color: '#74613C',
    fontWeight: '600 !important',
    fontStyle: 'normal !important',
    lineHeight: '1.5em',
    textAlign: 'center',
    marginTop: '50vw !important',
  },

  head7: {
    fontFamily: 'Josefin Sans !important',
    color: '#3E3E3E',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
    textAlign: 'center',
  },

  head8: {
    fontFamily: 'Josefin Sans !important',
    color: '#74613C',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
    padding: '0 0 0 10vw',
    marginTop: '10vw !important',
  },

  head9: {
    fontFamily: 'Lora !important',
    color: '#3E3E3E',
    fontWeight: '600 !important',
    fontStyle: 'normal !important',
    lineHeight: '1.5em',
    paddingLeft: '10vw',
  },

  head10: {
    fontFamily: 'Josefin Sans !important',
    color: '#3E3E3E',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
    padding: '0 0 0 10vw',
    marginTop: '2vw !important',
    marginBottom: '2vw !important',
  },

  btn2: {
    background: '#74613C',
    color: 'white !important',
    marginBottom: '4vw',
    marginLeft:'16vw',
    padding: '1vw 2vw',
    borderRadius: '15px',
    fontFamily: 'Josefin Sans !important',
    fontWeight: '600 !important',
    transform: 'translateX(-50%)',
    textTransform: 'none !important',
    '&:hover': {
      color: 'white',
    },
  },

  head11: {
    fontFamily: 'Josefin Sans !important',
    color: '#74613C',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
    textAlign: 'center',
    marginTop: '2vw !important',
    paddingTop: '2vw !important',
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
  },

  head14: {
    fontFamily: 'Josefin Sans !important',
    color: '#303030',
    fontWeight: '700 !important',
  },

  head15: {
    fontFamily: 'Josefin Sans !important',
    color: '#303030',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
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

  input1: {
    width: '250px !important',
    background: '#FFF6E4',
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

  head19: {
    fontFamily: 'Josefin Sans !important',
    color: '#3E3E3E',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
    textAlign: 'center',
    position: 'absolute',
    right:'20%',
    marginTop: '-5vw !important',
  },

  head20: {
    fontFamily: 'Josefin Sans !important',
    color: '#3E3E3E',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
  },

  btn5: {
    background: '#74613C',
    color: 'white !important',
    padding: '1vw 2vw',
    borderRadius: '8px',
    fontFamily: 'Josefin Sans !important',
    fontWeight: '600 !important',
    textTransform: 'none !important',
    position: 'absolute !important',
    right:'10%',
    marginTop: '-6vw !important',
    '&:hover': {
      color: 'white',
    },
  },

  btn6: {
    background: '#74613C',
    color: 'white !important',
    padding: '1vw 0 !important',
    borderRadius: '8px',
    fontFamily: 'Josefin Sans !important',
    fontWeight: '600 !important',
    height:' max-content',
    marginTop: '2vw !important',
  },

  head23: {
    fontFamily: 'Josefin Sans !important',
    color: '#3E3E3E',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
    marginRight: '2vw !important',
  },
})
function Land() {
  const classes = useStyles();
  let navigate = useNavigate();
  return (
    <div>
      <Grid style={{display:'flex', flexDirection:'row', background:'#FFFBF3'}}>
        <Grid item xs={12} >
          <Box className={classes.boxType}>
            <Typography className={classes.typo} variant="h6">
              SKIN CARE
            </Typography>
            <Typography className={classes.firstTypo} variant="h2">
              Twak Roga <br></br>
              Nivarana Chikitsa
            </Typography>
            <Typography className={classes.secondFont} variant="h6">
              Let your skin heal and glow from within,<br></br>
              with our intensive Ayurveda Therapies.
            </Typography>
            <Button variant="contained" color="primary" className={classes.btn} >
              Consult Now
            </Button>
            <Box style={{display:'flex', marginTop: '5vw'}} className={classes.boxType}>
              <Typography className={classes.openHours}>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0461 10.0005C20.0461 15.1095 15.9448 19.2505 10.8848 19.2505C5.82476 19.2505 1.72345 15.1095 1.72345 10.0005C1.72345 4.89149 5.82476 0.750488 10.8848 0.750488C15.9448 0.750488 20.0461 4.89149 20.0461 10.0005Z" stroke="#74613C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.2835 12.9429L10.5496 10.6939V5.84692" stroke="#74613C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span style={{marginLeft:'0.5vw', marginTop:'-0.5vw'}}> OPENING HOURS</span> <br></br>
                <span style={{marginLeft:'2.5vw', color:'#8B8B8B'}}>8AM to 8PM </span>
              </Typography>
              <Typography className={classes.contactUs}>
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.731 6.85107L12.3303 10.4641C11.4989 11.1301 10.3291 11.1301 9.49762 10.4641L5.05978 6.85107" stroke="#74613C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7468 19C18.759 19.0084 20.7892 16.5095 20.7892 13.4384V6.57001C20.7892 3.49883 18.759 1 15.7468 1H6.02318C3.01098 1 0.980835 3.49883 0.980835 6.57001V13.4384C0.980835 16.5095 3.01098 19.0084 6.02318 19H15.7468Z" stroke="#74613C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span style={{marginLeft:'0.5vw'}}> CONTACT US</span> <br></br>
                <span style={{marginLeft:'2.5vw', color:'#8B8B8B'}}>info@adyantayurveda.com </span>
              </Typography>
              <Typography className={classes.callUs}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5317 11.4724C14.5208 15.4604 15.4258 10.8467 17.9656 13.3848C20.4143 15.8328 21.8216 16.3232 18.7192 19.4247C18.3306 19.737 15.8616 23.4943 7.1846 14.8197C-1.49348 6.144 2.26158 3.67244 2.57397 3.28395C5.68387 0.173846 6.16586 1.58938 8.61449 4.03733C11.1544 6.5765 6.54266 7.48441 10.5317 11.4724Z" stroke="#74613C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span style={{marginLeft:'0.5vw', fontWeight:'500'}}>CALL US</span> <br></br>
                <span style={{marginLeft:'2.5vw', color:'#8B8B8B'}}>+91 99725 41009<br></br></span>
                <span style={{marginLeft:'2.5vw', color:'#8B8B8B'}}>080 42156164</span>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} style={{zIndex:'1'}}>
          <Box style={{width:'fit-content', marginLeft:'auto'}}>
            <img src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2FPlaceImage.png?alt=media&token=6c137edf-1cd5-4ea4-8666-dbaa62cd39af"/>
          </Box>
        </Grid>
      </Grid>
      <div style={{zIndex:'-1', marginTop:'-10vw'}}>
        <svg width="1440" height="432" viewBox="0 0 1440 432" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 432L60 382C120 331 240 230 360 194C480 158 600 187 720 202C840 216 960 216 1080 187C1200 158 1320 101 1380 72L1440 43V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V432Z" fill="#FFFBF3"/>
        </svg>
      </div>
      <img style={{marginTop:'-20vw'}} src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2FleftTree.png?alt=media&token=cf2da048-1c93-42f4-b2f2-2d7e7c7549a3"/>
      <Typography className={classes.head1} variant="h3">
        Nature specialized treatment
      </Typography>
      <Typography className={classes.head2} variant="h5">
        “SARVE SANTU NIRAMAYA” which means <br></br>
        “may all be bestowed with good health <br></br>
        and be free from illness”
      </Typography>
      <img className={classes.maskPik} src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fmaskpik.png?alt=media&token=524f2ff9-860e-4ce4-add3-169aaea321c4"/>
      <Box >
        <Typography style={{marginLeft:'5vw'}}>
          <svg width="69" height="61" viewBox="0 0 69 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0033 17.1274C66.3347 25.2065 70.12 34.6272 66.7546 43.1513C63.2915 51.9226 54.3244 57.4255 45.1833 59.7294C36.9158 61.813 28.3426 59.1666 21.1027 54.6571C14.7935 50.7273 12.0065 43.786 8.80973 37.0736C5.12491 29.3364 -1.87973 21.3348 1.47972 13.4537C4.85327 5.53945 15.3103 4.41557 23.6412 2.27962C30.7662 0.452856 38.0077 -0.326573 44.8692 2.32911C52.184 5.16024 58.296 10.2121 62.0033 17.1274Z" fill="#FFF6E4"/>
          </svg>
          <Typography className={classes.head3} variant="h5">
            Preventive health care
          </Typography>
        </Typography>
      </Box>

      <Box className={classes.box1}>
        <Typography style={{marginLeft:'5vw'}}>
          <svg width="69" height="61" viewBox="0 0 69 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0033 17.1274C66.3347 25.2065 70.12 34.6272 66.7546 43.1513C63.2915 51.9226 54.3244 57.4255 45.1833 59.7294C36.9158 61.813 28.3426 59.1666 21.1027 54.6571C14.7935 50.7273 12.0065 43.786 8.80973 37.0736C5.12491 29.3364 -1.87973 21.3348 1.47972 13.4537C4.85327 5.53945 15.3103 4.41557 23.6412 2.27962C30.7662 0.452856 38.0077 -0.326573 44.8692 2.32911C52.184 5.16024 58.296 10.2121 62.0033 17.1274Z" fill="#FFF6E4"/>
          </svg>
          <Typography className={classes.head3} variant="h5">Knowledge of <br></br>
            appropriate diet</Typography>
        </Typography>
      </Box>

      <Box className={classes.box2}>
        <Typography style={{marginRight:'5vw'}}>
          <svg width="69" height="61" viewBox="0 0 69 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0033 17.1274C66.3347 25.2065 70.12 34.6272 66.7546 43.1513C63.2915 51.9226 54.3244 57.4255 45.1833 59.7294C36.9158 61.813 28.3426 59.1666 21.1027 54.6571C14.7935 50.7273 12.0065 43.786 8.80973 37.0736C5.12491 29.3364 -1.87973 21.3348 1.47972 13.4537C4.85327 5.53945 15.3103 4.41557 23.6412 2.27962C30.7662 0.452856 38.0077 -0.326573 44.8692 2.32911C52.184 5.16024 58.296 10.2121 62.0033 17.1274Z" fill="#FFF6E4"/>
          </svg>
          <Typography className={classes.head3} variant="h5">Holistic healthy living</Typography>
        </Typography>
      </Box>

      <Box className={classes.box3}>
        <Typography style={{marginRight:'5vw'}}>
          <svg width="69" height="61" viewBox="0 0 69 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0033 17.1274C66.3347 25.2065 70.12 34.6272 66.7546 43.1513C63.2915 51.9226 54.3244 57.4255 45.1833 59.7294C36.9158 61.813 28.3426 59.1666 21.1027 54.6571C14.7935 50.7273 12.0065 43.786 8.80973 37.0736C5.12491 29.3364 -1.87973 21.3348 1.47972 13.4537C4.85327 5.53945 15.3103 4.41557 23.6412 2.27962C30.7662 0.452856 38.0077 -0.326573 44.8692 2.32911C52.184 5.16024 58.296 10.2121 62.0033 17.1274Z" fill="#FFF6E4"/>
          </svg>
          <Typography className={classes.head3} variant="h5">Lifestyle practices.</Typography>
        </Typography>
      </Box>

      <img className={classes.rightTree} src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2FrightTree.png?alt=media&token=850d25a8-f2ca-42d7-a41c-34e38afa891e" /> 

      <Box>
        <Typography className={classes.head4} variant="h6">
          WHAT WE TREAT 
        </Typography>
        <Typography className={classes.head5} variant="h2">
          The spirit of healing<br></br>
          is profound empathy.
        </Typography> 
        <img className={classes.bodyImage} src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fbody.png?alt=media&token=55c4fb64-6fb5-45aa-9b2b-be2031ad9d90"/>
      </Box>


      <Box>
        <Typography className={classes.head6} variant="h2">
          Consult top doctors online
        </Typography>
        <Typography className={classes.head7} variant="h6">
          Private online consultations with verified doctors in all specialists
        </Typography>
        <Box style={{
          marginTop: '3vw',
          display:"flex",
          position: 'absolute',
          left: '50%',
          textAlign: 'center',
          transform:' translateX(-50%)'}}>
          <Box>
            <img src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fspec1.png?alt=media&token=9904f2ad-fd51-4cad-a1f6-3de6a67a862e"/>
            <Typography>LOREM IPSUM</Typography>
            <Typography>A small description about the header.</Typography>
          </Box>
          <Box>
            <img src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fspec2.png?alt=media&token=f8803d36-3006-4179-b4ed-ecffcc56bdeb"/>
            <Typography>LOREM IPSUM</Typography>
            <Typography>A small description about the header.</Typography>
          </Box>
          <Box>
            <img src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fspec3.png?alt=media&token=5edba098-5cd7-42f6-89af-ee7a17952594"/>
            <Typography>LOREM IPSUM</Typography>
            <Typography>A small description about the header.</Typography>
          </Box>
          <Box>
            <img src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fspec4.png?alt=media&token=a422ab5d-adc5-41c7-875a-49b3f621b8f5"/>
            <Typography>LOREM IPSUM</Typography>
            <Typography>A small description about the header.</Typography>
          </Box>
          <Box>
            <img src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fspec1.png?alt=media&token=9904f2ad-fd51-4cad-a1f6-3de6a67a862e"/>
            <Typography>LOREM IPSUM</Typography>
            <Typography>A small description about the header.</Typography>
          </Box>
        </Box>
        <Button className={classes.btn1} variant="contained" color="primary">
           More Specialities
        </Button>
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
            <img 
            style={{
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

        <Box style={{background:'#FFFBF3', paddingBottom:'5vw'}}>

          <img className={classes.rightTree} src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2FrightTree.png?alt=media&token=850d25a8-f2ca-42d7-a41c-34e38afa891e" /> 
 
          <Typography className={classes.head11} variant="h5">
          OUR TESTIMONIALS
          </Typography>
          <Typography className={classes.head12} variant="h3">
          What Our Clients Say About Us
          </Typography>
          <Box style={{
            display: 'flex',
            marginTop: '2vw',
            marginLeft: '5vw',
          }}>
            <img
            style={{
              marginLeft: '5vw',
            }}
             src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Freview.png?alt=media&token=6b1143cf-8767-4dcd-862c-bd1ed2f77b85"/>
            <Box style={{
              color: '#303030',
              background: '#FFFFFF',
              marginTop: '5vw',
              padding: '2vw 2vw 0 4vw',
              height: '300px',
              width: '500px',
              marginLeft: '5vw',
              boxShadow:' 0px 4px 24px rgba(0, 0, 0, 0.05)',
              borderRadius: '28px 120px',
            }}>
              <Box style={{display:'flex'}}>
                <img
                  style={{
                    width: '60.74px',
                    height: '60.74px',
                  }}
                  src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fava.png?alt=media&token=21721680-d760-4c0f-9286-1607c8ad3635"/>
                <Typography className={classes.head13} variant="h6">
                  Agatha Christ,32
                </Typography>
              </Box>
              <Typography className={classes.head14} variant="h6">
                “It was a very good experience.”
              </Typography>
              <Typography className={classes.head15}>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit. Cursus nibh mauris, nec turpis orci lectus<br></br> maecenas. Suspendisse sed magna eget nibh in<br></br> turpis. Consequat duis diam lacus arcu. Faucibus <br></br>venenatis felis id augue sit cursus pellentesque enim.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box style={{marginBottom:'2vw'}}>
          <Typography className={classes.head16} variant="h5">
            PAY A VISIT TO US
          </Typography>
          <Typography className={classes.head17} variant="h3">
            Made with love, right here in Bangalore
          </Typography>
          <Typography className={classes.head18} variant="h6">
            Come visit our friendly staff at one of our ayurveda centres.
          </Typography>
          <Box style={{
            display: 'flex',
            marginTop: '2vw',
            marginLeft: '10vw',
          }}>
            <img style={{ width:'45%' }}
            src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fmap.png?alt=media&token=943b04f6-d636-474a-a5ad-f6513142a2e5"/>
            <Box style={{display:'flex', 
              flexDirection:'column',
              marginLeft:'5vw', 
              width:'fit-content',
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
        
        <img style={{width:"100%", marginTop:'-12vw', zIndex:'-1'}} src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Ffooter.svg?alt=media&token=9a65161a-6982-4717-b995-10781d733bf1"/>
        <Box style={{background:'#FFF6E4'}}>
          <Box style={{
            display: 'flex',
            marginTop: '-2vw',
            marginLeft: '5vw',
          }}>
            <img style={{ 
              marginTop: '-7vw',
               marginLeft: '5vw',
              height:'10%', width:'10%',
             }}
            src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Flogo.png?alt=media&token=133422cd-c16f-4575-8d80-afb240030125"/>
            <Typography className={classes.head19} variant="h5">
              Ready to get started?</Typography>
            <Button className={classes.btn5} variant="contained" color="primary">
              Get Started
            </Button>
          </Box>
          <Grid container style={{marginLeft:'10vw'}}>
            <Grid item xs={12} sm={4}>
              <Typography className={classes.head20} variant="h6">
              Subscribe to our<br></br>
              newsletter
              </Typography>
              <Box style={{display:'flex'}}>
              <Input className={classes.input1} style={{width:'20% !important'}} id="email" placeholder="Your Email" />
              <Button className={classes.btn6} variant="contained" color="primary">
                <ArrowForwardIosIcon />
              </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography className={classes.head21}>
              Services
              </Typography>
              <Typography className={classes.head22}>
              Yoga
              </Typography>
              <Typography className={classes.head22}>
              Swarn Bindu Prashana
              </Typography>
              <Typography className={classes.head22}>
              Branding
              </Typography>
              <Typography className={classes.head22}>
              Offline
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography className={classes.head21}>
              Specialities
              </Typography>
              <Typography className={classes.head22}>
              Doctors
              </Typography>
              <Typography className={classes.head22}>
              Benefits
              </Typography>
              <Typography className={classes.head22}>
                Team
              </Typography>
              <Typography className={classes.head22}>
                Careers
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography className={classes.head21}>
                Help
              </Typography>
              <Typography className={classes.head22}>
                FAQs
              </Typography>
              <Typography className={classes.head22}>
                Contact Us
              </Typography>
              </Grid>
          </Grid>
          <Box style={{marginLeft:'15vw'}}>
            <svg width="1069" height="1" viewBox="0 0 1069 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.1" x="0.928589" width="1068" height="1" fill="#3E3E3E"/>
            </svg>
        </Box>
        <Box style={{display:'flex', marginTop:'2vw', marginLeft:'10vw', paddingBottom:'2vw'}}>
          <Typography className={classes.head23}>
          Terms & Conditions
          </Typography>
          <Typography className={classes.head23}>
          Privacy Policy
          </Typography>
          <Box style={{
            marginLeft:'auto',
            marginRight:'2vw',
          }}>
            <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.07769 3.29509H10.8894V0.139742C10.5768 0.0967442 9.50188 0 8.24999 0C5.6379 0 3.84855 1.643 3.84855 4.66274V7.44186H0.966064V10.9693H3.84855V19.845H7.3826V10.9701H10.1485L10.5876 7.44269H7.38177V5.01251C7.3826 3.99297 7.65712 3.29509 9.07769 3.29509Z" fill="#3E3E3E"/>
            </svg>
          </Box>

          <Box style={{
              marginRight:'2vw',
            }}>
            <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.9277 2.11613C22.1096 2.475 21.2379 2.71288 20.329 2.82838C21.264 2.27013 21.9776 1.39287 22.3131 0.3355C21.4414 0.85525 20.4789 1.22238 19.4531 1.42725C18.6254 0.545875 17.4456 0 16.1586 0C13.6616 0 11.6514 2.02675 11.6514 4.51137C11.6514 4.86887 11.6816 5.21263 11.7559 5.53988C8.00623 5.357 4.68836 3.55987 2.45948 0.82225C2.07036 1.49738 1.84211 2.27012 1.84211 3.102C1.84211 4.664 2.64648 6.04862 3.84548 6.85025C3.12086 6.8365 2.40998 6.62613 1.80773 6.29475C1.80773 6.3085 1.80773 6.32638 1.80773 6.34425C1.80773 8.536 3.37111 10.3565 5.42123 10.7759C5.05411 10.8763 4.65398 10.9244 4.23873 10.9244C3.94998 10.9244 3.65848 10.9079 3.38486 10.8474C3.96923 12.6335 5.62748 13.9466 7.59923 13.9893C6.06473 15.1896 4.11636 15.9129 2.00711 15.9129C1.63723 15.9129 1.28248 15.8964 0.927734 15.851C2.92561 17.1394 5.29336 17.875 7.84673 17.875C16.1462 17.875 20.6837 11 20.6837 5.04075C20.6837 4.84138 20.6769 4.64887 20.6672 4.45775C21.5624 3.8225 22.3145 3.02913 22.9277 2.11613Z" fill="#3E3E3E"/>
            </svg>
          </Box>

          <Box style={{
            marginRight:'20vw',
          }}>
            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.80273 0H16.0527C19.8491 0 22.9277 3.07862 22.9277 6.875V15.125C22.9277 18.9214 19.8491 22 16.0527 22H7.80273C4.00636 22 0.927734 18.9214 0.927734 15.125V6.875C0.927734 3.07862 4.00636 0 7.80273 0ZM16.0527 19.9375C18.7065 19.9375 20.8652 17.7787 20.8652 15.125V6.875C20.8652 4.22125 18.7065 2.0625 16.0527 2.0625H7.80273C5.14898 2.0625 2.99023 4.22125 2.99023 6.875V15.125C2.99023 17.7787 5.14898 19.9375 7.80273 19.9375H16.0527Z" fill="#3E3E3E"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.42773 11C6.42773 7.96263 8.89036 5.5 11.9277 5.5C14.9651 5.5 17.4277 7.96263 17.4277 11C17.4277 14.0374 14.9651 16.5 11.9277 16.5C8.89036 16.5 6.42773 14.0374 6.42773 11ZM8.49023 11C8.49023 12.8948 10.033 14.4375 11.9277 14.4375C13.8225 14.4375 15.3652 12.8948 15.3652 11C15.3652 9.10388 13.8225 7.5625 11.9277 7.5625C10.033 7.5625 8.49023 9.10388 8.49023 11Z" fill="#3E3E3E"/>
              <circle cx="17.8402" cy="5.08761" r="0.732875" fill="#3E3E3E"/>
            </svg>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Land;
