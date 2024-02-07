import bcrypt from "bcryptjs";
import User from "../models/user.js";

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    if (
        !username ||
        !email ||
        !password ||
        username == "" ||
        email == "" ||
        password == ""
    ) {
        res.status(400).json({
            message: "All Fields are required",
        });
    }

    // Hashing Password --> (Password,rounds)
    const hashedPass = bcrypt.hashSync(password, 10);

    // Creating New user
    const newUser = new User({
        username,
        email,
        password: hashedPass,
    });

    // Push to DB
    try {
        await newUser.save();
        res.status(200).json({ message: "Sign Up Successful" });
    } catch (error) {
        res.status(400).json({ message: "Error Occurred" });
    }
};

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find User in DB
        const user = await User.findOne({ email });

        // Compared Hashed Passwords
        bcrypt.compare(password, user.password, (err, result) => {
            if (result === true) {
                res.status(200).json({ message: "Login Successful" });
            } else {
                res.status(400).json({
                    message: `Invalid Credentials`,
                });
            }
        });
    } catch {
        res.status(400).json({ message: "No User Found" });
    }
};
