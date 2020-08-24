import React from 'react';
import ReactDOM from 'react-dom';


const Employees = (props) => {
  const {id, name, department} = props
  return (
    <div>
      {name}
      <button>Delete Employee</button>
      <button>Remove From Dept.</button>
    </div>
  )
}

export default Employees
