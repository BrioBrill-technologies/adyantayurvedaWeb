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
import { auth } from '../../../firebase';
import { getTherapies, getTherapyType } from '../../../Hooks/useFetch';
function Therapies(){
    const [Therapy, setTherapy] = useState([]);
    const [loading] = useAuthState(auth);
    const [therapyType, setTherapyType] = useState([]);
    
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
                                <Typography>
                                    Book Now 
                                </Typography>
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