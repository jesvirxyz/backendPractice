const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: String,
    country: String,
    city: String
}, {
    timestamps: true,
    versionKey: false
});

locationSchema.pre('save', function (next) {
    next();
});



var Location = mongoose.model("location", locationSchema);


module.exports = {
    Location
};