import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';  // Add styles for the sidebar

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <NavLink to="/viewStaff" activeClassName="active-link">View Staff</NavLink>
                    <NavLink to="/viewFeedback" activeClassName="active-link">Feedback</NavLink>
                    <NavLink to="/staffHome" activeClassName="active-link">View  Bookings</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
