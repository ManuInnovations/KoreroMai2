const debug = require('debug')('components:Contentspage')
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import request from 'superagent'
import Nav from './Nav'
import RaisedButton from 'material-ui/RaisedButton'

class Contentspage extends React.Component {

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    debug(this.props)
    const { dispatch, letters, isOpen } = this.props

    return (
        <div className='contentpage'>
          <h2>Phonics Index</h2>
            <div className='contentButtons'>
              {
              letters.map((letter) => {
                return (

                  <Link key={letter.id} to={`/letterindex/${letter.capital}`}>
                    <div
                      className='wiggle-me'
                      role='group'
                      aria-label='...'>

                      <RaisedButton
                        type='button'
                        className='contents-btn'
                        onClick={() =>
                            dispatch({
                              type: 'RENDER_LETTER',
                              payload: letter,
                            })
                        }>
                        {letter.capital}
                      </RaisedButton>

                    </div>
                  </Link>
                )
              })
            }
          </div>


      </div>
    )
  }
}

module.exports = connect(state => state)(Contentspage)

    // <Link to='/media'>
    //   <RaisedButton
    //     type='button'
    //     className='btn btn-xl'>
    //     Go to Media Library
    //   </RaisedButton>
    // </Link>
