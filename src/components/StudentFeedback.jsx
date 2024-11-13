import React, { useState } from 'react';
import axios from 'axios';

const StudentFeedback = () => {
    const [formData, setFormData] = useState({
        rating: '',
        suggestions: '',
        additionalComments: '',
        recommend: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data before submit:", formData); // Debugging log

        try {
            const response = await axios.post('http://localhost:5000/submitFeedback', formData, {
                headers: { 'Content-Type': 'application/json' },
            });
            alert(response.data.message);
            console.log("Feedback submitted successfully:", response.data); // Debugging log
        } catch (error) {
            if (error.response) {
                console.error("Server Error:", error.response.data);
                alert(error.response.data.message || "Server Error. Please try again.");
            } else if (error.request) {
                console.error("Network Error:", error.request);
                alert("Network error. Please check your connection.");
            } else {
                console.error("Error:", error);
                alert("An error occurred while submitting feedback. Please try again.");
            }
        }
    };

    // Inline styles for the component
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundImage: 'url("https://img.freepik.com/premium-photo/colorful-sticky-notes-with-drawings-feedback-text-vibrant-background_464863-18874.jpg")', // Add your background image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.9,
        },
        form: {
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light white background with transparency
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            width: '400px', // Set a fixed width for the form
            textAlign: 'left', // Align text to the left
        },
        button: {
            width: '100%', // Full width button
            padding: '10px',
            backgroundColor: '#007bff', // Bootstrap primary color
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
        },
        buttonHover: {
            backgroundColor: '#0056b3', // Darken on hover
        },
        label: {
            marginBottom: '10px',
            display: 'block', // Ensure labels are block elements for better layout
        },
        select: {
            width: '100%', // Full width for selects
            padding: '8px',
            marginBottom: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
        },
        textarea: {
            width: '100%',
            height: '80px',
            padding: '8px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '10px',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.form}>
                <h2 style={{ textAlign: 'center' }}>Feedback Form</h2>
                <form onSubmit={handleSubmit}>
                    <label style={styles.label}>
                        Rating:
                        <select name="rating" value={formData.rating} onChange={handleChange} required style={styles.select}>
                            <option value="">Select...</option>
                            <option value="Very Good">Very Good</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                            <option value="Poor">Poor</option>
                            <option value="Very Poor">Very Poor</option>
                        </select>
                    </label>

                    <label style={styles.label}>
                        Additional Comments:
                        <textarea name="additionalComments" value={formData.additionalComments} onChange={handleChange} style={styles.textarea} />
                    </label>

                    <label style={styles.label}>
                        Suggestions:
                        <textarea name="suggestions" value={formData.suggestions} onChange={handleChange} style={styles.textarea} />
                    </label>

                    <label style={styles.label}>
                        Would you recommend us?
                        <select name="recommend" value={formData.recommend} onChange={handleChange} required style={styles.select}>
                            <option value="">Select...</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </label>

                    <button type="submit" style={styles.button}>Submit Feedback</button>
                </form>
            </div>
        </div>
    );
};

export default StudentFeedback;
