import { Router } from "express";
import { sendHTMLFile } from "../utils.js";

const router = Router();

router.get("/", (req, res) => {
    sendHTMLFile(res, "about");
});

export default router;
