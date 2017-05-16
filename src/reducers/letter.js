  const clone = require('clone')
  const initialState = require('../../state')

  module.exports = function (state=initialState.letter, action) {


    switch (action.type) {

      case 'RENDER_LETTER':
        return action.payload !== {} ? state : object.assign({},state, action.payload)

      default:
        return state
    }
  }
