import React from 'react';
import './About.css'; // Import your CSS file if needed
import about1 from '../img/about1.jpg'; // Adjust path based on your structure
import about2 from '../img/about2.jpg'; // Adjust path based on your structure
import PageHeader from './PageHeader';
import NavBar from './NavBar';

const teamMembers = [
  {
    name: "Lena Pk",
    role: "Trainer",
    imgSrc: "https://www.topmediai.com/micro/passport-photo-maker/assets/bigger_pic3-38c3c289.png"
  },
  {
    name: "Jane John",
    role: "Trainer",
    imgSrc:"https://themewagon.github.io/drivin/img/team-4.jpg"
  },
  {
    name: "Alice Johnson",
    role: "Trainer",
    imgSrc: "https://www.shutterstock.com/image-photo/portrait-caucasian-woman-no-expression-600nw-1495026050.jpg"
  },
  {
    name: "Raju PC",
    role: "Trainer",
    imgSrc: "https://themewagon.github.io/drivin/img/team-3.jpg"
  }
];

const About = () => {
  // Function to handle button click
  const handleButtonClick = () => {
    alert("Thank you for your interest! We'll get back to you shortly.");
  };

  return (
    <div>
      {/* Page Header Section */}
      <PageHeader 
        title="About Us" 
        subtitle="Learn More About Our Driving School" 
      />

      {/* About Content Section */}
      <div className="container-xxl py-6">
        <div className="container">
        <NavBar/>
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{ minHeight: '400px' }}>
                <img
                  className="position-absolute w-100 h-100"
                  src={about2}
                  alt=""
                  style={{ objectFit: 'cover' }}
                />
                <img
                  className="position-absolute top-0 start-0 bg-white pe-3 pb-3"
                  src={about1}
                  alt=""
                  style={{ width: '200px', height: '200px' }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h6 className="text-primary text-uppercase mb-2">About Us</h6>
                <h1 className="display-6 mb-4">
                  We Help Students To Pass Test & Get A License On The First Try
                </h1>
                <p>
                  Join and take the first step towards becoming a confident and skilled driver. 
                  Contact us to schedule your first lesson or to learn more about our programs. 
                  We look forward to helping you achieve your driving goals!
                </p>

                <div className="row g-2 mb-4 pb-2">
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Fully Licensed
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Online Tracking
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Affordable Fee
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Best Trainers
                  </div>
                </div>
                <div className="row g-4">
                  <div className="col-sm-6">
                    <button 
                      className="btn btn-primary py-3 px-5" 
                      onClick={handleButtonClick} // Call the function on click
                    >
                      About Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container-xxl py-6">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
            <h6 className="text-primary text-uppercase mb-2">Meet The Team</h6>
            <h1 className="display-6 mb-4">We Have Great Experience Of Driving</h1>
          </div>
          <div className="row g-0 team-items">
            {teamMembers.map((member, index) => (
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`} key={index}>
                <div className="team-item position-relative">
                  <div className="position-relative">
                    <img className="img-fluid" src={member.imgSrc} alt={member.name} />
                  </div>
                  <div className="bg-light text-center p-4">
                    <h5 className="mt-2">{member.name}</h5>
                    <span>{member.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
