import React from "react"
import { connect } from "react-redux"
import { browserHistory } from "react-router"
import { Player } from "video-react"
import Footer from "./Footer.js"
import Header from "./Header.js"
import "../../node_modules/video-react/dist/video-react.css" // import css

const debug = require("debug")("components:Mediashow")

class Mediashow extends React.Component {
  handleClick(e) {
    e.preventDefault()
    this.props.router.push("/")
  }
  render() {
    debug(this.props)
    const { letter } = this.props
    return (
      <div className="container">
        <Header />
        <div className="video-box">
          <h2>Mātaki mai</h2>
          <div className="video">
            <Player playsInline src={letter.multimedia[1]} type="video/mp4" />
          </div>
          <div>
            <img
              src="../../images/previous.png"
              alt="back button"
              onClick={browserHistory.goBack}
              className="mediabackbutton"
            />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

module.exports = connect(state => state)(Mediashow)
