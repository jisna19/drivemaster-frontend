import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginBackground from '../img/login.jpg';
import NavBar from './NavBar';
import StudentNavBar from './StudentNavbar';
import './SignIn.css';


const SignIn = () => {
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

        axios.post("http://localhost:5000/StudentLogin", data).then(
            (response) => {
                console.log(response.data);

                if (response.data.status === "incorrect password") {
                    alert("Incorrect password");
                } else if (response.data.status === "invalid emailid") {
                    alert("Invalid email ID");
                } else {
                    let token = response.data.token;
                    let userId = response.data.student;
                    let studentName = response.data.studentName;
                    let studentEmail = response.data.studentEmail;

                    sessionStorage.setItem("userId", userId);
                    sessionStorage.setItem("studentName", studentName);
                    sessionStorage.setItem("studentEmail", studentEmail);
                    sessionStorage.setItem("token", token);
                    console.log(userId,studentName,studentEmail)
                    

                    alert("Login Successful");
                    navigate("/courses");
                }
            }
        ).catch((error) => {
            console.log(error.message);
            alert(error.message);
        });
    };

    // Define styles for background and form design
    const backgroundStyle = {
        backgroundImage: `url(${loginBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    };

    const formStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        background: 'rgba(255, 255, 255, 0.8)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        width: '100%',
        maxWidth: '400px', // Maximum width for form
        textAlign: 'center', // Center-align text in form
    };


    return (
        <div>
            <StudentNavBar />
            <div style={backgroundStyle}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <div style={formStyle}>
                                <h1 className="display-4 text">SIGN IN</h1>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        value={data.email}
                                        onChange={inputHandler}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        value={data.password}
                                        onChange={inputHandler}
                                    />
                                </div>
                                <div>
                                    <button className="btn btn-success w-100 mb-2" onClick={readValue}>Sign In</button>
                                    <Link to="/StudentReg" className="btn btn-primary w-100">New User? Register</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
