const mongoose = require("mongoose");

const SalesSchema = new mongoose.Schema({
    appointment: [{
        appointmentId: {
            type: mongoose.Schema.ObjectId,
            ref: 'Appointment',
            required: function () {
                return (this.category != "voucher") ? [true, 'Appointment id is Required'] : false;
            }
        },
        discount: String,
        discoutAmount: Number,
        discountType: String,
        commission: {
            type: Number,
            default: 0
        },
        hourly_commission: {
            type: Number,
            default: 0
        },
        specific_commission: {
            type: Number,
            default: 0
        },
        amount: Number,//amount is actual price not special_price
        staff: {
            _id: {
                type: mongoose.Schema.ObjectId,
                ref: 'User'
            },
            firstName: String,
            lastName: String
        },
        service: {
            type: mongoose.Schema.ObjectId,
            ref: 'Service'
        },
        individualTax: {
            amount: Number,
            tax: Number
        },
        _id: false
    }],
    voucher: [{
        voucherId: {
            type: mongoose.Schema.ObjectId,
            ref: 'Voucher',
            required: function () {
                return (this.category == "voucher") ? true : false;
            }
        },
        discount: String,
        commission: {
            type: Number,
            default: 0
        },
        amount: Number,
        service: {
            type: mongoose.Schema.ObjectId,
            ref: 'Service'
        },
        _id: false
    }],
    totalAmount: Number, //including discount and excluding tip
    totalDiscount: Number,
    balance: Number, //remaining unpaid balance
    tips: [{
        staff: {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        },
        amount: Number,
        _id: false
    }],
    payment: [{
        name: String,
        amount: Number,
        paymentId: String,
        _id: false
    }], //Array for more than one payment method
    invoice: {
        type: String,
        default: function randomString(length) {
            var text = "";
            length = 8;
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ012345678";
            for (var i = 0; i < length; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        },
        unique: true
    },
    invoiceNo: Number,
    location: {
        type: mongoose.Schema.ObjectId,
        ref: 'Location'
    },
    ownerId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    clientId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Client'
    },
    category: {
        type: String,
        enum: ['voucher', 'appointment']
    },
    tax: {
        amount: Number,
        tax: Number
    },
    totalTax: Number
}, {
    timestamps: true,
    versionKey: false
});
var Sales = mongoose.model("Sales", SalesSchema);

Sales.syncIndexes()
module.exports = {
    Sales
};