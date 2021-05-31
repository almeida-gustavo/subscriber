import Sequelize, { Model } from 'sequelize';
import signatureEnums from '../../src/enums/signatureTypeEnum';

class Signature extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }
}

export default Signature;
