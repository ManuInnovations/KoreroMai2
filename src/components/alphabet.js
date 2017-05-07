const debug = require('debug')('components:alphabet')
const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent');


class alphabet extends React.Component{
  //this is how we define functions in an class/object
  render(){
    debug(this.props)
    const { dispatch } = this.props

    return(
      <div>
      <p>Map through the array of letters from state and create a button for each letter</p>
      </div>
    )
  }

  handleClick(e){
    //by default button onClicks will want to refresh the page and eventListener
    e.preventDefault()
    this.props.router.push(`/`)
  }


}

module.exports = connect((state) => state)(alphabet)
