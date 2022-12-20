// The state is the enabled status [true = enabled, false = disabled]
function ToggleShadow(state,id) {
    for(let a = 0; a < id.length; a++) {
        if(state) document.getElementById(id[a]).classList.add("shadow");
        if(!state) document.getElementById(id[a]).classList.remove("shadow");
    }
}
// The state is the enabled status [true = enabled, false = disabled]
function ToggleButton(state,id) {
    document.getElementById(id).classList.add(state);
    document.getElementById(id).classList.remove(!state);
}
// The ID is an array of elements to change the cursor while hovering over
function ChangeCursor(id,cursorType) {
    for(let a = 0; a < id.length; a++) {
        document.getElementById(id[a]).style.cursor = cursorType;
    }
}

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
    if(document.getElementById(id).getAttribute("class").includes("hidden")) return; // If the button is disabled, does not proceed
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