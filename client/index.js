import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import App from '../shared/components/App'
import reducer from '../shared/reducer'
import routes from '../shared/routes'

const initialState = window.__INITIAL_STATE__

let store = createStore(
  reducer, initialState, compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

render(
  <Provider store={store}>
    <Router children={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
)
