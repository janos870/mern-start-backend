import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// signup
export const signup = async (req, res) => {
  const { username, email, location, password } = req.body;
  const hashedPassword = await bcrypt.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    location,
    password: hashedPassword,
  });
  console.log(req.body);
  try {
    await newUser.save();
    res
      .status(200)
      .json({ success: true, message: "Registration successfully." });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Registration failed. Please check your input and try again.",
    });
  }
};

// login
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password." });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
     expiresIn: 3600, //1hour
    });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
