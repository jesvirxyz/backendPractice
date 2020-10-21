const { msg } = require('../../../../../config/messages'),
    {
        newLocation,
    } = require('../../../../helpers/pickResponse.helper'),
    { Location } = require('../model/location.model'),
    mongoose = require('mongoose'),
    moment = require('moment'),
    _ = require('lodash');

exports.create = async (data) => {
    let body = newLocation(data.body);
    if (body.name || typeof body.name == "undefined") {
        throw msg.invalidRequest;
    }
    let locationExist = await Location.findOne({ name: body.name });
    if (locationExist) {
        throw msg.alreadyExist;
    }

    let location = new Location(body);
    let response = await location.save();
}
