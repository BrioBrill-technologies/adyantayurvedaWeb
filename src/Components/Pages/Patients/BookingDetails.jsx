import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom"
import { auth } from "../../../firebase";
function BookingDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const [booking, setBooking] = useState(null);
    const [doctor, setDoctor] = useState(null);
    const [patient, setPatient] = useState(null);
    const [amount, setAmount] = useState(0);


    return (
        // <Paper>
        //     <Typography variant="h5" component="h5">
        //         Booking Details
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Booking Id: {booking.id}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Booking Date: {booking.date}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Booking Status: {booking.status}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Patient Details:
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Name: {bookingDetails.patient.name}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Email: {bookingDetails.patient.email}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Phone: {bookingDetails.patient.phone}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         DOB: {bookingDetails.patient.dob}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Address: {bookingDetails.patient.address}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         City: {bookingDetails.patient.city}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         State: {bookingDetails.patient.state}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Zip: {bookingDetails.patient.zip}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Amount: {booking.amount}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Appointment Details:
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Doctor Name: {bookingDetails.doctor.name}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Doctor Email: {bookingDetails.doctor.email}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Doctor Phone: {bookingDetails.doctor.phone}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Doctor Address: {bookingDetails.doctor.address}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Doctor City: {bookingDetails.doctor.city}

        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Doctor State: {bookingDetails.doctor.state}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Doctor Zip: {bookingDetails.doctor.zip}

        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Doctor Specialty: {bookingDetails.doctor.specialty}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Doctor Degree: {bookingDetails.doctor.degree}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Doctor Experience: {bookingDetails.doctor.experience}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Doctor Qualification: {bookingDetails.doctor.qualification}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Doctor Hospital: {bookingDetails.doctor.hospital}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Doctor Hospital Address: {bookingDetails.doctor.hospitalAddress}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Doctor Hospital City: {bookingDetails.doctor.hospitalCity}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Doctor Hospital State: {bookingDetails.doctor.hospitalState}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Doctor Hospital Zip: {bookingDetails.doctor.hospitalZip}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Doctor Hospital Phone: {bookingDetails.doctor.hospitalPhone}
        //     </Typography>
        //     <Typography variant="h5" component="h5">
        //         Doctor Hospital Website: {bookingDetails.doctor.hospitalWebsite}
        //     </Typography>

        // </Paper>
        <div>
            Details
        </div>
    );
}
export default BookingDetails;