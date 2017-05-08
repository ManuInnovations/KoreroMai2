const debug = require('debug')('components:letters')
const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent');
const { Link } = require('react-router')



class letter extends React.Component{
  //this is how we define functions in an class/object
  render(){
    debug(this.props)
    const { dispatch, letters } = this.props
    const capital = this.props.capital
    const lowercase = this.props.lowercase

    console.log('Single letter this.props', this.props)

    return(
      <div>
        <p>Want to render the Capital and Lowercase of the letter that was clicked on and it should also show in the url</p>
        <h1>{capital}</h1>
        <h1>{lowercase}</h1>
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