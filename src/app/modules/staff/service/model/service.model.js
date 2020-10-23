const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const ServiceSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is Required']
    },
    serviceType: String,
    staff: [{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }],
    serviceFor: {
        type: String,
        enum: ["Everyone", "Male", "Female"],
        default: "Everyone"
    },
    staffCommission: Number,
    commissionEnabled: {
        type: Boolean,
        default: false
    },
    onlineBooking: {
        type: Boolean,
        default: false
    },
    room: {
        type: Boolean,
        default: false
    },
    loyaltyPoint: {
        point: Boolean,
        recieve: Number,
        canRedeem: Number
    }
}, {
    timestamps: true,
    versionKey: false
});


var Service = mongoose.model("Service", ServiceSchema);


module.exports = {
    Service
};