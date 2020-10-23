const { create } = require('../business/clients.business'),
    { errorHandler } = require('../../../../helpers/errorHandling.helper');

exports.client_create = async (req, res) => {
    try {
        const result = await create(req);
        res.status(200).send(result);
    } catch (e) {
        res.status(400).send(errorHandler(e));
    };
}
