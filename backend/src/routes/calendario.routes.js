import { Router } from 'express'
import { getCalendar, getCalendarById } from '../controllers/calendar.controller.js'

const router = Router()

router.get('/', getCalendar)
router.get('/:id', getCalendarById)

export default router
