import { Button, Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import React, {useEffect, useState} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, getTherapies } from '../../firebase';
function Therapies(){
    const [Therapy, setTherapy] = useState([]);
    const [first, setFirst] = useState(false);
    const [dupe, setDupe] = useState([]);
    const [loading] = useAuthState(auth);
    
    const fetchTherapies = async () => {
        try {
            const doc = await getTherapies();
            const data = doc
            setTherapy(data);
        } catch (err) {
            console.error(err);
            alert("An error occurred while fetching Therapy data");
        }
    }
    useEffect(() => {
        // if (loading) return;
        fetchTherapies();
    }, [loading]);

    const fetchAyurveda = async (ayurveda) => {
        try {
            setTherapy([])
            const doc = await getTherapies();
            const data = doc
            for (let i = 0; i < data.length; i++) {
                if (data[i].type === ayurveda) {
                    setTherapy(prev => [...prev, data[i]]);
                }
            }
        } catch (err) {
            console.error(err);
            alert("An error occurred while fetching Therapy data");
        }
    }
                    

    const handleAyur = () => {
        fetchAyurveda("ayurvedic therapies");
        setTherapy(items => items.filter(item => item.type === 'ayurvedic therapies'));
        console.log(Therapy);
    }

    const handleCure = () => {
        fetchAyurveda('curative treatments');
        setTherapy(items => items.filter(item => item.type === 'curative treatments'));
        console.log(Therapy);
    }
    return (
        <>
        <Button onClick={handleAyur}>Ayurvedic therapies</Button>
        <Button onClick={handleCure}>Curative treatments</Button>
        <Grid sx={{ flexGrow: 1 }} justifyContent="center" marginTop="2vw" marginLeft="0.25vw" container spacing={2}>
            {Therapy.map((therapy) => (
                <Grid item xs={10} sm={10} md={2}  key={therapy.id}>
                    <Card sx={{maxHeight: 200, maxWidth:200} } >
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