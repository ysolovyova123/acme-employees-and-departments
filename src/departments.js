const axios = require('axios');
//const {Employees} = require('../db/index.js');
import React from 'react';
import ReactDOM from 'react-dom';
import Employees from './employees.js'

const Departments = (props) => {
  const {id, name, employees} = props

  return (
    <div key = {id} id = {name}>
      <b>{name}</b>
      {employees.map(employee => {return (
            <Employees id={employee.id} name = {employee.name} department = {employee.department} />
          )})}
    </div>
  )
}

export default Departments
