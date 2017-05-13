  const clone = require('clone')


  module.exports = function (state={}, action) {

    const newState = clone(state)
    switch (action.type) {

      case 'RENDER_LETTER':
        newState.letter = action.payload
        return newState

      default:
        return newState
    }
  }
