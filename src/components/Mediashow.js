const debug = require("debug")("components:Mediashow")
const React = require("react")
const { connect } = require("react-redux")
const { Link, browserHistory } = require("react-router")
const request = require("superagent")

class Mediashow extends React.Component {

  handleClick(e) {
    e.preventDefault()
    this.props.router.push("/")
  }

  render() {
    debug(this.props)
    const { dispatch, letter } = this.props

    return (
      <div className="row">
        <div className="col-sm-12 video">

          <video width="80%" controls>
            <source src={letter.multimedia} type="video/webm" />
            <track kind="captions" src="" srcLang="en" />
            Your browser does not support HTML5 video.
          </video>

        </div>
        <div className="col-sm-12">
            <img id="mediashow-back" src="../../images/back-media.png" alt="back button" onClick={browserHistory.goBack} />
        </div>
      </div>
    )
  }
}

module.exports = connect(state => state)(Mediashow)
