const debug = require("debug")("components:App")
const React = require("react")
const { connect } = require("react-redux")
const Nav = require("./components/Nav")
const Footer = require("./components/Footer")

const App = (props) => {
  debug({ props })

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

module.exports = connect(state => state)(App)
