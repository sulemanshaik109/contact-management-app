const { required } = require("joi");
const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        phone: {type: String, required: true},
        address: {type: String},
    },
    {timestamps: true}
);

module.exports = mongoose.model("Contact", ContactSchema);