const UserModel = require('../Models/User');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const userModel = new UserModel({ name, email, password });
    userModel.password = await bycrypt.hash(password, 10);
    await userModel.save();

    res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    const isMatch = await bycrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
    res.status(200).json({ success: true, jwtToken, name: user.name, message: "Login successful" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};




module.exports = { signup, login };
