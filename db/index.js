const Sequelize = require('sequelize');
const connectionURL = process.env.DATABASE_URL || 'postgres://localhost/acme'
const db = new Sequelize(connectionURL, {
  logging: false,
});
const faker = require('faker');
//const seedEmyployees = require('./seed-employees');
//const seedDepartments = require('./seed-departments');


const Departments = db.define('departments', {
  department: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

const Employees = db.define('employees', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  department: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = {
  db,
  Departments,
  Employees
};
