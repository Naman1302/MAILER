const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET||'gsfi894wt43hiwhfhs8fwb3_efuwbfewf'

async function isAuthenticated(req, res, next){
    if(req.cookies.ACCESS_TOKEN){
        try{
            const decoded = await jwt.verify(req.cookies.ACCESS_TOKEN,JWT_SECRET)
            res.locals.decoded = decoded
            return next()
        }catch(e){
            res.json({status: 401})
        }
    }else
        res.json({status: 401})
}

module.exports = isAuthenticated