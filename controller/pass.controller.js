import Password from "../models/password.js";
import User from "../models/user.js";
import UserData from "../models/userData.js";

export const add = async (req, res) => {
    const { title, password, username } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "User Not Found!" });
        }

        const newPassword = new Password({
            title,
            password,
        });

        await newPassword.save();

        const userData = await UserData.findOne({ user: user._id });
        if (userData) {
            await UserData.findByIdAndUpdate(userData._id, {
                $push: { passwords: newPassword._id },
            });
        } else {
            const newUserData = new UserData({
                user: user._id,
                passwords: [newPassword._id], // Push newPassword Id into Array
            });

            await newUserData.save();
        }

        return res.status(200).json({ message: "Password added successfully" });
    } catch {
        return res
            .status(400)
            .json({ message: "Error Occurred While Adding Password." });
    }
};

export const del = async (req, res) => {
    const { title, username } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "User Not Found!" });
        }

        const userData = await UserData.findOne({ user: user._id });
        if (!userData) {
            return res.status(400).json({ message: "UserData Not Found!" });
        }

        // Password model me se password ki id hence we m
        const pass = await Password.findOne({ title });

        // Password Id
        const passId = pass._id;
        await Password.deleteOne(passId);

        // UserData --> password --> Delete
        await UserData.findByIdAndUpdate(userData._id, {
            $pull: { passwords: passId },
        });

        res.status(200).json({ message: "Password Deleted Successfully" });
    } catch {
        return res.status(400).json({ message: "Could Not Delete!" });
    }
};

export const show = async (req, res) => {
    try {
        //username
        const { username } = req.body;

        // Username se Id
        const user = await User.findOne({ username });
        const userId = user._id;

        // Id se UserData
        const userInfo = await UserData.findOne({ user: userId });

        // UserData se PasswordId Array
        const passArray = await userInfo.populate("passwords");

        // PasswordId Array se Passwords ko return
        res.status(200).json(passArray.passwords);
    } catch {
        res.status(400).json({ message: "Error retrieving Passwords" });
    }
};
