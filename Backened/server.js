const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 5000;
const SECRET_KEY = 'jdjdjfdfdfjded'; // Replace with a secure secret key

// Middleware
app.use(cors({ origin:  'https://ecom-fron3-d4bq2e437-shivcodecfs-projects.vercel.app', credentials: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://shivamyadav2113128:ZX6UsrC2SZyW5dVu@user.1t1fp.mongodb.net/?retryWrites=true&w=majority&appName=user', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// User Schema
// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });
  
  const User = mongoose.model('User', userSchema);
  
  // Signup Route
  app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Validate input
      if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
      // Check if email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create new user
      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
      console.error('Signup error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  
  

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid password' });
      }
  
      const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
  
      res.status(200).json({ success: true, message: 'Login successful', token });
    } catch (error) {
      console.error('Login error:', error); // Log the error
      res.status(500).json({ error: 'Internal server error' });
    }
  });


//   app.post const logout = async (req, res) => {
//     try {
//         return res.status(200).cookie("token", "", { maxAge: 0 }).json({
//             message: "Logged out successfully",
//             success: true,
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: "Internal server error", success: false });
//     }
// };
  
  

// Start the Server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
