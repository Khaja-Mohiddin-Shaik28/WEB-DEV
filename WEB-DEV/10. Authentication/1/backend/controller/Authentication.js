const User = require("../model/userSchema");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const credentials = {
      email: email,
      password: hashedPassword,
    };
    const addedUser = new User(credentials);
    await addedUser.save();
    res.json({ status: "new User added", exists: false });
  } catch (err) {
    console.log(err);
    res.json({ status: "User already exists!!", exists: true });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ status: "User not registered!!" });
  } else {
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.json({ status: "Incorrect Password!!" });
    }
    const token = jwt.sign({ id: user._id }, process.env.key, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true, maxAge: 360000 });
    return res.json({ status: "Logged in" });
  }
};

const forgotPassword = async (req, res) => {
  const email = req.body.email;
  if (!req.body.email) {
    return res.status(400).json({ status: "Email is required" });
  }
  console.log(email);
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ status: "User not found" });
  }
  const token = jwt.sign({ id: user._id }, process.env.key, {
    expiresIn: "5m",
  });
  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "khajamohiddinshaik164@gmail.com",
      pass: process.env.password,
    },
  });

  const mailOptions = {
    from: "khajamohiddinshaik164@gmail.com",
    to: email,
    subject: "Forgot password",
    text: `http://localhost:5173/resetpassword/${token}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.json({ status: `Email not sent ${info}` });
    } else {
      res.json({ status: "Email sent" });
    }
  });
};

const resetPassword = async (req, res) => {
  try {
    const token = req.params.token;
    const password = req.body.password;
    const decoded = jwt.verify(token, process.env.key);
    const id = decoded.id;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.findByIdAndUpdate(id, { password: hashedPassword });
    res.json({ status: "password updated" });
  } catch (err) {
    res.json({ status: "password not updated" + err });
  }
};

const verifyRoute = async (req,res)=>{
  try{
    const token = req.cookies.token;
    if(!token){
      return res.json({status : false});
    }
      const decoded =  jwt.verify(token, process.env.key);
      return res.json({status : true});
  }
  catch(err){
    console.log(err);
    res.json({status : false});
  }
}

const logout = async (req, res)=>{
  res.clearCookie("token");
  return res.json({status : true})
}

module.exports = {
  signUp,
  login,
  forgotPassword,
  resetPassword,
  verifyRoute,
  logout
};
