// modules
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import reducer from "./reducers"
import initialState from "../state"
// top level components
import App from "./app"
import Home from "./components/Home"
import ContentsPage from "./components/Contentspage"
import DisplayLetter from "./components/Displayletter"
import Privacy from "./components/Privacy"
import About from "./components/About"
import MediaShow from "./components/Mediashow"
import MediaLibrary from "./components/Medialibrary"

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} store={store}>
        <IndexRoute component={Home} />
        <Route path="/letters" component={ContentsPage} />
        <Route path="/letters/:id" component={DisplayLetter} />
        <Route path="/letters/:id/watch" component={MediaShow} />
        <Route path="/media" component={MediaLibrary} />
        <Route path="/media/:id" component={MediaShow} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  </Provider>
)
document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#app")
  ReactDOM.render(<Root store={createStore(reducer, initialState)} />, root)
})
