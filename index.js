const hostname = '127.0.0.1'; // CONNECTION IP
const port = 8080; // CONNECTION PORT
const serverSidePort = 808; // PORT FOR SERVER SIDE CONTENT

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

serverSide.listen(serverSidePort, () => {
    console.log(`Started Listening On Port: ${serverSidePort}`);
});
// Sets server side site to server_contents directory
serverSide.use(cors());
serverSide.use(express.static(`${__dirname}/server_contents`));

/*
#
#
#
*/

const fs = require('fs');
async function RefreshFiles() {
    // Reads the images directory that contains my portfolio
    fs.readdir(`${__dirname}/server_contents/images/portfolio`, function(err,files) {
        if(err) return console.log(err);
        console.log(files);
        var fileList = "";
        // for every file in that dir, adds to a list in a string
        for(let a = 0; a < files.length; a++) {
            if(a == files.length-1) {
                fileList = `${fileList}${files[a]}`;
            } else {
                fileList = `${fileList}${files[a]}\n`;
            }
        }
        console.log(fileList);
        // writes those files into a file on server side
        fs.writeFile(`${__dirname}/server_contents/imageList.txt`, fileList, function(err, data) {
            if(err) return console.log(err);
        })
    })
}

/*
#
#
#
*/

const scheduler = require("node-schedule");
// once a minute at the 5 second mark, runs the refresh files function
const refresh = scheduler.scheduleJob("5 * * * * *",function() {
    console.log("*");
    RefreshFiles();
});
RefreshFiles(); // refreshes files on restart