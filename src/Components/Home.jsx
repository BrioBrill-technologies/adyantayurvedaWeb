import React, { useEffect, useState } from "react";
import { Card,
  CardContent,
  CardMedia,
  Typography,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Table
  } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { getBookings, auth, getDoctors } from '../firebase';
import { makeStyles } from '@material-ui/core'
import Land from "./Land";
const useStyles = makeStyles({
})
function Home() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [data, setData] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [booking, setBookings] = useState(false);

  const fetchData = async () => {
    try {
      const doc = await getBookings(user);
      const data = doc
      setData(data);
      console.log(data);
      if(data.length > 0) {
        setBookings(true);
      }
      const doc2 = await getDoctors();
      const data2 = doc2
      setDoctors(data2);
      console.log(data2);
    } catch (err) {
      console.error(err);
      alert("An error occurred while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchData();
  }, [user, loading]);
  return (
    <Box style={{ height:'100vh'}}>
      {user && (
        <div style={{bacground:'#97896E'}}>
          {booking && (
            <>        
              <Typography style={{
                textAlign:'center',
                fontWeight: 'bold',
                fontSize: '2vw',
                paddingTop: '3vw'}}>
                  My Appointments
              </Typography>
              <TableContainer component={Paper} sx={{maxWidth: 500}} style={{margin: '0 auto'}}>
                <Table aria-label="simple table" style={{border: '20px'}}>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Doctor</TableCell>
                      <TableCell align="center">Date</TableCell>
                      <TableCell align="center">Time</TableCell>
                      <TableCell align="center">Gender</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell align="center" component="th" scope="row"> {row.doctor}</TableCell>
                        <TableCell align="center">{row.date}</TableCell>
                        <TableCell align="center">{row.time}</TableCell>
                        <TableCell align="center">{row.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
        {doctors.map((row) => (
        <Card sx={{ maxWidth: 200, boxShadow: 3 }} style={{margin: '2vw'}} key={row.uid} onClick={() => {
          navigate('/booking/', {state: {uid: row.uid}});
        }}>
          <CardMedia
            component="img"
            height="140"
            image="/logo.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {row.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {row.specialization}
            </Typography>
          </CardContent>
        </Card>
        ))}
      </div>
    )}
    {!user && (
      <Land/>
    )}
    </Box>
  );
}

export default Home;
