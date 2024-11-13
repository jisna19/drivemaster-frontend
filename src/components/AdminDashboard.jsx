import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import AddCategory from './AddCategory';
import './AdminDashboard.css';  // Import the CSS for styling
import admin from '../img/admin.png';  // Import the admin's profile picture

import ViewStaff from './ViewStaff';
import NavBar from './NavBar';
import AdminFeedbackView from './AdminFeedbackView';
import StaffHome from './StaffHome';

const AdminDashboard = () => {
    return (
        <div>
            <NavBar/>
        <div className="admin-dashboard">
            
            {/* Sidebar for Navigation */}
            <Sidebar />
            
            {/* Main content area */}
            <div className="main-content">
                {/* Dashboard Header */}
                <header className="dashboard-header">
                    <div className="profile-container">
                        <img 
                            src={admin} 
                            alt="Admin Profile" 
                            className="profile-image"
                        />
                        <h2 className="admin-name">ADMIN</h2>
                    </div>
                </header>
                
                {/* Dashboard Content */}
                <h2>Welcome Back, Admin!</h2>
                <Routes>
                    <Route path="/viewStaff" element={<ViewStaff />} /> 
                    <Route path="/viewFeedback" element={<AdminFeedbackView />} /> 
                    <Route path="/staffHome" element={<StaffHome />} />
                </Routes>
            </div>
        </div>
        </div>
    );
};

export default AdminDashboard;
