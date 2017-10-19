const debug = require('debug')('components:Contentspage')
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import request from 'superagent'
import RaisedButton from 'material-ui/RaisedButton'
import Header from './Header'
import Footer from './Footer'

class Contentspage extends React.Component {
  handleClick(e) {
    e.preventDefault()
  }
  render() {
    debug(this.props)
    const { dispatch, letters } = this.props
    return (
        <div className='container'>
          <Header />
          <div className='content-box'>
            <h2>Letter Index</h2>
              <div className='button-container'>
                {
                letters.map((letter) => {
                  return (
                    <Link key={letter.id} to={`/letters/${letter.capital}`}>
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
                    </Link>
                  )
                })
              }
            </div>
          </div>
        <Footer />
      </div>
    )
  }
}

module.exports = connect(state => state)(Contentspage)
