const debug = require('debug')('components:App')
import React from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = (props) => {
  debug({ props })
  return (
    <MuiThemeProvider>
      <div className='container'>
        <div className='content'>
          {props.children}
        </div>
      </div>
    </MuiThemeProvider>
  )
}

module.exports = connect(state => state)(App)
