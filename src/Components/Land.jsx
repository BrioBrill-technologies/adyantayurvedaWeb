import { Box, Button, Grid } from "@material-ui/core";
import { Input, TextareaAutosize, Typography } from "@mui/material";
import React, {  } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core'
import { fontWeight } from "@mui/system";
import { BurstMode } from "@mui/icons-material";
const useStyles = makeStyles({
  typo: {
    color: '#74613C',
    fontFamily: 'Josefin Sans !important',
    padding: '7vw 0 0 5vw',
  },
  firstTypo: {
    color: '#3E3E3E',
    fontFamily: 'Lora !important',
    fontSize: '52px !important',
    fontWeight: '600 !important',
    fontStyle: 'normal !important',
    lineHeight: '1.5em',
    padding: '0 0 0 5vw',
  },
  secondFont: {
    color: '#3E3E3E',
    fontFamily: 'Josefin Sans !important',
    fontSize: '24px !important',
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
      background: '#74613C',
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
    fontSize: '24px !important',
    transform: 'translateX(-50%)',
    textTransform: 'none',
    '&:hover': {
      background: '#74613C',
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
    fontSize: '52px !important',
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
    fontSize: '20px !important',
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
    fontSize: '24px !important',
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
    fontSize: '20px !important',
    color: '#74613C',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
    textAlign: 'center',
    marginTop: '30vw !important',
  },

  head5: {
    fontFamily: 'Lora !important',
    fontSize: '52px !important',
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
    fontSize: '52px !important',
    color: '#74613C',
    fontWeight: '600 !important',
    fontStyle: 'normal !important',
    lineHeight: '1.5em',
    textAlign: 'center',
    marginTop: '50vw !important',
  },

  head7: {
    fontFamily: 'Josefin Sans !important',
    fontSize: '20px !important',
    color: '#3E3E3E',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
    textAlign: 'center',
  },

  head8: {
    fontFamily: 'Josefin Sans !important',
    fontSize: '20px !important',
    color: '#74613C',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
    padding: '0 0 0 10vw',
    marginTop: '10vw !important',
  },

  head9: {
    fontFamily: 'Lora !important',
    fontSize: '52px !important',
    color: '#3E3E3E',
    fontWeight: '600 !important',
    fontStyle: 'normal !important',
    lineHeight: '1.5em',
    paddingLeft: '10vw',
  },

  head10: {
    fontFamily: 'Josefin Sans !important',
    fontSize: '20px !important',
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
    fontSize: '24px !important',
    transform: 'translateX(-50%)',
    textTransform: 'none !important',
    '&:hover': {
      background: '#74613C',
      color: 'white',
    },
  },

  head11: {
    fontFamily: 'Josefin Sans !important',
    fontSize: '20px !important',
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
    fontSize: '38px !important',
    color: '#0C0C0C',
    fontWeight: '700 !important',
    fontStyle: 'normal !important',
    lineHeight: '1.5em',
    textAlign: 'center',
  },

  head13: {
    fontFamily: 'Josefin Sans !important',
    fontSize: '24px !important',
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
    fontSize: '24px !important',
    color: '#303030',
    fontWeight: '700 !important',
  },

  head15: {
    fontFamily: 'Josefin Sans !important',
    fontSize: '20px !important',
    color: '#303030',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
  },

  head16: {
    fontFamily: 'Josefin Sans !important',
    fontSize: '20px !important',
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
    fontSize: '38px !important',
    color: '#0C0C0C',
    fontWeight: '600 !important',
    fontStyle: 'normal !important',
    lineHeight: '1.5em',
    textAlign: 'center',
  },

  head18: {
    fontFamily: 'Josefin Sans !important',
    fontSize: '20px !important',
    color: '#0C0C0C',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
    textAlign: 'center',
    marginBottom: '1vw !important',
  },

  input: {
    width: '150%',
    border: 'none !important',
    borderRadius: '15px',
    fontFamily: 'Josefin Sans !important',
    fontSize: '20px !important',
    background: '#FAFAFA',
    color: '#74613C',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
    lineHeight: '30px',
    textAlign: 'center',
    marginTop: '2vw !important',
    paddingTop: '2vw !important',
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
    fontSize: '24px !important',
    textTransform: 'none !important',
    '&:hover': {
      background: '#74613C',
      color: 'white',
    },
  },

})
function Land() {
  const classes = useStyles();
  let navigate = useNavigate();
  return (
    <div>
      <Grid style={{display:'flex', flexDirection:'row'}}>
        <Grid item xs={12} >
          <Box className={classes.boxType} style={{background:'#FFFBF3', width:'200%'}}>
            <Typography className={classes.typo}>
              SKIN CARE
            </Typography>
            <Typography className={classes.firstTypo}>
              Twak Roga <br></br>
              Nivarana Chikitsa
            </Typography>
            <Typography className={classes.secondFont}>
              Let your skin heal and glow from within,<br></br>
              with our intensive Ayurveda Therapies.
            </Typography>
            <Button className={classes.btn}>
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
      <Typography className={classes.head1}>
        Nature specialized treatment
      </Typography>
      <Typography className={classes.head2}>
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
          <Typography className={classes.head3}>Preventive health care </Typography>
        </Typography>
      </Box>

      <Box className={classes.box1}>
        <Typography style={{marginLeft:'5vw'}}>
          <svg width="69" height="61" viewBox="0 0 69 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0033 17.1274C66.3347 25.2065 70.12 34.6272 66.7546 43.1513C63.2915 51.9226 54.3244 57.4255 45.1833 59.7294C36.9158 61.813 28.3426 59.1666 21.1027 54.6571C14.7935 50.7273 12.0065 43.786 8.80973 37.0736C5.12491 29.3364 -1.87973 21.3348 1.47972 13.4537C4.85327 5.53945 15.3103 4.41557 23.6412 2.27962C30.7662 0.452856 38.0077 -0.326573 44.8692 2.32911C52.184 5.16024 58.296 10.2121 62.0033 17.1274Z" fill="#FFF6E4"/>
          </svg>
          <Typography className={classes.head3}>Knowledge of <br></br>
            appropriate diet</Typography>
        </Typography>
      </Box>

      <Box className={classes.box2}>
        <Typography style={{marginRight:'5vw'}}>
          <svg width="69" height="61" viewBox="0 0 69 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0033 17.1274C66.3347 25.2065 70.12 34.6272 66.7546 43.1513C63.2915 51.9226 54.3244 57.4255 45.1833 59.7294C36.9158 61.813 28.3426 59.1666 21.1027 54.6571C14.7935 50.7273 12.0065 43.786 8.80973 37.0736C5.12491 29.3364 -1.87973 21.3348 1.47972 13.4537C4.85327 5.53945 15.3103 4.41557 23.6412 2.27962C30.7662 0.452856 38.0077 -0.326573 44.8692 2.32911C52.184 5.16024 58.296 10.2121 62.0033 17.1274Z" fill="#FFF6E4"/>
          </svg>
          <Typography className={classes.head3}>Holistic healthy living</Typography>
        </Typography>
      </Box>

      <Box className={classes.box3}>
        <Typography style={{marginRight:'5vw'}}>
          <svg width="69" height="61" viewBox="0 0 69 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0033 17.1274C66.3347 25.2065 70.12 34.6272 66.7546 43.1513C63.2915 51.9226 54.3244 57.4255 45.1833 59.7294C36.9158 61.813 28.3426 59.1666 21.1027 54.6571C14.7935 50.7273 12.0065 43.786 8.80973 37.0736C5.12491 29.3364 -1.87973 21.3348 1.47972 13.4537C4.85327 5.53945 15.3103 4.41557 23.6412 2.27962C30.7662 0.452856 38.0077 -0.326573 44.8692 2.32911C52.184 5.16024 58.296 10.2121 62.0033 17.1274Z" fill="#FFF6E4"/>
          </svg>
          <Typography className={classes.head3}>Lifestyle practices.</Typography>
        </Typography>
      </Box>

      <img className={classes.rightTree} src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2FrightTree.png?alt=media&token=850d25a8-f2ca-42d7-a41c-34e38afa891e" /> 

      <Box>
        <Typography className={classes.head4}>
          WHAT WE TREAT 
        </Typography>
        <Typography className={classes.head5}>
          The spirit of healing<br></br>
          is profound empathy.
        </Typography> 
        <img className={classes.bodyImage} src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fbody.png?alt=media&token=55c4fb64-6fb5-45aa-9b2b-be2031ad9d90"/>
      </Box>


      <Box>
        <Typography className={classes.head6}>
          Consult top doctors online
        </Typography>
        <Typography className={classes.head7}>
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
        <Button className={classes.btn1} >
           More Specialities
        </Button>


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
            <Typography className={classes.head8}>
            NOW IN YOUR POCKETS 
            </Typography>
            <Typography className={classes.head9}>
            Your personal therapist <br></br>
            is here..
            </Typography>
            <Typography className={classes.head10}>
            Let your skin heal and glow from within,<br></br>
            with our intensive Ayurveda Therapies.
            </Typography>
            <Button className={classes.btn2}>
              Download Now
            </Button>
          </Box>
        </Box>

        <Box style={{background:'#FFFBF3', paddingBottom:'5vw'}}>

          <img className={classes.rightTree} src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2FrightTree.png?alt=media&token=850d25a8-f2ca-42d7-a41c-34e38afa891e" /> 
 
          <Typography className={classes.head11}>
          OUR TESTIMONIALS
          </Typography>
          <Typography className={classes.head12}>
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
              <Typography className={classes.head13}>
              Agatha Christ,32
              </Typography>
              </Box>
              <Typography className={classes.head14}>
              “It was a very good experience.”
              </Typography>
              <Typography className={classes.head15}>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit. Cursus nibh mauris, nec turpis orci lectus<br></br> maecenas. Suspendisse sed magna eget nibh in<br></br> turpis. Consequat duis diam lacus arcu. Faucibus <br></br>venenatis felis id augue sit cursus pellentesque enim.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <Typography className={classes.head16}>
          PAY A VISIT TO US
          </Typography>
          <Typography className={classes.head17}>
          Made with love, right here in Bangalore
          </Typography>
          <Typography className={classes.head18}>
          Come visit our friendly staff at one of our ayurveda centres.
          </Typography>
          <Box style={{
            display: 'flex',
            marginTop: '2vw',
            marginLeft: '10vw',
          }}>
            <img style={{ width:'45%' }}
            src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fmap.png?alt=media&token=943b04f6-d636-474a-a5ad-f6513142a2e5"/>
            <Box style={{display:'flex', flexDirection:'column', marginLeft:'5vw' }}>
              <Input className={classes.input} placeholder="Your Name" />
              <Input className={classes.input} placeholder="Phone" />
              <Input className={classes.input} placeholder="Email" />
              <TextareaAutosize className={classes.textarea} placeholder="Message" />
              <Button className={classes.btn4}>
                Send
              </Button>
            </Box>
            </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Land;
