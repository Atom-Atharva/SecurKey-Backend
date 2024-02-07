import express from "express";
import { add, del, show } from "../controller/pass.controller.js";

const router = express.Router();

router.post("/add", add);
router.post("/delete", del);
router.get("/show", show);

export default router;
