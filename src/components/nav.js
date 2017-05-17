const debug = require("debug")("components:nav")
const React = require("react")
const { connect } = require("react-redux")
const request = require("superagent")
const { Link } = require("react-router")


class nav extends React.Component{
  //this is how we define functions in an class/object
  render(){
    debug(this.props)
    const { dispatch } = this.props

    return(
      <div>
        <ul className="topnav">
          <li>
            <Link to="#">
              <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
            </Link>
          </li>
          <li className="brand">
            Kōrero Mai
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

//
// <button type="button" class="btn btn-default btn-lg">
//   <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
// </button>
