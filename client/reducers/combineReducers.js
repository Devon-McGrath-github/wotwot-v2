import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// import auth from './authReducer'
import personalities from './PersonalitiesReducer'

const reducers = {
  routing: routerReducer,
  personalities: personalities
}

const appReducer = combineReducers(reducers)

export default appReducer
