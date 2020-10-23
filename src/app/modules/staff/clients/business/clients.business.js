const { msg } = require('../../../../../config/messages'),
    {
        pickClientData,
        pickCustomerData
    } = require('../../../../helpers/pickResponse.helper'),
    { Client } = require('../models/clients.models'),
    { Customer } = require('../../../customer/models/customer.model');


exports.create = async data => {
    const cust_body = pickCustomerData(data.body);
    const customer = new Customer(cust_body);
    const cust_response = await customer.save();
    const body = pickClientData(data.body);
    body.customerId = customer._id;
    const client = new Client(body);
    const response = await client.save();

    return {
        result: pickCustomerData(cust_response) && pickClientData(response),
        status: 200,
        messages: msg.userRegistered
    }
}