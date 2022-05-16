import { Box, Button, Input, Paper, TextareaAutosize, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router-dom";
import { auth } from "../../../firebase";
import { getBookings, getSingleBooking, getSinglePatient } from "../../../Hooks/useFetch";
import { addPrescription } from "../../../Hooks/usePost";

function AddPrescription() {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    const [prescription, setPrescription] = useState("");
    const [notes, setNotes] = useState("");
    const [doctor, setDoctor] = useState(null);
    const [patient, setPatient] = useState(null);
    const [booking, setBooking] = useState(null);

    const fetchBookings = async () => {
        try {
            const data = await getSingleBooking(location.state.id);
            setBooking(data);
            console.log(data);
            const docs = await getSinglePatient(data.patientId);
            setPatient(docs);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return;
        if (!location.state) return;
        fetchBookings();
    }, [loading, user, location]);

    const handleSubmit = async (e, bookingId) => {
        e.preventDefault();
        const data = {
            prescription,
            notes,
            date: new Date(),
            bookingId
        };
        try {
            await addPrescription(data);
        } catch (error) {
            console.log(error);
            alert("An error occurred while adding prescription");
        }
    };

    return (
        <Paper>
            <Box p={2} component="form">
                <Typography variant="h5">Add Prescription</Typography>
                <TextareaAutosize minRows={10} maxRows={10} placeholder="Enter Prescription" onChange={(e)=>{setPrescription(e.target.value)}}/>
                <TextareaAutosize minRows={10} maxRows={10} placeholder='Notes' onChange={(e)=>{setNotes(e.target.value)}} />
                <Input placeholder="Date" disabled value={new Date()}/>
                <Button 
                    type="submit"
                    onClick={(e) => {
                        handleSubmit(e, booking.id);
                    }}
                    >Save</Button>
            </Box>
        </Paper>
    )
}
export default AddPrescription;