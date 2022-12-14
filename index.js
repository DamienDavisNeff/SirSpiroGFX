const hostname = '127.0.0.1'; // CONNECTION IP
const port = 8080; // CONNECTION PORT
const express = require("express");
const app = express();
const serverSide = express();
const cors = require("cors");

app.listen(port, () => {
    console.log(`Started Listening On: ${port}`);
})
// Sets site to site_contents directory
app.use(cors())
app.use(express.static(`${__dirname}/site_contents`));
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/site_contents/index.html`)
});