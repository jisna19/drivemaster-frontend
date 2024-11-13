
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StaffRegister = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        age: '',
        gender: '',
        email: '',
        password: '',
        contact: '',
        experience: ''
        //certificate: ''
    });


    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

const readValue = () => {
    let formData = {
        "name":data.name,
        "age":data.age,
        "gender":data.gender,
        "email":data.email,
        "password":data.password,
        "contact":data.contact,
        "experience":data.experience
        //"certificate": data.certificate
        
    };

     
    const minPasswordLength = 5;
    const maxPasswordLength = 10;
    const phoneLength = 10;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Simple regex for email validation
    const nameRegex = /^[a-zA-Z\s]+$/;  // Name validation (only letters and spaces)

    
    if (!data.name|| !nameRegex.test(data.name)) {
        alert("Name must only contain letters and cannot be empty.");
        return;
    }


    if (!data.age) {
        alert("Fill this Field");
        return;
    }

   
    if (!data.contact || data.contact.length !== phoneLength) {
        alert(`Contact number must be exactly ${phoneLength} digits.`);
        return;
    }


  
    if (!data.gender) {
        alert("Please select a Gender.");
        return;
    }

   
    if (!data.experience || isNaN(data.experience) || data.experience <= 0) {
        alert("Experience must be a positive number.");
        return;
    }


    if (!data.email || !emailRegex.test(data.email)) {
        alert("Please enter a valid email address.");
        return;
    }

   
    if (data.password.length < minPasswordLength || data.password.length > maxPasswordLength) {
        alert(`Password must be between ${minPasswordLength} and ${maxPasswordLength} characters long.`);
        return;
    }

    axios.post("http://localhost:5000/Staffsignup", formData)
        .then(response => {
            console.log(response);
            if (response.data.status === "success") {
                alert("Signup successful");
                navigate("/adminDashboard");
            } else {
                alert("Error during signup");
            }
        })
        .catch(error => console.error(error.message));
};

const backgroundStyle = {
    backgroundImage: 'url("../img/login.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
};

const formStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
};

return (
    <div style={backgroundStyle}>
        <div className="container">
            <div className="row">
                <div className="col col-12">
                    <div className="row g-3" style={formStyle}>
                        <div className="col col-12">
                            <h1 className="display-4 text"><center>SIGN UP</center></h1>
                        </div>
                        <div className="col col-12 col-sm-6">
                            <label htmlFor="name" className="form-label">Username</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6">
                            <label htmlFor="flatId" className="form-label">Age</label>
                            <input type="text" className="form-control" name='age' value={data.age} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6">
                            <label htmlFor="contactNo" className="form-label">Contact</label>
                            <input type="text" className="form-control" name='contact' value={data.contact} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6">
                            <label htmlFor="gender" className="form-label">Gender</label>
                            <select name="gender" className="form-control" value={data.gender} onChange={inputHandler}>
                                <option value="">Select</option>
                                <option value="Female">F</option>
                                <option value="Male">M</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6">
                            <label htmlFor="occupation" className="form-label">Experience</label>
                            <input type="text" className="form-control" name='experience' value={data.experience} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                        </div>
                        <div className="col col-12">
                            <button className="btn btn-success" onClick={readValue}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)};
export default StaffRegister;