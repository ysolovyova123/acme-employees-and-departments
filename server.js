const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {db, Departments, Employees} = require('./db/index.js');
const {seedDatabase} = require('./db/seed.js')
const app = express();
const fs = require('fs')
const PORT = process.env.PORT || 3000;

// Logging middleware
//app.use(morgan('dev'));

// Body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static middleware
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', async(req, response, next) => {
  response.sendFile(path.join(__dirname, './index.html'))
});

app.get('/style.css', async(req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, './', 'style.css'))
  }
  catch(ex) {
    next(ex)
  }
})

app.get('/api/departments', async(req,res,next) => {
  try {
    const departments = await Departments.findAll();
    res.json(departments);
  }
  catch(ex) {
    next(ex);
  }
})

app.get('/api/employees', async(req,res,next) => {
  try {
    const employees = await Employees.findAll();
    res.json(employees);
  }
  catch(ex) {
    next(ex);
  }
})

// app.delete('api/employees/:id', async(req, res, next) => {
//   try {
//     const employee = await db.Employees.findByPk(req.params.id);
//     await employee.destroy();
//     res.sendStatus(204);
//   }
//   catch(ex) {
//     next(ex);
//   }
// })

// app.put('api/employees/:id', async(req, res, next) => {
//   try {
//     const employee = await db.Employees.findByPk(req.params.id);
//     await employee.update(req.body) // will need to be passed an object from axios
//     res.send(employee);
//   }
//   catch(ex) {
//     next(ex);
//   }
// })

async function startServer() {
  try {
    await db.sync()
    console.log('The database is synced!');
    await seedDatabase()
    console.log('The database is fully seeded!');
    app.listen(PORT, () =>
      console.log(`
        Listening on port ${PORT}
        http://localhost:3000/
      `)
    );
  } catch (err) {
    console.error(err);
  }
}

startServer()
