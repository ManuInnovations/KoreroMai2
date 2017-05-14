const debug = require('debug')('components:letter')
const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent');
const { Link } = require('react-router')



class letter extends React.Component{
  //this is how we define functions in an class/object
  render(){
    debug(this.props)
    const { dispatch, letter, index } = this.props
    const singleLetter = letter.letter.letter
    console.log('singleLetter', singleLetter);
    return(
      <div>

        <audio ref={`${index}`} >
         <source src={singleLetter.capitalSound} preload='auto'/>
         </audio>

        <button type="button" className="btn btn-lg display"
        onClick={() =>
          this.playSound(index)
        }>
          {singleLetter.capital}
        </button>

        <button type="button" className="btn btn-lg display">
          {singleLetter.lowercase}
        </button>

        <br/>

        <button type="button" className="btn btn-lg display">{singleLetter.word}</button>

        <img src={singleLetter.wordImage} />

      </div>
    )
  }


  handleClick(e){
    //by default button onClicks will want to refresh the page and eventListener
    e.preventDefault()
    this.props.router.push(`/`)
  }

  playSound(index) {
    this.refs[index].load()
    this.refs[index].play()
  }


}

module.exports = connect((state) => state)(letter)



//  <audio ref={`${index}`} >
//    <source src={`${letters[letter].lowerSound}`} preload='auto'/>
//  </audio>


//<button onClick={() => this.playSound(index)} className='button-radius'>
//  {letter}
//</button>
