const debug = require("debug")("components:letter")
const React = require("react")
const { connect } = require("react-redux")
const request = require("superagent")
const { Link } = require("react-router")

class letter extends React.Component {

  constructor() {
    super()
    this.playCapital = this.playCapital.bind(this)
    this.playLower = this.playLower.bind(this)
    this.playWord = this.playWord.bind(this)
  }

  playCapital(cap) {
    this.refs[cap].load()
    this.refs[cap].play()
  }

  playLower(low) {
    this.refs[low].load()
    this.refs[low].play()
  }

  playWord(word) {
    this.refs[word].load()
    this.refs[word].play()
  }

  handleClick(e) {
    e.preventDefault()
    this.props.router.push("/")
  }

  render() {
    debug(this.props)
    const cap = "cap"
    const low = "low"
    const word = "word"
    const { dispatch, letter } = this.props
    const singleLetter = letter.letter


    return (
      <div className="container">
        <div className="row col-sm-12 letter-container">

          <audio key={singleLetter.capitalSound} ref={`${cap}`}>
            <source
              src={singleLetter.capitalSound}
              preload="auto"
            />
            <track
              kind="captions"
              src=""
              srcLang="en"
            />
          </audio>

          <audio
            key={singleLetter.lowerSound}
            ref={`${low}`}
          >
            <source
              src={singleLetter.lowerSound}
              preload="auto"
            />
            <track
              kind="captions"
              src=""
              srcLang="en"
            />
          </audio>

          <audio
            key={singleLetter.wordSound}
            ref={`${word}`}
          >
            <source
              src={singleLetter.wordSound}
              preload="auto"
            />
            <track
              kind="captions"
              src=""
              srcLang="en"
            />
          </audio>

          <button
            type="button"
            className="btn btn-xl display"
            onClick={() =>
              this.playCapital(cap)
            }
          >
            {singleLetter.capital}
          </button>

          <button
            type="button"
            className="btn btn-xl display"
            onClick={() =>
              this.playLower(low)
            }
          >
            {singleLetter.lowercase}
          </button>

          <br />

          <h1
            id="word"
            onClick={() =>
              this.playWord(word)
            }
          >
            {singleLetter.word}
          </h1>

          <img
            src={singleLetter.wordImage}
            alt=""
          />

        
        </div>
      </div>
    )
  }
}

module.exports = connect(state => state)(letter)
