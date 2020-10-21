require('./environtment/environment');
require('./app/db/mongoose')
const express = require("express"),
    bodyParser = require("body-parser"),
    config = require('./environtment/environment.json'),
    path = require('path'),
    http = require('http'),
    https = require('https'),
    app = express(),
    salesRoute = require('./app/modules/staff/sales/routes/sales.routes'),
    locationRoute = require('./app/modules/staff/location/routes/location.routes')



app.use('/api/sales', salesRoute);
app.use('/api/location', locationRoute);


app.listen(process.env.PORT, () => {
    console.log('Server Running')
})