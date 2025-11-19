import { Router } from 'express'
import { listIncidents, postIncident } from '../controllers/incidents.controller.js'

const router = Router()
router.get('/', listIncidents)
router.post('/', postIncident)
export default router
