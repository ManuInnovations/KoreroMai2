const debug = require("debug")("components:Displayletter")
const React = require("react")
const { connect } = require("react-redux")
const request = require("superagent")
const { Link } = require("react-router")

class Displayletter extends React.Component {

  constructor() {
    super()
    this.playCapital = this.playCapital.bind(this)
    this.playLower = this.playLower.bind(this)
    this.playSound = this.playSound.bind(this)
  }

  playCapital() {
    this.playCap.load()
    this.playCap.play()
  }

  playLower() {
    this.playLow.load()
    this.playLow.play()
  }



  handleClick(e) {
    e.preventDefault()
    this.props.router.push("/")
  }



  render() {
    debug(this.props)
    const { dispatch, letters, letter } = this.props
    const wordsArr = letter.wordImage

    return (
      <div className="row letter-container">
        <div className="col-sm-12">

          <audio
          key={letter.capitalSound}
          ref={(cap) => { this.playCap = cap; }}>
            <source
              src={letter.capitalSound}
              preload="auto" />
            <track
              kind="captions"
              src=""
              srcLang="en" />
          </audio>

          <audio
          key={letter.lowerSound}
          ref={(low) => { this.playLow = low; }}>
            <source
              src={letter.lowerSound}
              preload="auto" />
            <track
              kind="captions"
              src=""
              srcLang="en" />
          </audio>

          <button
            type="button"
            className="btn btn-xl display"
            onClick={this.playCapital}>
            {letter.capital}
          </button>

          <button
            type="button"
            className="btn btn-xl display"
            onClick={this.playLower}>
            {letter.lowercase}
          </button>

        </div>

      <div className="col-sm-12">
        {this.generateWord(wordsArr, letters)}
      </div>

        <div className="col-sm-12">
          <Link key={letter.id} to={`/media/${letter.capital}`}>
            <button
              type="button"
              className="btn"
              onClick={() =>
                  dispatch({
                    type: "RENDER_LETTER",
                    payload: letter,
                  })
              }>
              Watch: {letter.mediaName}
            </button>
          </Link>

        </div>
      </div>
    )
  }

  playSound(index) {
    this.refs[index].load()
    this.refs[index].play()
  }

  generateWord(wordsArr) {

      return wordsArr.map((word, index) => {
        return (
          <div>
            <audio ref={`${index}`} >
              <source src={`${word[index].sound}`} preload='auto'/>
            </audio>
            <img src={word.image} onClick={this.playSound(index)} />
          </div>
        )
      })
  }
}

module.exports = connect(state => state)(Displayletter)

//problem seems to be on line 119 - how to pass the correct word through as the sound file
