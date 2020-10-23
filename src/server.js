require('./environtment/environment');
require('./app/db/mongoose')
const express = require("express"),
    bodyParser = require("body-parser"),
    config = require('./environtment/environment.json'),
    path = require('path'),
    http = require('http'),
    https = require('https'),
    cors = require('cors'),
    app = express(),
    locationRoute = require('./app/modules/staff/location/routes/location.routes'),
    userRoute = require('./app/modules/staff/user/routes/user.routes'),
    serviceRoute = require('./app/modules/staff/service/routes/service.routes');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/location', locationRoute);
app.use('/api/user', userRoute);
app.use('/api/service', serviceRoute);

app.listen(process.env.PORT, () => {
    console.log('Server Running')
})