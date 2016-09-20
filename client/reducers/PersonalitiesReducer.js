import { RECIEVE_PERSONALITIES } from '../actions/getPersonalitiesAction'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECIEVE_PERSONALITIES:
      return action.personalities;
    default:
      return state;
  }
}
