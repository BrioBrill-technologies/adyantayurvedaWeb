import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { getSingleApproved } from "../../Hooks/useFetch";

const StaffDetails = ({ type, id }) => {
    const [staff, setStaff] = useState([]);
    console.log(type, id);
    const fetchStaff = async () => {
        try {
            const doc = await getSingleApproved(id, type);
            const data = doc;
            setStaff(data);
            console.log(data);
        } catch (err) {
            console.error(err);
            alert("An error occurred while fetching user data");
        }
    };
    useEffect(() => {
        if (type && id) {
            fetchStaff();
        }
    }, [type]);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    return (
        <Box sx={style}>
          <TextField
                label="Name"
                value={staff.name}
                margin="normal"
                variant="outlined"
                fullWidth
            />
            <TextField
                label="Email"
                value={staff.email}
                margin="normal"
                variant="outlined"
                fullWidth
            />
            <TextField
                label="Phone"
                value={staff.phone}
                margin="normal"
                variant="outlined"
                fullWidth
            />
            <TextField
                label="Address"
                value={staff.address}
                margin="normal"
                fullWidth
            />
            
        </Box>
    );
}

export default StaffDetails;