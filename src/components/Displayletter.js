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
    this.playWords = {}
  }

  playCapital() {
    this.playCap.play()
  }

  playLower() {
    this.playLow.play()
  }

  playSound(i) {
    this.playWords[i].play()
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
        {this.generateWord(wordsArr)}
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

  generateWord(wordsArr) {
    return wordsArr.map((word) => {
      return (
        <div>
          <audio
            key={word}
            ref={(x) => { this.playWords[word] = x; }}>
              <source src={word.sound} preload='auto'/>
          </audio>
          <img src={word.image} onClick={this.playSound.bind(this, word)} />
        </div>
      )
    })
  }
}

module.exports = connect(state => state)(Displayletter)

  // letters: [
  //   {
  //     id: 1,
  //     capital: "A",
  //     lowercase: "a",
  //     capitalSound: "/sounds/capitalSounds/A.mp3",
  //     lowerSound: "/sounds/lowerSounds/a.mp3",
  //     wordImage: [
  //       {id:1, image:"images/words/aniwaniwa.png", sound: "sounds/ua.mp3"},
  //       {id:2, image:"images/words/anuhe.png", sound: "sounds/anuhe.mp3"},
  //     ],
  //     multimedia: "/multimedia/aniwaniwa.webm",
  //     mediaName: "Aniwaniwa Song",
  //   },
