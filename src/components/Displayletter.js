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
    this.playWord = this.playWord.bind(this)
    this.generateWord = this.generateWord.bind(this)
  }

  playCapital(cap) {
    this.refs[cap].load()
    this.refs[cap].play()
  }

  playLower(low) {
    this.refs[low].load()
    this.refs[low].play()
  }

  playWord(index) {
    this.refs[index].load()
    this.refs[index].play()
  }

  handleClick(e) {
    e.preventDefault()
    this.props.router.push("/")
  }



  render() {
    debug(this.props)
    const cap = "cap"
    const low = "low"
    const { dispatch, letters, letter } = this.props
    const wordsArr = letter.wordImage

    return (
      <div className="row letter-container">
        <div className="col-sm-12">

          <audio key={letter.capitalSound} ref={`${cap}`}>
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
          ref={`${low}`}>
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
            onClick={() =>
              this.playCapital(cap)}>
            {letter.capital}
          </button>

          <button
            type="button"
            className="btn btn-xl display"
            onClick={() =>
              this.playLower(low)}>
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

  generateWord(wordsArr) {

      return wordsArr.map((word, index) => {

        return (
          <div>
            <audio ref={word.id} >
              <source src={word.sound} preload='auto'/>
            </audio>
            <img src={word.image} ref={word.id} onClick={() => this.playWord(index)} />
          </div>
        )
      })
  }
}

module.exports = connect(state => state)(Displayletter)

        // <audio
        //   key={}
        //   ref={index}>
        //   <source
        //     src={}
        //     preload="auto" />
        //   <track
        //     kind="captions"
        //     src=""
        //     srcLang="en" />
        // </audio>


        //    <audio ref={index} >
            //   <source src={word.sound} preload='auto' />
            // </audio>
        //  onClick={() => this.playWord(index)}
          // }

      // <audio ref={`${index}`} >
      //   <source src={`${letters.wordImage[word].sound}`} preload='auto'/>
      // </audio>
      // <img onClick={() => this.playSound(index)} src={`${letters.wordImage[word].image}`} />

//
//
