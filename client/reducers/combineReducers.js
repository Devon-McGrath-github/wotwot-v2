import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// import auth from './authReducer'
import personalities from './PersonalitiesReducer'
import bananaNeedsRemoving from './testReducer.js'

const reducers = {
  routing: routerReducer,
  personalities: personalities,
  bananaNeedsRemoving: bananaNeedsRemoving
}

const appReducer = combineReducers(reducers)

export default appReducer
