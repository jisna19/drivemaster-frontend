import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginBackground from '../img/login.jpg';

const StaffLogin = () => {
    const navigate = useNavigate();

    const [data, changeData] = useState({ "email": "", "password": "" });

    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        if (!data.email || !data.password) {
            alert("Please fill in both email and password");
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!data.email || !emailRegex.test(data.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const minPasswordLength = 4;
        const maxPasswordLength = 10;
        if (data.password.length < minPasswordLength || data.password.length > maxPasswordLength) {
            alert(`Password must be between ${minPasswordLength} and ${maxPasswordLength} characters long.`);
            return;
        }

        axios.post("http://localhost:5000/staffsignin", data).then(
            (response) => {
                if (response.data.status === "incorrect password") {
                    alert("Incorrect password");
                } else if (response.data.status === "invalid emailid") {
                    alert("Invalid email ID");
                } else {
                    let token = response.data.token;
                    let userId = response.data.userId;
                    sessionStorage.setItem("userId", userId);
                    sessionStorage.setItem("token", token);
                    alert("Login Successful");
                    navigate("/StaffHome");
                }
            }
        ).catch((error) => {
            console.log(error.message);
            alert(error.message);
        });
    };

    // Define styles for background and form
    const backgroundStyle = {
        backgroundImage: `url(${loginBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    };

    const formStyle = {
        backgroundColor:'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        width: '100%',
        maxWidth: '400px',
    };

    return (
        <div style={backgroundStyle}>
            <div style={formStyle}>
            <h1 className="display-4 text-center" style={{ fontWeight: 'bold',color: 'black',textAlign: 'center' }}>SIGN IN</h1>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" name="email" value={data.email} onChange={inputHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" value={data.password} onChange={inputHandler} />
                </div>
                <button className="btn btn-success w-100 mb-2" onClick={readValue}>Sign In</button>
                <Link to="/Staffsignup" className="btn btn-primary w-100">New User? Register</Link>
            </div>
        </div>
    );
};

export default StaffLogin;
