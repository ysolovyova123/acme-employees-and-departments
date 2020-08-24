const axios = require('axios');
import React from 'react';
import ReactDOM from 'react-dom';
import Departments from '../src/departments.js'

class Main extends React.Component {
  constructor () {
    super()
    this.state = {
      departments: [],
      employees: []
    }
  }

  async componentDidMount () {
    const departmentsResponse = await axios.get('api/departments')
    const departmentsData = departmentsResponse.data
    const employeesResponse = await axios.get('api/employees')
    const employeesData = employeesResponse.data

    this.setState({
      departments: departmentsData,
      employees: employeesData
    })
  }

  render () {
    if (this.state.departments.length > 0 || this.state.employees.length > 0) {
      return (
        <div id = "container">
          {this.state.departments.map(department => {return (
            <Departments id={department.id} name = {department.department} employees = {this.state.employees} />
          )})}
        </div>
      )
    }
    else {
      return (
        <div>Data loading</div>
      )
    }
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('header')
);
