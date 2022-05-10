import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import Login from './Components/Pages/Auth/Login';
import Reset from './Components/Pages/Auth/Reset';
import Register from './Components/Pages/Auth/Register';
import Profile from './Components/Pages/Patients/profile';
import Therapies from './Components/Pages/Patients/Therapies';
import Menubar from "./Components/Navbar/MenuBar";
import Navbar from "./Components/Navbar/Navbar";
import Doctors from "./Components/Pages/Patients/Doctors";
import Booking from "./Components/Pages/Patients/Booking";
import Land from "./Components/Land";
import Appointments from "./Components/Pages/Patients/appoitments";
import AdminHome from "./Components/Pages/Admin/AdminHome";
import AdminProfile from "./Components/Pages/Admin/profile";
import DoctorProfile from "./Components/Pages/Doctors/profile";
import TherapistProfile from "./Components/Pages/Therapists/profile";
import DocDashboard from "./Components/Pages/Doctors/Dashboard";
import TherapistDashboard from "./Components/Pages/Therapists/Dashboard";
import DocRegister from "./Components/Pages/Auth/DocRegister";
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
        } else if (data.type === 'therapists'){
          setType('therapists')
        } else {
          setType('patient')
        }
        user.type = data.type;
        console.log(user)
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
    <div className="app">
      {user && (
        <Menubar />
      )}
      {!user && (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="*" element={<Land />} />
        {/* Authentication Routes */}
        <Route path="login" element={<Login />} />
        <Route path="reset" element={<Reset />} />
        <Route path="register" element={<Register />} />
        {/* Patient Routes */}
        <Route path="profile" element={<Profile />} />
        <Route path="therapies" element={<Therapies />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="booking" element={<Booking />} />
        <Route path="appointments" element={<Appointments />} />
        {/* Admin Routes */}
        <Route path="admin/" element={<AdminHome />} />
        <Route path="admin/profile" element={<AdminProfile />} />
        {/* Doctor Routes */}
        <Route path="doctor/register" element={<DocRegister />} />
        <Route path='doctor/profile' element={<DoctorProfile />} />
        <Route path='doctor/dashboard' element={<DocDashboard />} />
        {/* Therapist Routes */}
        <Route path='therapist/profile' element={<TherapistProfile />} />
        <Route path='therapist/dashboard' element={<TherapistDashboard />} />
      </Routes>
    </div>
  );
}


export default App;
