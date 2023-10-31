import { Router } from "express";
import { sendHTMLFile } from "../utils.js";

const router = Router();

router.get("/", (req, res) => {
    sendHTMLFile(res, "hizmetlerimiz");
});

export default router;
