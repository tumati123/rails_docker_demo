import React from "react"
import PropTypes from "prop-types"
class Employees extends React.Component {
  render () {
    return (
      <div>
        <h1>All Users</h1>
        <ul>
          {this.props.employees.map(user => (
            <li key={user.id}>{`${user.name} ${user.title}`}</li>
          ))}
        </ul>
      </div>
    );
  }
}

Employees.propTypes = {
  employees: PropTypes.array
};
export default Employees
