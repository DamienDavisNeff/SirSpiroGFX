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
        document.getElementById(id).classList.remove("unhidden");
        document.getElementById(id).classList.add("hidden");
    }
    if(!state) {
        document.getElementById(id).classList.add("unhidden");
        document.getElementById(id).classList.remove("hidden");
    }
}

window.onscroll = function(e) {
    HideButton(true,"upButton");
    if(this.scrollY >= window.innerHeight / 3) HideButton(false,"upButton");
}