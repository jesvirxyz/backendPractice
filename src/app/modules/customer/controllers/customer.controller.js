const { register } = require('../business/customer.business'),
    { errorHandler } = require('../../../helpers/errorHandling.helper');

exports.customer_register = async (req, res) => {
    try {
        const result = await register(req);
        res.status(200).send(result);
    } catch (e) {
        res.status(400).send(errorHandler(e));
    };
}
