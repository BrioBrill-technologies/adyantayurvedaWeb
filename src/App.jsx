import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import {
  Routes,
  Route,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Common Routes
import Menubar from "./Components/Navbar/MenuBar";
import Land from "./Pages/Land";
import Login from "./Pages/Auth/Login";
import Reset from './Pages/Auth/Reset';
import Register from './Pages/Auth/Register';
import DocRegister from "./Pages/Auth/DocRegister";
import TherapistRegister from "./Pages/Auth/TherapyRegister";
import Contact from "./Pages/contact";
import Therapies from './Pages/Therapies';
import Doctors from "./Pages/Doctors";
import DoctorDetails from "./Pages/DoctorDetails";

// Patient Routes
import Profile from './Pages/Patients/profile';
import Booking from "./Pages/Patients/Booking";
import Pay from './Pages/Patients/Pay';
import Confirmation from "./Pages/Patients/bookingConfirmation";
import Appointments from "./Pages/Patients/appointments";
import BookingDetails from "./Pages/Patients/BookingDetails";

// Admin Routes
import AdminHome from "./Pages/Admin/AdminHome";
import AdminProfile from "./Pages/Admin/profile";

// Doctor Routes
import DoctorProfile from "./Pages/Doctors/profile";
import DocDashboard from "./Pages/Doctors/Dashboard";
import AppointmentDetails from "./Pages/Doctors/AppointmentDetails";
import PatientDetails from "./Pages/Doctors/PatientDetails";
import AddPrescription from "./Pages/Doctors/AddPrescription";

// Therapist Routes
import TherapistProfile from "./Pages/Therapists/profile";
import TherapistDashboard from "./Pages/Therapists/Dashboard";
import TherapyType from "./Pages/TherapieType";

const theme = createTheme({
  palette: {
    primary: {
      main: '#74613C',
    },
  },
});

function App() {
  const [user, loading, error] = useAuthState(auth);
  const [type, setType] = useState(""); 
  const fetchUser = async () => {
    try {
      if(user){
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        if(data.type === 'admin'){
          setType('admin')
        } else if (data.type === 'doctor'){
          setType('doctor')
        } else if (data.type === 'therapist'){
          setType('therapist')
        } else {
          setType('patient')
        }
        user.type = data.type;
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while fetching user data");
    }
  }
  useEffect(() => {
    if (loading) return;
    fetchUser();
  }, [user, loading]);
  return (
    <ThemeProvider theme={theme}>
      <Menubar />
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="*" element={<Land />} />
        {/* Authentication Routes */}
        <Route path="login" element={<Login />} />
        <Route path="reset" element={<Reset />} />
        {/* <Route path="register" element={<Register />} /> */}
        <Route path="contact" element={<Contact />} />
        {/* Patient Routes */}
        <Route path="profile" element={<Profile />} />
        <Route path="therapies" element={<Therapies />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="booking" element={<Booking />} />
        <Route path="pay" element={<Pay />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="appointmentDetails" element={<BookingDetails />} />
        <Route path="doctorDetails" element={<DoctorDetails />} />
        <Route path="therapyType" element={<TherapyType />} />
        {/* Admin Routes */}
        <Route path="admin/" element={<AdminHome />} />
        <Route path="admin/profile" element={<AdminProfile />} />
        {/* Doctor Routes */}
        <Route path="doctor/register" element={<DocRegister />} />
        <Route path='doctor/profile' element={<DoctorProfile />} />
        <Route path='doctor/dashboard' element={<DocDashboard />} />
        <Route path='doctor/appointmentDetails' element={<AppointmentDetails />} />
        <Route path='doctor/patientDetails' element={<PatientDetails />} />
        <Route path='doctor/prescription' element={<AddPrescription />} />
        {/* Therapist Routes */}
        <Route path="therapist/register" element={<TherapistRegister />} />
        <Route path='therapist/profile' element={<TherapistProfile />} />
        <Route path='therapist/dashboard' element={<TherapistDashboard />} />
      </Routes>
    </ThemeProvider>
  );
}


export default App;
