function addShadow(id) {
    document.getElementById(id).classList.add("focused");
    document.getElementById(id).classList.add("shadow");
}
function removeShadow(id) {
    document.getElementById(id).classList.remove("focused");
    document.getElementById(id).classList.remove("shadow");
}

function HideButton(state,id) {
    if(state) {
        document.getElementById(id).classList.add("hidden");
        document.getElementById(id).classList.remove("unhid");
    }
    if(!state) {
        document.getElementById(id).classList.add("unhid");
        document.getElementById(id).classList.remove("hidden");
    }
}
function ChangeCursor(state,id,enabledType) {
    for(let a = 0; a < id.length; a++) {
        if(state) document.getElementById(id[a]).style.cursor = enabledType;
        if(!state) document.getElementById(id[a]).style.cursor = enabledType;
    }
}

window.onscroll = function(e) {
    if(this.scrollY >= window.innerHeight / 3) {
        HideButton(false,"upButton","upButtonCircle","upButtonIcon");
        ChangeCursor(false,["upButtonCircle","upButtonIcon"],"pointer");
    } else {
        HideButton(true,"upButton","upButtonCircle","upButtonIcon");
        ChangeCursor(true,["upButtonCircle","upButtonIcon"],"default");
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