import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'

class Nav extends React.Component {

  handleClick(e) {
    e.preventDefault()
    this.props.router.push("/")
  }

  render() {

    return (

      <AppBar title='Kōrero Mai' />
    )
  }
}

module.exports = connect(state => state)(Nav)

  // <div className="row">
  //       <div className="col-sm-12">
  //         <ul className="topnav">
  //           <li>
  //             <Link to="#">
  //               <span className="glyphicon glyphicon-home" aria-hidden="true" />
  //             </Link>
  //           </li>
  //           <li className="brand">
  //             Kōrero Mai
  //           </li>
  //           <li className="nav-right">
  //             <Link to="/contents">
  //               <img className="blocks" src="images/abc.png" alt="abc blocks" />
  //             </Link>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
