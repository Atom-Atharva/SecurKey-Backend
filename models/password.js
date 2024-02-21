import mongoose from "mongoose";

const passwordSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Created a Model for the schema

const Password = mongoose.model("Password", passwordSchema);
export default Password;
