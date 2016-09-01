import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import PersonalitiesIndex from './containers/PersonalitiesIndexContainer'
import ThingDetail from './containers/ThingDetailContainer'

export default (
  <Route name="app" component={App} path="/">
    <IndexRoute component={PersonalitiesIndex} />
    <Route name="detail" component={ThingDetail} path="details/:id" />
  </Route>
)
