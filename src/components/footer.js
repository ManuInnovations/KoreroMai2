const debug = require("debug")("components:footer")
const React = require("react")
const { connect } = require("react-redux")
const { Link } = require("react-router")

class footer extends React.Component {

  handleClick(e) {
    e.preventDefault()
    this.props.router.push("/")
  }

  render() {
    debug(this.props)

    return (
      <div>
        <footer
          className="footer"
        >
          &copy; Manu Innovations Ltd. 2017  |
          <Link
            to="/privacy"
            id="info"
          >
            Privacy Policy
          </Link>
          |
          <Link
            to="/about"
            id="info"
          >
            About Us
          </Link>
        </footer>
      </div>
    )
  }
}

module.exports = connect(state => state)(footer)
