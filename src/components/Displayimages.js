const debug = require("debug")("components:Displayimages")
const React = require("react")
const { connect } = require("react-redux")
const request = require("superagent")
const { Link } = require("react-router")

function Displayimages(props) {
  letters.map((letter, index) => {
  console.log("displayimages props", props);
    return (
      <div className="row">
        <div className="col-sm-3">
          <audio ref={`${letter}`} >
            <source src={`${letters[letter].soundFile}`} preload="auto"/>
          </audio>
        </div>
      </div>
      <div className="row">
        <div className="columns">
          <img src={`${letters[letter]}} onClick={() => this.playSound(letter)}>
          </button>
        </div>
      </div>
    )
  }


module.exports = connect(state => state)(Displayimages)
