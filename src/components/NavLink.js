const React = require ('react')
const { Link } = require ('react-router')
const { connect } = require("react-redux")

class NavLink extends React.Component {

  render() {
    return (
      <Link {...this.props} activeClassName="active"/>
    )
  }
}

module.exports = connect(state => state)(NavLink)
