import { Router } from 'express'
import { postIngestONPE, getFuentes, verifyProveniencia } from '../controllers/admin.controller.js'
import { requireApiKey } from '../middleware/apiKey.js'

const router = Router()

// Protect admin endpoints
router.use(requireApiKey)

// Trigger ONPE calendar ingest (admin)
router.post('/ingest/onpe', postIngestONPE)
// Batch ingest: accept array of {name,url} to ingest multiple sources (fallback to mockData if DB not available)
router.post('/ingest/batch', postIngestBatch)

// List registered fuentes
router.get('/fuentes', getFuentes)

// Verify a proveniencia entry (recalculate hash)
router.get('/verificar/:provId', verifyProveniencia)

export default router
