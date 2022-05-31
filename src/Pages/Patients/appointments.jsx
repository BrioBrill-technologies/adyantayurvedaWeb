import { collection, getDocs, query, setDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import moment from "moment";
import { modifyBooking } from "../../Hooks/usePost";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

function Appointments(){
    const [user, loading, error] = useAuthState(auth);
    const [bookings, setBookings] = useState([]);
    const [cancelledBookings, setCancelledBookings] = useState([]);
    const [CompletedBookings, setCompletedBookings] = useState([]);
    const navigate = useNavigate();
    const fetchBookings = async () => {
        try{
            const q = query(collection(db, "bookings"), where("patientId", "==", user?.uid));
            const doc = await getDocs(q);
            for(let i = 0; i < doc.docs.length; i++){ 
                const data = doc.docs[i].data();
                data.id = doc.docs[i].id;
                data.date = new Date(data.date.seconds*1000)
                const docs = await getDocs(query(collection(db, "doctors")));
                for(let j = 0; j < docs.docs.length; j++){
                    const doc = docs.docs[j].data();
                    if(doc.uid === data.DocId){
                        data.doctor = doc;
                        break;
                    }
                }
                if(data.status === 'Booked'){
                    setBookings(bookings => [...bookings, data]);
                } else if (data.status === 'Cancelled'){
                    setCancelledBookings(bookings => [...bookings, data]);
                } else if (data.status === 'Completed'){
                    setCompletedBookings(bookings => [...bookings, data]);
                }
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred while fetching Appointment data");
        }
    }
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchBookings();
    }, [user, loading]);

    const handleModifyBooking = async (id, status) => {
        try {
            await modifyBooking(id, status);
        } catch (err) {
            console.error(err);
            alert("An error occurred while modifying booking");
        }
    }

    return(
        <div>
            <Paper>
                <Typography variant="h5" component="h5">
                    Upcoming Appointments
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Time</TableCell>
                                <TableCell>Doctor</TableCell>
                                <TableCell>Reason</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bookings.map((booking, index) => (
                                <TableRow key={index}>
                                    <TableCell>{moment(booking.date).format("MMMM Do YYYY")}</TableCell>
                                    <TableCell>{booking.time}</TableCell>
                                    <TableCell>{booking.doctor.name}</TableCell>
                                    <TableCell>{booking.reason}</TableCell>
                                    <TableCell>{booking.status}</TableCell>
                                    <TableCell>
                                        <Button onClick={() =>{
                                            alert('TODO')
                                        }}>View</Button>
                                        <Button onClick={() =>{
                                            handleModifyBooking(booking.id, 'Cancelled');
                                        }}>Cancel</Button>    
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Typography variant="h5" component="h5">
                        Completed Appointments
                    </Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Time</TableCell>
                                <TableCell>Doctor</TableCell>
                                <TableCell>Reason</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {CompletedBookings.map((booking, index) => (
                                <TableRow key={index}>
                                    <TableCell>{moment(booking.date).format("MMMM Do YYYY")}</TableCell>
                                    <TableCell>{booking.time}</TableCell>
                                    <TableCell>{booking.doctor.name}</TableCell>
                                    <TableCell>{booking.reason}</TableCell>
                                    <TableCell>{booking.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Typography variant="h5" component="h5">
                        Cancelled Appointments
                    </Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Time</TableCell>
                                <TableCell>Doctor</TableCell>
                                <TableCell>Reason</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cancelledBookings.map((booking, index) => (
                                <TableRow key={index}>
                                    <TableCell>{moment(booking.date).format("MMMM Do YYYY")}</TableCell>
                                    <TableCell>{booking.time}</TableCell>
                                    <TableCell>{booking.doctor.name}</TableCell>
                                    <TableCell>{booking.reason}</TableCell>
                                    <TableCell>{booking.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}

export default Appointments;