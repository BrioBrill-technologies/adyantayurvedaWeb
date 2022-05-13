import {useAuthState} from 'react-firebase-hooks/auth';
import {useEffect, useState} from 'react';
import {auth} from '../../../firebase';
import {useNavigate, useLocation} from 'react-router-dom';
import { getSingleApproved } from '../../../Hooks/useFetch';
import { Button, Paper, Typography } from '@material-ui/core';

function DoctorDetails(){
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const [doctor, setDoctor] = useState(null);

    const fetchDoctor = async () => {
        try{
            const docs = await getSingleApproved(location.state.id, 'doctors');
            setDoctor(docs);
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        if(loading) return;
        fetchDoctor();
    },[loading]);

    return(
        <Paper style={{width:'fit-content',padding:'5vw',margin:'10vw auto'}}>
            <Button variant="contained" color="primary" onClick={() => navigate('/doctors')}>
                Back
            </Button>
            {doctor && (
                <>
                    <Typography variant="h2" component="h1">
                        {doctor.name}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {doctor.degree}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {doctor.specialization}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {doctor.email}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {doctor.phone}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {doctor.address}
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => 
                            navigate('/booking', {state: {id: doctor.uid, type: 'doctors', amount: 3000}}
                        )}>
                        Book Appointment
                    </Button>
                </>
            )}
        </Paper>
    )
}
export default DoctorDetails;