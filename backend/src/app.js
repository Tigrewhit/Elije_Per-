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
import newsRoutes from './routes/news.routes.js'
import voterguidesRoutes from './routes/voterguides.routes.js'
import provenienciaRoutes from './routes/proveniencia.routes.js'
import incidentsRoutes from './routes/incidents.routes.js'
import platformsRoutes from './routes/platforms.routes.js'
import { errorHandler } from './middleware/errorHandler.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req,res)=> res.json({ok:true, msg:'ElijePeru API'}))
app.get('/health', (req,res)=> res.json({ok:true, status:'healthy'}))

app.use('/electoral', electoralRoutes)
app.use('/candidates', candidatesRoutes)
app.use('/partidos', partidosRoutes)
app.use('/estaciones', estacionesRoutes)
app.use('/admin', adminRoutes)
app.use('/calendario', calendarioRoutes)
app.use('/news', newsRoutes)
app.use('/voterguides', voterguidesRoutes)
app.use('/proveniencia', provenienciaRoutes)
app.use('/incidents', incidentsRoutes)
app.use('/api/official-platforms', platformsRoutes)

// Error handler (should be last middleware)
app.use(errorHandler)

export default app
