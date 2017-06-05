const debug = require("debug")("components:Displayimages")
const React = require("react")
const { connect } = require("react-redux")
const request = require("superagent")
const { Link } = require("react-router")

class Displayimages extends React.Component {

  constructor() {
    super()
    this.playSound = this.playSound.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.props.router.push("/")
  }

  playSound(word) {
    console.log('word', word);
    this.refs[word].load()
    this.refs[word].play()
  }

  render(){
    debug(this.props)
    const {letter} = this.props
    const {wordImage} = letter
    const word = "word"
console.log('wordImage in displayimages', wordImage);
    return (
      <div className="row">
        {
          wordImage.map((image) =>{
          return (
            <div>

            <img src={`../${image.image}`}
              onClick={() =>
                this.playSound(word)}
            />

            <audio
            key={image.sound}
            ref={`${word}`}>
              <source
                src={`../${image.sound}`}
                preload="auto" />
              <track
                kind="captions"
                src=""
                srcLang="en" />
            </audio>
            </div>
          )
        })
      }
      </div>
    )
  }
}

module.exports = connect(state => state)(Displayimages)

// letters: [
//   {
//     id: 1,
//     capital: "A",
//     lowercase: "a",
//     capitalSound: "/sounds/capitalSounds/A.mp3",
//     lowerSound: "/sounds/lowerSounds/a.mp3",
//     wordImage: [
//       {id:1, image:"images/words/aniwaniwa.png", sound: "/sounds/ua.mp3"},
//       {id:2, image:"images/words/anuhe.png", sound: "/sounds/anuhe.mp3"},
//     ],
//     multimedia: "/multimedia/aniwaniwa.webm",
//     mediaName: "Aniwaniwa Song",
//   },
