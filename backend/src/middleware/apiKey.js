import 'dotenv/config'

export function requireApiKey(req,res,next){
  const key = req.headers['x-api-key'] || req.query.api_key
  const expected = process.env.ADMIN_API_KEY || null
  if(!expected){
    // no key configured -> deny by default for safety
    return res.status(403).json({ok:false, msg:'admin key not configured on server'})
  }
  if(!key || key !== expected) return res.status(401).json({ok:false, msg:'invalid api key'})
  next()
}
