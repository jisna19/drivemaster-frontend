import React, { useState } from 'react';
import NavBar from './NavBar';
import PageHeader from './PageHeader'; // Import the PageHeader component
import StudentNavBar from './StudentNavbar';
import './BookCourse.css';

const Courses = () => {
    const [data, changedata] = useState([
        {
            "id": 1,
            "name": "Two Wheeler",
            "description": "Why Choose Us? Our experienced instructors provide personalized attention, ensuring you gain the confidence and skills needed to ride safely and responsibly. Join us today and embark on your journey to becoming a skilled two-wheeler rider!",
            "duration": "4 weeks",
            "url": "https://i.ytimg.com/vi/zwiXxCVVScY/maxresdefault.jpg"
        },
        {
            "id": 2,
            "name": "Four Wheeler",
            "description": "Why Choose Us? Our certified instructors provide personalized coaching and a supportive learning environment, helping you become a safe and responsible driver. Join us today and take the first step toward gaining your driver's license!",
            "duration": "4 weeks",
            "url": "https://img-mm.manoramaonline.com/content/dam/mm/mo/premium/news-plus/images/2024/1/23/driving-test.jpg?w=575&h=299"
        },
        {
            "id": 3,
            "name": "Heavy Vehicle",
            "description": "Why Choose Us? Why Choose Us? Our Heavy Vehicle course is designed for those aspiring to drive larger vehicles, including trucks and buses. With our experienced instructors, you'll receive personalized training that focuses on safety, control, and confidence behind the wheel.",
            "duration": "4 weeks",
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTMXuWLwRBHDrMoh5b0W7Yh_wq--06d2sKDWKw1GCN03GxZTsDXa8j6LJqUAtBuad3hY&usqp=CAU"
        }
    ]);

    return (
        <div>
            <PageHeader title="Our Courses" subtitle="Explore Our Driving Courses" />
            <div className="container">
                <StudentNavBar />
                <div className="row">
                    <div className="col-12">
                        <div className="row g-3">
                            {
                                data.map((value, index) => (
                                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-4">
                                        <div className="card">
                                            <img src={value.url} className="card-img-top" alt={value.name} />
                                            <div className="card-body">
                                                <h5 className="card-title">{value.name}</h5>
                                                <p className="card-text">{value.description}</p>
                                                <p className="card-text">Duration: {value.duration}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="col col-12">
                        <a href='bookCourse/' className="btn btn-success">Book</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
