import express from 'express'
import { getOfficialPlatforms } from '../controllers/platforms.controller.js'

const router = express.Router()

// Ruta para obtener plataformas oficiales JNE
router.get('/', getOfficialPlatforms)

export default router