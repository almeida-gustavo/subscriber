import User from '../../database/models/User';

class UserController {
  async findOne(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    return res.status(200).json(user);
  }

  async findAll(req, res) {
    const users = await User.findAll();
    return res.status(200).json(users);
  }

  async create(req, res) {
    const user = await User.create(req.body);

    return res.status(201).json(user);
  }

  async update(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    user.update({ ...req.body });

    return res.status(201).json(user);
  }

  async remove(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    user.destroy();

    return res.status(204).json();
  }
}

export default new UserController();
