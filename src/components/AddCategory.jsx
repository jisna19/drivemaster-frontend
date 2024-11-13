// import React, { useState } from 'react';
// import axios from 'axios';

// const AddCategory = () => {
//   const [categoryname, setCategoryname] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState(null);
//   const [message, setMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const onImageChange = (e) => {
//     setImage(e.target.files[0]); // Set the image file
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault(); // Prevent form submission from refreshing the page
//     setIsLoading(true);
//     setMessage(''); // Reset message

//     // Create form data to send in the POST request
//     const formData = new FormData();
//     formData.append('categoryname', categoryname);
//     formData.append('description', description);
//     formData.append('image', image); // Append the image file to formData

//     try {
//       // Call the backend API to add the category
//       const token = localStorage.getItem('token'); // Assume the token is stored in local storage

//       const response = await axios.post(
//         'http://localhost:5050/addCategory', // Adjust the URL if needed
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//             'token': token, // Pass the token for authentication
//           },
//         }
//       );

//       setMessage(response.data.message); // Show success message
//       // Reset form after successful submission
//       setCategoryname('');
//       setDescription('');
//       setImage(null);
//     } catch (error) {
//       setMessage(error.response?.data?.message || 'Error adding category');
//     }

//     setIsLoading(false);
//   };

//   return (
//     <div className="container">
//       <h2>Add New Ride Category</h2>
//       <form onSubmit={onSubmit} encType="multipart/form-data">
//         <div className="form-group">
//           <label>Category Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             value={categoryname}
//             onChange={(e) => setCategoryname(e.target.value)} // Handle input change
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Description:</label>
//           <textarea
//             className="form-control"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)} // Handle input change
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Category Image:</label>
//           <input
//             type="file"
//             className="form-control"
//             accept="image/*"
//             onChange={onImageChange} // Handle file input change
//             required
//           />
//         </div>

//         <button type="submit" className="btn btn-primary" disabled={isLoading}>
//           {isLoading ? 'Adding...' : 'Add Category'}
//         </button>
//       </form>

//       {message && <p className="mt-3">{message}</p>}
//     </div>
//   );
// };

// export default AddCategory;