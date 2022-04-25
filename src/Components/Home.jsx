import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useNavigate} from 'react-router-dom';
import { Box, Table } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { getBookings, auth, db, } from '../firebase';
import { query, collection, getDocs, where } from "firebase/firestore";
function Home() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const doc = await getBookings(user);
      const data = doc
      setData(data);
      console.log(data);
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
    <Box>
      {user && (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Time</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="right">{row.booking}</TableCell>
                  <TableCell align="right">{row.time}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/logo.jpeg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dr Harish
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Dr Harish is a renowned medical practitioner in the field of
            dermatology. He is a member of the Indian Association of Dermatologists
            (IAD) and the Indian Society of Dermatology (ISD).
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"
            onClick={() => {
              navigate("/booking");
            }}
          >Book Now</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Home;
