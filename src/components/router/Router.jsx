import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import { useAuth } from '../../Context/AuthProvider';

// Lazy load components
const Home = lazy(() => import('../home/Home'));
const Product = lazy(() => import('../product/Product'));
const Contact = lazy(() => import('../contact/Contact'));
const Shirts = lazy(() => import('../product/Shirts.jsx'));
const Login = lazy(() => import('../login/Login.jsx'));
const Signup = lazy(() => import('../signup/Signup.jsx'));
const Logout = lazy(() => import('../logout/Logout.jsx'));
const Jackets = lazy(() => import('../product/Jackets.jsx'));
const Cards = lazy(() => import('../product/Cards.jsx'));
const Cart = lazy(() => import('../product/Cart.jsx'));

const Routers = () => {
  const [authUser] = useAuth(); // Use array destructuring for state

  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Product />} />
          <Route path='/shirts' element={<Shirts />} />
          <Route path='/jackets' element={<Jackets />} />
          <Route path='/product' element={authUser ? <Product /> : <Navigate to="/login" />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={authUser ? <Navigate to="/product" /> : <Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/logout' element={authUser ? <Logout /> : <Navigate to="/login" />} />
          {/* Fallback route for 404 */}
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default Routers;
