const React = require("react")
const { connect } = require("react-redux")
const { Link } = require("react-router")

class Nav extends React.Component {

  handleClick(e) {
    e.preventDefault()
    this.props.router.push("/")
  }

  render() {

    return (
      <div className="row">
        <div className="col-sm-12">
          <ul className="topnav">
            <li>
              <Link to="#">
                <span className="glyphicon glyphicon-home" aria-hidden="true" />
              </Link>
            </li>
            <li className="brand">
              Kōrero Mai
            </li>
            <li className="nav-right">
              <Link to="/contents">
                <img src="images/abc.png" alt="abc blocks" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

module.exports = connect(state => state)(Nav)
