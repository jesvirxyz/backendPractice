const { msg } = require('../../../../../config/messages'),
    { newLocation,
        pickLocationListResponse,
    } = require('../../../../helpers/pickResponse.helper'),
    { Location } = require('../model/location.model');

exports.create = async (data) => {
    let body = newLocation(data.body);
    if (!body.name || typeof body.name == 'undefined') {
        throw msg.invalidRequest
    }

    let locationExist = await Location.findOne({ name: body.name });
    if (locationExist) {
        throw msg.alreadyExist
    }
    let location = new Location(body);
    await location.save()

}

exports.finAllLocations = async (data) => {
    try {
        let list = data.query.list;
        let query = {};
        let location = await Location.find(query).lean();

        return list && pickLocationListResponse(location) || location;
    } catch (error) {
        throw error
    }
}