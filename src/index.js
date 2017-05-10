// logging
const debug = require('debug')('index')
localStorage.debug = '*'

// modules
const request = require('superagent')
const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore } = require('redux')
const createHistory = require('history').createHashHistory
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const reducer = require('./reducer')
const initialState = require('../state')

// top level components
const App = require('./app')
const Home = require('./components/home')
const Letters = require('./components/letters')
const Letter = require('./components/letter')
const Privacy = require('./components/privacy')


const store = createStore(reducer, initialState)

const Root = ({store}) => {
  console.log('store ' ,store);
  return (
    <Provider store={store} >
      <Router history={hashHistory} >
        <Route path="/" component={App} store={store}>
          <IndexRoute component={Home} />
          <Route path="/letters" component={Letters} />
          <Route path="/letters/:id" component={Letter} />
          <Route path="/privacy" component={Privacy} />
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
