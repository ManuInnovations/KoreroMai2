const debug = require("debug")("components:app")

//modules
const React = require("react")
const { connect } = require("react-redux")

//components
const Nav = require("./components/nav")
const Footer = require("./components/footer")

const App = (props) => {
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
