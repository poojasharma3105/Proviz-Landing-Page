import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

const ApplicationForm = ({ isOpen, closeForm }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', statement: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.name || !formData.email || !formData.phone || !formData.statement) {
      setError('All fields are required!');
      return;
    }
  
    try {
      const response = await axios.post(`${API_URL}/user/apply`, formData , {
        headers: {
          'Content-Type': 'application/json',
        } });
      console.log("Backend Response:", response.data);  // Log the response from the backend
      setSuccess('Your application has been submitted successfully!');
      setError(null);
    } catch (err) {
      setError('Something went wrong, please try again later.');
    }
    
  };
  

  // Reset messages and form on close
  const handleClose = () => {
    setError(null);
    setSuccess(null);
    setFormData({ name: '', email: '', phone: '', statement: '' });
    closeForm();  // Close the modal
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose} contentLabel="Application Form" ariaHideApp={false}>
      <div className="container-neon">
        <h2>Application Form</h2>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        {success && <p style={{ color: 'green', textAlign: 'center' }}>{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control neon-input"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control neon-input"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              className="form-control neon-input"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="statement"
              className="form-control neon-input"
              placeholder="Why do you want to join Proviz?"
              value={formData.statement}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn neon-btn btn-block">Submit Application</button>
        </form>
        <button onClick={handleClose} className="btn close-btn btn-block mt-3">Close</button>
      </div>
    </Modal>
  );
};

export default ApplicationForm;
