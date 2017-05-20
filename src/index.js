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
const Contentspage = require("./components/contentspage")
const Letterindex = require("./components/letterIndex")
const Displayletter = require("./components/displayletter")
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
          <Route path="/contentspage" component={Contentspage} />
          <Route path="/letterindex" component={Letterindex}>
            <Route path="/letterindex/:id" component={Displayletter} />
            <Route path="/letterindex/:id/watch" component={Multimedia}/>
          </Route>
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
