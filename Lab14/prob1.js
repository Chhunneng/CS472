import express from "express";
import path from "path";
import url from "url";

const app = express();

const route = express.Router();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

route.get(["/home", "/"], (req, res, next) => {
    res.send("Welcome to my website");
});
route.get("/pdf", (req, res, next) => {
    const pdfPath = path.join(__dirname, "assets", "document.pdf");
    res.sendFile(pdfPath);
});
route.get("/image", (req, res, next) => {
    const imagePath = path.join(__dirname, "assets", "happy_cat.png");
    res.sendFile(imagePath);
});
route.get("/about", (req, res, next) => {
    const aboutPath = path.join(__dirname, "assets", "about.txt");
    res.sendFile(aboutPath);
});

app.use(route);

app.use((req, res, next) => {
    res.status(404).send("Page not found");
});

app.listen(3000, () => {
    console.log("running on port 3000");
});
