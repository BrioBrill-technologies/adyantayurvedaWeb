
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { auth, db } from "../../firebase";
import { updateProfilePhoto, updateUser } from "../../Hooks/usePost";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Box, Avatar, Button, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";
import { styled } from '@mui/material/styles';
import Footer from "../../Components/Navbar/Footer";
import { makeStyles } from '@material-ui/core'

const Input = styled('input')({
    display: 'none',
});

const useStyles = makeStyles({
    address: {
        fontFamily: 'Josefin Sans !important',
        fontWeight: '600 !important',
        fontSize: '28px !important',
    },
})

const theme = createTheme();
export default function DoctorProfile() {
    const classes = useStyles();
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('')
    const [city, setCity] = useState("");
    const [birthday, setBirthday] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("");
    const [photo, setPhoto] = useState("");
    const [education, setEducation] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [experience, setExperience] = useState("");
    const [certificate, setCertificate] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "doctors"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
            setEmail(data.email);
            setPhone(data.phone);
            setAddress(data.address);
            setCity(data.city);
            setGender(data.gender);
            setState(data.state);
            setZip(data.zip);
            setCountry(data.country);
            setBirthday(data.dob);
            setPhoto(data?.photoURL);
            setExperience(data.experience);
            setEducation(data.education);
            setSpecialty(data.specialization);
            setCertificate(data.certificate);
        } catch (err) {
            console.error(err);
            alert("An error occurred while fetching user data");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        updateUser( {
            uid: user.uid,
            name,
            email,
            phone,
            gender,
            address,
            city,
            state,
            zip,
            country,
            dob:birthday,
            certificate,
            education,
            specialization: specialty,
            experience,
        });
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserName();
    }, [user, loading]);
    return (
        <ThemeProvider theme={theme}>
        <div style={{zIndex:-1,position:'absolute',top:0}}>
            <svg width="530" height="676" viewBox="0 0 530 676" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M201.233 661.903C91.3224 681.028 -31.9961 688.711 -117.595 617.214C-205.677 543.643 -234.938 418.992 -226.576 304.572C-219.014 201.086 -155.635 112.168 -75.8345 45.7823C-6.293 -12.0693 84.5632 -17.706 174.342 -28.9526C277.828 -41.9163 397.071 -92.2216 475.265 -23.254C553.787 46.0031 526.758 171.111 519.556 275.529C513.397 364.832 494.692 451.474 437.757 520.581C377.059 594.254 295.309 645.534 201.233 661.903Z" fill="#FFF6E4"/>
            </svg>
        </div>
        <Paper sx={{ ml:50 }}>
            <img
                style={{
                    position: 'absolute',
                    right: 0,
                    width: '20%',
                    fontFamily:'Josefin Sans',
                    fontWeight: 500,
                    fontSize: '22px'
                }}
                    src="https://firebasestorage.googleapis.com/v0/b/adyantayurveda-cba8a.appspot.com/o/Website%2FTopTree.png?alt=media&token=184c4654-8237-454c-ba6a-de617cd2a5cf" />
            <Box sx={{ display: "flex", flexDirection: "row", mt:1, }}>
                <Box sx={{ display: "flex", flexDirection: "column", mt:1}}>
                    <label htmlFor="profileImg">
                        <Input accept="image/*" id="profileImg" type="file" onChange={(e) =>{
                            updateProfilePhoto(e.target.files[0], user.uid, 'profilePhotos');
                        }}/>
                        <Avatar
                            src={photo}
                            sx={{ width: 200, height: 200, mt: 5, mb: 3, ml: 5}}/>
                    </label>
                </Box>

                <Box component="form" noValidate sx={{ mt: 5, ml:5, width: 400, display:"flex", flexDirection:"row"}}>
                    <Box sx={{ display: "flex", flexDirection: "column", mt:1}}>
                        <TextField
                            sx={{mb:2, background: '#EFEFF1'}}
                            id="name"
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            sx={{mb:2, background: '#EFEFF1'}}
                            id="phone"
                            label="Mobile Number"
                            value={phone}
                            variant="outlined"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <TextField
                            sx={{mb:2, background: '#EFEFF1'}}
                            id="email"
                            label="Email"
                            value={email}
                            variant="outlined"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select
                            sx={{mb:2, background: '#EFEFF1'}}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={gender}
                            label="Age"
                            onChange={(e) => setGender(e.target.value)}>
                            <MenuItem value={'male'}>Male</MenuItem>
                            <MenuItem value={'female'}>Female</MenuItem>
                        </Select>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Birthday"
                                maxDate={new Date()}
                                inputFormat="dd/MM/yyyy"
                                onChange={(date) => setBirthday(moment(date).format("DD-MM-YYYY"))}
                                value={birthday}
                                renderInput={(params) => <TextField style={{width:'100%', background: '#EFEFF1'}} {...params} />}
                            />
                        </LocalizationProvider>
                        
                        <Typography sx={{
                            mt:2,
                        }} className={classes.address}>Address</Typography>
                        <TextField
                            sx={{mt:2,mb:2, background: '#EFEFF1'}}
                            id="address"
                            label="House No./ Street Name/ Area"
                            value={address}
                            variant="outlined"
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <Box sx={{ display: "flex", flexDirection: "row", mb:2 }}>
                            <TextField
                                sx={{mr:1, background: '#EFEFF1'}}
                                id="city"
                                label="city"
                                value={city}
                                variant="outlined"
                                onChange={(e) => setCity(e.target.value)}
                            />
                            <TextField
                                sx={{ml:1, background: '#EFEFF1'}}
                                id="state"
                                label="state"
                                value={state}
                                variant="outlined"
                                onChange={(e) => setState(e.target.value)}
                            />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "row", mb:2 }}>
                            <TextField 
                                sx={{mr:1, background: '#EFEFF1'}}
                                id="country"
                                label="country"
                                value={country}
                                variant="outlined"
                                onChange={(e) => setCountry(e.target.value)}
                            />
                            <TextField
                                sx={{ml:1, background: '#EFEFF1'}}
                                id="zip"
                                label="zip"
                                value={zip}
                                variant="outlined"
                                onChange={(e) => setZip(e.target.value)}
                            />
                        </Box>
                        <Typography sx={{
                            mt:2,
                        }} className={classes.address}>Education Details</Typography>

                        <TextField
                            sx={{mb:2, background: '#EFEFF1'}}
                            id="certificate"
                            label="Certificate"
                            value={certificate}
                            variant="outlined"
                            onChange={(e) => setCertificate(e.target.value)}
                        />

                        <TextField
                            sx={{mb:2, background: '#EFEFF1'}}
                            id="education"
                            label="Education"
                            value={education}
                            variant="outlined"
                            onChange={(e) => setEducation(e.target.value)}
                        />
                        <TextField
                            sx={{mb:2, background: '#EFEFF1'}}
                            id="specialization"
                            label="Specialization"
                            value={specialty}
                            variant="outlined"
                            onChange={(e) => setSpecialty(e.target.value)}
                        />
                        <TextField
                            sx={{mb:2, background: '#EFEFF1'}}
                            id="experience"
                            label="Experience (in Years)"
                            value={experience}
                            variant="outlined"
                            onChange={(e) => setExperience(e.target.value)}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{mb:2, background: '#74613C', width: 'fit-content'}}
                            onClick={handleSubmit}>
                            Save Changes
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Paper>
        <Footer />
    </ThemeProvider>
    )
}