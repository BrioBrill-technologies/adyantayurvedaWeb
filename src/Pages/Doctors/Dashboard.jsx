import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { getBookings, getSinglePatient, getTotalInvoiceAmountByDocId } from "../../Hooks/useFetch";
import moment from "moment";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { modifyBooking } from "../../Hooks/usePost";
function DocDashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [bookings, setBookings] = useState([]);
    const [cancelledBookings, setCancelledBookings] = useState([]);
    const [CompletedBookings, setCompletedBookings] = useState([]);
    const [totalAppointments, setTotalAppointments] = useState(0);
    const [amountEarned, setAmountEarned] = useState(0);
    const navigate = useNavigate();

    const fetchAppointments = async () => {
        try {
            const doc = await getBookings('DocId', user.uid); // change to user.uid
            console.log(user.uid);
            setTotalAppointments(doc.length);
            for (let i = 0; i < doc.length; i++) {
                const data = doc[i];
                data.date = new Date(data.date.seconds*1000)
                const patient = await getSinglePatient(data.patientId);
                data.patient = patient;
                if(doc[i].status === 'Booked'){
                    bookings.push(data);
                } else if(doc[i].status === 'Cancelled'){
                    cancelledBookings.push(data);
                } else if (doc[i].status === 'Completed'){
                    CompletedBookings.push(data);
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

    const handleView = async (id) => {
        navigate("/doctor/appointmentDetails", { state: {
            id: id,
            type: 'DocId'
        }});
    }

    const handleModifyBooking = async (id, status) => {
        try {
            await modifyBooking(id, status);
        } catch (err) {
            console.error(err);
            alert("An error occurred while modifying booking");
        }
    }
    return (
        <Paper>
            <Typography variant="h5" component="h5">
                Total Earned: {amountEarned}
            </Typography>
            <Typography variant="h5" component="h5">
                Total Appointments: {totalAppointments}<br></br>
                Total Completed Appointments: {CompletedBookings.length}<br></br>
                Total Cancelled Appointments: {cancelledBookings.length}<br></br>
                Total Booked Appointments: {bookings.length}
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
                                <TableCell>
                                    <Button onClick={() => {
                                        handleView(booking.id);
                                    }}>View</Button>
                                    <Button onClick={() => {
                                        handleModifyBooking(booking.id, 'Cancelled');
                                    }}>Cancel</Button>
                                    <Button onClick={() => {
                                        handleModifyBooking(booking.id, 'Completed');
                                    }}>Complete</Button>
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
                        {CompletedBookings.map((booking, index) => (
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
                <Typography variant="h5" component="h5">
                    Cancelled Appointments
                </Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Patient Name</TableCell>
                            <TableCell>Patient Phone</TableCell>
                            <TableCell>Patient Email</TableCell>
                            <TableCell>Appointment Date</TableCell>
                            <TableCell>Appointment Time</TableCell>
                            <TableCell>Appointment Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cancelledBookings.map((booking, index) => (
                            <TableRow key={index}>
                                <TableCell>{booking.patient.name}</TableCell>
                                <TableCell>{booking.patient.phone}</TableCell>
                                <TableCell>{booking.patient.email}</TableCell>
                                <TableCell>{moment(booking.date).format("MM/DD/YYYY")}</TableCell>
                                <TableCell>{booking.time}</TableCell>
                                <TableCell>{booking.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default DocDashboard;