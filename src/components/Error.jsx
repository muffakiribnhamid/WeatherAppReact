import React from 'react';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate(); // Hook to navigate

  const handleGoHome = () => {
    navigate('/'); // Redirect to the home page
  };

  const errorStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f9',
  };

   const buttonStyles = {
    padding: '10px 20px',
    fontSize: '16px',
    marginTop: '20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={errorStyles}>
      <h1 style={{ fontSize: '50px', fontWeight: 'bold', color: '#333' }}>404 - Not Found</h1>
      <p style={{ fontSize: '20px', color: '#666' }}>Area not found.</p>
      <button style={buttonStyles} onClick={handleGoHome}>
        Go Back to Home
      </button>
    </div>
  ); 
}

export default Error;
