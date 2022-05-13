import { Input, Paper, TextareaAutosize, Typography } from "@material-ui/core";

function AddPrescription() {
    return (
        <Paper>
            <Typography variant="h5">Add Prescription</Typography>
            <TextareaAutosize rowsMin={10} rowsMax={10} placeholder="Enter Prescription" />
            <TextareaAutosize rowsMin={10} rowsMax={10} placeholder="Notes" />
            <Input placeholder="Date" disabled value={new Date()}/>
        </Paper>
    )
}
export default AddPrescription;