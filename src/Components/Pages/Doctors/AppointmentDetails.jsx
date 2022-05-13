import { Button, Paper, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate} from 'react-router-dom';
import { auth } from '../../../firebase';
import { getBookings, getSinglePatient } from '../../../Hooks/useFetch';
import { modifyBooking } from '../../../Hooks/usePost';
function AppointmentDetails() {
    const [user, loading, error] = useAuthState(auth);
    const [booking, setBooking] = useState(null);
    const [doctor, setDoctor] = useState(null);
    const [patient, setPatient] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state);
    const fetchBookings = async () => {
        try{
            const data = await getBookings(location.state.type, user.uid);
            for(let i = 0; i < data.length; i++){
                if(data[i].id === location.state.id){
                    setBooking(data[i]);
                    const docs = await getSinglePatient(data[i].patientId);
                    setPatient(docs);
                    break;
                }
            }
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        if (!location.state) return navigate("/");
        fetchBookings();
    }, [loading, user, location]);

    const handleModifyBooking = async (id, status) => {
        try {
            await modifyBooking(id, status);
        } catch (err) {
            console.error(err);
            alert("An error occurred while modifying booking");
        }
    }

    return (
        <Paper style={{padding:"1vw"}}>
            <Button variant="contained" color="primary" onClick={() => navigate("/doctor/appointments")}>
                Back
            </Button>
            {booking && (
                <>
                    <Typography variant="h6" component="h1">
                        Booking ID: {booking.id}
                    </Typography>
                    <Typography variant="h6" component="h1">
                        Booking Time: {booking.time}
                    </Typography>
                    <Typography variant="h6" component="h1">
                        Booking Status: {booking.status}
                    </Typography>
                    <Typography variant="h6" component="h1">
                        Booking Amount: {booking.amount}
                    </Typography>
                    { patient && (
                        <>
                            <Typography variant="h6" component="h1">
                                Patient Name: {patient.name}
                            </Typography>
                            <Typography variant="h6" component="h1">
                                Patient Email: {patient.email}
                            </Typography>
                            <Typography variant="h6" component="h1">
                                Patient Phone: {patient.phone}
                            </Typography>
                            <Typography variant="h6" component="h1">
                                Patient Address: {patient.address}
                            </Typography>
                            <Typography variant="h6" component="h1">
                                Patient Age: {patient.age}
                            </Typography>
                        </>
                    )}
                    <Button variant='outlined' color='primary'
                        onClick={() => {
                            handleModifyBooking(booking.id, 'Cancelled');
                        }}>Cancel</Button>
                    <Button variant='contained' color='primary'
                        onClick={() => {
                            handleModifyBooking(booking.id, 'Completed');
                        }}>Complete</Button>
                    <Button variant='contained' color='primary'
                        onClick={() => {
                            navigate("/doctor/Prescription", {state: {booking: booking, patient: patient}});
                        }}>Add Prescription</Button>
                </>
            )}
        </Paper>
        // <div>
        //     <h1>Appointment Details</h1>
        // </div>
    )
}

export default AppointmentDetails