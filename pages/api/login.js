const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
  const { rollno, password } = req.body;
  const user = await User.findOne({ rollno });
  if (!user) return res.status(400).json({ error: `User doesn't exists. Please Sign up first.` });
  const doesPasswordMatch = await bcrypt.compare(password, user.password);
  if (!doesPasswordMatch) return res.status(400).json({ error: "Wrong password" });
  res.status(200).json(user);
}
