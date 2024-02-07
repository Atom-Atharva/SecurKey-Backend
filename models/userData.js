import mongoose from "mongoose";

const userDataSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    passwords: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Password",
        },
    ],
});

const UserData = mongoose.model("UserData", userDataSchema);

export default UserData;
