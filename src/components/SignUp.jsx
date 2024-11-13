import axios from 'axios';
import React, { useState } from 'react';
import './SignUp.css'; // Import your CSS file
import { Link, useNavigate } from 'react-router-dom';
//import NavBar from './NavBar';

const SignUp = () => {
    const navigate=useNavigate();
    const [data, setData] = useState({
        "name": "",
        "age": "",
        "email":"",
        "password": "",
        "contact": "",
        "cpassword": ""
    });
    

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        let formData={

            "name":data.name,
            "age":data.age,
            "email":data.email,
            "password":data.password,
            "contact":data.contact,
            "cpassword":data.cpassword

        }
      
        if (data.password !== data.cpassword) {
            alert( "Passwords do not match!");
        }

       
        
        axios.post("http://localhost:5000/StudentReg", formData).then(
            (response) => {
                console.log(response);
                if (response.data.status === "success") {
                    alert("User signed up successfully");
                    navigate("/StudentLogin")
                } else {
                    alert("User didn't sign up");
                }
            }
        )
       .catch(error=>console.error(error));
    };

    return (
        <div className="signup-container">
       
            <div className="signup-form">
                <h2><center><b>Let's Sign Up</b></center></h2>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />

                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="text" className="form-control" name='age' value={data.age} onChange={inputHandler} />
                    
                </div>
            
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email ID</label>
                    <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                </div>

                <div className="mb-3">
                    <label htmlFor="contact" className="form-label">Contact</label>
                    <input type="text" className="form-control" name='contact' value={data.contact} onChange={inputHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                </div>

                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name='cpassword' value={data.cpassword} onChange={inputHandler} />
                </div>
                <div className="mb-3">
                    <button className="btn btn-success" onClick={readValue}>Register</button>
                </div>
                <div className="mb-3">
                    <Link to="/StudentLogin" className="btn btn-primary">Back to Login</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;




