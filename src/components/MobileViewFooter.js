import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'


class MobileViewFooter extends React.Component {

  handleClick(e) {
    e.preventDefault()
    this.props.router.push('/')
  }

  render() {

    return (
      <div className='footer-two'>
          <footer>
            <Link to='/privacy' id='privacy'>
              &nbsp; Privacy Policy
            </Link>

            <Link to='/letters'>
              <img id='footer-index' src='images/grid.png' alt='grid icon' />
            </Link>

            <Link to='/about' id='about'>
              &nbsp; About Us
            </Link>
          </footer>
      </div>
    )
  }
}

module.exports = connect(state => state)(MobileViewFooter)
