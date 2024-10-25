import React, { useState } from 'react';

function CompetitionForm() {
  const [formData, setFormData] = useState({
    name: '',
    familyName: '',
    email: '',
    phoneNumber: '',
    promotion: '',
    level: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for registering in the Tech-Hub competition!');
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img
          src="./logo.svg" 
          alt="Tech-Hub Logo"
          style={styles.logo}
        />
        <h2 style={styles.heading}>Tech-Hub Competition Registration</h2>
      </div>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/** Name Field */}
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
            placeholder="Enter your first name"
          />
        </div>

        {/** Family Name Field */}
        <div style={styles.inputGroup}>
          <label htmlFor="familyName" style={styles.label}>Family Name</label>
          <input
            type="text"
            id="familyName"
            name="familyName"
            value={formData.familyName}
            onChange={handleChange}
            required
            style={styles.input}
            placeholder="Enter your family name"
          />
        </div>

        {/** Email Field */}
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
            placeholder="Enter your email address"
          />
        </div>

        {/** Phone Number Field */}
        <div style={styles.inputGroup}>
          <label htmlFor="phoneNumber" style={styles.label}>Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            style={styles.input}
            placeholder="Enter your phone number"
          />
        </div>

        {/** Promotion Field */}
        <div style={styles.inputGroup}>
          <label htmlFor="promotion" style={styles.label}>Promotion</label>
          <input
            type="text"
            id="promotion"
            name="promotion"
            value={formData.promotion}
            onChange={handleChange}
            required
            style={styles.input}
            placeholder="Enter your promotion (e.g., 2024)"
          />
        </div>

        {/** Level Field */}
        <div style={styles.inputGroup}>
          <label htmlFor="level" style={styles.label}>Level</label>
          <input
            type="text"
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            required
            style={styles.input}
            placeholder="Enter your level (e.g., Beginner, Advanced)"
          />
        </div>

        {/** Submit Button */}
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#FFFFFF',
    borderRadius: '15px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  logoContainer: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  logo: {
    maxWidth: '150px',
    marginBottom: '10px',
  },
  heading: {
    color: '#333',
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    color: '#555',
    fontWeight: '500',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '14px',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '12px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default CompetitionForm;
