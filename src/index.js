import axios from 'axios'
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
    this.destroy = this.destroy.bind(this)
    this.updateDepartment = this.updateDepartment.bind(this)
  }

  async destroy(id) {
    await axios.delete(`api/employees/${id}`)
    const response = await axios.get('api/employees')
    const data = response.data
    this.setState({
      employees: data
    })
  }

  async updateDepartment(id, newDepartment) {
    await axios.put(`api/employees/${id}`,{department: newDepartment})
    const response = await axios.get('api/employees')
    const data = response.data
    this.setState({
      employees:data
    })
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
            <Departments department = {department} employees = {this.state.employees} destroy = {this.destroy} updateDepartment = {this.updateDepartment}/>
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
