const debug = require('debug')('components:letters')
const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent');
const { Link } = require('react-router')



class letter extends React.Component{
  //this is how we define functions in an class/object
  render(){
    debug(this.props)
    const { dispatch, letter } = this.props
    console.log('Letter - this.props', this.props);
    console.log('letter.capital', letter.letter.letter);
    return(
      <div>
        <h1>{letter.letter.letter.capital}</h1>
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
