import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// import auth from './authReducer'
import placeholder from './PlaceholderReducer'

const reducers = {
  routing: routerReducer,
  placeholder: placeholder
}

const appReducer = combineReducers(reducers)

export default appReducer
