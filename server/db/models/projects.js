const Sequelize = require('sequelize');
const db = require('../database');

const Project = db.define('project', {
  projectName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  projectType: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  location: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://liquidplanner-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/HiRes-17.jpg'
  },
  description: {
    type: Sequelize.TEXT
  }
});

module.exports = Project;
