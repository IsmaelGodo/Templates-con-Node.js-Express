const express = require('express');
const infoRoutes = require('./routes/infoRoutes')
const app = express()
const port = 3000

// Template engine
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json())
app.use('/', infoRoutes)
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Servidor funcionando en https://localhost:${port}`)
})