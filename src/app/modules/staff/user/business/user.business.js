const { msg } = require('../../../../../config/messages'),
    { User } = require('../model/user.model'),
    { Service } = require('../../service/model/service.model'),
    {
        newUser,
        pickUser
    } = require('../../../../helpers/pickResponse.helper');

exports.register = async (data) => {
    const body = newUser(data.body);
    body._type = "staff";
    const user = new User(body);
    user.staffTitle = "Staff";

    await user.save();
}

exports.getAllUser = async (data) => {
    try {

        let list = data.query.list;
        let query = {};
        let user = await User.find(query).lean();

        return list && pickUser(user) || user;
    } catch (error) {
        throw error
    }

}

exports.updateCommission = async (data) => {
    const id = data.params.id;
    let body = newUser(data.body);
    const services = await Service.find({}).lean();
    await console.log(services[0]._id);
    if (!id || typeof id === 'undefined' || !body) {
        throw msg.invalidRequest;
    }

    try {
        let result = await User.findById(id);
        result.service[0].service_commission = body.service[0].service_commission;
        result.service[0].hourly_pay = body.service[0].hourly_pay;
        result.service[0].hourly_commission = body.service[0].hourly_commission;
        await result.save();
        if (result) {

            return {
                messages: msg.updated,
                status: 200
            }
        }

    } catch (error) {
        throw error;
    }

}

exports.updateUser = async (data) => {
    const id = data.params.id;
    let body = pickUser(data.body);
    const services = {
        serviceId: body.service.serviceId,
        service_commission: body.service.service_commission,
        hourly_pay: body.service.hourly_pay,
        hourly_commission: body.service.hourly_commission
    }

    if (!id || typeof id === 'undefined' || !body) {
        throw msg.invalidRequest;
    }

    try {
        let result = await User.findById(id);
        let s_res = result.service;
        let count = 0;
        s_res.forEach(data => {
            if (data.serviceId == services.serviceId) {
                data.service_commission = services.service_commission;
                data.hourly_pay = services.hourly_pay;
                data.hourly_commission = services.hourly_commission;
                count++;
                result.save();
            }

        });

        if (count == 0) {
            console.log("No Service is found for specific user");
            const findServices = await Service.findById(body.service.serviceId);
            const addStaff = findServices.staff;
            const aquired = addStaff.indexOf(id);
            if (aquired < 0) {
                addStaff.push(id);
                findServices.save();
                console.log("user is now saved in services list");
            } else {
                console.log("user alredy in services list");
            }
            s_res.push(services);
        }
        await result.save();

        if (result) {

            return {
                messages: msg.updated,
                status: 200
            }
        }

    } catch (error) {

    }
}