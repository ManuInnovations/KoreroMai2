const clone = require('clone')
const _ = require('lodash')


module.exports = function (state, action) {
  const newState = clone(state)

  switch (action.type) {
    case 'USER_PROFILE':

      newState.currentUser = action.payload.id
      newState.userInfo = action.payload
      newState.isLoggedIn = true
      return newState

    default:
      return newState
  }
}
