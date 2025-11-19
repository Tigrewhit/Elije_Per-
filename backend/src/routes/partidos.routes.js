import express from 'express'
import { getPartidos, getPartido } from '../controllers/partidos.controller.js'

const router = express.Router()
router.get('/', getPartidos)
router.get('/:id', getPartido)

export default router
