import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { addBooking, auth, db, } from '../../firebase';
import { useAuthState } from "react-firebase-hooks/auth";

function Booking (Doctor) {
    const [time, setTime] = React.useState(null);
    const [date, setDate] = React.useState(null);
    const [status, setStatus] = React.useState(null);
    const [user, loading, error] = useAuthState(auth);
    return (
        <Box>
            <TextField
                label="BookingDate"
                onChange={(e) => setDate(e.target.value)}
            />
            <TextField
                label="BookingTime"
                onChange={(e) => setTime(e.target.value)}
            />
            <TextField
                label="BookingStatus"
                onChange={(e) => setStatus(e.target.value)}
            />
            <Button
                onClick={() => addBooking(user, date, time, status)}>
                Submit
            </Button>
        </Box>
    );
}

export default Booking;