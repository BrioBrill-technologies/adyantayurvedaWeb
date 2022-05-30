import { Grid, Paper, Typography,Box,Button, InputBase, TextareaAutosize} from "@mui/material"
import Footer from "../Components/Navbar/Footer"
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles({
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
    
})

function Contact(){
    const classes = useStyles();
    return(
        <div>
            <Box component="span" sx={{     position: 'absolute',
                                            width: '45vw',
                                            height: '44vw',
                                            borderRadius: '10px',
                                            margin:'20px',
                                            marginLeft:'100px',
                                            marginTop: '145px',
                                            backgroundColor: '#74613c' }}>
                <Typography sx={{marginLeft:'15vw',
                                fontFamily:'Lora',
                                fontSize:34,
                                color:'#fff',
                                marginTop:'2vw',
                                fontWeight: 600}}>
                    Contact Us
                    
                </Typography>  
                <Typography sx={{marginLeft:'8vw',
                                fontFamily:'Lora',
                                fontSize:22,
                                color:'#fff',
                                marginTop:'5vw',
                                fontWeight: 400}}> 
                 
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5317 11.4724C14.5208 15.4604 15.4258 10.8467 17.9656 13.3848C20.4143 15.8328 21.8216 16.3232 18.7192 19.4247C18.3306 19.737 15.8616 23.4943 7.1846 14.8197C-1.49348 6.144 2.26158 3.67244 2.57397 3.28395C5.68387 0.173846 6.16586 1.58938 8.61449 4.03733C11.1544 6.5765 6.54266 7.48441 10.5317 11.4724Z" stroke="#FFF6E4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span style={{marginLeft:'5vw'}}>+91 99725 41009<br /></span>
                <span style={{marginLeft:'6.3vw'}}>080 42156164</span>
                </Typography>
                <Typography sx={{marginLeft:'8vw',
                                                fontFamily:'Lora',
                                                fontSize:22,
                                                color:'#fff',
                                                marginTop:'2vw',
                                                fontWeight: 400}}> 
                                
                                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.9026 6.85107L12.4593 10.4641C11.6198 11.1301 10.4387 11.1301 9.59919 10.4641L5.11841 6.85107" stroke="#FFF6E4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9089 19C18.9502 19.0084 21 16.5095 21 13.4384V6.57001C21 3.49883 18.9502 1 15.9089 1H6.09114C3.04979 1 1 3.49883 1 6.57001V13.4384C1 16.5095 3.04979 19.0084 6.09114 19H15.9089Z" stroke="#FFF6E4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span style={{marginLeft:'5vw'}}>info@adyantayurveda.com</span>
                </Typography>
                <Typography sx={{marginLeft:'8vw',
                                                fontFamily:'Lora',
                                                fontSize:22,
                                                color:'#fff',
                                                marginTop:'2vw',
                                                fontWeight: 400}}> 
                                
                                <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10.8182C21 18.4545 11 25 11 25C11 25 1 18.4545 1 10.8182C1 8.21424 2.05357 5.71695 3.92893 3.87568C5.8043 2.03441 8.34784 1 11 1C13.6522 1 16.1957 2.03441 18.0711 3.87568C19.9464 5.71695 21 8.21424 21 10.8182Z" stroke="#FFF6E4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.0013 14.0906C12.8423 14.0906 14.3346 12.6254 14.3346 10.8179C14.3346 9.01042 12.8423 7.54517 11.0013 7.54517C9.16035 7.54517 7.66797 9.01042 7.66797 10.8179C7.66797 12.6254 9.16035 14.0906 11.0013 14.0906Z" stroke="#FFF6E4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span style={{marginLeft:'5vw'}}>
                No.290, 71, 38th Cross Rd,<br />
                </span>
                <span style={{marginLeft:'6.3vw'}}>
                8th Block, Jayanagar,<br />
                </span>
                <span style={{marginLeft:'6.3vw'}}>
                Bengaluru,<br />
                </span>
                <span style={{marginLeft:'6.3vw'}}>
                Karnataka 560082<br />
                </span>
                </Typography>
                          
                </Box>
                <Paper component="span" sx={{   zIndex: -1,
                                                position: 'absolute',
                                                top: 0,
                                                width: '90vw',
                                                height: '55vw',
                                                margin:'20px',
                                                marginLeft:'400px',
                                                marginTop: '145px',
                                                
                                            }}>
                    <Typography sx={{marginLeft:'35vw',
                                    fontFamily:'Lora',
                                    fontSize:34,
                                    fontWeight:600,
                                    marginTop:'3vw'}}>
                        Get in Touch 
                        
                    </Typography>
                    
                    <Typography sx={{marginLeft:'35vw',
                                    fontFamily:'Lora',
                                    fontSize:16,
                                    marginTop:'1vw'}}>
                    Any questions or remarks? Just write us a message <br />and we will get back to you.
                    </Typography>
                    <Box style={{display:'flex', 
                flexDirection:'column',
                marginLeft:'35vw',
                marginTop:'1vw', 
                width:'fit-content',
                borderRadius: '18px 80px',  }} 
                component="form">
                
                < InputBase className={classes.input} id="name" placeholder="Your Name"  />
                <InputBase className={classes.input} id="email" placeholder="Your Email"  />
                <InputBase className={classes.input} id=" phone" placeholder="Your Phone Number"  />
                <TextareaAutosize minRows={3} type="submit" className={classes.textarea} placeholder="Message" />
                <Button className={classes.btn4} variant="contained" color="primary">
                    Send
                </Button>
                </Box>
                </Paper>
                {/* <Footer /> */}
        </div>
        
    )
}
export default Contact