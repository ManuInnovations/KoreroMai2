const debug = require('debug')('components:nav')
const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent');


class nav extends React.Component{
  //this is how we define functions in an class/object
  render(){
    debug(this.props)
    const { dispatch } = this.props

    return(
      <div>
        <ul className="topnav">
          <li>
            <a href="#">
              <i className="fa fa-home" aria-hidden="true"></i>
            </a>
          </li>
          <li className="brand">
            <a href="#">Kōrero Mai</a>
          </li>
          <li className="nav-right">
            <a href="/contact">
              <i className="fa fa-comments-o" aria-hidden="true"></i> Contact
            </a>
          </li>
          <li className="nav-right">
            <a href="/about">
              <i className="fa fa-question" aria-hidden="true"></i> About
            </a>
          </li>
          <li className="nav-right">
            <a href="/letters"><img src="images/abc.png" /></a>
          </li>
    </ul>
  </div>
)
}

handleClick(e){
  //by default button onClicks will want to refresh the page and eventListener
  e.preventDefault()
  this.props.router.push(`/`)
}


}

module.exports = connect((state) => state)(nav)
