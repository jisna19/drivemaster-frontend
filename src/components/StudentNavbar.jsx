import React from 'react';
import logo from '../img/logo2.jpg'; // Adjust this path as necessary
import './NavBar.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const StudentNavBar = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token from local storage
        localStorage.removeItem('studentId'); // Optionally remove studentId if used
        navigate('/'); 
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center" href="/dashboard">
                        <img src={logo} alt="Driving School Logo" className="logo" />
                        <h2 className="ms-2">DRIVING SCHOOL</h2>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/courses">Courses</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/submitFeedback">Feedback</a>
                            </li>
                           
                            {/* Logout Button */}
                            <li className="nav-item">
                                <button className="btn btn-danger nav-link" onClick={handleLogout}>
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default StudentNavBar;
