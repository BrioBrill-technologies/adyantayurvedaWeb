import {useAuthState} from 'react-firebase-hooks/auth';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { auth } from '../../firebase';
import { getSinglePatient } from '../../Hooks/useFetch';
import { Button, Paper, Typography } from '@material-ui/core';
import { modifyBooking } from '../../Hooks/usePost';

function PatientDetails(){
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const [patient, setPatient] = useState(null);
    const fetchPatient = async () => {
        try{
            const docs = await getSinglePatient(location.state.id);
            setPatient(docs);
        } catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        if(loading) return;
        if(!user) return navigate('/login');
        fetchPatient();
    },[loading]);

    return (
        <Paper style={{width:'fit-content',padding:'5vw',margin:'10vw auto'}}>
            <Button variant="contained" color="primary" onClick={() => navigate('/doctors')}>
                Back
            </Button>
            {patient && (
                <>
                    <Typography variant="h2" component="h1">
                        {patient.name}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {patient.email}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {patient.phone}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {patient.address}
                    </Typography>
                </>
            )}
        </Paper>
    );
}
export default PatientDetails;