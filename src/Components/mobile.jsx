import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({

    head8: {
        fontFamily: 'Josefin Sans !important',
        color: '#74613C',
        fontWeight: '400 !important',
        fontStyle: 'normal !important',
        // lineHeight: '30px',
        padding: '0 0 0 10vw',
        marginTop: '10vw !important',
        [theme.breakpoints.down("md")]: {
            paddingLeft: '6vw',
        },
    },
    
    head9: {
        fontFamily: 'Lora !important',
        color: '#3E3E3E',
        fontWeight: '600 !important',
        fontStyle: 'normal !important',
        lineHeight: '1.5em',
        paddingLeft: '10vw',
        [theme.breakpoints.down("md")]: {
            paddingLeft: '6vw',
        },
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
        [theme.breakpoints.down("md")]: {
            paddingLeft: '6vw',
        },
    },

    btn2: {
        background: '#74613C',
        color: 'white !important',
        marginBottom: '4vw',
        marginLeft:'16vw !important',
        padding: '1vw 2vw',
        borderRadius: '15px',
        fontFamily: 'Josefin Sans !important',
        fontWeight: '600 !important',
        transform: 'translateX(-50%)',
        textTransform: 'none !important',
        [theme.breakpoints.down("md")]: {
            paddingLeft: '6vw',
        },
        '&:hover': {
            color: 'white',
        },
        
    },

    box: {
        [theme.breakpoints.up("md")]: {
            display:'flex'  
          },
    },

    image1: {
        [theme.breakpoints.up("md")]: {
            marginTop: '13vw',
            marginLeft: '5vw',
          },
          [theme.breakpoints.down("md")]: {
            position: 'relative',
            zindex:'1',
            width:'15rem',
            marginLeft: '20vw',
            marginTop:'30vw'
          },
    },

    image2: {
        [theme.breakpoints.up("md")]: {
            position: 'absolute',
            marginLeft: '-5vw',
          },
          [theme.breakpoints.down("md")]: {
            position: 'absolute',
            width:'10rem',
            marginLeft: '-40vw',
          },
    },

    image3: {
        [theme.breakpoints.up("md")]: {
            position: 'absolute',
            marginTop: 0,
            left: '10vw',
          },
          [theme.breakpoints.down("md")]: {
            position: 'absolute',
            width:'20rem',
            marginLeft: '-85vw',
            marginTop: '10vw',
          },
    },

    image4: {
        [theme.breakpoints.up("md")]: {
            position: 'absolute',
            left: '9vw',
            marginTop: '35vw',
          },
          [theme.breakpoints.down("md")]: {
            position: 'relative',
            width:'15rem',
            zindex:'1',
            marginLeft: '-88vw',
            marginTop: '95vw',
          },
    },
}));

function Mobile(){
    const classes = useStyles();
    return(
        <><Box>
            <Typography className={classes.head8} variant="h6" fontSize={{lg: 30,xs: 12}}>
                NOW IN YOUR POCKETS
            </Typography>
            <Typography className={classes.head9} variant="h3" fontSize={{lg: 30,xs: 29}}>
                Your personal therapist <br></br>
                is here..
            </Typography>
            <Typography className={classes.head10} variant="h5" fontSize={{lg: 30,xs: 18}}>
                Let your skin heal and glow from within,<br></br>
                with our intensive Ayurveda Therapies.
            </Typography>
            <Button className={classes.btn2} variant="contained" color="primary">
                Download Now
            </Button>
        </Box><Box className={classes.box}>
                <Box style={{ marginLeft: '5vw' }}>
                    <img className={classes.image1}
                        src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fbgdoc.png?alt=media&token=d892d555-b44c-4ab0-9871-90eec511a5ae" />
                    <img className={classes.image2}
                        src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Frating.png?alt=media&token=87926b2f-fce9-4613-8a9c-6ecabb3c236f" />
                    <img className={classes.image3}
                        src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2Fmobile.png?alt=media&token=ce93bf58-f45b-4456-8092-faedd9c0ef53" />
                    <img className={classes.image4}
                        src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2FdocCard.png?alt=media&token=ab0cad4b-b9ff-46eb-9c6b-bb6a7a223cec" />
                </Box>

            </Box></>
    )
}

export default Mobile;