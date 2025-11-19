import { Router } from 'express'
import { getProveniencia, getAuditoria } from '../controllers/proveniencia.controller.js'

const router = Router()
router.get('/:id', getProveniencia)
router.get('/auditoria', getAuditoria)

export default router
