import UserModel from "../model/user.model.js";

class UserController {
  async getUsers(req, res) {
    const data = await UserModel.find();
    const users = [];
    data.forEach((d) => {
      users.push({
        id: d._id,
        firstname: d.firstname,
        lastname: d.lastname,
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
    await UserModel.create(req.body);
    res.status(200)
    res.json({ message: 'OK', success: true});
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