const debug = require("debug")("components:App")
const React = require("react")
const { connect } = require("react-redux")
const Nav = require("./components/nav")
const Footer = require("./components/footer")

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
