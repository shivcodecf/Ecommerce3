import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/authSice';

import { toast } from 'react-toastify';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
   
  

  const handleLogin = async (e) => {
    e.preventDefault();

    

    try {
      const response = await axios.post(
       'https://eccom-back4.onrender.com/login',
        { email, password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      if (response.data.success) {

        setMessage('Login successful!');

        // toast.success('Login Successful!', {
        //   position: 'top-right',
        //   autoClose: 3000,
        // });
        toast.success("login successfully");
        localStorage.setItem('token', response.data.token); // Save the token locally
        console.log(response.data.user);
        dispatch(setUser(response.data.token));
        navigate('/'); // Redirect to the home page
       
      }
    } catch (error) {
      setMessage(error.response?.data?.error || 'Error logging in');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100"> 
   
  <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
    <form onSubmit={handleLogin} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded-lg hover:bg-black-600 transition duration-300"
      >
        Login
      </button>
    </form>
    <p
      className={`text-center mt-4 ${
        message.includes('successful') ? 'text-green-500' : 'text-red-500'
      }`}
    >
      {message}
    </p>
    <div className="text-center mt-4">
      <p className="text-gray-600">
        Don't have an account?{' '}
        <button
          onClick={() => navigate('/signup')}
          className="text-blue-500 hover:underline"
        >
          Signup 
        </button>
      </p>
    </div>
  </div>
</div>

  );
}

export default Login;
