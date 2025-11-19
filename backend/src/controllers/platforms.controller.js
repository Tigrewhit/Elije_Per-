import { OFFICIAL_JNE_PLATFORMS } from '../mockData.js'

export const getOfficialPlatforms = (req, res) => {
  try {
    res.json(OFFICIAL_JNE_PLATFORMS)
  } catch (error) {
    console.error('Error fetching official platforms:', error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}

export default {
  getOfficialPlatforms
}