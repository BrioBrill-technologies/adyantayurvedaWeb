import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import Login from './Components/Pages/Patients/Auth/Login';
import Reset from './Components/Pages/Patients/Auth/Reset';
import Register from './Components/Pages/Patients/Auth/Register';
import Profile from './Components/Pages/Patients/profile';
import Therapies from './Components/Pages/Patients/Therapies';
import Menubar from "./Components/Navbar/MenuBar";
import Navbar from "./Components/Navbar/Navbar";
import AdminRoutes from "./Components/Pages/Admin/Adminroutes";
import Doctors from "./Components/Pages/Patients/Doctors";
import Booking from "./Components/Pages/Patients/Booking";
import Land from "./Components/Land";
import Appointments from "./Components/Pages/Patients/appoitments";
function App() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occurred while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    fetchUserName();
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
        <Route path="login" element={<Login />} />
        <Route path="reset" element={<Reset />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="therapies" element={<Therapies />} />
        <Route path="admin/*" element={<AdminRoutes />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="booking" element={<Booking />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="*" element={<Land />} />
      </Routes>
    </div>
  );
}


export default App;
