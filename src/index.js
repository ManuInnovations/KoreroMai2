import {index as debug} from 'debug';
localStorage.debug = "*"
// modules
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const createHistory = require('history').createHashHistory
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import reducer from './reducers'
import initialState from '../state'
//top level components
import App from './app'
import Home from './components/Home'
import Contentspage from './components/Contentspage'
import Letterindex from './components/Letterindex'
import Displayletter from './components/Displayletter'
import Privacy from './components/Privacy'
import About from './components/About'
import Mediashow from './components/Mediashow'
import Medialibrary from './components/Medialibrary'
const store = createStore(reducer, initialState)
const Root = ({ store }) => {
  return (
    <Provider store={store} >
      <Router history={hashHistory} >
        <Route path='/' component={App} store={store}>
          <IndexRoute component={Home} />
          <Route path='/letters' component={Contentspage} />
          <Route path='/letters/:id' component={Displayletter} />
          <Route path='/letters/:id/watch' component={Mediashow}/>
          <Route path='/media' component={Medialibrary} />
          <Route path='/media/:id' component={Mediashow} />
          <Route path='/privacy' component={Privacy} />
          <Route path='/about' component={About} />
        </Route>
      </Router>
    </Provider>
  )
}
document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')
  ReactDOM.render(
    <Root store={store} />,
    root,
  )
})
