const { combineReducers } = require("redux")
const letter = require("./letter")
const letters = require("./letters")
const completed = require("./completed")
const isOpen = require("./isOpen")



module.exports = combineReducers({
  letters,
  letter,
  completed,
  isOpen,
})
