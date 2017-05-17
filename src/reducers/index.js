const { combineReducers } = require("redux")
const letter = require("./letter")
const letters = require("./letters")

module.exports = combineReducers({
  letters,
  letter,
})
