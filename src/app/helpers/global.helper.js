const { Service } = require("../modules/staff/service/models/service.model"),
  { Appointment } = require("../modules/staff/appointments/models/appointments.model");


exports.ownerId = (body, id) => {
  if (!Array.isArray(body)) {
    body.ownerId = id
    return body
  } else {
    let arr = []
    body.map((i) => {
      i.ownerId = id
      arr.push(i)
    })
    return arr
  }

}

exports.name_service = async (appointment) => {
  let temp_service = await Service.find({ 'services._id': appointment.service },
    {
      'services.$._id': appointment.service
    }).lean()
  if (temp_service.length) {
    let service_name = temp_service[0].services
    for (let i = 0; i < service_name.length; i++) {
      if (service_name[i]._id.equals(appointment.service)) {
        let temp_obj = {
          _id: appointment.service,
          name: service_name[i].name
          // pricing_option: service_name[i].pricing_option
        }
        appointment.service = temp_obj
        break;
      }
    }
  }
  return appointment
}

//base64 to binary buffer
exports.img_conversion = (sign) => {
  const c_data = sign.split(",")[1]
  const c_prefix = sign.split(",")[0]
  const c_buffer = new Buffer(c_data, "base64")
  let imgObj = {
    data: c_buffer,
    prefix: c_prefix,
    contentType: (c_prefix.split("/")[1]).split(";")[0]
  }
  return {
    img: imgObj,
    date: new Date()
  }
}

//base64 converion from binary buffer
exports.signature_img = (sign) => {
  let c_prefix = sign.prefix
  let c_img = new Buffer(sign.data).toString('base64');
  let signObj = c_prefix + ',' + c_img
  return signObj
}

//base64 converion from binary buffer using lean()
exports.binaryToBase64 = (img) => {
  let c_prefix = img.prefix
  let c_img = new Buffer(img.data.buffer).toString('base64');
  let base64Image = `${c_prefix},${c_img}`
  return base64Image;
}

//update name in bookedBy of Appointmnet
exports.updateBookedBy = async (id, name, type) => {
  await Appointment.updateMany({ "bookedBy.id": id, "bookedBy.type": type }, { $set: { "bookedBy.name": name } }, { new: true });
}