const express = require("express");
const app = express();
const mongoos = require("mongoose");
const ejs = require("ejs");

const MONGOODB_URL = "mongodb://127.0.0.1:27017/test";
async function main() {
    await mongoos.connect("mongodb://127.0.0.1:27017/wonderlust")
};

main().then( () => {
   console.log("Database connected successfully")
})
.catch((err) => {
    console.log(err)
});

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})