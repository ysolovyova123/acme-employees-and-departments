const axios = require('axios')
import React from 'react'
import ReactDOM from 'react-dom';

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
        <div>Data loaded</div>
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
