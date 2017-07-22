const test = require('ava')
const reducer = require('../src/reducers')
const freeze = require('deep-freeze')
const initialState = require('../state')
freeze(initialState.letter)
test('renders a blank letter', (t) => {
  t.plan(1)
  const action = {
    type: 'RENDER_LETTER',
    payload: {},
  }
  const expectedState = {}
  const newState = reducer(
  initialState.letter, action)
  t.deepEqual(newState.letter,
  expectedState, 'should render a blank object')
})
