const debug = require('debug')('components:app')
const _ = require('lodash')
const React = require('react')

const { connect } = require('react-redux')
const { Link } = require('react-router')

const Nav = require('./nav')
const Footer = require('./footer')
const Home = require('./home')

const App = (props) => {
  debug({props})

  return (
    <div>
        <Nav />
        <div className="content">
          {props.children}
          <Home />
        </div>
        <Footer />
    </div>
  )
}

module.exports = connect((state) => state)(App)
