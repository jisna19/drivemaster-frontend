import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StaffHome.css'; 
const StaffHome = () => {
    const [bookings, setBookings] = useState([]); // State to hold booking details
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [error, setError] = useState(null); // State to handle error

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const token = localStorage.getItem('token'); // Get token from local storage
                const response = await axios.get('http://localhost:5000/bookings', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setBookings(response.data); // Set booking data
            } catch (err) {
                setError('Error fetching bookings'); // Set error message if the request fails
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchBookings(); // Call the function to fetch bookings
    }, []); // Empty dependency array means this effect runs once on mount

    // Render loading state or error message if applicable
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Booking Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Course ID</th>
                        <th>Months</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Payment Method</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking._id}> {/* Assuming booking has a unique _id */}
                            <td>{booking.studentName}</td>
                            <td>{booking.courseId}</td>
                            <td>{booking.months}</td>
                            <td>{booking.payment}</td>
                            <td>{booking.status}</td>
                            <td>{booking.paymentMethod}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StaffHome;
