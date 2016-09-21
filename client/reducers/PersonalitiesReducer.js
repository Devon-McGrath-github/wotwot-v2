import { RECEIVE_PERSONALITIES } from '../actions/getPersonalitiesAction'

let TEMP = "TEMP"

const INITIAL_STATE = {}

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PERSONALITIES:
      return action.personalities;
    case TEMP:
      console.log('shit went hella wrong')
      return state
    default:
      return state;
  }
}
