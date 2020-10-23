const mongoose = require("mongoose");


const CustomerSchema = new mongoose.Schema({
    firstName: {
        type: String,

        // unique: true
    },

    lastName: {
        type: String
        // unique: true
    },

    verified: {
        type: Boolean,
        default: "false"
    },

}, {
    timestamps: true,
    versionKey: false
});




var Customer = mongoose.model("Customer", CustomerSchema);


module.exports = {
    Customer
};