const ip = "http://127.0.0.1:808/" // ip to fetch from

// simplifies fetch thing because i dont understand them
// well enough to use just fetch();
async function fetchThings(url) {
    const response = await fetch(url);
    return response;
}

LoadImages();
async function LoadImages() {
    // gets the list of images
    var imageList = await (await fetchThings(`${ip}imageList.txt`)).text();
    imageList = imageList.split("\n");
    // the default encodeUri function is not suited for arrays
    // and does not fit my exact use case
    // so runs my custom function to encode my url
    imageList = EncodeURL(imageList);
    // loops through new list and creates image sources for each image
    for(let a = 0; a < imageList.length; a++) {
        var img = document.createElement("img");
        img.src = `${ip}images/portfolio/${imageList[a]}`;
        img.classList.add("globalImage");
        img.setAttribute("id",a);
        document.getElementById("holdImages").appendChild(img);
    }
    var icon = document.createElement("link");
    icon.setAttribute("rel","icon");
    icon.setAttribute("href",`${ip}images/icons/favicon_white.png`);
}

function EncodeURL(text) {
    // loops through element in array
    for(let a = 0; a < text.length; a++) {
        text[a] = encodeURI(text[a]);
        text[a] = text[a].replace(`%0D\g`,""); // removes weird characters added from encodeUri function
    }
    return text;
}