import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'

class Nav extends React.Component {

  handleClick(e) {
    e.preventDefault()
    this.props.router.push('/')
  }

  render() {

    return (

      <div className='navigation'>
        <ul className='topnav'>
          <li className='brand'>
            <Link to='#'>
              Kōrero Mai
            </Link>
          </li>
          <li className='nav-right'>
            <Link to='/media'>
              <img className='blocks' src='images/tv.png' alt='grid icon' />
            </Link>
          </li>
          <li className='nav-right'>
            <Link to='/contents'>
              <img className='blocks' src='images/grid.png' alt='grid icon' />
            </Link>
          </li>

        </ul>
      </div>
    )
  }
}

module.exports = connect(state => state)(Nav)
