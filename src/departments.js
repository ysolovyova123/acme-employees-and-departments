import React from 'react';
import ReactDOM from 'react-dom';
import Employees from './employees.js'

const Departments = (props) => {
  const {department, employees, destroy, updateDepartment} = props
  const deptEmployees = employees.filter(employee => employee.department === department.id)

  return (
    <div key = {department.id} id = {department.department}>
      <h3>{department.department}
      ({employees.filter(employee => employee.department === department.id).length})</h3>
      {deptEmployees.map(employee => {return (
            <Employees id={employee.id} name = {employee.name} department = {employee.department} deptId = {department.id} destroy = {destroy} updateDepartment = {updateDepartment}/>
          )})}
    </div>
  )
}

export default Departments
