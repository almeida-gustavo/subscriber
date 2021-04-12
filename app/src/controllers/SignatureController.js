import * as Yup from 'yup';
import Signature from '../../database/models/Signature';

class SignatureController {
  async findOne(req, res) {
    return res.status(200).json({
      sucess: 'hello world',
    });
  }

  async findAll(req, res) {
    return res.status(200).json({
      sucess: 'hello world',
    });
  }

  async create(req, res) {
    return res.status(200).json({
      sucess: 'hello world',
    });
  }

  async update(req, res) {
    return res.status(200).json({
      sucess: 'hello world',
    });
  }

  async remove(req, res) {
    return res.status(200).json({
      sucess: 'hello world',
    });
  }
}

export default new SignatureController();
