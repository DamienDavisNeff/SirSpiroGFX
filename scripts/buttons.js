function addShadow(id) {
    document.getElementById(id).classList.add("focused");
    document.getElementById(id).classList.add("shadow");
}
function removeShadow(id) {
    document.getElementById(id).classList.remove("focused");
    document.getElementById(id).classList.remove("shadow");
}

function HideButton(state,id,id2,id3) {
    if(state) {
        document.getElementById(id).classList.add("hidden");
        document.getElementById(id).classList.remove("unhid");
        document.getElementById(id2).style.cursor = "default";
        document.getElementById(id3).style.cursor = "default";
    }
    if(!state) {
        document.getElementById(id).classList.add("unhid");
        document.getElementById(id).classList.remove("hidden");
        document.getElementById(id2).style.cursor = "pointer";
        document.getElementById(id3).style.cursor = "pointer";
    }
}

window.onscroll = function(e) {
    if(this.scrollY >= window.innerHeight / 3) {
        HideButton(false,"upButton","upButtonCircle","upButtonIcon");
    } else {
        HideButton(true,"upButton","upButtonCircle","upButtonIcon");
    }
    
}

function GoTo(link,id) {
    if(document.getElementById(id).getAttribute("class").includes("hidden")) return;
    if(link.includes("#")) {
        temp = link.split("#");
        link = `${temp[0]}#${temp[temp.length-1]}`;
    }
    window.open(link,"_self");
}