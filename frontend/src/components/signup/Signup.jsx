import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    
    e.preventDefault(); 
    


    try {
      const response = await axios.post(
        'https://ecommerce3-6.onrender.com/signup',
        { name, email, password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      setMessage(response.data.message);
      if (response.status === 201) {
        navigate('/login'); // Redirect to login on success
        toast.success("signup successfully");
      }
    } catch (error) {
      setMessage(error.response?.data?.error || 'Error signing up');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
     
  <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Signup</h2>
    <form onSubmit={handleSignup} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
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
        className="w-full bg-black text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Signup
      </button>
    </form>
    <p
      className={`text-center mt-4 ${
        message.includes('success') ? 'text-green-500' : 'text-red-500'
      }`}
    >
      {message}
    </p>
    <div className="text-center mt-4">
      <p className="text-gray-600">
        Already registered?{' '}
        <button
          onClick={() => navigate('/login')}
          className="text-blue-500 hover:underline"
        >
          Login 
        </button>
      </p>
    </div>
  </div>
</div>


  );
}

export default Signup;
