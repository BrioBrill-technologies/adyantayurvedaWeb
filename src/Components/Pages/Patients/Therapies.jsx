import { 
    Button, 
    Card, 
    CardActionArea, 
    CardContent, 
    Grid, 
    Typography 
} from "@mui/material";
import React, {useEffect, useState} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../../../firebase';
import { getTherapies, getTherapyType } from '../../../Hooks/useFetch';

function Therapies(){
    const [user, loading, error] = useAuthState(auth);
    const [Therapy, setTherapy] = useState([]);
    const [therapyType, setTherapyType] = useState([]);
    const navigate = useNavigate();
    
    const fetchTherapies = async () => {
        try {
            const data = await getTherapies();
            setTherapy(data);
            const data2 = await getTherapyType();
            setTherapyType(data2);
        } catch (err) {
            console.error(err);
            alert("An error occurred while fetching Therapy data");
        }
    }

    useEffect(() => {
        fetchTherapies();
    }, [loading]);

    const fetchAyurveda = async (ayurveda) => {
        try {
            setTherapy([])
            const data = await getTherapies();
            for (let i = 0; i < data.length; i++) {
                if (data[i].type === ayurveda) {
                    setTherapy(prev => [...prev, data[i]]);
                }
            }
            setTherapy(items => items.filter(item => item.type === ayurveda));
        } catch (err) {
            console.error(err);
            alert("An error occurred while fetching Therapy data");
        }
    }

    const handleBooking = (id, amount) => {
        console.log(id, amount);
        if(user) navigate(`/booking/` , { state: { id , type: 'Therapies', amount} });
        else navigate("/login");
    }

    return (
        <>
        {therapyType.map(item => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Button onClick={() => fetchAyurveda(item)}>{item}</Button>
            </Grid>
        ))}
        <Grid sx={{ flexGrow: 1 }} justifyContent="center" marginTop="2vw" marginLeft="0.25vw" container spacing={2}>
            {Therapy.map((therapy) => (
                <Grid item xs={10} sm={10} md={2}  key={therapy.id}>
                    <Card sx={{maxHeight: 200, maxWidth:200}} >
                        <CardContent>
                            <Typography>
                                {therapy.name}
                            </Typography>
                            <Typography>
                                {therapy.type}
                            </Typography>

                            <CardActionArea>
                                <Button onClick={() => {
                                    console.log(therapy.id, therapy.amount);
                                    handleBooking(therapy.id, therapy.amount)
                                }}>
                                    Book Now 
                                </Button>
                            </CardActionArea>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
        </>
    )
}

export default Therapies;