import mongoose from "mongoose";

// Creating Schema for user
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Created a Model for the schema
const User = mongoose.model("User", userSchema);
export default User;
