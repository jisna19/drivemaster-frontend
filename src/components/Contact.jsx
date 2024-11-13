import React from 'react';
import './Contact.css'; // Import your CSS file if needed
import PageHeader from './PageHeader'; // Import the PageHeader component
import NavBar from './NavBar';

const Contact = () => {
    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        alert("Thank you for your message!");
        window.location.reload(); // Refresh the page
    };

    return (
        <div>
            <PageHeader title="Contact Us" subtitle="Contact" />
            <div className="container-xxl py-6">
                <div className="container">
                <NavBar/>
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: '450px' }}>
                            <div className="position-relative h-100">
                                <iframe
                                    className="position-relative w-100 h-100"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893228.0581940575!2d76.15548514640776!3d9.931232575413283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08059e5a0e1a97%3A0x4b6c0b6591e6371c!2sKochi%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sus!4v1631922139426!5m2!1sen!2sus"
                                    frameBorder="0"
                                    style={{ minHeight: '450px', border: '0' }}
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex="0"
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <h6 className="text-primary text-uppercase mb-2">Contact Us</h6>
                            <h1 className="display-6 mb-4">If You Have Any Query, Please Contact Us</h1>
                            <p className="mb-4">
                                We are here to help you on your journey to becoming a skilled and confident driver. Whether you have questions about our courses, need assistance with scheduling lessons, or want more information about our services, we encourage you to reach out! </p>
                                <p>
                                    Our team is dedicated to providing you with the support and guidance you need. If you have any queries or concerns, please fill out the contact form below, and we will get back to you as soon as possible.
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control border-0 bg-light" id="name" placeholder="Your Name" required />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control border-0 bg-light" id="email" placeholder="Your Email" required />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control border-0 bg-light" id="subject" placeholder="Subject" required />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control border-0 bg-light" placeholder="Leave a message here" id="message" style={{ height: '150px' }} required></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
