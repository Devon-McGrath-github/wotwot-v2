import React from 'react'
import express from 'express'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { RouterContext, match } from 'react-router'

import db from '../db'
import routes from '../../shared/routes'
import reducer from '../../shared/reducer'

const router = express.Router()
let store = createStore(reducer)

router.get('/*', (req, res) => {
  const location = { location: req.url }
  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) return res.sendStatus(500)
    if (!renderProps) return res.sendStatus(404)
    if (redirectLocation) return res.redirect(redirectLocation.pathname)

    const result = renderResult(renderProps, store.getState())
    res.send(result)
  })
})

function renderResult (renderProps, initialState) {
  const Component = (
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>
  )
  const componentHtml = renderToString(Component)
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Rendered server-side</title>
    </head>
    <body>
      <div id="app">${componentHtml}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
      </script>
      <script src="/bundle.js"></script>
    </body>
    </html>
  `
}

export default router
