import { Grid } from "@mui/material";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase";
import { getBookings, getSinglePatient } from "../../../Hooks/useFetch";
import moment from "moment";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
function DocDashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    const fetchAppointments = async () => {
        try {
            const doc = await getBookings('DocId', 'D01'); // change to user.uid
            console.log(doc);
            for (let i = 0; i < doc.length; i++) {
                const data = doc[i];
                data.date = new Date(data.date.seconds*1000)
                const patient = await getSinglePatient(data.patientId);
                data.patient = patient;
                setBookings(bookings => [...bookings, data]);
            }
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
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Patient</TableCell>
                        <TableCell>Reason</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {bookings.map((booking, index) => (
                        <TableRow key={index}>
                            <TableCell>{moment(booking.date).format("MMMM Do YYYY")}</TableCell>
                            <TableCell>{booking.time}</TableCell>
                            <TableCell>{booking.patient.name}</TableCell>
                            <TableCell>{booking.reason}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default DocDashboard;