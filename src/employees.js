import React from 'react';
import ReactDOM from 'react-dom';


const Employees = (props) => {
  const {id, name, deptId, destroy, updateDepartment} = props
  const noDepartment = 1

  if (deptId !== 1) {
  return (
    <div key = {id}>
      <h4>{name}</h4>
      <button onClick={() => destroy(id)}>Delete Employee</button>
      <button onClick={() => updateDepartment(id,noDepartment)}>Remove From Dept.</button>
    </div>
  )
  }

  else {
    return (
      <div key = {id}>
        <h4>{name}</h4>
        <button onClick={() => destroy(id)}>Delete Employee</button>
      </div>
    )
  }
}

export default Employees
