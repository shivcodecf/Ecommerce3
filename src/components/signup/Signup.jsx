import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Signup.css'; 
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import Login from '../login/Login';

const Signup = () => { 
  const location = useLocation(); // Corrected the spelling here
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => { 

    <Login/>
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
    .post("https://ecoombacke.onrender.com/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup successful");
          navigate(from, { replace: true });
        }
        localStorage.setItem("User", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error in signup: " + err.message);
      }); 

      
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" className="form-control" placeholder="Enter your full name" {...register('fullname', { required: true })} />
          {errors.fullname && <span className="error">Full Name is required</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" placeholder="Enter your email" {...register('email', { required: true })} />
          {errors.email && <span className="error">Email is required</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" placeholder="Enter your password" {...register('password', { required: true })} />
          {errors.password && <span className="error">Password is required</span>}
        </div>
        <button type="submit" className="btn">Signup</button>
      </form>
      <p>Already registered? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Signup;
