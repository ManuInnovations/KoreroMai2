const debug = require('debug')('components:nav')
const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent')
const { Link } = require('react-router')


class nav extends React.Component{
  //this is how we define functions in an class/object
  render(){
    debug(this.props)
    const { dispatch } = this.props

    return(
      <div>
        <ul className="topnav">
          <li>
            <Link to='#'>
              <i className="fa fa-home" aria-hidden="true"></i>
            </Link>
          </li>
          <li className="brand">
            Kōrero Mai
          </li>

          <li className="nav-right">
            <Link to='/about'>
              About Us
            </Link>
          </li>
          <li className="nav-right">
            <Link to="/letters">
              <img src="images/abc.png"/>
            </Link>
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
