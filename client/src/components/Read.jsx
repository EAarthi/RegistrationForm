import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Read = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://localhost:5000/read"); // Adjust URL if needed
        setEmployees(response.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };
    fetchData();
  }, []); // Run this effect once on component mount

  return (
    <div>
      <h1>Employee List</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Date of Joining</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.employee_id}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.department}</td>
              <td>{employee.date_of_joining}</td>
              <td>{employee.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button className="btn btn-success" onClick={() => navigate('/')}>Back</button>
      </div>
    </div>
  );
};

export default Read;
