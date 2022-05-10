import { Button, Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import { getApproved } from "../../../Hooks/useFetch";

function Doctors(){
    const [user, loading, error] = useAuthState(auth);
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();
    const fetchDoctors = async () => {
        try {
            const docs = await getApproved("doctors");
            setDoctors(docs);
        } catch (err) {
            console.error(err);
            alert("An error occurred while fetching user data");
        }
    }

    useEffect(() => {
        if (doctors.length === 0) {
            fetchDoctors();
        }
    }, [doctors]);

    const handleBooking = (id) => {
        if(user) navigate(`/booking/` , { state: { id , type: 'doctors', amount: 3000} });
        else navigate("/login");
    }
    return (
            <Grid container spacing={3}>
                {doctors.map(doctor => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={doctor.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {doctor.name}
                                </Typography>
                                <Typography color="textSecondary">
                                    {doctor.email}
                                </Typography>
                                <Typography color="textSecondary">
                                    {doctor.phone}
                                </Typography>
                                <Typography color="textSecondary">
                                    {doctor.address}
                                </Typography>
                                <Typography>
                                    {doctor.specialization}
                                </Typography>
                                <Button variant="contained" color="primary" onClick={() => handleBooking(doctor.id)}>
                                    Book Appointment
                                </Button>
                            </CardContent>
                        </Card> 
                    </Grid>
                ))}
            </Grid>
    )
}

export default Doctors;