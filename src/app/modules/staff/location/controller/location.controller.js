const {
    create,
    update,
    deleteLocation,
    findAllLocation,
    findOneLocation,
    shopList,
    findUserPhotos
} = require('../business/location.business');
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

