const debug = require('debug')('components:Mediashow')
import React from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import request from 'superagent'
import Footer from './Footer.js'
import Header from './Header.js'


class Mediashow extends React.Component {
  handleClick(e) {
    e.preventDefault()
    this.props.router.push('/')
  }
  render() {
    debug(this.props)
    const { dispatch, letter } = this.props
    return (
      <div className='container'>
        <Header />
        <div className='video-box'>
          <h2>Mātaki mai</h2>
          <div className='video'>
            <video controls>
              <source src={letter.multimedia} type='video/webm' />
              <track kind='captions' src='' srcLang='en' />
              Your browser does not support HTML5 video.
            </video>
          </div>
          <div>
            <img  src='../../images/previous.png' alt='back button' onClick={browserHistory.goBack} className='mediabackbutton' />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

module.exports = connect(state => state)(Mediashow)
