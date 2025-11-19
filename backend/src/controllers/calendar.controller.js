import { pool } from '../config/db.js'
import { MOCK_CALENDAR } from '../mockData.js'

export async function getCalendar(req,res,next){
  try{
    const { from, to, limit } = req.query
    
    // Filtrar eventos mock basado en parámetros
    let filteredEvents = [...MOCK_CALENDAR]
    
    if(from) {
      const fromDate = new Date(from)
      filteredEvents = filteredEvents.filter(e => new Date(e.date) >= fromDate)
    }
    
    if(to) {
      const toDate = new Date(to)
      filteredEvents = filteredEvents.filter(e => new Date(e.date) <= toDate)
    }
    
    // Ordenar por fecha
    filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date))
    
    // Limitar resultados si se especifica
    if(limit) {
      const limitNum = parseInt(limit, 10)
      if(limitNum > 0) {
        filteredEvents = filteredEvents.slice(0, limitNum)
      }
    }
    
    console.log(`Returning ${filteredEvents.length} calendar events`)
    return res.json({ 
      ok: true, 
      count: filteredEvents.length, 
      events: filteredEvents 
    })
    
  } catch(err) {
    console.error('Error in getCalendar:', err)
    // Fallback: devolver todos los eventos mock
    return res.json({ 
      ok: true, 
      count: MOCK_CALENDAR.length, 
      events: MOCK_CALENDAR 
    })
  }
}

export async function getCalendarById(req, res) {
  try {
    const { id } = req.params
    const event = MOCK_CALENDAR.find(e => e.id === parseInt(id, 10))
    
    if (!event) {
      return res.status(404).json({ ok: false, error: 'Evento no encontrado' })
    }
    
    return res.json({ ok: true, event })
  } catch(err) {
    console.error('Error in getCalendarById:', err)
    return res.status(500).json({ ok: false, error: 'Error interno del servidor' })
  }
}

// Fallback cuando DB no está disponible
export async function getCalendarMock(req,res){
  res.json({ ok: true, count: MOCK_CALENDAR.length, events: MOCK_CALENDAR })
}
