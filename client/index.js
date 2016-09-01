import React from 'react'
import thunk from 'redux-thunk'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

// import actions from './actions/...........'
import actions from './actions'

// import appReducer from './reducers/combineReducers'
import appReducer from './reducer'

import App from './components/App'
import PersonalitiesIndex from './containers/PersonalitiesIndexContainer'
import ThingDetail from './containers/ThingDetailContainer'

let store = createStore(
  appReducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

const history = syncHistoryWithStore(hashHistory, store)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={PersonalitiesIndex} />
          <Route name="detail" component={ThingDetail} path="details/:id" />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
