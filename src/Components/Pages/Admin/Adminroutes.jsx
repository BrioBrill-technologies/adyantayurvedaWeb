import { Route, Router, Routes, useNavigate } from "react-router-dom";
import AdminHome from "./AdminHome";
import {auth, db} from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import AdminLogin from "./Auth/Login";
import Profile from "./profile";
function AdminRoutes() {
    const [user, loading, error] = useAuthState(auth);
    const [type, setType] = useState("");
    const navigate = useNavigate();
    const fetchUser = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setType(data.type);
        } catch (err) {
            console.error(err);
            alert("An error occurred while fetching user data");
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) navigate("/login");
        fetchUser();
    }, [user, loading]);

    return (
        <Routes>
            {type === "admin" && (
                <>
                <Route path="/" element={<AdminHome />} />
                <Route path="profile" element={<Profile />} />
                </>
            )} 
            <Route path="*" element={<AdminLogin />} />
            <Route path="login" element={<AdminLogin />} />
            <Route path="reset" element={<AdminHome />} />
            <Route path="register" element={<AdminHome />} />
        </Routes>
    )
}

export default AdminRoutes;