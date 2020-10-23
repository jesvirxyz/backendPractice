const {
    register,
    getAllUser,
    updateCommission,
    updateUser
} = require('../business/user.business');
const { errorHandler } = require('../../../../helpers/errorHandling.helper');

// create a new location
exports.user_registration = async (req, res) => {
    try {
        const result = await register(req);
        res.status(200).send(result);
    } catch (e) {
        res.status(400).send(errorHandler(e));
    };
}

exports.find_allUser = async (req, res) => {
    try {
        const result = await getAllUser(req);
        res.status(200).send(result);
    } catch (e) {
        res.status(400).send(errorHandler(e));
    };
}


exports.update_commission = async (req, res) => {
    try {
        const result = await updateCommission(req);
        res.status(200).send(result);
    } catch (e) {
        res.status(400).send(errorHandler(e));
    };
}

exports.update_userServices = async (req, res) => {
    try {
        const result = await updateUser(req);
        res.status(200).send(result);
    } catch (e) {
        res.status(400).send(errorHandler(e));
    };
}