import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { addBooking, auth, getDoctor } from '../../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from 'react-router-dom';
import {useNavigate, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react'
function Booking () {
    const { state } = useLocation();
    const [time, setTime] = useState(null);
    const [date, setDate] = useState(null);
    const [status, setStatus] = useState(null);
    const [user, loading, error] = useAuthState(auth);
    const [doctor, setDoctor] = useState(null);
    const navigate = useNavigate();

    const fetchDoctor = async () => {

        try {
            const doc = await getDoctor(state.uid);
            const data = doc
            setDoctor(data);
            console.log(data);
        } catch (err) {
            console.error(err);
            alert("An error occurred while fetching user data");
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchDoctor();
    }, [user, loading]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBooking(user, state.uid, date, time, status);
    }

    return (
        <Box component="form" noValidate sx={{ mt: 1 }}>
            <input type="date" id="birthday" name="birthday" 
            onChange={(e) => setDate(e.target.value)}/>
            {/* <TextField
                label="BookingDate"
                onChange={(e) => setDate(e.target.value)}
            /> */}
            <TextField
                label="BookingTime"
                onChange={(e) => setTime(e.target.value)}
            />
            <TextField
                label="BookingStatus"
                onChange={(e) => setStatus(e.target.value)}
            />
            <Button
                onClick={(e) => handleSubmit(e)}>
                Submit
            </Button>
        </Box>
    );
}

export default Booking;