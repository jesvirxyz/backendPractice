const {
    create,
    finAllLocations
} = require('../../location/business/location.business');
const { errorHandler } = require('../../../../helpers/errorHandling.helper');

// create a new location
exports.location_create = async (req, res) => {
    try {
        const result = await create(req);
        res.status(200).send(result);
    } catch (e) {
        res.status(400).send(errorHandler(e));
    };
}

exports.location_findAll = async (req, res) => {
    try {
        const result = await finAllLocations(req);
        res.status(200).send(result);
    } catch (e) {
        res.status(400).send(errorHandler(e));
    };
}
