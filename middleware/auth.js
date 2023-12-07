import jwt from 'jsonwebtoken';
import { compare } from 'bcrypt';
import * as auth from '../config/auth.config.js';
import UserModel from '../model/user.model.js';
import CustomerModel from '../model/customer.model.js';

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

  async destroyUserLogin() {
    const JWT_SECRET = auth.default.secret;
    const token = await jwt.sign({type: 'user'}, JWT_SECRET, {expiresIn: '0h'})
  }
  
  async verifyToken(token) {
    try {
      const result = await jwt.verify(token, auth.default.secret);
      return result;
    } catch (error) {
      return {success: false, message: error.message}
    }
  }

  async verifyCustomerLogin(email, password) {
    try {
      const customer = await CustomerModel.findOne({ email });
      if (!customer) {
        return { status: 404, message: 'Account not found!'};
      }
      
      if (await compare(password, customer.password)) {
        const JWT_SECRET = auth.default.secret;
        const userToken = jwt.sign({
          id: customer._id,
          email: customer.email,
          type: 'customer'
        }, JWT_SECRET,
        {
          expiresIn: '2h'
        });
        return { status: 201, token: userToken, name: `${user.firstname} ${user.lasstname} `, email: user.email};
      }
      return {status:401, message:'Invalid password!', token: '', name: '', email: '' };
    } catch (error) {
      console.log('error catch ', error);
      return {status:408, message:'Error timeout!', token: '', name: '', email: '' };
    }
  }

  async destroyCustomerLogin() {
    const JWT_SECRET = auth.default.secret;
    const token = await jwt.sign({type: 'customer'}, JWT_SECRET, {expiresIn: '0h'})
  }

}