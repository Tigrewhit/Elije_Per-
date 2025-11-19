import express from 'express'
import { getEstaciones, getEstacion } from '../controllers/estaciones.controller.js'

const router = express.Router()
router.get('/', getEstaciones)
router.get('/:id', getEstacion)

export default router
