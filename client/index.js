// this creates the link so sass stylesheets will be bundled by webpack
require('./css/main.scss')

import React from 'react'
import thunk from 'redux-thunk'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

// import actions from './actions/...........'
import actions from './actions/actions'
// checks login status
import { listenToAuth } from './actions/authAction'

// dispatches call to firebase, returns personalities data
import { getPersonalities } from './actions/getPersonalitiesAction'

import appReducer from './reducers/combineReducers'

import App from './components/App'
import PersonalitiesIndex from './containers/PersonalitiesIndexContainer'

import Dashboard from './components/pages/Dashboard'
import Campaign from './components/pages/Campaign'
import UserAccounts from './components/pages/UserAccounts'

// TODO: changed component page, to a container
import MediaLibrary from './containers/MediaLibraryContainer'
//

// singup and login containers
import Auth from './containers/AuthContainer'
import SignUp from './containers/SignUpContainer'

import Manufacturers from './components/pages/Manufacturers'
import Products from './components/pages/Products'
import Tags from './components/pages/Tags'
import Personality from './components/pages/Personality'

import Help from './components/pages/Help'
import Feedback from './components/pages/Feedback'
import ContactUs from './components/pages/ContactUs'

let store = createStore(
  appReducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

// preload store while index page is loading
store.dispatch(getPersonalities())

const history = syncHistoryWithStore(hashHistory, store)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={PersonalitiesIndex} />
          <Route component={Dashboard} path="dashboard" />
          <Route component={Campaign} path="campaign" />
          <Route component={UserAccounts} path="user-accounts" />
          <Route component={MediaLibrary} path="media-library" />
          <Route component={Manufacturers} path="manufacturers" />
          <Route component={Products} path="products" />
          <Route component={Tags} path="tags" />
          <Route component={Personality} path="personality" />
          <Route component={Help} path="help" />
          <Route component={Feedback} path="feedback" />
          <Route component={ContactUs} path="contact-us" />

          {/* auth routes for login and signup */}
          <Route path='auth' component={Auth} />
          <Route path='sign-up' component={SignUp} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
  {/* dispatchs listenToAuth action which checks if a user is logged in or not */}
  store.dispatch(listenToAuth())
})
