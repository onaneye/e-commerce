const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

let initial_path = path.join(__dirname, "public");

const app = express();
app.use(express.static(initial_path));


app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})



app.use((req, res) => {
    res.json("404");
})

app.listen("3000", () => {
    console.log('listening......');
    if (app.get("/editor")) {
        console.log("someone visited this page")
    }
})