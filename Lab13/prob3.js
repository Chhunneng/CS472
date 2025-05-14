const fs = require("fs");
const fspromises = require("fs/promises");

const readFileSync = fs.readFileSync("./files/input.txt", "utf-8");
console.log("from readFileSync:", readFileSync);

const readFile = fs.readFile("./files/input.txt", "utf-8", (err, data) => {
    console.log("from readFile:", data);
});
console.log(readFile);

const promiseReadFile = fspromises
    .readFile("./files/input.txt", "utf-8")
    .then((res) => {
        console.log("from fspromises.readFile:", res);
    });

const createReadStream = fs.createReadStream("./files/input.txt", {
    encoding: "utf-8",
    highWaterMark: 2, // 2Byte chunk size
});
console.log(createReadStream);
createReadStream.on("data", (chunk) => {
    console.log("from createReadStream", chunk);
});
createReadStream.on("end", () => {
    console.log("Finished reading file.");
});
