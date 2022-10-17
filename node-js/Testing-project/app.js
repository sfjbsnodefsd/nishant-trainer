const express = require ("express");

const app = express();

app.get("/test" , (req, res) => {
    res.send("hey how are you doing ?...")
})

app.get("/test/subjects", (req, res) => {
    res.send(['maths',"science", "IT"]);
})


module.exports = app;