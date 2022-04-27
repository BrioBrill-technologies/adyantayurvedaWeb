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
  Table
  } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { getBookings, auth, getDoctors } from '../firebase';
function Home() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [data, setData] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const fetchData = async () => {
    try {
      const doc = await getBookings(user);
      const data = doc
      setData(data);
      console.log(data);
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
    <Box>
    </Box>
  );
}

export default Home;
