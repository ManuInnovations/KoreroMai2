const debug = require('debug')('components:Medialibrary')
import React from 'react'
import { connect } from 'react-redux'
import request from 'superagent'
import { Link } from 'react-router'
import MobileViewFooter from './MobileViewFooter'

class Medialibrary extends React.Component {
  handleClick(e) {
    e.preventDefault()
  }
  render() {
    debug(this.props)
    const { dispatch, letters } = this.props
    return (
      <div className='preview'>
        <h2>Media Library</h2>
          <div className='media-box'>
          {
            letters.map((letter) => {
              return (
                  <div className='media-image'>
                    <Link key={letter.id} to={`/media/${letter.capital}`}>
                      <img
                        src={`${letter.wordImage[0].image}`}
                        className='img-fluid'
                        onClick={() =>
                          dispatch({
                            type: 'RENDER_LETTER',
                              payload: letter,
                            })
                        } />
                    </Link>
                  </div>
              )
            })
          }
          </div>
        <MobileViewFooter />
      </div>
    )
  }
}

module.exports = connect(state => state)(Medialibrary)
