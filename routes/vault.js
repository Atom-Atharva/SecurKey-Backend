import express from "express";
import { add, del, show, update } from "../controller/pass.controller.js";

const router = express.Router();

router.post("/add", add);
router.post("/delete", del);
router.post("/show", show);
router.post("/update",update);

export default router;
