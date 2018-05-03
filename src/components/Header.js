import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router"

class Header extends React.Component {
  handleClick(e) {
    e.preventDefault()
    this.props.router.push("/")
  }
  render() {
    return (
      <div className="header">
        <header>
          <Link to="/">
            <img id="header-logo" src="images/logo.svg" alt="logo" />
          </Link>
          <Link to="/media">
            <img id="header-media" src="images/tv.png" alt="tv icon" />
          </Link>
          <Link to="/letters">
            <img id="header-index" src="images/grid.png" alt="grid icon" />
          </Link>
        </header>
      </div>
    )
  }
}

module.exports = connect(state => state)(Header)
