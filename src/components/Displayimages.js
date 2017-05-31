const debug = require("debug")("components:Displayimages")
const React = require("react")
const { connect } = require("react-redux")
const request = require("superagent")
const { Link } = require("react-router")

class Displayimages extends React.Component {

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    debug(this.props)
    const { dispatch, letters } = this.props
    console.log("letters.wordImage", letters.wordImage);

    return (
      <div className="row">
        <div className="col-sm-12">
        {
          letters.map((letter) => {

            return (

              <img className="word" src={singleLetter.wordImage} alt=""
                onClick={() =>
                this.playWord(word)}
              />

            )
          })
        }


        </div>
      </div>
    )
  }
}

module.exports = connect(state => state)(Displayimages)
