const debug = require("debug")("components:Footer")
const React = require("react")
const { connect } = require("react-redux")
const { Link } = require("react-router")

class Footer extends React.Component {

  handleClick(e) {
    e.preventDefault()
    this.props.router.push("/")
  }

  render() {
    debug(this.props)

    return (
      <div className="row footer">
        <div className="col-sm-12">
          <footer>

            &copy; Manu Innovations Ltd. 2017

            <Link to="/privacy" id="info">
              &nbsp; Privacy Policy
            </Link>

            <Link to="/about" id="info">
              &nbsp; About Us
            </Link>

          </footer>
        </div>
      </div>
    )
  }
}

module.exports = connect(state => state)(Footer)
