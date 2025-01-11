import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Footer from '../footer/Footer';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate form submission
    try {
      setResponse('Thank you for contacting us. We will get back to you shortly!');
    } catch (error) {
      setResponse('There was an error submitting your message. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg">We are here to assist you. Let us know your questions or feedback.</p>
      </div>

      {/* Contact Form and Information Section */}
      <div className="flex flex-col md:flex-row justify-center items-start max-w-6xl mx-auto mt-8 space-y-8 md:space-y-0 md:space-x-8 px-4">
        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-2/3">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
          {response && (
            <p
              className={`mt-4 text-center ${
                response.includes('Thank you') ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {response}
            </p>
          )}
        </div>

        {/* Contact Information */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/3">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-blue-500 mr-3" />
              <span>1234 E-Commerce St, Online City, Internet</span>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-blue-500 mr-3" />
              <span>+1 (800) 123-4567</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-blue-500 mr-3" />
              <span>support@ecommerce.com</span>
            </li>
            <li className="flex items-center">
              <FaClock className="text-blue-500 mr-3" />
              <span>Monday - Friday, 9:00 AM - 5:00 PM</span>
            </li>
          </ul>
        </div>
      </div> 
      <Footer/>
    </div>
  );
}

export default Contact;
