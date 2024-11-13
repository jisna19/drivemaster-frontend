import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './AdminLogin.css';  // Import the CSS file for styling
import NavBar from './NavBar';

const AdminLogin = () => {
    // State to store admin login data
    const [adminData, setAdminData] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();  // Hook to handle navigation

    // Function to handle changes in form inputs
    const handleInputChange = (e) => {
        setAdminData({ ...adminData, [e.target.name]: e.target.value });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevents default page reload

        try {
            // Send a POST request to the backend with admin login credentials
            const response = await axios.post('http://localhost:5000/adminLogin', adminData);
            
            // Check if login was successful
            if (response.data.status === 'Login successful') {
                // Save the token to local storage or session storage
                localStorage.setItem('token', response.data.token);
                alert('Login successful');
                
                // Redirect to admin dashboard (or any other page)
                navigate('/adminDashboard');
            } else {
                alert(response.data.status);  // Display error message from backend
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Error logging in. Please try again.');
        }
    };

    return (
        
        <div className="login-page">
            <div className="login-container">
                <h2>Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            value={adminData.username}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={adminData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3 text-center">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
