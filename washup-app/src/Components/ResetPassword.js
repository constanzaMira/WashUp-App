import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { validateEmail } from './utils';

const ResetPassword = () => {
  const [newPassword, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const { uniqueID } = useParams();

  const handleResetPassword = async () => {
    let endpoint = 'http://localhost:4000/reset-password/${uniqueID}';
    if (!newPassword) {
      setMessage('Por favor, ingrese una nueva contraseña.');
      return;
    }
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          newPassword: newPassword,
          uniqueID: uniqueID
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        navigate('/login');
 
      } else {
        setMessage(data.message || 'Ocurrió un error al solicitar el restablecimiento de contraseña.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <h1 style={{ color: '#2596be', fontSize: '700', fontWeight: 'bold', marginBottom: '15px', textAlign:"center" , textShadow: '0 0 10px rgba(16, 46, 74, 0.5)'}}>Restablecer Contraseña</h1>
      <div className="reset-container">
        <label style={{ marginLeft: '10px', fontSize: '20px', textAlign:'left', color: 'white'}}>Ingrese la nueva contrsaeña:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setPassword(e.target.value)} 
          style={{ borderRadius: '20px', border: '1px solid #2596be',backgroundColor: '#e2f5fc' }}
        />
        <button style={{ marginLeft: '10px' }} onClick={handleResetPassword}>Solicitar</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ResetPassword;
