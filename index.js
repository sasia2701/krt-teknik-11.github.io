import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import aboutRouter from "./routers/aboutRouter.js";
import galeryRouter from "./routers/galeryRouter.js";
import petekRouter from "./routers/petekRouter.js";
import hizmetlerimizRouter from "./routers/hizmetlerimizRouter.js";
import contactRouter from "./routers/contactRouter.js";
import path from "path";
import { sendHTMLFile } from "./utils.js";

const server = express();

server.use(bodyParser.json());
server.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
server.use(cors());

server.use("/assets", express.static(path.join(path.resolve(), "assets")));
server.use("/assets/*", (req, res) => {
    res.status(404).send("File not found!");
});
server.use("/galery", galeryRouter);
server.use("/about", aboutRouter);
server.use("/petek", petekRouter);
server.use("/hizmetlerimiz", hizmetlerimizRouter);
server.use("/contact", contactRouter);
server.get("*", (req, res) => {
    sendHTMLFile(res, "index");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
});
