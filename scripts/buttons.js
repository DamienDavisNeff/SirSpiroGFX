// Runs this function when scrolling on the page
window.onscroll = function(e) {
    if(this.scrollY >= window.innerHeight / 3) { // If the page is low enough
        ToggleButton(true,"upButton");
        ChangeCursor(["upButtonCircle","upButtonIcon"],"pointer");
    } else { // Otherwise
        ToggleButton(false,"upButton","upButtonCircle","upButtonIcon");
        ChangeCursor(["upButtonCircle","upButtonIcon"],"default");
    }
}

function GoTo(link,id) {
    if(id != null && id != undefined && id != "")
    if(document.getElementById(id).getAttribute("class").includes("false")) return; // If the button is disabled, does not proceed
    /*
    If a ID is included in the link, splits it, and adds the *last* id to the start of the link
    This is because sometimes I use 'window.location.href' which includes the id that is already there
    So it removes all IDs, except for the one that was 'manually' added
    */
    if(link.includes("#")) {
        temp = link.split("#");
        link = `${temp[0]}#${temp[temp.length-1]}`; // Takes the start of the link, and adds the last ID to it
    }
    window.open(link,"_self");
}