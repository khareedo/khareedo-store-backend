import UserModel from "../model/user.model.js";
import bcrypt from 'bcrypt';
import Auth from '../middleware/auth.js'
import * as auth from '../config/auth.config.js';
class UserController {
  async login(req, res) {
    const auth = new Auth();
    const { email, password } = req.body;

    const {status, token, name, username} = await auth.verifyUserLogin(email, password);
    
    res.status(status);

    res.json({token, name, username});
  }

  async logout(req, res) {
    const auth = new Auth();
    const result = await auth.destroyUserLogin();
    
    res.status(200);

    res.json({message: 'Logged out!'});
  }
  
  async isLogged(req, res) {
    const { token } = req.body;
    const auth = new Auth();
    const result = await auth.verifyToken(token);
    res.send(result);
  }

  async getUsers(req, res) {
    const data = await UserModel.find();
    const users = [];
    data.forEach((d) => {
      users.push({
        id: d._id,
        name: d.name,
        username: d.username,
        gender: d.gender,
        email: d.email,
        phone: d.phone,
      })
    })
    
    res.status(200)
    res.json(users)
  }

  async getUser(req, res) {
    const data = await UserModel.findById(req.params.id);
    res.status(200)
    res.json(data)
  }

  async create(req, res) {
    const hashedPassword = await bcrypt.hash(req.body.password, auth.default.salt);
    try {
      const userData = { ...req.body, password: hashedPassword}
      const { name, email, username } = await UserModel.create(userData);
      res.status(201)
      res.json({ message: 'OK', success: true, data: {name, email, username } });
    } catch (error) {
      res.status(409)
      res.json({ message: 'Failed to save user :' + error.message , success: false});
    }
  }

  async update(req, res) {
    const id = req.params.id;
    const data = req.body
    await UserModel.findByIdAndUpdate(id, data);
    res.status(200)
    res.json({ message: 'OK', success: true});
  }

  async delete (req, res) {
    const id = req.params.id
    const result = await UserModel.findByIdAndDelete(id);
    res.status(200)
    res.json({ message: 'User was deleted successfully!', success: true});
  }
}

export default UserController;