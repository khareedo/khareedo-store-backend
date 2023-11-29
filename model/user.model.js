import {Schema, model} from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  gender: String,
  email: { type: String, unique: true, required: true },
  password: String,
  phone: Number
});

const UserModel = model('user', userSchema);

export default UserModel;