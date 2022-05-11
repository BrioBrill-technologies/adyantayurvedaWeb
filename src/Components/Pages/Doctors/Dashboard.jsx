import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import { getBookings, getSinglePatient, getTotalInvoiceAmountByDocId } from "../../../Hooks/useFetch";
import moment from "moment";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
function DocDashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [bookings, setBookings] = useState([]);
    const [cancelledBookings, setCancelledBookings] = useState([]);
    const [CompletedBookings, setCompletedBookings] = useState([]);
    const [amountEarned, setAmountEarned] = useState(0);
    const navigate = useNavigate();

    const fetchAppointments = async () => {
        try {
            const doc = await getBookings('DocId', user.uid); // change to user.uid
            for (let i = 0; i < doc.length; i++) {
                if(doc[i].status === 'Booked'){
                    const data = doc[i];
                    data.date = new Date(data.date.seconds*1000)
                    const patient = await getSinglePatient(data.patientId);
                    console.log("patient",i, patient);
                    data.patient = patient;
                    setBookings(bookings => [...bookings, data]);
                } else if(doc[i].status === 'Cancelled'){
                    const data = doc[i];
                    data.date = new Date(data.date.seconds*1000)
                    const patient = await getSinglePatient(data.patientId);
                    console.log("patient",i, patient);
                    data.patient = patient;
                    setCancelledBookings(bookings => [...bookings, data]);
                } else if (doc[i].status === 'Completed'){
                    const data = doc[i];
                    data.date = new Date(data.date.seconds*1000)
                    const patient = await getSinglePatient(data.patientId);
                    console.log("patient",i, patient);
                    data.patient = patient;
                    setCompletedBookings(bookings => [...bookings, data]);
                }
            }
            const amount = await getTotalInvoiceAmountByDocId(user.uid); // change to user.uid
            setAmountEarned(amount);
        } catch (err) {
            console.error(err);
            alert("An error occurred while fetching user data");
        }
    }

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchAppointments();
    }, [user, loading]);
    return (
        <div>
            <Paper>
                <Typography variant="h5" component="h5">
                    Total Earned: {amountEarned}
                </Typography>
                <Typography variant="h5" component="h5">
                    Upcoming Appointments
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Patient Name</TableCell>
                                <TableCell>Patient Phone</TableCell>
                                <TableCell>Patient Email</TableCell>
                                <TableCell>Patient DOB</TableCell>
                                <TableCell>Appointment Date</TableCell>
                                <TableCell>Appointment Time</TableCell>
                                <TableCell>Appointment Status</TableCell>
                                <TableCell>Appointment Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bookings.map((booking, index) => (
                                <TableRow key={index}>
                                    <TableCell>{booking.patient.name}</TableCell>
                                    <TableCell>{booking.patient.phone}</TableCell>
                                    <TableCell>{booking.patient.email}</TableCell>
                                    <TableCell>{booking.patient.dob}</TableCell>
                                    <TableCell>{moment(booking.date).format("MM/DD/YYYY")}</TableCell>
                                    <TableCell>{booking.time}</TableCell>
                                    <TableCell>{booking.status}</TableCell>
                                    <TableCell>{booking.amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}

export default DocDashboard;