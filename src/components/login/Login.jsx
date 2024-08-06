import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "../../Context/AuthProvider"; 
import './Login.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = {
      email: email,
      password: password,
    };

    try {
      const res = await axios.post("https://ecoombacke.onrender.com/user/login", userInfo);
      if (res.data) {
        toast.success("Login successful");
        setAuthUser(res.data.user);
        localStorage.setItem("User", JSON.stringify(res.data.user));
        navigate('/'); 
      }
    } catch (err) {
      console.log(err);
      toast.error("Error in Login " + err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
      <p>Not registered? <Link to="/signup">Signup</Link></p>
    </div>
  );
}

export default Login;
