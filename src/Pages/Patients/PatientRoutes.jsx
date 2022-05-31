import { Route, Router, Routes } from "react-router-dom";
import Doctors from "./Doctors";
function PatientRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Doctors />} />
        </Routes>
    )
}

export default PatientRoutes;