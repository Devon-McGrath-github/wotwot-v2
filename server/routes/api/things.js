import express from 'express'
const router = express.Router()

import db from '../../db'

router.get('/', (req, res) => {
  res.json(db.getThings())
})

export default router
