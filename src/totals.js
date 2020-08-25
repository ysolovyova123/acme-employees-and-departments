import axios from 'axios'
import React from 'react';
import ReactDOM from 'react-dom';

class Totals extends React.Component {
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
    let totalEmployees = this.state.employees.length
    return (
      <div>
      {totalEmployees}<b> Total Employees</b>
      </div>
    )
  }
}

ReactDOM.render(
  <Totals />,
  document.getElementById('totals')
);
