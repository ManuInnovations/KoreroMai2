const debug = require("debug")("components:mediashow")
const React = require("react")
const { connect } = require("react-redux")
const { Link } = require("react-router")
const request = require("superagent")

class mediashow extends React.Component {

  handleClick(e) {
    e.preventDefault()
    this.props.router.push("/")
  }

  render() {
    debug(this.props)
    const { dispatch, letter } = this.props
    const singleLetter = letter.letter.letter

    return (
      <div className="row">
        <div className="col-sm-12">

          <video controls>
            <source src={letter.multimedia} type="video/mp4" />
            <track kind="captions" src="" srcLang="en" />
            Your browser does not support HTML5 video.
          </video>

        </div>
      </div>
    )
  }
}

module.exports = connect(state => state)(mediashow)
