import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import ThingList from './containers/ThingListContainer'
import ThingDetail from './containers/ThingDetailContainer'

export default (
  <Route name="app" component={App} path="/">
    <IndexRoute component={ThingList} />
    <Route name="detail" component={ThingDetail} path="details/:id" />
  </Route>
)
