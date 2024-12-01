import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    // Check if user is logged in on component mount
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            // Redirect to login page if no user is found
            navigate("/login");
        }
    }, [navigate]);

    const handleLogout = () => {
        // Clear user data from localStorage
        localStorage.removeItem("user");
        // Redirect to login page
        navigate("/login");
    };

    return (
        <div className="dashboard-container">
            <h1>Welcome to the Dashboard!</h1>
            <p>This is where your app's main content would go.</p>
            <button onClick={handleLogout} className="btn-primary">
                Log Out
            </button>
        </div>
    );
}

export default Dashboard;
