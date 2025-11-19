import express from 'express'
import { getCalendar } from '../controllers/electoral.controller.js'
const router = express.Router()
router.get('/calendar', getCalendar)
export default router
