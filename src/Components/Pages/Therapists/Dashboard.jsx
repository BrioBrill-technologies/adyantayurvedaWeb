import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase";
import { getBookings, getSingleApproved } from "../../../Hooks/useFetch";

function TherapistDashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [doctor, setDoctor] = useState([]);
    const navigate = useNavigate();

    const fetchAppointments = async () => {
        try {
            const p = await getSingleApproved(user.uid, 'admins'); // change to doctors
            setDoctor(p);
            console.log(p);
            const data = await getBookings('uid', 'T01'); // change to user.uid
            for (let i = 0; i < data.length; i++) {
                const d = data[i];
            }
        } catch (err) {
            console.error(err);
            alert("An error occurred while fetching user data");
        }
    }

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchAppointments();
    }, [user, loading]);
    return (
        <div >
            <h1>Doctor Dashboard</h1>
        </div>
    );
}

export default TherapistDashboard;