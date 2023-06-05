const express = require('express')
const infoRouter = express.Router()
const infoControllers = require('../controllers/infoControllers')

infoRouter.get('/', infoControllers.getHome)
infoRouter.get('/about', infoControllers.getAbout)
infoRouter.get('/location', infoControllers.getLocation)
infoRouter.get('/mission', infoControllers.getMission)
infoRouter.get('/contact', infoControllers.getContact)

module.exports = infoRouter;