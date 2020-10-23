const { msg } = require('../../../../../config/messages'),
    {
        newService,
        pickAllService
    } = require('../../../../helpers/pickResponse.helper'),
    { Service } = require('../model/service.model');

exports.create = async data => {
    const body = newService(data.body);
    if (!body.name || typeof body.name === 'undefined') {
        throw msg.invalidRequest
    }
    const locationExist = await Service.findOne({ name: body.name });
    if (locationExist) {
        throw msg.alreadyExist
    }
    const service = new Service(body);
    await service.save();
}

exports.findAllService = async data => {
    try {
        let list = data.query.list;
        let query = {};
        let service = await Service.find(query).lean();
        return list && pickAllService(service) || service;
    } catch (error) {
        throw error
    }
}