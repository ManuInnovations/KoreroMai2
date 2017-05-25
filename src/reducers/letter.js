// Note: Object.assign is another way of cloning the state.
// Check out: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
const initialState = require("../../state")

module.exports = (state = initialState.letter, action) => {
  switch (action.type) {

    case "RENDER_LETTER":
      console.log('Reducer,',action.payload);
      return Object.assign({},state, action.payload)

    default: return state
  }
}
