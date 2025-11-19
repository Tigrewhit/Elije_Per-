import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import morgan from 'morgan'
import electoralRoutes from './routes/electoral.routes.js'
import candidatesRoutes from './routes/candidates.routes.js'
import partidosRoutes from './routes/partidos.routes.js'
import estacionesRoutes from './routes/estaciones.routes.js'
import adminRoutes from './routes/admin.routes.js'
import calendarioRoutes from './routes/calendario.routes.js'
import { errorHandler } from './middleware/errorHandler.js'
import app from './app.js'

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> console.log(`Backend running on http://localhost:${PORT}`))
