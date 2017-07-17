const debug = require('debug')('components:Medialibrary')
import React from 'react'
import { connect } from 'react-redux'
import request from 'superagent'
import { Link } from 'react-router'

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
          <ul>
          {
            letters.map((letter) => {
              return (
                <li>
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
                  <p className='library-text'>{letter.mediaName}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = connect(state => state)(Medialibrary)
