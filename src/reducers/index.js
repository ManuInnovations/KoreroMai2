const { combineReducers } = require('redux')

//reducers
const letter = require('./letter')
const letters = require('./letters')


module.exports = combineReducers({
  letters,
  letter
})
