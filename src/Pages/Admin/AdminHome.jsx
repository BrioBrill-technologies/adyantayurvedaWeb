import { useAuthState } from 'react-firebase-hooks/auth';
import {
    getTotalInvoiceAmount,
    getApproved,
    getPatients,
    getSingleApproved,
    getNotApproved,
} from '../../Hooks/useFetch'
import { auth, db } from '../../firebase';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow,
    Paper,
    Button,
    Typography,
    Modal, 
} from '@mui/material';
import { addApproval } from '../../Hooks/usePost';
import StaffDetails from './StaffDetails';
import { collection, getDocs, query, where } from 'firebase/firestore';

function AdminHome() {
    const [user, loading, error] = useAuthState(auth);
    const [totalAmount, setTotalAmount] = useState(0);
    const [doctors, setDoctors] = useState([]);
    const [notDoctors, setNotDoctors] = useState([]);
    const [patients, setPatients] = useState([]);
    const [therapists, setTherapists] = useState([]);
    const [notTherapists, setNotTherapists] = useState([]);
    const [visible, setVisible] = useState(false);
    const [editId, setEditId] = useState('');
    const [colType, setColType] = useState('');
    const [type, setType] = useState('');
    const navigate = useNavigate();
    const fetchTotalAmount = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            if(data.type !== 'admin') {
                navigate('/');
            } else {
                setType(data.type);
            }
            const totalAmount = await getTotalInvoiceAmount();
            setTotalAmount(totalAmount);
            const docs = await getApproved("doctors");
            setDoctors(docs);
            const notDocs = await getNotApproved('doctors');
            setNotDoctors(notDocs);
            const therapists = await getApproved("therapists");
            setTherapists(therapists);
            const notTherapists = await getNotApproved('therapists');
            setNotTherapists(notTherapists);
            const patients = await getPatients();
            setPatients(patients);
        } catch (err) {
            console.error(err);
            alert("An error occurred while fetching user data");
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchTotalAmount();
    }, [loading]);

    const handleApprove = (type, id) => {
        try {
            console.log(type, id);
            addApproval(id, type);
        } catch (err) {
            console.error(err);
            alert("An error occurred while approving");
        }
    }

    const handleEdit = (type, id) => {
        setEditId(id);
        setColType(type);
        setVisible(true);
    }

    const handleDelete = (type, id) => {
    }

    const handleClose = () => {
        setVisible(false);
    }
  return (
    <div>
        { type === 'admin' && (
            <>
        <h2>Total Amount: {totalAmount}</h2>
        <h2>Doctors: {doctors.length} </h2>
        <h2>Not Approved Doctors: {notDoctors.length}</h2>
        <TableContainer component={Paper} sx={{maxWidth: 800}} style={{margin: '0 auto'}}>
            <Typography style={{
                textAlign:'center',
                fontWeight: 'bold',
                fontSize: '2vw',
                paddingTop: '3vw'}}>
                Approved Doctors
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {doctors.map(doc => {
                        return(
                            <TableRow>
                                <TableCell>{doc.name}</TableCell>
                                <TableCell>{doc.email}</TableCell>
                                <TableCell>{doc.phone}</TableCell>
                                <TableCell>{doc.address + ',' + doc.city + ',' + doc.state + ',' + doc.country}</TableCell>
                                <TableCell>
                                    {/* <Button onClick={() => handleEdit('doctors', doc.id)}>EDIT</Button> */}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            <Typography style={{
                textAlign:'center',
                fontWeight: 'bold',
                fontSize: '2vw',
                paddingTop: '3vw'}}>
                    Not Approved Doctors
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Approve</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {notDoctors.map(doc => {
                        return(
                            <TableRow>
                                <TableCell>{doc.name}</TableCell>
                                <TableCell>{doc.email}</TableCell>
                                <TableCell>{doc.phone}</TableCell>
                                <TableCell>{doc.address}</TableCell>
                                <TableCell>
                                    <Button onClick={() => handleApprove('doctors', doc.id)}>Approve</Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                    </TableBody>
            </Table>
        </TableContainer>
        <h2>Therapists: {therapists.length}</h2>
        <h2>Not Approved Therapists: {notTherapists.length}</h2>
        <TableContainer component={Paper} sx={{maxWidth: 800}} style={{margin: '0 auto'}}>
            <Typography style={{
                textAlign:'center',
                fontWeight: 'bold',
                fontSize: '2vw',
                paddingTop: '3vw'}}>
                Approved Therapists
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {therapists.map(doc => {
                        return(
                            <TableRow>
                                <TableCell>{doc.name}</TableCell>
                                <TableCell>{doc.email}</TableCell>
                                <TableCell>{doc.phone}</TableCell>
                                <TableCell>{doc.address + ',' + doc.city + ',' + doc.state + ',' + doc.country}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            <Typography style={{
                textAlign:'center',
                fontWeight: 'bold',
                fontSize: '2vw',
                paddingTop: '3vw'}}>
                    Not Approved Therapists
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Approve</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {notTherapists.map(doc => {
                        return(
                            <TableRow>
                                <TableCell>{doc.name}</TableCell>
                                <TableCell>{doc.email}</TableCell>
                                <TableCell>{doc.phone}</TableCell>
                                <TableCell>{doc.address}</TableCell>
                                <TableCell>
                                    <Button onClick={() => handleApprove('therapists', doc.id)}>Approve</Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                    </TableBody>
            </Table>
        </TableContainer>
        <h2>Patients: {patients.length}</h2>
        <TableContainer component={Paper} sx={{maxWidth: 500}} style={{margin: '0 auto'}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {patients.map(doc => {
                        return (
                            <TableRow>
                                <TableCell>{doc.name}</TableCell>
                                <TableCell>{doc.email}</TableCell>
                                <TableCell>{doc.phone}</TableCell>
                                <TableCell>{doc.address}</TableCell>
                        </TableRow>
                            )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        {/* <Modal
            open={visible}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <StaffDetails type={colType} id={editId}/>
        </Modal> */}
        </>
        )}
    </div>
  );
}

export default AdminHome;