const debug = require('debug')('components:Mediashow')
import React from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import request from 'superagent'
import MobileViewFooter from './MobileViewFooter.js'


class Mediashow extends React.Component {

  handleClick(e) {
    e.preventDefault()
    this.props.router.push('/')
  }

  render() {
    debug(this.props)
    const { dispatch, letter } = this.props

    return (
      <div className='media-container'>
        <h2>Watch</h2>

        <div className='video-box'>
          <div className='video'>
            <video width='90%' controls>
              <source src={letter.multimedia} type='video/webm' />
              <track kind='captions' src='' srcLang='en' />
              Your browser does not support HTML5 video.
            </video>
          </div>

          <div>
              <img id='mediashow-back' src='../../images/previous.png' alt='back button' onClick={browserHistory.goBack} />
          </div>
        </div>
        <MobileViewFooter />

      </div>
    )
  }
}

module.exports = connect(state => state)(Mediashow)
