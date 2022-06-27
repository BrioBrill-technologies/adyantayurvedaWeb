import { collection, getDocs, query, setDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import moment from "moment";
import { modifyBooking } from "../../Hooks/usePost";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Footer from "../../Components/Navbar/Footer";

function Appointments(){
    const [user, loading, error] = useAuthState(auth);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();
    const fetchBookings = async () => {
        try{
            const q = query(collection(db, "bookings"), where("patientId", "==", user?.uid));
            const doc = await getDocs(q);
            for(let i = 0; i < doc.docs.length; i++){ 
                const data = doc.docs[i].data();
                data.id = doc.docs[i].id;
                data.date = data.date.toDate();
                const docs = await getDocs(query(collection(db, "doctors")));
                for(let j = 0; j < docs.docs.length; j++){
                    if(docs.docs[j].data().uid === data.DocId){
                        data.doctor = doc;
                        break;
                    }
                }
                setBookings(bookings => [...bookings, data]);
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred while fetching Appointment data");
        }
    }
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchBookings();
    }, [user, loading]);

    const handleModifyBooking = async (id, status) => {
        try {
            await modifyBooking(id, status);
        } catch (err) {
            console.error(err);
            alert("An error occurred while modifying booking");
        }
    }

    return(
        <div>
            <div style={{zIndex:-1,position:'absolute',top:0}}>
                <svg width="530" height="676" viewBox="0 0 530 676" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M201.233 661.903C91.3224 681.028 -31.9961 688.711 -117.595 617.214C-205.677 543.643 -234.938 418.992 -226.576 304.572C-219.014 201.086 -155.635 112.168 -75.8345 45.7823C-6.293 -12.0693 84.5632 -17.706 174.342 -28.9526C277.828 -41.9163 397.071 -92.2216 475.265 -23.254C553.787 46.0031 526.758 171.111 519.556 275.529C513.397 364.832 494.692 451.474 437.757 520.581C377.059 594.254 295.309 645.534 201.233 661.903Z" fill="#FFF6E4"/>
                </svg>
            </div>
            <Paper sx={{ ml:30, mt:5,marginTop:'4vw' }}>
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
                <Typography  sx={{  marginRight:'5vw',
                                    fontFamily:'Lora',
                                    fontWeight:500,
                                    fontSize:'30px',
                                    color:'#74613C',
                                    align:'center',
                                    textAlign:'center'}}variant="h5" component="h5">
                    Upcoming Appointments
                </Typography>
                <Typography sx={{ textAlign:'center',marginRight:'5vw'}}>
                <svg width="692" height="1" viewBox="0 0 692 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="691.003" y2="0.5" stroke="#DBDBDB"/>
                </svg>
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead >
                            <TableRow >
                                <TableCell sx={{fontFamily:'Josefin Sans',fontWeight:500,fontSize:'20px',color:'#74613C'}}>Date</TableCell>
                                <TableCell sx={{fontFamily:'Josefin Sans',fontWeight:500,fontSize:'20px',color:'#74613c'}}>Time</TableCell>
                                <TableCell sx={{fontFamily:'Josefin Sans',fontWeight:500,fontSize:'20px',color:'#74613c'}}>Doctor</TableCell>
                                <TableCell sx={{fontFamily:'Josefin Sans',fontWeight:500,fontSize:'20px',color:'#74613c'}}>Status</TableCell>
                                <TableCell sx={{fontFamily:'Josefin Sans',fontWeight:500,fontSize:'20px',color:'#74613c'}}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bookings.map((booking, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{fontFamily:'Lora',fontSize:'16px'}}>{moment(booking.date).format("MMMM Do YYYY")}</TableCell>
                                    <TableCell sx={{fontFamily:'Lora',fontSize:'16px'}}>{booking.time}</TableCell>
                                    <TableCell sx={{fontFamily:'Lora',fontSize:'16px'}}>{booking.doctor?.name}</TableCell>
                                    <TableCell sx={{fontFamily:'Lora',fontSize:'16px'}}>{booking.status}</TableCell>
                                    <TableCell>
                                        <Button onClick={() =>{
                                            alert('TODO')
                                        }}sx={{fontFamily:'Josefin Sans',fontWeight:400,fontSize:'15px',color:'#74613C'}}>View</Button>
                                        <Button onClick={() =>{
                                            handleModifyBooking(booking.id, 'Cancelled');
                                        }}sx={{fontFamily:'Josefin Sans',fontWeight:400,fontSize:'15px',color:'#74613C'}}>Cancel</Button>    
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <Footer />
        </div>
    )
}

export default Appointments;