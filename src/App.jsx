import Home from './Components/Home';
import Login from './Components/Pages/Login';
import Reset from './Components/Pages/Reset';
import Register from './Components/Pages/Register';
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Menubar from "./Components/Navbar/MenuBar";
import Navbar from "./Components/Navbar/Navbar";
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
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
    </div>
  );
}


export default App;
