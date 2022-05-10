import { async } from "@firebase/util";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase";
import moment from "moment";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function Appointments(){
    const [user, loading, error] = useAuthState(auth);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();
    const fetchBookings = async () => {
        try{
            const q = query(collection(db, "bookings"), where("patientId", "==", user?.uid));
            const doc = await getDocs(q);
            for(let i = 0; i < doc.docs.length; i++){
                const data = doc.docs[i].data();
                data.date = new Date(data.date.seconds*1000)
                const docs = await getDocs(query(collection(db, "doctors")));
                for(let j = 0; j < docs.docs.length; j++){
                    const doc = docs.docs[j].data();
                    if(doc.id === data.doctorId){
                        data.doctor = doc;
                        break;
                    }
                }
                setBookings(bookings => [...bookings, data]);
            }
            // setBookings(docs);
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

    return(
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Doctor</TableCell>
                        <TableCell>Reason</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {bookings.map((booking, index) => (
                        <TableRow key={index}>
                            <TableCell>{moment(booking.date).format("MMMM Do YYYY")}</TableCell>
                            <TableCell>{booking.time}</TableCell>
                            <TableCell>{booking.doctor.name}</TableCell>
                            <TableCell>{booking.reason}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Appointments;