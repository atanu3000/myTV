const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        subject: {
            type: String,
        },
        message: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
