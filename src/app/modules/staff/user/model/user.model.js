const mongoose = require("mongoose");
var Schema = mongoose.Schema;


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'firstName is Required']
    },
    lastName: {
        type: String
    },
    gender: {
        type: String,
        enum: ["Male",
            "Female",
            "Unknown"
        ]
    },
    _type: {
        type: String,
        enum: ["owner", "staff"],
        default: "owner"
    },
    staffTitle: {
        type: String
    },
    service: [{
        serviceId: {
            type: mongoose.Schema.ObjectId,
            ref: "Services"
        },
        service_commission: Number,
        hourly_pay: Number,
        hourly_commission: Number

    }]


}, {
    timestamps: true,
    versionKey: false
});




var User = mongoose.model("User", UserSchema);

module.exports = {
    User
};
