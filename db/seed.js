const Sequelize = require('sequelize');
const {db, Departments, Employees} = require('../db/index.js')
// const db = new Sequelize('postgres://localhost/acme', {
//   logging: false,
// });
const faker = require('faker');

const departments = ['Garden','Office','Beauty','Clothing','Shoes','Unassigned']

async function seedDatabase() {
  try {
    await db.sync({ force: true });

    const employeesSeeded = [];
    while(employeesSeeded.length < 50) {
      employeesSeeded.push(Employees.create(
        {
        name: faker.name.firstName(),
        department: faker.random.number({
          'min': 2,
          'max': 6
        })
        }
      ))
    };

    const departmentsSeeded = [];
    while(departmentsSeeded.length < 6) {
      departmentsSeeded.push(Departments.create(
        {
          department: departments.pop()
        }
      ))
    };

    await Promise.all(employeesSeeded)
    console.log(`
      Employees seeded!
    `)

    await Promise.all(departmentsSeeded)
    console.log(`
      Departments seeded!
    `)

  }
  catch (err) {
    console.error(err.stack);
  }
  // finally {
  //   db.close();
  // }
}

module.exports = {
  seedDatabase
};
