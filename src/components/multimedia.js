const debug = require("debug")("components:multimedia")
const React = require("react")
const { connect } = require("react-redux")
const { Link } = require("react-router")
const request = require("superagent")

class multimedia extends React.Component {

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
            <source src={singleLetter.multimedia} type="video/mp4" />
            <track kind="captions" src="" srcLang="en" />
            Your browser does not support HTML5 video.
          </video>

          <br />

          <Link to="#" key={letter.id}>
            <img id="back" src="../../images/back.gif" alt="back button" />
          </Link>

          <Link to="#" key={letter.id}>
            <img id="next" src="../../images/next.gif" alt="next button" />
          </Link>

        </div>
      </div>
    )
  }
}

module.exports = connect(state => state)(multimedia)
