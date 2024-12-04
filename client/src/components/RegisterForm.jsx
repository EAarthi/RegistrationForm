import React, { useState } from "react";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    employee_id: "",
    email: "",
    phone: "",
    department: "",
    date_of_joining: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        `${import.meta.env.VITE_API_URL}/register`, // Use the environment variable
        formData
      );
      toast.success(response.data.message);
    } catch (error) {
      if (error.response?.status === 409) {
        return toast.error(error.response.data.message);
      }
      console.error("Error submitting form:", error);
      toast.error(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            placeholder="First and Last Name"
          />
        </div>
        <div>
          <label htmlFor="employee_id">Employee ID</label>
          <input
            type="text"
            id="employee_id"
            name="employee_id"
            onChange={handleChange}
            maxLength="10"
            placeholder="Unique ID"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="example@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={handleChange}
            maxLength="10"
            placeholder="10-digit number"
          />
        </div>
        <div>
          <label htmlFor="department">Department</label>
          <select id="department" name="department" onChange={handleChange}>
            <option value="">Select Department</option>
            <option value="HR">HR</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <div>
          <label htmlFor="date_of_joining">Date of Joining</label>
          <input
            type="date"
            id="date_of_joining"
            name="date_of_joining"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            onChange={handleChange}
            placeholder="e.g., Manager, Developer"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;
