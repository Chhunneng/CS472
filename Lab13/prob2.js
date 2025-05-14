const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    const { url } = req;

    if (url === "/image") {
        const imagePath = path.join(__dirname, "..", "imgs", "happy_cat.png");
        fs.readFile(imagePath, (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error loading image");
            } else {
                res.writeHead(200, { "Content-Type": "image/jpeg" });
                res.end(data);
            }
        });
    } else if (url === "/pdf") {
        const pdfPath = path.join(__dirname, "..", "imgs", "document.pdf");
        fs.readFile(pdfPath, (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error loading PDF");
            } else {
                res.writeHead(200, { "Content-Type": "application/pdf" });
                res.end(data);
            }
        });
    } else if (url === "/about") {
        const aboutPath = path.join(__dirname, "..", "imgs", "about.txt");
        fs.readFile(aboutPath, "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error loading text file");
            } else {
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end(data);
            }
        });
    } else if (url === "/" || url === "/home") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to my website");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
