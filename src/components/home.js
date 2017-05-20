const debug = require("debug")("components:home")
const React = require("react")
const { connect } = require("react-redux")
const { Link } = require("react-router")
const request = require("superagent")

class home extends React.Component {

  handleClick(e) {
    e.preventDefault()
    this.props.router.push("/")
  }

  render() {
    debug(this.props)
    const { dispatch } = this.props

    return (
      <div className="row">
        <div className="col-sm-12">
          <h1>Nau mai, haere mai</h1>
          <h2>Learn te reo Māori</h2>

          <Link to="/contentspage">

            <button
              name="play"
              id="letters"
              className="btn btn-default">
              Play!
            </button>

          </Link>
        </div>
      </div>
    )
  }
}

module.exports = connect(state => state)(home)
