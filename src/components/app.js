const debug = require('debug')('components:app')
const _ = require('lodash')
const React = require('react')

const { connect } = require('react-redux')
const { Link } = require('react-router')


const App = (props) => {
  debug({props})

  return (
    <div>
      <Link to="/login">
        <button >
          Login
        </button>
      </Link>

      <Link to="/">
        <button >
          Back
        </button>
      </Link>

      {props.children}
    </div>
  )
}

module.exports = connect((state) => state)(App)
