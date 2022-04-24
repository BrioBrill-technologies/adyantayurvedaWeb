import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Land() {
    const handleLogout = () => {
        navigate('/login')
    }

    let navigate = useNavigate();
    return (
        <div>
            <button onClick={handleLogout}>Log In</button>
        </div>
    )
}
