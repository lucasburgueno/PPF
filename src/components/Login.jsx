import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://ppb-kdz9.onrender.com/login', { username, password });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-image-section">
        <img src="/image.png" alt="Login illustration" />
      </div>
      <div className="login-form-section">
        <h2>Sign in to <span className="highlight">DesregulatorTool</span></h2>
        <p className="register-link">New user? <Link to="/register">Create an account</Link></p>
        <input type="text" placeholder="Username" className="login-input" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" className="login-input" onChange={(e) => setPassword(e.target.value)} />
        <div className="forgot-password">
          <Link to="#">Forgot password?</Link>
        </div>
        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
