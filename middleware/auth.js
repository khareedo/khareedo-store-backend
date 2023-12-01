import jwt from 'jsonwebtoken';
import { compare } from 'bcrypt';
import * as auth from '../config/auth.config.js';
import UserModel from '../model/user.model.js';

export default class Auth {
  async verifyUserLogin(email, password) {
    try {
      const user = await UserModel.findOne({ $or: [{ email }, { username: email}] });
      if (!user) {
        return { status: 404, message: 'User not found!'};
      }
      
      if (await compare(password, user.password)) {
        const JWT_SECRET = auth.default.secret;
        const userToken = jwt.sign({
          id: user._id,
          username: user.username,
          type: 'user'
        }, JWT_SECRET,
        {
          expiresIn: '2h'
        });
        return { status: 201, token: userToken, name: user.name, username: user.username};
      }
      return {status:401, message:'Invalid password!', token: '', name: '', username: '' };
    } catch (error) {
      console.log('error catch ', error);
      return {status:408, message:'Error timeout!', token: '', name: '', username: '' };
    }
  }

  async destroyLogin() {
    const JWT_SECRET = auth.default.secret;
    const token = await jwt.sign({}, JWT_SECRET, {expiresIn: '0h'})
  }
  async verifyToken(token) {
    try {
      const result = await jwt.verify(token, auth.default.secret);
      return result;
    } catch (error) {
      return {success: false, message: error.message}
    }
  }
}