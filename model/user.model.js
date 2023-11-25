import mongoose from 'mongoose';
import MongoDB from "../config/mongodb.js";
const mongo = new MongoDB()
mongo.connect();

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  gender: String,
  email: String,
  password: String,
  phone: Number
});

const UserModel = mongoose.model('user', userSchema);

export default UserModel;