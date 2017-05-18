const debug = require("debug")("index")

localStorage.debug = "*"

// modules
const React = require("react")
const ReactDOM = require("react-dom")
const { Provider } = require("react-redux")
const { createStore } = require("redux")
const createHistory = require("history").createHashHistory
const { Router, Route, IndexRoute, hashHistory } = require("react-router")

const reducer = require("./reducers")
const initialState = require("../state")

//top level components
const App = require("./app")
const Home = require("./components/home")
const Letters = require("./components/letters")
const LetterIndex = require("./components/letterIndex")
const Letter = require("./components/letter")
const Privacy = require("./components/privacy")
const About = require("./components/about")
const Multimedia = require("./components/multimedia")

const store = createStore(reducer, initialState)

const Root = ({ store }) => {
  return (
    <Provider store={store} >
      <Router history={hashHistory} >
        <Route path="/" component={App} store={store}>
          <IndexRoute component={Home} />
          <Route path="letters" component={Letters} />
          <Route path="letterIndex" component={LetterIndex}/>
          <Route path="letterIndex/:id" component={Letter} />
          <Route path="letterIndex/:id/watch" component={Multimedia} />
          <Route path="privacy" component={Privacy} />
          <Route path="about" component={About} />
        </Route>
      </Router>
    </Provider>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#app")
  ReactDOM.render(
    <Root store={store} />,
    root,
  )
})
