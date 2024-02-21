import express from "express";
import { connectDB } from "./config/dbconnect.js";
import authRoutes from "./routes/auth.js";
import vaultRoutes from "./routes/vault.js";
import cors from "cors";

// Config for env file
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Allow requests from all origins
app.use(cors());

// Allow specific headers in CORS preflight response
app.options(
    "*",
    cors({
        allowedHeaders: ["Content-Type"],
    })
);

// Connection with DB
connectDB();

// Body Parser
app.use(express.json());

app.listen(PORT, (err) => {
    if (err) throw err;

    console.log(`Listening at ${PORT}`);
});

// Api Calls for Authentication
app.use("/api/auth", authRoutes);

// API Calls for Password Management
app.use("/api/vault", vaultRoutes);
