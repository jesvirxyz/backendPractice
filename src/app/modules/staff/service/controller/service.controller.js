const {
    create,
    findAllService
} = require('../business/service.business');
const { errorHandler } = require('../../../../helpers/errorHandling.helper');


exports.create_Service = async (req, res) => {
    try {
        const result = await create(req);
        res.status(200).send(result);
    } catch (e) {
        res.status(400).send(errorHandler(e));
    };
}

exports.service_findAll = async (req, res) => {
    try {
        const result = await findAllService(req);
        res.status(200).send(result);
    } catch (e) {
        res.status(400).send(errorHandler(e));
    };
}
