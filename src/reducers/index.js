const { combineReducers } = require("redux")
const letter = require("./letter")
const letters = require("./letters")
const completed = require("./completed")


module.exports = combineReducers({
  letters,
  letter,
  completed,
})
