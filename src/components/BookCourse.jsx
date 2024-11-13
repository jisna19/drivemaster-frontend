import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BookCourse.css'; // Ensure this points to the correct CSS file
import { useNavigate } from 'react-router-dom';
import StudentNavBar from './StudentNavbar';
// import QRCode from 'qrcode.react';
import { QRCodeCanvas } from 'qrcode.react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const BookCourse = () => {
    const [months, setMonths] = useState(1);
    const [payment, setPayment] = useState(0);
    const [studentName, setStudentName] = useState("");
    const [studentEmail, setStudentEmail] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("credit card");
    const [message, setMessage] = useState("");
    const [showQRCode, setShowQRCode] = useState(false);
    const navigate = useNavigate();
    const studentId = sessionStorage.getItem('userId');
    const name = sessionStorage.getItem('studentName');
    const email = sessionStorage.getItem('studentEmail');
    const token = sessionStorage.getItem('token');
    console.log(name, email);

    const [selectedVehicles, setSelectedVehicles] = useState({
        twoWheeler: false,
        fourWheeler: false,
        heavyVehicle: false,
    });

    // Calculate payment based on selected vehicle types and months
    useEffect(() => {
        let baseAmount = 0;
        if (selectedVehicles.twoWheeler) baseAmount += 3000;
        if (selectedVehicles.fourWheeler) baseAmount += 8000;
        if (selectedVehicles.heavyVehicle) baseAmount += 10000;

        // Multiply the base amount by the number of months
        const totalAmount = baseAmount * months;
        setPayment(totalAmount);
    }, [selectedVehicles, months]);

    const handleVehicleChange = (e) => {
        const { name, checked } = e.target;
        setSelectedVehicles((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const handleBooking = async () => {
        // Create a course array with the selected vehicles
        const course = Object.keys(selectedVehicles)
            .filter((vehicle) => selectedVehicles[vehicle]); // Get only selected vehicles

        try {
            const response = await axios.post("http://localhost:5000/bookCourse", {
                course, // Pass the selected vehicles array
                studentId,
                months,
                payment,
                studentName: name, // Use existing session storage name
                studentEmail: email, // Use existing session storage email
                status: "success",
                paymentMethod
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (response.data.status === "success") {
                // setMessage(response.data.message);
                // alert("Booked Successfully");
                setShowQRCode(true); // Show QR code on successful booking
            } else {
                setMessage(response.data.message);
            }
        } catch (error) {
            console.error("Booking error:", error);
            setMessage("Error booking course");
        }
    };

    const handlePayment = () => {
        // Generate billing PDF
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text("Billing Invoice", 20, 20);
        doc.autoTable({
            head: [['Details', 'Information']],
            body: [
                ['Name', name],
                ['Email', email],
                ['Payment Amount', `Rs. ${payment}`],
                ['Payment Method', paymentMethod],
                ['Vehicle Types', Object.keys(selectedVehicles).filter(v => selectedVehicles[v]).join(", ")],
                ['Months of Study', months],
            ]
        });
        doc.save(`Invoice_${name}.pdf`);
        alert("Payment successfull");
        navigate("/Home");
    };

    return (
        <div>
            <StudentNavBar />
            <div className="booking-container">
                <div className="booking-form">
                    <h2>Book this Course</h2>
                    <div>
                        <label>Name:</label>
                        <input type="text" value={name} onChange={(e) => setStudentName(e.target.value)} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setStudentEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Months of Study:</label>
                        <input type="number" min="1" value={months} onChange={(e) => setMonths(Number(e.target.value))} />
                    </div>
                    <div>
                        <label>Vehicle Types:</label>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    name="twoWheeler"
                                    checked={selectedVehicles.twoWheeler}
                                    onChange={handleVehicleChange}
                                />
                                Two Wheeler (₹3000)
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="fourWheeler"
                                    checked={selectedVehicles.fourWheeler}
                                    onChange={handleVehicleChange}
                                />
                                Four Wheeler (₹8000)
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="heavyVehicle"
                                    checked={selectedVehicles.heavyVehicle}
                                    onChange={handleVehicleChange}
                                />
                                Heavy Vehicle (₹10000)
                            </label>
                        </div>
                    </div>
                    <div>
                        <label>Payment Amount:</label>
                        <div>₹{payment}</div>
                    </div>
                    <div>
                        <label>Payment Method:</label>
                        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                            <option value="credit card">Credit Card</option>
                            <option value="debit card">Debit Card</option>
                            <option value="paypal">PayPal</option>
                        </select>
                    </div>
                    <div className="col col-12">
                        <button className="btn btn-success" onClick={handleBooking}>Book Now</button>
                    </div>
                    {showQRCode && (
                        <div>
                            <h3>Scan the QR code to complete the payment:</h3>
                            {/* <QRCode value={`Payment for ${name} - ₹${payment}`} /> */}
                            <QRCodeCanvas value={`Payment for ${name} - ₹${payment}`} />
                            <button className="btn btn-primary" onClick={handlePayment}>Pay</button>
                        </div>
                    )}
                    {message && <p>{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default BookCourse;
