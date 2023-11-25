import ManufacturerModel from "../model/manufacturer.model.js";

class ManufacturerController {
  async getManufacturers(req, res) {
    const manufacturers = await ManufacturerModel.find();
    
    res.status(200)
    res.json(manufacturers)
  }

  async getManufacturer(req, res) {
    const data = await ManufacturerModel.findById(req.params.id);
    res.status(200)
    res.json(data)
  }

  async create(req, res) {
    const result = await ManufacturerModel.create(req.body);
    console.log(result)
    res.status(200)
    res.json({ message: 'OK', success: true});
  }

  async update(req, res) {
    const id = req.params.id;
    const data = req.body
    await ManufacturerModel.findByIdAndUpdate(id, data);
    res.status(200)
    res.json({ message: 'OK', success: true});
  }

  async delete (req, res) {
    const id = req.params.id
    const result = await ManufacturerModel.findByIdAndDelete(id);
    res.status(200)
    res.json({ message: 'Manufacturer was deleted successfully!', success: true});
  }
}

export default ManufacturerController;