const debug = require("debug")("components:medialibrary")
const React = require("react")
const { connect } = require("react-redux")
const request = require("superagent")
const { Link } = require("react-router")

class medialibrary extends React.Component {

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    debug(this.props)
    const { dispatch, letters } = this.props
    console.log("children,", this.props.children);

    return (
      <div className="row">
        <div className="col-sm-12">
          <p>Table of previews of different media files from each letter in state</p>
        </div>
        <div className="col-sm-12">
          <Link to="/contents">
            <button
              type="button"
              className="btn btn-lg">
              Back
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

module.exports = connect(state => state)(medialibrary)
