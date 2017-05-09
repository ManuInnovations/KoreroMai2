const clone = require('clone')


module.exports = function (state, action) {

  const newState = clone(state)

  switch (action.type) {

    case 'CHANGE_ROUTE':
      newState.singleLetter = action.payload
      return newState

    case 'UPDATE_LETTERS':
      newState.letters = action.payload
      return newState

    default:
      return newState
  }
}
