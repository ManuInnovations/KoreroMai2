const debug = require('debug')('components:letter')
const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent');
const { Link } = require('react-router')



class letter extends React.Component{
  //this is how we define functions in an class/object
  render(){
    debug(this.props)
    const { dispatch, letter } = this.props
    const singleLetter = letter.letter.letter
    console.log('singleLetter', singleLetter);
    return(
      <div>
        <h1>{singleLetter.capital}</h1>
        <h1>{singleLetter.lowercase}</h1>
        <img src={singleLetter.wordImage} />
      </div>
    )
  }

  handleClick(e){
    //by default button onClicks will want to refresh the page and eventListener
    e.preventDefault()
    this.props.router.push(`/`)
  }


}

module.exports = connect((state) => state)(letter)
