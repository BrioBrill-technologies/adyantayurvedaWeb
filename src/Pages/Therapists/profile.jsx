
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { auth, db } from "../../firebase";
import { updateProfilePhoto, updateUser } from "../../Hooks/usePost";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Avatar, Button, Container, CssBaseline, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";
import { styled } from '@mui/material/styles';

const Input = styled('input')({
    display: 'none',
});

const theme = createTheme();
export default function TherapistProfile() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState('');
    const [city, setCity] = useState("");
    const [birthday, setBirthday] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("");
    const [photo, setPhoto] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "therapists"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
            setEmail(data.email);
            setPhone(data.phone);
            setCity(data.city);
            setGender(data.gender);
            setState(data.state);
            setZip(data.zip);
            setCountry(data.country);
            setBirthday(data.dob);
            setPhoto(data?.photoURL);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserName();
    }, [user, loading]);
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <label htmlFor="profileImg">
                <Input accept="image/*" id="profileImg" type="file" onChange={(e) =>{
                    updateProfilePhoto(e.target.files[0], user.uid, 'profilePhotos');
                }}/>
                    <Avatar
                        src={photo}
                        sx={{ width: 200, height: 200, mt: 5, mb: 3, ml: "auto", mr: "auto" }}/>
                </label>
                <Box component="form" noValidate sx={{ mt: 1, width: 400, ml:"auto", display:"flex", flexDirection:"column", mr:"auto"}}>
                    <Box sx={{ display: "flex", flexDirection: "row", mt:1}}>
                        <TextField
                            id="name"
                            label="Name"
                            sx={{mr:1}}
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            sx={{ml:1}}
                            id="email"
                            label="Email"
                            value={email}
                            variant="outlined"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", mt:1}}>
                        <TextField
                            sx={{mr:1}}
                            id="phone"
                            label="Phone"
                            value={phone}
                            variant="outlined"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <TextField
                            sx={{ml:1}}
                            id="city"
                            label="city"
                            value={city}
                            variant="outlined"
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", mt:1}}>
                        <TextField
                            sx={{mr:1}}
                            id="state"
                            label="state"
                            value={state}
                            variant="outlined"
                            onChange={(e) => setState(e.target.value)}
                        />

                        <TextField
                            sx={{ml:1}}
                            id="country"
                            label="country"
                            value={country}
                            variant="outlined"
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", mt:1}}>
                        <TextField
                            sx={{mr:1}}
                            id="zip"
                            label="zip"
                            value={zip}
                            variant="outlined"
                            onChange={(e) => setZip(e.target.value)}
                        />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Birthday"
                                maxDate={new Date()}
                                inputFormat="dd/MM/yyyy"
                                onChange={(date) => setBirthday(moment(date).format("DD-MM-YYYY"))
                                }
                                value={birthday}
                                renderInput={(params) => <TextField sx={{ml:1}} style={{width:'100%'}} {...params} />}
                            />
                        </LocalizationProvider>
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{mt:1}}
                        onClick={(e) =>{
                            e.preventDefault();
                            console.log(user.uid);
                            updateUser( {
                                uid: user.uid,
                                name,
                                email,
                                phone,
                                city,
                                state,
                                zip,
                                country,
                                dob:birthday
                            });
                        }}>
                        Update
                    </Button>
                </Box>
            </Container>
        </ThemeProvider>
    )
}