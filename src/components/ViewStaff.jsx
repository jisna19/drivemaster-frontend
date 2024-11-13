import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SignUp from './SignUp';
import StaffRegister from './StaffRegister';
import NavBar from './NavBar';

const ViewStaff = () => {
  const [data, changeData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const RejectStaff = (_id) => {
    let input = { "_id": _id }
    axios.post("http://localhost:5000/rejectstaff", input).then(
      (response) => {
        console.log(response.data)
        if (response.data.status === "success") {
          alert("Rejected")
          changeData(prevData => prevData.filter(StaffRegister => StaffRegister._id !== _id));
        } else {
          alert("Error");
        }
      }
    ).catch((error) => {
      console.error(error.message);
    }).finally();
  };

  const fetchData = () => {
    axios.get("http://localhost:5000/viewStaff").then(
      (response) => {
        changeData(response.data);
      }
    ).catch(
      (error) => {
        console.log(error.message);
      }
    );
  };

  // Search logic
  const filteredStaff = data.filter((staff) => {
    return (
      (staff.name?.toLowerCase().includes(searchTerm.toLowerCase())) 
      
    );
  });
  // Fetch data on component mount
  useEffect(() => { fetchData(); }, []);

  return (
    <div>
      <div className="container">
      <NavBar/>
        <div className="row">
          
          {/* Search Bar */}
          <div className="search-bar-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search by name "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}  // Update search term on input change
            />
          </div>

          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">age</th>
                  <th scope="col">gender</th>
                  <th scope="col">email</th>
                  <th scope="col">contact</th>
                  <th scope="col">experience</th>
                
                </tr>
              </thead>
              <tbody>
                {
                  filteredStaff.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td scope="row">{value.name}</td>
                        <td>{value.age}</td>
                        <td>{value.gender}</td>
                        <td>{value.email}</td>
                        <td>{value.contact}</td>
                        <td>{value.experience}</td>
                        <td>
                          <button className="btn btn-danger" onClick={() => RejectStaff(value._id)}>Reject</button>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStaff;
