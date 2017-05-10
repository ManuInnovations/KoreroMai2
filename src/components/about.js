const debug = require('debug')('components:home')
const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const request = require('superagent');


class about extends React.Component{
  //this is how we define functions in an class/object
  render(){
    debug(this.props)
    const { dispatch } = this.props

    return(
      <div className='about'>
        <h1>About Us</h1>
        <p>Email: hello@manu.net.nz</p>
        <p>Website: www.manu.net.nz</p>
      </div>
    )
  }


  handleClick(e){
    //by default button onClicks will want to refresh the page and eventListener
    e.preventDefault()
    this.props.router.push(`/`)
  }


}

module.exports = connect((state) => state)(about)
