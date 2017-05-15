const debug = require('debug')('components:multimedia')
const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const request = require('superagent');


class multimedia extends React.Component{
  //this is how we define functions in an class/object
  render(){
    debug(this.props)
    const { dispatch } = this.props

    return(
      <div className="container">
        <div className="videoUiWrapper thumbnail">
          <video width="370" height="214" id="demo1">
          <source src="/multimedia/aniwaniwa.3gp" type="video/3gp" />
          Your browser does not support the video tag.
          </video>
        </div>
      </div>
    )
  }

  handleClick(e){
    //by default button onClicks will want to refresh the page and eventListener
    e.preventDefault()
    this.props.router.push(`/`)
  }


}

module.exports = connect((state) => state)(multimedia)
