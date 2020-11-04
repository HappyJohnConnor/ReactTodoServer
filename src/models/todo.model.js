module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define('todos', {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    body: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    isCompleted: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    alerm: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    createdBy: {
      type: Sequelize.INTEGER,
      allowNUll: false,
    },
  });

  return Todo;
};
