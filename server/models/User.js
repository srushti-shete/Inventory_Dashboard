import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 100,
  },
  email:{
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  password:{
    type: String,
    required: true,
    min: 5,
  },
  city: String,
  state: String,
  country: String,
  occupation: String,
  phoneNumber: String,
  transactions: Array,
  role:{
    type: String,
    enum: ["user", "admin","superadmin"],
    default: "admin"
  },
},
  {timestamps: true}
)

// static signup method
UserSchema.statics.signup = async function(name, email, password, city, state, country, occupation, phoneNumber, role) {

  // validation
  if (!email || !password || !name || !city || !state || !country || !occupation || !phoneNumber || !role) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }
  
  const exists = await this.findOne({ email })
  if (exists) {
    throw Error('Email already in use')
  }
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  const user = await this.create({ name, email, password:hash, city, state, country, occupation, phoneNumber, role })
  return user
}

// static login method
UserSchema.statics.login = async function(email, password) {
  if (!email || !password) {
    throw Error('All fields must be filled')
  }
  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }
  return user
}

const User = mongoose.model("User", UserSchema);
export default User;
