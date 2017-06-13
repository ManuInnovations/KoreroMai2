const initialState = require("../../state")

module.exports = (state = initialState.letter, action) => {
  switch (action.type) {

    case "UPDATE_COMPLETED":
      console.log('Update completed Reducer action payload,',action.payload);
      return alert("Another one completed!")
    default: return state
  }
}
