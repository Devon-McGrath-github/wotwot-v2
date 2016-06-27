import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

import webView from './routes/web-view'
import thingsApi from './routes/api/things'

const app = express()

app.use(express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())

app.use('/', webView)
app.use('/v1/things', thingsApi)

export default app
