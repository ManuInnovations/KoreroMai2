const debug = require('debug')('components:Contentspage')
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import request from 'superagent'
import Nav from './Nav'
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';


injectTapEventPlugin();


class Contentspage extends React.Component {

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    debug(this.props)
    const { dispatch, letters } = this.props

    return (
      <div className='row'>
        <div className='col-sm-12'>
          <Nav />
            {
            letters.map((letter) => {
              return (

                <Link key={letter.id} to={`/letterindex/${letter.capital}`}>
                  <div
                    className='btn-group btn-group-xl btn-group-center wiggle-me'
                    role='group'
                    aria-label='...'>

                    <RaisedButton
                      type='button'
                      className='btn'
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
        <Link to='/media'>
          <RaisedButton
            type='button'
            className='btn btn-xl'>
            Go to Media Library
          </RaisedButton>
        </Link>

      </div>
    )
  }
}

module.exports = connect(state => state)(Contentspage)
