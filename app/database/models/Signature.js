import Sequelize, { Model } from 'sequelize';

class Signature extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        value: Sequelize.FLOAT,
        type: Sequelize.INTEGER,
        canceledAt: Sequelize.DATEONLY,
        automaticRenovation: {
          type: Sequelize.BOOLEAN,
          defaultValue: true,
        },
      },
      { sequelize },
    );

    return this;
  }
/*
  static associate(models) {

  }
   */
}

export default Signature;
