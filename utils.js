import path from "path";

export const sendHTMLFile = (res, fileName) => {
    const __dirname = path.join(path.resolve(), "views");

    res.setHeader("Content-Type", "text/html");
    res.sendFile(`${fileName}.html`, { root: __dirname });
    return;
};
