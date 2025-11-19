import express from 'express'
import { getCandidates, getCandidate } from '../controllers/candidates.controller.js'
const router = express.Router()
router.get('/', getCandidates)
router.get('/:id', getCandidate)
export default router
