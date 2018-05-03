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
          <img src='./images/logo.svg' alt='logo' className='logoImage' /><br />
          <img src='./images/girl.svg' alt='girl' className='kidImage' />
          <img src='./images/boy.svg' alt='boy' className='kidImage' />

          <h2>Nau mai, Haere mai ~ Welcome</h2>
          <h3>Kia Ora! Hi! ~ Let's learn Te Reo Māori</h3>
          <Link to='/letters'>
            <button className='play'>
              Play!
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

module.exports = connect(state => state)(Home)
