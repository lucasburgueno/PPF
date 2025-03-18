import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('https://ppb-kdz9.onrender.com/register', { username, password });
      alert('Usuario creado con éxito');
      navigate('/');
    } catch {
      alert('Error: el usuario ya existe');
    }
  };

  return (
    <div className="register-container">
      <div className="register-image-section">
        <img src="/image.png" alt="Register illustration" />
      </div>
      <div className="register-form-section">
        <h2>Create your <span className="highlight">SmartDiagnosis</span> account</h2>
        <p className="login-link">Already have an account? <Link to="/">Sign in</Link></p>
        <input type="text" placeholder="Username" className="register-input" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" className="register-input" onChange={(e) => setPassword(e.target.value)} />
        <button className="register-button" onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default Register;
