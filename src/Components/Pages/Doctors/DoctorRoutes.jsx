import { Route, Router, Routes } from "react-router-dom";
import Doctors from "./Doctors";
function DoctorRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Doctors />} />
        </Routes>
    )
}

export default DoctorRoutes;