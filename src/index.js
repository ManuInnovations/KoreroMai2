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
const Home = require("./components/Home")
const Contentspage = require("./components/Contentspage")
const LetterIndex = require("./components/LetterIndex")
const Displayletter = require("./components/Displayletter")
const Privacy = require("./components/Privacy")
const About = require("./components/About")
const Mediashow = require("./components/Mediashow")
const Medialibrary = require("./components/Medialibrary")
const Displayimages = require("./components/Displayimages")

const store = createStore(reducer, initialState)

const Root = ({ store }) => {
  return (
    <Provider store={store} >
      <Router history={hashHistory} >
        <Route path="/" component={App} store={store}>
          <IndexRoute component={Home} />
          <Route path="/contents" component={Contentspage} />
          <Route path="/letterindex" component={LetterIndex}>
            <Route path="/letterindex/:id" component={Displayletter} />
            <Route path="/letterindex/:id/watch" component={Mediashow}/>
          </Route>
          <Route path="/media" component={Medialibrary} />
          <Route path="/media/:id" component={Mediashow} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/about" component={About} />
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
