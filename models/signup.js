const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true},
);

const UserData = mongoose.model('UserData', signSchema);
module.exports = UserData;