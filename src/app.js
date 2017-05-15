const debug = require('debug')('components:app')
const _ = require('lodash')

//modules
const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

//components
const Nav = require('./components/nav')
const Footer = require('./components/footer')

const App = (props) => {
  console.log('this is app.js props', props);
  debug({props})

  return (
    <div className="container">
        <Nav />
        <div className="content">
          {props.children}
        </div>
        <Footer />
    </div>
  )
}

module.exports = connect((state) => state)(App)
// App will now have the state and store.dispatch merged into its props
