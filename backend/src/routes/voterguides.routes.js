import express from 'express'
import { listVoterGuides, getVoterGuide } from '../controllers/voterguides.controller.js'

const router = express.Router()
router.get('/', listVoterGuides)
router.get('/:id', getVoterGuide)

export default router
