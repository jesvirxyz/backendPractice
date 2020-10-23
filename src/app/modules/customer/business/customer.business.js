const { msg } = require('../../../../config/messages'),
    {
        pickCustomerData,
    } = require('../../../helpers/pickResponse.helper'),
    { Customer } = require('../models/customer.model');

exports.register = async data => {
    const body = pickCustomerData(data.body);

    const customer = new Customer(body);
    const response = await customer.save();

    return {
        result: pickCustomerData(response),
        status: 200,
        messages: msg.userRegistered
    }
}