import React, { useEffect, useState } from "react";
import { Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Table,
  Grid,
  Divider
  } from '@mui/material';
import { shadows } from '@mui/system';
import { Link, useNavigate } from "react-router-dom";
function Land() {
  const [spacing, setSpacing] = React.useState(2);
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <Box style={{paddingTop:'2vw'}}>
      <img src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/banner1.png?alt=media&token=c4409dc9-2f6f-41cc-b80d-a90f3240c792" style={{    
        width: '75vw',
        borderRadius: '3vw',
        position: 'relative',
        left:'50%',
        transform: 'translateX(-50%)',
        }}
        onClick={handleClick}/>
      <Grid container justifyContent="center" marginTop={'2vw'} paddingBottom={'5vw'} marginLeft={'2vw'}>
        <Grid item>
          <Card style={{borderRadius:'1vw', width:'75%'}} sx={{boxShadow: 3}}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="250"
              image="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/findDocs.webp?alt=media&token=cefbf081-908b-4918-9ee3-4b97495bf38f"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Instant Video Consultations
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Video consultations are available 24/7.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card style={{borderRadius:'1vw', width:'75%'}} sx={{boxShadow: 3}}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="250"
              image="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/findDocs.webp?alt=media&token=cefbf081-908b-4918-9ee3-4b97495bf38f"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Find Doctors Near You
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Find doctors near you and book appointment.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card style={{borderRadius:'1vw', width:'75%'}} sx={{boxShadow: 3}}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="250"
              image="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/findDocs.webp?alt=media&token=cefbf081-908b-4918-9ee3-4b97495bf38f"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Instant Video Consultations
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Video consultations are available 24/7.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card style={{borderRadius:'1vw', width:'75%'}} sx={{boxShadow: 3}}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="250"
              image="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/findDocs.webp?alt=media&token=cefbf081-908b-4918-9ee3-4b97495bf38f"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Instant Video Consultations
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Video consultations are available 24/7.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <Typography variant="h4" style={{margin:'2vw', textAlign:'center'}}>
        What Our Users Say about us
      </Typography>
      <Typography variant="h5" style={{margin:'2vw auto', textAlign:'center', paddingBottom:'1vw', fontSize:'1vw', width:'50%'}}>
        "I was suffering from digestion related issues for a long time and I was struggling with allopathic medicines which used to give temporary relief. Later on I started consulting with Dr.Shree Lakshmi and she started the treatment with Ayurvedic medicines. Now my digestion problem is solved and I am very happy. She listens to the patients with patience and she is very supportive."
      </Typography>
      <Divider variant="middle" />
      <Box style={{padding:'2vw'}}>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link to='/'>
          Adyant Ayurveda
        </Link>
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      </Box>
    </Box>
  );
}

export default Land;
