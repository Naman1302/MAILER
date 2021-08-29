const router = require('express').Router()
const isAuthenticated = require('../middleware/isAuthenticated') 
const mailer = require('../controllers/mailer')

router.post('/mail', isAuthenticated, mailer)

module.exports = router