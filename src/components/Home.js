import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import request from 'superagent'
// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Home extends React.Component {
  handleClick(e) {
    e.preventDefault()
    this.props.router.push('/')
  }
  render() {
    const { dispatch } = this.props
    return (
      <div className='container'>
        <div className='home-box'>
          <h1>Kōrero Mai</h1>
          <img src='./images/pipi.gif' width='200px' />
          <h2>Nau mai, haere mai</h2>
          <h3>Learn te reo Māori</h3>
          <Link to='/letters'>
            <button
              className='play'>
              Let's Play!
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

module.exports = connect(state => state)(Home)
