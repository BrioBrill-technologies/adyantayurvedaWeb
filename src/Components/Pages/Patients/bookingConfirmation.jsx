import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Confirmation(){
    const navigate = useNavigate();
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Booking Confirmation</h5>
                            <p className="card-text">Thank you for booking with us. We will get back to you shortly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;