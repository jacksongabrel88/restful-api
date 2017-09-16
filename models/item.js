let mongoose = require("mongoose");

module.exports = () => {
    let schema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        price: {
            type: Number
        }
    });

    return mongoose.model("Item", schema);
};