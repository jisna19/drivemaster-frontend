import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import './FeedbackForm.css';

const AdminFeedbackView = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/viewFeedback');
                console.log(response.data); // Log the response for debugging
                setFeedbacks(response.data.feedbacks); // Ensure the data is an array
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFeedbacks();
    }, []);

    if (loading) {
        return <div className="loading">Loading feedback...</div>;
    }

    if (error) {
        return <div className="error">Error fetching feedback: {error}</div>;
    }

    return (
        <div className="feedback-container">
            <h2>Feedback List</h2>
            {feedbacks.length === 0 ? (
                <p>No feedback available.</p>
            ) : (
                <table className="feedback-table">
                    <thead>
                        <tr>
                            <th>Rating</th>
                            <th>Suggestions</th>
                            <th>Additional Comments</th>
                            <th>Recommend</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedbacks.map((feedback) => (
                            <tr key={feedback._id}>
                                <td>{feedback.rating}</td>
                                <td>{feedback.suggestions}</td>
                                <td>{feedback.additionalComments}</td>
                                <td>{feedback.recommend === 'Yes' ? 'Yes' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AdminFeedbackView;
