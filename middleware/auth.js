import jwt from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import * as auth from '../config/auth.config';
import UserModel from '../model/user.model';

export default class Auth {
  async verifyUserLogin(email, password) {
    try {
      const user = await UserModel.find({ email }).lean();
      if (!user) {
        return { status: 404, message: 'User not found!'};
      }

      if (await compare(password, user.password)) {
        const JWT_SECRET = auth.secret;
        const userToken = jwt.sign({
          id: user._id,
          username: user.username,
          type: 'user'
        }, JWT_SECRET,
        {
          expiresIn: '2h'
        });
        return { status: 201, token: userToken};
      }
      return {status:401, message:'Invalid password!'};
    } catch (error) {
      return {status:408, message:'Error timeout!'};
    }
  }
}