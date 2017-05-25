const React = require("react")
const { connect } = require("react-redux")
const { Link } = require("react-router")
const request = require("superagent")

class Home extends React.Component {

  handleClick(e) {
    e.preventDefault()
    this.props.router.push("/")
  }

  render() {
    const { dispatch } = this.props

    return (
      <div className="row">
        <div className="col-sm-12">
          <h1>Nau mai, haere mai</h1>
          <h2>Learn te reo Māori</h2>

          <Link to="/contents">

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

module.exports = connect(state => state)(Home)
