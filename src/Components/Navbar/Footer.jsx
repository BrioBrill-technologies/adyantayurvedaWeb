import { Box, Button, Grid,List, ListItemText } from "@material-ui/core";
import { Input, Typography } from "@mui/material";
import React, {  } from "react";
import { makeStyles } from '@material-ui/core'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    input1: {
        width: '250px !important',
        background: '#FFF6E4',
        [theme.breakpoints.down("md")]: {
          marginLeft: '5vw !important',
          marginBottom:'25vw'
        },
      },
    head19: {
        fontFamily: 'Josefin Sans !important',
        color: '#3E3E3E',
        fontWeight: '400 !important',
        fontStyle: 'normal !important',
        lineHeight: '30px',
        textAlign: 'center',
        position: 'absolute',
        [theme.breakpoints.up("md")]: {
          marginTop: '-5vw !important',
          right:'20%',
        },
        [theme.breakpoints.down("md")]: {
          marginTop: '20vw !important',
          zIndex:'1'
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

      head22: {
        fontFamily: 'Josefin Sans !important',
        color: '#3E3E3E',
        fontWeight: '400 !important',
        fontStyle: 'normal !important',
        lineHeight: '30px',
        
        [theme.breakpoints.up("md")]: {
          marginRight: '2vw !important',
        },
        [theme.breakpoints.down("md")]: {
          marginRight: '8vw !important',
        },
      },

      btn5: {
        background: '#74613C',
        color: 'white !important',
        padding: '1vw 2vw',
        borderRadius: '8px',
        fontFamily: 'Josefin Sans !important',
        fontWeight: '600 !important',
        textTransform: 'none !important',
        '&:hover': {
          color: 'white',
        },
        [theme.breakpoints.up("md")]: {
          marginTop:'-6vw',
          right:'10%',
          position: 'absolute !important', 
        },
        [theme.breakpoints.down("md")]: {
          
        },
      },

      img: {
        [theme.breakpoints.up("md")]: {
          height:'10%', width:'10%',
          marginLeft: '5vw',
        },
        [theme.breakpoints.down("md")]: {
          width:'25%'
        },
      },

      box: {
        [theme.breakpoints.up("md")]: {
          display:'flex'
        },
      },

      grid: {
        [theme.breakpoints.up("md")]: {
          marginLeft: '10vw',
        },
      },

      grid2: {
        [theme.breakpoints.down("md")]: {
          
          position: 'relative', 
        },
      },

      text1: {
        [theme.breakpoints.down("md")]: {
          marginLeft:'5vw'
        },
      },

      termsbox: {
        [theme.breakpoints.up("md")]: {
          marginLeft:'11vw',
          paddingBottom:'2vw'
        },
        [theme.breakpoints.down("md")]: {
          marginLeft:'5vw'
        },
      },

      icons: {
        [theme.breakpoints.up("md")]: {
          marginRight:'20vw',
        },
        [theme.breakpoints.down("md")]: {
          marginRight:'5vw',
        },
      },

      line: {
        [theme.breakpoints.up("md")]: {
          marginLeft:'10vw',
          width:"1200px"
        },
        [theme.breakpoints.down("md")]: {
          marginLeft:'7vw',
          width:"200px"
        },
      },

      line1: {
        [theme.breakpoints.up("md")]: {
          width:"1068px"
        },
        [theme.breakpoints.down("md")]: {
          
          width:"300px"
        },
      },
}))
function Footer () {
    const classes = useStyles();
    const navigate = useNavigate();
  return (
      <>
        <img  style={{width:"100%", marginTop:'-12vw', zIndex:'-1'}} src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Ffooter.svg?alt=media&token=9a65161a-6982-4717-b995-10781d733bf1"/>
        <Box style={{background:'#FFF6E4', p:{ xs:4, md:10}, pt:12, pb:12, fontSize: { xs:'12px', md:'14px'}, }}>
        <Box className={classes.box1} style={{
            
            marginTop: '-2vw',
            marginLeft: '5vw',
          }}>
          <img className={classes.img} style={{ 
            marginTop: '-7vw',
            }}
          src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Flogo.png?alt=media&token=133422cd-c16f-4575-8d80-afb240030125"/>
          <Typography className={classes.head19} variant="h5" fontSize={{lg: 25,xs: 15}}>
            Ready to get started?</Typography>
          <Button className={classes.btn5} variant="contained" color="primary">
            Get Started
          </Button>
          </Box>
          <Grid className={classes.grid2} container spacing={2} justifyContent="center" >
            <Grid item md={6} lg={4} xs={12}>
              <Typography className={classes.text1} fontSize={{lg: 20,xs: 12}}>
                  Subscribe to our
                  newsletter
              </Typography>
              <Box style={{display:'flex'}}>
                <Input className={classes.input1} style={{width:'20% !important'}} id="email" placeholder="Your Email" />
                <Button className={classes.btn6} variant="contained" color="primary" style={{mt:4, mb:4}}>
                  <ArrowForwardIosIcon />
                </Button>
              </Box>
            </Grid>
            <Grid className={classes.grid2} item md={3} lg={2} spacing={3}>
              <Typography className={classes.head21} lineHeight={2}>
                Services
              </Typography>
              <List>
                <ListItemText>
                    <Typography className={classes.head22}>
                    Branding
                    </Typography>
                    <Typography className={classes.head22}>
                    Offline
                    </Typography>
                </ListItemText>    
              </List>  
            </Grid>

            <Grid item md={6} lg={2}>
              <Typography className={classes.head21} onClick={() => navigate('/therapies')}>
                Specialties
              </Typography>
              <List>
                <ListItemText>
                  <Typography className={classes.head22} onClick={() => navigate('/doctors')}>
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
                </ListItemText>    
              </List>  
            </Grid>

            <Grid item md={6} lg={4}>
              <Typography className={classes.head21} onClick={() => navigate('/therapies')}>
              Help
              </Typography>
              <List>
                <ListItemText>
                  <Typography className={classes.head22}>
                    FAQs
                  </Typography>
                  <Typography className={classes.head22}>
                    Contact Us
                  </Typography>
                </ListItemText>    
              </List>  
            </Grid>
          </Grid>

          <Box className={classes.line} justifyItems='center'>
            <svg  height="1" viewBox="0 0 1069 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className={classes.line1} opacity="0.1" x="0.928589" height="1" fill="#3E3E3E"/>
            </svg>
          </Box>
          <Box className={classes.termsbox} style={{display:'flex', marginTop:'2vw', }}>
            <Typography className={classes.head22} fontSize={{lg: 16,xs: 9}}>
              Terms & Conditions
            </Typography>
            <Typography className={classes.head22} fontSize={{lg: 16,xs: 9}}>
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

            <Box  style={{marginRight:'2vw',}}>
              <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.9277 2.11613C22.1096 2.475 21.2379 2.71288 20.329 2.82838C21.264 2.27013 21.9776 1.39287 22.3131 0.3355C21.4414 0.85525 20.4789 1.22238 19.4531 1.42725C18.6254 0.545875 17.4456 0 16.1586 0C13.6616 0 11.6514 2.02675 11.6514 4.51137C11.6514 4.86887 11.6816 5.21263 11.7559 5.53988C8.00623 5.357 4.68836 3.55987 2.45948 0.82225C2.07036 1.49738 1.84211 2.27012 1.84211 3.102C1.84211 4.664 2.64648 6.04862 3.84548 6.85025C3.12086 6.8365 2.40998 6.62613 1.80773 6.29475C1.80773 6.3085 1.80773 6.32638 1.80773 6.34425C1.80773 8.536 3.37111 10.3565 5.42123 10.7759C5.05411 10.8763 4.65398 10.9244 4.23873 10.9244C3.94998 10.9244 3.65848 10.9079 3.38486 10.8474C3.96923 12.6335 5.62748 13.9466 7.59923 13.9893C6.06473 15.1896 4.11636 15.9129 2.00711 15.9129C1.63723 15.9129 1.28248 15.8964 0.927734 15.851C2.92561 17.1394 5.29336 17.875 7.84673 17.875C16.1462 17.875 20.6837 11 20.6837 5.04075C20.6837 4.84138 20.6769 4.64887 20.6672 4.45775C21.5624 3.8225 22.3145 3.02913 22.9277 2.11613Z" fill="#3E3E3E"/>
              </svg>
            </Box>

            <Box className={classes.icons}>
              <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.80273 0H16.0527C19.8491 0 22.9277 3.07862 22.9277 6.875V15.125C22.9277 18.9214 19.8491 22 16.0527 22H7.80273C4.00636 22 0.927734 18.9214 0.927734 15.125V6.875C0.927734 3.07862 4.00636 0 7.80273 0ZM16.0527 19.9375C18.7065 19.9375 20.8652 17.7787 20.8652 15.125V6.875C20.8652 4.22125 18.7065 2.0625 16.0527 2.0625H7.80273C5.14898 2.0625 2.99023 4.22125 2.99023 6.875V15.125C2.99023 17.7787 5.14898 19.9375 7.80273 19.9375H16.0527Z" fill="#3E3E3E"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.42773 11C6.42773 7.96263 8.89036 5.5 11.9277 5.5C14.9651 5.5 17.4277 7.96263 17.4277 11C17.4277 14.0374 14.9651 16.5 11.9277 16.5C8.89036 16.5 6.42773 14.0374 6.42773 11ZM8.49023 11C8.49023 12.8948 10.033 14.4375 11.9277 14.4375C13.8225 14.4375 15.3652 12.8948 15.3652 11C15.3652 9.10388 13.8225 7.5625 11.9277 7.5625C10.033 7.5625 8.49023 9.10388 8.49023 11Z" fill="#3E3E3E"/>
                <circle cx="17.8402" cy="5.08761" r="0.732875" fill="#3E3E3E"/>
              </svg>
            </Box>
          </Box>
        </Box>
      </>
  )
}

export default Footer