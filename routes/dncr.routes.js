import express from "express";
import { checkStatus, getAccounts } from "../controllers/dncr.controller.js";

const router = express.Router();

router.get("/getAccounts", getAccounts)

router.post("/checkStatus", checkStatus)

export default router;