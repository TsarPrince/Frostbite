const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const User = mongoose.models.User || new mongoose.model("User", new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollno: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: new Date
  }
}, {
  collection: 'users'
}));

mongoose
  .connect("mongodb+srv://prince:123@cluster0.g3lnv.mongodb.net/Frostbite?retryWrites=true&w=majority")
  .then(() => {
    console.log("connected to mongodb cloud! :)");
  })
  .catch((err) => {
    console.log(err);
  });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, rollno, password } = req.body;
    const user = await User.findOne({ rollno });
    if (user) return res.status(400).json({ error: `User already exits` });

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ name, rollno, password: hashedPassword });
    newUser
      .save()
      .then(() => {
        res.status(200).json({ 'success': 'Accout created successfully' });
      })
      .catch((err) => console.log(err));
  }
}
