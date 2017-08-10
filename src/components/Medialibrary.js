const debug = require('debug')('components:Medialibrary')
import React from 'react'
import { connect } from 'react-redux'
import request from 'superagent'
import { Link } from 'react-router'
import Footer from './Footer'
import Header from './Header'


class Medialibrary extends React.Component {
  handleClick(e) {
    e.preventDefault()
  }
  render() {
    debug(this.props)
    const { dispatch, letters } = this.props
    return (
      <div className='medialibrary-container'>
        <Header />
        <div className='medialibrary-box'>
          <h2>Media Library</h2>
          {
            letters.map((letter, index) => {
              return (
                  <div className='media-image' key={index}>
                    <Link key={letter.id} to={`/media/${letter.capital}`}>
                      <img
                        key={index}
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
        <Footer />
      </div>
    )
  }
}

module.exports = connect(state => state)(Medialibrary)
