const test = require('ava')
const reducer = require('../src/reducers')
const freeze = require('deep-freeze')

test('renders the selected letter', t => {
  t.plan(1)

  const state = { }
    freeze(state)

  const action = {
    type: 'RENDER_LETTER',
    payload: {
      id: 1,
      capital: 'A',
      lowercase: 'a',
      capitalSound: '/sounds/capitalSounds/A.mp3',
      lowerSound: '/sounds/lowerSounds/a.mp3',
      word: 'Āniwaniwa',
      wordImage: 'images/words/aniwaniwa.png',
      wordSound: '/sounds/aniwaniwa.mp3',
    }
  }

  const newState = reducer(state, action)
console.log('this is newState', newState);
  t.deepEqual(newState.letter, action.payload, "should render the letter")
})
