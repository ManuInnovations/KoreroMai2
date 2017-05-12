const { combineReducers } = require('redux')

//reducers
const letters = require('./letters')
const letter = require('./letter')


module.exports = combineReducers({
  letters,
  letter
})
