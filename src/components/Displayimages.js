const debug = require("debug")("components:Displayimages")
const React = require("react")
const { connect } = require("react-redux")
const request = require("superagent")
const { Link } = require("react-router")

class Displayimages extends React.Component {

  render(){
    debug(this.props)
    const {letter} = this.props
    const {wordImage} = letter

    return (
      <div className="row">
        {
          wordImage.map((image) =>{
          return (
            <div>
            <img src={`../${image.image}`}/>
            </div>
          )
        })
      }
      </div>
    )
  }
}

module.exports = connect(state => state)(Displayimages)


//   <div className="col-sm-3">
//     <audio ref={`${letter}`} >
//       <source src={`${letters[letter].soundFile}`} preload="auto"/>
//     </audio>
//   </div>
// </div>
// <div className="row">
//   <div className="columns">
//     <img src={${letters[letter]}} onClick={() => this.playSound(letter)}>
//   </div>


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
