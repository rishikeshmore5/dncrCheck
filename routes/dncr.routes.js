import express from "express";
import { checkStatus, getAccounts,DNCRcheckStatus } from "../controllers/dncr.controller.js";

const router = express.Router();

router.get("/getAccounts", getAccounts)

router.post("/checkStatus", checkStatus)

router.post("/DNCRcheckStatus", DNCRcheckStatus)

export default router;
