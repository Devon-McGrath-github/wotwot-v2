import express from 'express'
const router = express.Router()

import db from '../../db'

/* GET /things */
router.get('/', (req, res) => {
  res.json(db.getThings())
})

export default router
