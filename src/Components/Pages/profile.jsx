
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { auth, db, updateUser } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Button, Container, CssBaseline, TextField } from "@mui/material";
import { Box } from "@mui/system";

const theme = createTheme();
export default function Profile() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            console.log("here we are ",data);
            setName(data.name);
            setEmail(data.email);
            setPhone(data.phone);
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
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Phone"
                        variant="outlined"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={(e) =>{
                            e.preventDefault();
                            updateUser(user.uid, 
                                name,
                                email,
                                phone
                            );
                        }}>
                        Update
                    </Button>
                </Box>
            </Container>
        </ThemeProvider>
    )
}