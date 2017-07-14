import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

const debug = require('debug')('components:MobileViewFooter')

class MobileViewFooter extends React.Component {

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    debug(this.props)
    const { dispatch, letters } = this.props

    return (
      <div className='mobile-footer'>
          <footer>
              <div className='footerButtonsContainer'>
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
                          className='footer-btn'
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
              <img className='mob-tv' src='images/tv.png' alt='grid icon' />
            </Link>
            <br />

            <Link to="/privacy" id="mob-privacy">
              &nbsp; Privacy Policy
            </Link>

            <Link to="/about" id="mob-about">
              &nbsp; About Us
            </Link>

          </footer>
      </div>
    )
  }
}

module.exports = connect(state => state)(MobileViewFooter)
