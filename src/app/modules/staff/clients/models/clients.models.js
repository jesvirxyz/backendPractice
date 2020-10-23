const mongoose = require("mongoose");
const ClientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        // required: [true, 'firstName is Required']
    },
    lastName: {
        type: String
    },
    phone1: {
        type: String,
        //     required: function () {
        //   return (this.facebookData || this.googleData) ? false : [true, 'Mobile No is Required'];
        // }
    },
    phone2: String,
    email: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        enum: ["Male",
            "Female",
            "Unknown",
            ""
        ]
    },
    customerId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Customer',
        default: undefined
    },

}, {
    timestamps: true,
    versionKey: false
});
var Client = mongoose.model("Client", ClientSchema);


module.exports = {
    Client
};