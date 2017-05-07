// logging
const debug = require('debug')('index')
localStorage.debug = '*'

// modules
const request = require('superagent')
const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore } = require('redux')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const reducer = require('./reducer')
const initialState = require('../state')

// top level components
const App = require('./components/app')

const store = createStore(reducer, initialState)

const Root = ({store}) => {
  console.log("store " ,store);
  return (
    <Provider store={store} >
      <Router history={hashHistory} >
        <Route path="/" component={App} store={store}>
        </Route>
      </Router>
    </Provider>
  )
}


document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')
    ReactDOM.render(
      <Root store={store}/>,
      root
    )
})
