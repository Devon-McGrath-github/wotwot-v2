import { RECIEVE_PERSONALITIES } from '../actions/getPersonalitiesAction'

let TEMP = "TEMP"

const INITIAL_STATE = {}

export default (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_PERSONALITIES:
      console.log('recieved personalities');
      return action.personalities;
    case TEMP:
      console.log('shit went hella wrong')
      return state
    default:
      return state;
  }
}
