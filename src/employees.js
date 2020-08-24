import React from 'react';
import ReactDOM from 'react-dom';


const Employees = (props) => {
  const {id, name, department} = props
  return (
    <div>
      <h4>{name}</h4>
      <button>Delete Employee</button>
      <button>Remove From Dept.</button>
    </div>
  )
}

export default Employees
