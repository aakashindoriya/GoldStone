const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["active", "inactive"],
            required: true,
        },
    },
    { timestamps: { createdAt: "Created_at", updatedAt: "Updated_at" } }
);

const User = mongoose.model("GUser", userSchema);

module.exports = User;
